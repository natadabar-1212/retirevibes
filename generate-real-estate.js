#!/usr/bin/env node
/**
 * generate-real-estate.js
 * Generates /destinations/[slug]/real-estate/index.html for all 132 destinations.
 * Template model: browse-homes-international.html (Porto page).
 *
 * Usage: node generate-real-estate.js
 * Run from project root.
 */

'use strict';

const fs   = require('fs');
const path = require('path');

// ─── Load destinations data ────────────────────────────────────────────────────
const dataSrc = fs.readFileSync(path.join(__dirname, 'destinations-data.js'), 'utf8');
const DESTINATIONS = (new Function(dataSrc + '\nreturn DESTINATIONS;'))();

// ─── Helpers ───────────────────────────────────────────────────────────────────

/** Extract numeric value from strings like "~$1,100/mo" or "~$280K" */
function parseAmount(str) {
  if (!str) return 0;
  // Strip /mo suffix FIRST — otherwise 'M' in '/mo' triggers the million multiplier
  const clean = str.replace(/[~$,€£]/g, '').replace(/\/mo.*/i, '').trim();
  if (clean.toUpperCase().endsWith('K')) return parseFloat(clean) * 1000;
  if (clean.toUpperCase().endsWith('M')) return parseFloat(clean) * 1000000;
  return parseFloat(clean) || 0;
}

/** Round to nearest N */
function roundTo(n, nearest) { return Math.round(n / nearest) * nearest; }

/** Format as currency string (USD for all — data is already in USD) */
function fmt(n) {
  if (n >= 1000000) return '$' + (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1000)    return '$' + (n / 1000).toFixed(0) + 'K';
  return '$' + Math.round(n).toLocaleString();
}
function fmtMo(n) { return fmt(n) + '/mo'; }

/** Return slug: "Playa del Carmen" -> "playa-del-carmen" */
function slug(name) {
  return name.toLowerCase().replace(/[\s,]+/g, '-').replace(/[^a-z0-9-]/g, '');
}

// ─── Listings platform by country ─────────────────────────────────────────────
function getListings(dest) {
  const c = dest.country;
  const city = dest.name;
  const s = slug(city);

  const map = {
    'United States': {
      platform: 'Zillow', note: "Zillow is the US standard for rental and purchase listings — updated daily.",
      rent: `https://www.zillow.com/homes/for_rent/${encodeURIComponent(city + ' ' + (dest.region || ''))}_rb/`,
      buy:  `https://www.zillow.com/homes/for_sale/${encodeURIComponent(city + ' ' + (dest.region || ''))}_rb/`,
    },
    'United States Territory': {
      platform: 'Zillow', note: "Zillow covers US territories including Puerto Rico and the US Virgin Islands.",
      rent: `https://www.zillow.com/homes/for_rent/${s}_rb/`,
      buy:  `https://www.zillow.com/homes/for_sale/${s}_rb/`,
    },
    'Canada': {
      platform: 'Realtor.ca', note: "Realtor.ca is Canada's official MLS platform, run by the Canadian Real Estate Association.",
      rent: `https://www.realtor.ca/map#ZoomLevel=12&Center=${encodeURIComponent(city + ', Canada')}`,
      buy:  `https://www.realtor.ca/map#ZoomLevel=12&Center=${encodeURIComponent(city + ', Canada')}`,
    },
    'Portugal': {
      platform: 'Idealista', note: "Idealista is Portugal's largest property platform. Real listings, updated daily.",
      rent: `https://www.idealista.pt/en/arrendar-casas/${s}-distrito/?ordem=publicado-decrescente`,
      buy:  `https://www.idealista.pt/en/comprar-casas/${s}-distrito/`,
    },
    'Spain': {
      platform: 'Idealista', note: "Idealista is Spain's leading property platform with coverage across all major cities.",
      rent: `https://www.idealista.com/en/alquiler-viviendas/${s}/`,
      buy:  `https://www.idealista.com/en/venta-viviendas/${s}/`,
    },
    'Mexico': {
      platform: 'Inmuebles24', note: "Inmuebles24 is Mexico's leading property search platform, with listings from individual owners and agencies.",
      rent: `https://www.inmuebles24.com/propiedades-en-renta-en-${s}.html`,
      buy:  `https://www.inmuebles24.com/propiedades-en-venta-en-${s}.html`,
    },
    'Colombia': {
      platform: 'FincaRaíz', note: "FincaRaíz is Colombia's largest property platform, covering rentals and purchases in all major cities.",
      rent: `https://www.fincaraiz.com.co/arriendo/casa-y-apartamento/${s}/`,
      buy:  `https://www.fincaraiz.com.co/venta/casa-y-apartamento/${s}/`,
    },
    'Panama': {
      platform: 'Encuentra24', note: "Encuentra24 is Panama's primary real estate platform with residential and commercial listings.",
      rent: `https://www.encuentra24.com/panama-en/real-estate-for-rent-residential/${s}`,
      buy:  `https://www.encuentra24.com/panama-en/real-estate-for-sale-residential/${s}`,
    },
    'Costa Rica': {
      platform: 'Encuentra24', note: "Encuentra24 covers Costa Rica's rental and purchase market with English-language search.",
      rent: `https://www.encuentra24.com/costa-rica-en/real-estate-for-rent-residential/${s}`,
      buy:  `https://www.encuentra24.com/costa-rica-en/real-estate-for-sale-residential/${s}`,
    },
    'Guatemala': {
      platform: 'Encuentra24', note: "Encuentra24 covers Guatemala's rental and property purchase market.",
      rent: `https://www.encuentra24.com/guatemala-en/real-estate-for-rent-residential/${s}`,
      buy:  `https://www.encuentra24.com/guatemala-en/real-estate-for-sale-residential/${s}`,
    },
    'Belize': {
      platform: 'RE/MAX Belize', note: "RE/MAX Belize is the most established property platform in the country, with English-language listings.",
      rent: `https://remax-belize.com/listings/?for=for-rent`,
      buy:  `https://remax-belize.com/listings/?for=for-sale`,
    },
    'Honduras': {
      platform: 'Encuentra24', note: "Encuentra24 covers Honduras's property rental and purchase market.",
      rent: `https://www.encuentra24.com/honduras-en/real-estate-for-rent-residential/${s}`,
      buy:  `https://www.encuentra24.com/honduras-en/real-estate-for-sale-residential/${s}`,
    },
    'Ecuador': {
      platform: 'Plusvalía', note: "Plusvalía is Ecuador's leading real estate platform with coverage in Cuenca and other expat cities.",
      rent: `https://www.plusvalia.com/arriendo/inmuebles/en-${s}/`,
      buy:  `https://www.plusvalia.com/venta/inmuebles/en-${s}/`,
    },
    'Uruguay': {
      platform: 'MercadoLibre', note: "MercadoLibre is Uruguay's primary classifieds platform with broad property coverage.",
      rent: `https://www.mercadolibre.com.uy/inmuebles/alquiler/apartamentos/${s}`,
      buy:  `https://www.mercadolibre.com.uy/inmuebles/venta/apartamentos/${s}`,
    },
    'Argentina': {
      platform: 'ZonaProp', note: "ZonaProp is Argentina's largest real estate platform.",
      rent: `https://www.zonaprop.com.ar/departamentos-alquiler-${s}.html`,
      buy:  `https://www.zonaprop.com.ar/departamentos-venta-${s}.html`,
    },
    'Dominican Republic': {
      platform: 'Properati', note: "Properati covers the Dominican Republic's rental and purchase market with broad English-language coverage.",
      rent: `https://www.properati.com.do/properties/rent/${s}/`,
      buy:  `https://www.properati.com.do/properties/sale/${s}/`,
    },
    'Italy': {
      platform: 'Immobiliare.it', note: "Immobiliare.it is Italy's largest property platform, with listings across all major cities and regions.",
      rent: `https://www.immobiliare.it/affitto-case/${s}/`,
      buy:  `https://www.immobiliare.it/vendita-case/${s}/`,
    },
    'France': {
      platform: 'SeLoger', note: "SeLoger is France's most comprehensive property search platform for rentals and purchases.",
      rent: `https://www.seloger.com/list.htm?idtypebien=1&idtt=1&tri=initial&ci=${encodeURIComponent(city)}`,
      buy:  `https://www.seloger.com/list.htm?idtypebien=1&idtt=2&tri=initial&ci=${encodeURIComponent(city)}`,
    },
    'Greece': {
      platform: 'Spitogatos', note: "Spitogatos is Greece's leading property platform with residential listings across the country.",
      rent: `https://www.spitogatos.gr/en/rent/apartments/${s}`,
      buy:  `https://www.spitogatos.gr/en/buy/apartments/${s}`,
    },
    'Croatia': {
      platform: 'Njuskalo', note: "Njuskalo is Croatia's most widely used property and classifieds platform.",
      rent: `https://www.njuskalo.hr/iznajmljivanje-stanova/${s}`,
      buy:  `https://www.njuskalo.hr/prodaja-stanova/${s}`,
    },
    'Czech Republic': {
      platform: 'Sreality', note: "Sreality is the Czech Republic's leading property platform, with an English-language search option.",
      rent: `https://www.sreality.cz/en/search/renting/apartments/${s}`,
      buy:  `https://www.sreality.cz/en/search/for-sale/apartments/${s}`,
    },
    'Hungary': {
      platform: 'Ingatlan.com', note: "Ingatlan.com is Hungary's primary property platform.",
      rent: `https://ingatlan.com/lista/kiado+lakas+${s}`,
      buy:  `https://ingatlan.com/lista/elado+lakas+${s}`,
    },
    'Poland': {
      platform: 'Otodom', note: "Otodom is Poland's largest property platform, with listings in Warsaw, Kraków, and beyond.",
      rent: `https://www.otodom.pl/pl/wyniki/wynajem/mieszkanie/${s}`,
      buy:  `https://www.otodom.pl/pl/wyniki/sprzedaz/mieszkanie/${s}`,
    },
    'Georgia': {
      platform: 'MyHome.ge', note: "MyHome.ge is Georgia's most comprehensive property platform with English-language search.",
      rent: `https://www.myhome.ge/en/s/rent-apartment-${s}`,
      buy:  `https://www.myhome.ge/en/s/buy-apartment-${s}`,
    },
    'Cyprus': {
      platform: 'Bazaraki', note: "Bazaraki is Cyprus's leading classifieds and real estate platform, with English listings.",
      rent: `https://www.bazaraki.com/real-estate/apartments/rent/`,
      buy:  `https://www.bazaraki.com/real-estate/apartments/sale/`,
    },
    'Malta': {
      platform: 'Frank Salt Real Estate', note: "Frank Salt Real Estate is Malta's most established property listing platform.",
      rent: `https://www.franksalt.com.mt/properties/?type=to-let&property_type=apartment`,
      buy:  `https://www.franksalt.com.mt/properties/?type=for-sale&property_type=apartment`,
    },
    'Slovenia': {
      platform: 'Nepremicnine.net', note: "Nepremicnine.net is Slovenia's primary property listing platform.",
      rent: `https://www.nepremicnine.net/oglasi-najem/stanovanja/`,
      buy:  `https://www.nepremicnine.net/oglasi-prodaja/stanovanja/`,
    },
    'Montenegro': {
      platform: 'Montenegro Prospects', note: "Montenegro Prospects is a leading English-language real estate platform covering the Adriatic coast.",
      rent: `https://montenegroprospects.com/property-for-rent/`,
      buy:  `https://montenegroprospects.com/property-for-sale/`,
    },
    'Switzerland': {
      platform: 'Homegate', note: "Homegate is Switzerland's leading property platform for rentals and purchases.",
      rent: `https://www.homegate.ch/en/rent/real-estate/country-switzerland`,
      buy:  `https://www.homegate.ch/en/buy/real-estate/country-switzerland`,
    },
    'Ireland': {
      platform: 'Daft.ie', note: "Daft.ie is Ireland's dominant property platform for rentals and sales.",
      rent: `https://www.daft.ie/property-for-rent/${s}`,
      buy:  `https://www.daft.ie/property-for-sale/${s}`,
    },
    'United Kingdom': {
      platform: 'Rightmove', note: "Rightmove is the UK's largest property platform for rentals and purchases.",
      rent: `https://www.rightmove.co.uk/property-to-rent/search.html?searchLocation=${encodeURIComponent(city)}`,
      buy:  `https://www.rightmove.co.uk/property-for-sale/search.html?searchLocation=${encodeURIComponent(city)}`,
    },
    'Thailand': {
      platform: 'DDProperty', note: "DDProperty is Thailand's leading property marketplace with listings across the country.",
      rent: `https://www.ddproperty.com/en/property-for-rent/1-${s}`,
      buy:  `https://www.ddproperty.com/en/property-for-sale/1-${s}`,
    },
    'Malaysia': {
      platform: 'PropertyGuru Malaysia', note: "PropertyGuru Malaysia is the country's leading property search platform with English listings.",
      rent: `https://www.propertyguru.com.my/property-for-rent?freetext=${encodeURIComponent(city)}`,
      buy:  `https://www.propertyguru.com.my/property-for-sale?freetext=${encodeURIComponent(city)}`,
    },
    'Vietnam': {
      platform: 'Dot Property', note: "Dot Property covers Vietnam's rental and purchase market with English-language listings.",
      rent: `https://www.dotproperty.com.vn/properties-for-rent/search?keyword=${encodeURIComponent(city)}`,
      buy:  `https://www.dotproperty.com.vn/properties-for-sale/search?keyword=${encodeURIComponent(city)}`,
    },
    'Indonesia': {
      platform: 'Rumah123', note: "Rumah123 is Indonesia's leading property platform, widely used in Bali and other expat areas.",
      rent: `https://www.rumah123.com/sewa/${s}/`,
      buy:  `https://www.rumah123.com/jual/${s}/`,
    },
    'Philippines': {
      platform: 'Lamudi Philippines', note: "Lamudi Philippines is a leading property platform with English-language listings.",
      rent: `https://www.lamudi.com.ph/rent/`,
      buy:  `https://www.lamudi.com.ph/buy/`,
    },
    'Japan': {
      platform: 'Suumo', note: "Suumo is Japan's largest property platform. Note: most listings require a Japanese-speaking agent — work with an expat-friendly agency.",
      rent: `https://suumo.jp/jj/chintai/ichiran/FR301FC001/?ar=030&bs=040`,
      buy:  `https://suumo.jp/jj/bukken/ichiran/JJ012FC001/?ar=030&bs=010`,
    },
    'Taiwan': {
      platform: '591.com.tw', note: "591.com.tw is Taiwan's primary platform for rentals and property sales.",
      rent: `https://rent.591.com.tw/`,
      buy:  `https://sale.591.com.tw/`,
    },
    'Sri Lanka': {
      platform: 'LankaPropertyWeb', note: "LankaPropertyWeb is Sri Lanka's primary property listing platform.",
      rent: `https://www.lankapropertyweb.com/for-rent/`,
      buy:  `https://www.lankapropertyweb.com/for-sale/`,
    },
    'Australia': {
      platform: 'Domain', note: "Domain is one of Australia's two leading property platforms with rental and sales listings.",
      rent: `https://www.domain.com.au/rent/?suburb=${encodeURIComponent(city)}`,
      buy:  `https://www.domain.com.au/sale/?suburb=${encodeURIComponent(city)}`,
    },
    'New Zealand': {
      platform: 'Trade Me Property', note: "Trade Me Property is New Zealand's most-used platform for residential rentals and sales.",
      rent: `https://www.trademe.co.nz/a/property/residential/rent?search_string=${encodeURIComponent(city)}`,
      buy:  `https://www.trademe.co.nz/a/property/residential/sale?search_string=${encodeURIComponent(city)}`,
    },
    'Morocco': {
      platform: 'Mubawab', note: "Mubawab is Morocco's leading property platform with listings in English, French, and Arabic.",
      rent: `https://www.mubawab.ma/en/sc/apartments:rent/${s}:p:1`,
      buy:  `https://www.mubawab.ma/en/sc/apartments:sale/${s}:p:1`,
    },
    'South Africa': {
      platform: 'Property24', note: "Property24 is South Africa's largest property listing platform.",
      rent: `https://www.property24.com/for-rent/search?SearchText=${encodeURIComponent(city)}`,
      buy:  `https://www.property24.com/for-sale/search?SearchText=${encodeURIComponent(city)}`,
    },
    'Kenya': {
      platform: 'BuyRentKenya', note: "BuyRentKenya is the country's primary English-language property platform.",
      rent: `https://www.buyrentkenya.com/rent`,
      buy:  `https://www.buyrentkenya.com/buy`,
    },
    'Tanzania': {
      platform: 'Lamudi Tanzania', note: "Lamudi Tanzania is the primary English-language property platform covering Tanzania.",
      rent: `https://www.lamudi.co.tz/for-rent/`,
      buy:  `https://www.lamudi.co.tz/for-sale/`,
    },
    'Ghana': {
      platform: 'Meqasa', note: "Meqasa is Ghana's largest property platform with rental and sale listings.",
      rent: `https://www.meqasa.com/properties-for-rent`,
      buy:  `https://www.meqasa.com/properties-for-sale`,
    },
    'Mauritius': {
      platform: 'Lexpress Property', note: "Lexpress Property is Mauritius's primary real estate platform with English listings.",
      rent: `https://property.lexpress.mu/en/property/for-rent/`,
      buy:  `https://property.lexpress.mu/en/property/for-sale/`,
    },
  };

  // Caribbean fallback
  const caribbeanCountries = ['Barbados', 'Grenada', 'Saint Kitts and Nevis',
    'Cayman Islands', 'Turks and Caicos Islands', 'US Virgin Islands',
    'Saint Lucia', 'Antigua and Barbuda'];
  if (caribbeanCountries.includes(c)) {
    return {
      platform: 'RE/MAX Caribbean', note: "RE/MAX has strong regional presence across the Caribbean with English-speaking agents.",
      rent: `https://www.remax.com/homes-for-rent/international.html`,
      buy:  `https://www.remax.com/homes-for-sale/international.html`,
    };
  }

  return map[c] || {
    platform: 'RE/MAX International', note: "RE/MAX International covers property listings in over 110 countries with English-speaking agents.",
    rent: `https://www.remax.com/homes-for-rent/international.html`,
    buy:  `https://www.remax.com/homes-for-sale/international.html`,
  };
}

// ─── Legal section HTML ────────────────────────────────────────────────────────
function legalCard(icon, title, body) {
  return `
      <div class="legal-card">
        <div class="legal-icon">${icon}</div>
        <h3 class="legal-title">${title}</h3>
        <p class="legal-body">${body}</p>
      </div>`;
}

function getLegalSection(dest) {
  const c = dest.country;

  if (!dest.isInternational) {
    // Domestic US
    const stateTax = dest.region
      ? dest.region.split(',')[0].trim()  // e.g. "North Carolina"
      : dest.country;
    return {
      cards: [
        legalCard('🏥', 'Medicare stays with you',
          `Moving within the US means your Medicare coverage moves with you. Medicare Part A and B are accepted nationwide. What changes: supplemental (Medigap) plans vary by state, and HMO/network plans may have narrow in-network areas. If you're on a Medicare Advantage plan, verify it has coverage in ${dest.name} before you commit to anything.`),
        legalCard('📋', 'State income tax matters for retirement',
          `${stateTax}'s tax treatment of retirement income affects how far your money goes. Specifically: how the state treats Social Security, pension distributions, 401(k) withdrawals, and capital gains. Some states tax none of it; some tax all of it. Verify the current rules with a tax advisor before you finalize a move — the difference is material.`),
        legalCard('🏠', 'Property insurance and HOA costs',
          `In the US, property insurance, flood insurance, and HOA fees are part of the real cost of ownership — and they vary significantly by location. ${dest.name} may have specific exposure (wildfire, hurricane, flooding) that drives insurance costs above national averages. Get an insurance quote before you make an offer on a property, not after.`),
      ],
      disclaimer: `This is context, not legal or tax advice. Real estate, tax, and insurance rules vary by state and change over time. Verify current rules with a licensed professional in ${dest.name}.`,
    };
  }

  // International — card 1 is always US taxes abroad
  const usTaxCard = legalCard('🏦', 'You still file US taxes abroad',
    `The US taxes worldwide income regardless of where you live. The Foreign Earned Income Exclusion (FEIE) and Foreign Tax Credit can help, but this is complicated when you add Social Security, pension distributions, and investment income. An advisor who specializes in US expat taxation is not optional — this is different from standard tax prep.`);

  // Cards 2 & 3 by country
  let card2, card3, disclaimer;

  if (c === 'Portugal') {
    card2 = legalCard('🏠', 'The D7 Passive Income Visa',
      `If you're living on Social Security, pension, or investment income, the D7 is the standard path to Portuguese residency. Minimum income is roughly $820/month (~€760) per person (tied to Portugal's minimum wage — verify the current threshold). The process takes 3–6 months and requires proof of accommodation. Renting first makes the bureaucratic path significantly easier.`);
    card3 = legalCard('📋', 'NHR ended — IFICI replaced it',
      `Portugal's Non-Habitual Residency (NHR) tax regime ended for new applicants in January 2024. The replacement program — IFICI — has narrower eligibility, primarily targeting workers in strategic sectors. Retirees who planned around NHR should consult a Portuguese tax lawyer to understand their current options before assuming anything.`);
    disclaimer = `This is context, not legal or tax advice. Transactions in Portugal involve Portuguese civil law, immigration law, and US international tax obligations — all three simultaneously. Work with a licensed professional with direct experience in American clients relocating to Portugal.`;
  } else if (c === 'Spain') {
    card2 = legalCard('🏠', 'The Non-Lucrative Visa',
      `Spain's Non-Lucrative Visa (NLV) is the standard path for American retirees. Requirements include proof of passive income (roughly $2,600+/month (~€2,400) for a single person) and private health insurance. Initial permit is 1 year, renewable for 2-year periods. After 5 years you can apply for long-term residency. You cannot work for Spanish employers on this visa.`);
    card3 = legalCard('📋', 'Buying property in Spain',
      `Americans can purchase freehold property directly in Spain without restrictions. You'll need a NIE (Número de Identificación de Extranjero) before any purchase. Budget 10–12% above purchase price for transfer tax (ITP, 6–10% depending on region), notary fees, registration, and legal costs. A property lawyer separate from your agent is essential.`);
    disclaimer = `This is context, not legal or tax advice. Spanish property law, the Non-Lucrative Visa, and US expat tax obligations each require professional guidance. Work with a qualified Spanish gestor and a US expat tax advisor.`;
  } else if (c === 'Mexico') {
    card2 = legalCard('🏠', 'The Fideicomiso — how Americans buy property',
      `Foreign nationals cannot directly own property within 50km of Mexico's coastlines or 100km of borders. In restricted zones, property is held in a fideicomiso — a bank trust — where you are the beneficiary with full rights to use, sell, or inherit the property. Outside restricted zones, foreigners can hold direct title. A Mexican notario is mandatory for all transactions.`);
    card3 = legalCard('📋', 'Temporary or Permanent Residency',
      `Most American retirees pursue Temporary Residency first (1–4 year permit, renewable), then Permanent Residency after 4 years. Income requirements apply — verify current INAMI thresholds, which are updated annually. Mexico generally does not tax foreign passive income for non-working residents, but confirm with a Mexican tax advisor before relying on this.`);
    disclaimer = `This is context, not legal or tax advice. Property in Mexico involves Mexican property law, fideicomiso requirements, and US international tax obligations. Work with a Mexican notario and a US expat tax advisor before committing to anything.`;
  } else if (c === 'Italy') {
    card2 = legalCard('🏠', 'The Elective Residency Visa',
      `Italy's Elective Residency Visa is designed for retirees and those with sufficient passive income to support themselves without working. Proof of income typically required: $33,500+/year (~€31,000) for a single person. Annual renewal, leading to long-term residency after 5 years. The 7% flat tax regime for foreign retirees in certain southern municipalities is worth investigating if you're considering Calabria, Sicily, Sardinia, or Campania.`);
    card3 = legalCard('📋', 'Buying property in Italy',
      `Americans can purchase freehold property in Italy freely. The codice fiscale (tax identification number) is required before any purchase. Budget 8–11% above purchase price for registration tax, notaio fees, agency costs, and legal fees. A notaio (government official) handles the transfer and is mandatory — but also hire a separate property lawyer to review the contract in your interest.`);
    disclaimer = `This is context, not legal or tax advice. Italian property transactions, the Elective Residency Visa, and US/Italian dual-tax obligations each require professional expertise. Work with an Italian notaio and a dual-qualified tax advisor.`;
  } else if (c === 'France') {
    card2 = legalCard('🏠', 'The Long Stay Visiteur Visa',
      `Americans can stay in the Schengen area for 90 days without a visa. For longer stays, the Visiteur visa is the standard path for retirees — it requires proof of passive income sufficient for self-support, health insurance, and accommodation. Valid for 1 year, renewable. Apply through the French consulate in the US; the process takes 2–3 months.`);
    card3 = legalCard('📋', 'Buying property in France',
      `France has no restrictions on foreign property ownership. All purchases go through a notaire (government official) who holds funds in escrow and handles the legal transfer — this is mandatory. Budget 7–10% above purchase price for notaire's fees, taxes, and registration. The process from offer to completion typically takes 3–4 months. Real estate agent fees are usually paid by the seller.`);
    disclaimer = `This is context, not legal or tax advice. French property transactions, the Visiteur visa, and US/French dual-tax obligations require professional guidance. Work with a notaire for any purchase and a US expat tax advisor.`;
  } else if (c === 'Greece') {
    card2 = legalCard('🏠', 'Financially Independent Person Visa',
      `Greece's Financially Independent Person (FIP) visa allows non-EU nationals with sufficient passive income ($2,175+/month (~€2,000)) to reside in Greece. Valid for 2 years, renewable. After 5 years of legal residency, you can apply for long-term status. You cannot work for Greek employers on this visa. Greece also has a Golden Visa program for property investment of $270K+ (~€250K) in certain areas.`);
    card3 = legalCard('📋', 'Buying property in Greece',
      `Americans can purchase freehold property in most of Greece directly — some border regions and islands have additional restrictions your notary will flag. Budget 10–14% above purchase price for transfer tax, notary, lawyer, and agency fees. A local property lawyer is essential and separate from your agent. The purchase process takes 2–4 months.`);
    disclaimer = `This is context, not legal or tax advice. Greek property transactions and the FIP visa require professional guidance. Work with a licensed Greek property lawyer and a US expat tax advisor.`;
  } else if (c === 'Thailand') {
    card2 = legalCard('🏠', 'Foreigners cannot own land — here is what you can do',
      `Thai law prohibits foreigners from owning land freehold. Options: purchase a condominium unit freehold (foreigners can own up to 49% of a building's units), sign a long-term lease (up to 30 years, extendable), or rent. Most American retirees either rent or purchase a condo unit in their own name. A 30-year lease is the closest equivalent to ownership for landed property.`);
    card3 = legalCard('📋', 'Thailand Retirement Visa',
      `The Non-Immigrant O-A visa (Retirement Visa) is available for those 50+. Requirements: either THB 800,000 (~$22K) in a Thai bank account, monthly income/pension of THB 65,000 (~$1,800), or a combination. Annual renewal required. Thailand also now offers a Long-Term Resident (LTR) visa valid for 10 years for those meeting higher income or asset thresholds.`);
    disclaimer = `This is context, not legal or tax advice. Thai property law is complex for foreigners, and visa requirements change. Work with a licensed Thai property lawyer for any purchase or lease, and a US expat tax advisor for your US filing obligations.`;
  } else if (c === 'Malaysia') {
    card2 = legalCard('🏠', 'Malaysia My Second Home (MM2H)',
      `The MM2H program offers long-term residency for qualifying foreigners. Requirements were substantially increased in 2021: RM1.5M+ (~$320K) in liquid assets and RM40K+/month (~$8,500) in income. A Silver category exists for retirees 60+ with somewhat lower thresholds. Requirements change — verify current numbers before planning around MM2H as a primary path.`);
    card3 = legalCard('📋', 'Property ownership for Americans',
      `Foreigners can purchase freehold property in Malaysia, but minimums apply — typically RM2 million+ ($430K+) in most states. MM2H holders have additional property purchase benefits. Renting is completely straightforward with no restrictions on foreign tenants, and Kuala Lumpur in particular has a well-developed expat rental market.`);
    disclaimer = `This is context, not legal or tax advice. Malaysian property law, MM2H requirements, and US expat tax obligations each require professional guidance. Work with a locally licensed property lawyer and a US expat tax advisor.`;
  } else if (c === 'Colombia') {
    card2 = legalCard('🏠', 'Pensionado and Rentista Visas',
      `Colombia offers a Pensionado (retiree) visa for those receiving at least 3× Colombia's minimum wage in monthly pension income (~$750/month as of 2024). The Rentista visa is for those with passive investment income at a similar threshold. Both are renewable and can lead to permanent residency after 5 years. The application process is straightforward relative to many countries.`);
    card3 = legalCard('📋', 'Buying property in Colombia',
      `Americans can purchase freehold property in Colombia without restrictions. A cédula de extranjería (foreign ID card) is required before purchase. Budget 3–5% above purchase price for transfer tax (notary fees, registration, and taxes). The process typically takes 4–8 weeks. Work with a local property lawyer — English-speaking attorneys in Medellín and Cartagena are not hard to find.`);
    disclaimer = `This is context, not legal or tax advice. Colombian property law and visa requirements can change. Work with a licensed Colombian property attorney and a US expat tax advisor.`;
  } else if (['Panama', 'Costa Rica', 'Ecuador', 'Guatemala', 'Belize', 'Honduras', 'Uruguay', 'Argentina'].includes(c)) {
    const pensionVisa = {
      Panama: `Panama's Pensionado visa is one of the world's most generous retirement programs. Requirements: a lifetime pension of at least $1,000/month from a government or private pension. Benefits include significant discounts on healthcare, entertainment, restaurants, and utilities. The visa is permanent once approved and does not require annual renewal.`,
      'Costa Rica': `Costa Rica's Pensionado (retiree) visa requires proof of at least $1,000/month in pension income from a government or private source. Valid indefinitely, with annual check-ins required. Costa Rica does not tax foreign-source income for residents, making it tax-favorable for American retirees — but verify current rules with a Costa Rican attorney.`,
      Ecuador: `Ecuador's Jubilado (retiree) visa requires proof of at least $800/month in Social Security or other pension income. Ecuador uses the US dollar, which eliminates currency risk. Property ownership is straightforward for foreigners — freehold, no restrictions. Budget 2–4% for transfer taxes and legal fees.`,
      Guatemala: `Guatemala's Pensionado visa requires $1,000/month in pension income. The country uses the quetzal but USD is widely accepted. Property can be owned freehold by foreigners. A local attorney is essential for any purchase due to complex title chains in some areas.`,
      Belize: `Belize's Qualified Retired Persons (QRP) program requires proof of at least $2,000/month in pension income. Benefits include import duty exemptions and long-term residency. Belize uses the Belize dollar pegged at 2:1 to USD. Property can be owned freehold, with relatively clean title processes.`,
      Honduras: `Honduras's Pensionado and Jubilado programs offer residency for retirees with qualifying pension income (typically $1,500–$2,500/month depending on program tier). The Bay Islands (Roatán) are especially popular with American retirees and have a well-developed expat real estate market.`,
      Uruguay: `Uruguay is considered one of Latin America's most stable democracies. The Pensión/Renta residency requires proof of ~$1,500/month in passive income. Uruguay taxes worldwide income for residents after 3 years — understand the tax implications before committing. Property ownership is straightforward for foreigners with no restrictions.`,
      Argentina: `Argentina's residency options for retirees exist but Argentina's currency instability is the biggest practical challenge. Property transactions often happen in USD (cash). Budget for a complex, slow process. A local property attorney who understands current exchange rate rules is essential.`,
    };
    const visaText = pensionVisa[c] || `${c} offers a pension/retirement visa program for qualifying foreigners. Requirements and benefits vary — verify current thresholds with a local attorney before planning around any specific visa program.`;
    card2 = legalCard('🏠', `Retirement visa options in ${c}`, visaText);
    card3 = legalCard('📋', 'Property ownership for Americans',
      `Americans can generally purchase freehold property in ${c}. Transaction costs (taxes, legal fees, registration) typically add 3–8% to the purchase price. Always work with a local property attorney, not just a real estate agent — title chains and ownership structures can be complex. Renting first while you navigate the process is the lowest-risk approach.`);
    disclaimer = `This is context, not legal or tax advice. Property transactions and residency in ${c} require professional guidance from a local attorney and a US expat tax advisor.`;
  } else if (['Dominican Republic', 'Barbados', 'Grenada', 'Saint Kitts and Nevis',
              'Cayman Islands', 'Turks and Caicos Islands', 'US Virgin Islands',
              'Saint Lucia', 'Antigua and Barbuda'].includes(c)) {
    card2 = legalCard('🏠', `Residency options in ${c}`,
      c === 'US Virgin Islands'
        ? `The US Virgin Islands are a US territory — no visa or residency process required for US citizens. Property ownership is straightforward. Healthcare access is limited compared to the mainland — private insurance or medevac coverage is strongly recommended.`
        : `${c} offers various residency and citizenship-by-investment programs. Many Caribbean nations have economic citizenship programs (typically $150K–$250K minimum investment) that provide a second passport along with residency. For long-term retirement without investment, most offer residency by proving self-sufficiency. Verify current programs and thresholds with a local attorney.`);
    card3 = legalCard('📋', 'Property ownership for Americans',
      `Americans can purchase property in ${c}. Most Caribbean islands use common-law property systems (a legacy of British colonial law) which are relatively familiar to Americans. Title insurance is available and recommended. A local attorney is essential for any purchase. Budget 5–15% above purchase price for stamp duty, legal fees, and registration.`);
    disclaimer = `This is context, not legal or tax advice. Caribbean real estate and residency programs require professional legal guidance and a US expat tax advisor.`;
  } else if (['Indonesia', 'Philippines', 'Vietnam', 'Sri Lanka', 'Japan', 'Taiwan'].includes(c)) {
    const asiaVisa = {
      Indonesia: `The Bali/Indonesia situation: foreigners cannot own freehold land in Indonesia. Options are long-term lease (Hak Sewa, typically 25–30 years), a Hak Pakai (Right to Use) title for certain property types, or a nominee arrangement through an Indonesian company (legally complex, carry risk). Most expats rent. A 5-year retirement visa (KITAP) is available for those 55+ with sufficient monthly income.`,
      Philippines: `The Philippines offers a Special Resident Retiree's Visa (SRRV) for those 50+ with qualifying deposit ($10K–$50K depending on tier) or pension income. Foreigners cannot own land, but can own condominium units (up to 40% of a building) freehold. Long-term leases (25–50 years) are an option for landed property.`,
      Vietnam: `Vietnam's property laws have opened somewhat: foreigners can own apartment units for 50-year terms (renewable) in designated areas. Land ownership is not permitted. Most expats rent, which is straightforward and affordable. Vietnam does not have a retirement visa category — most use a business visa, tourist visa extensions, or a temporary residence card.`,
      'Sri Lanka': `Sri Lanka's property ownership rules restrict foreigners from owning land outright. Foreigners can own apartments or condos above 4th floor in approved buildings, or hold property through a company. Renting is straightforward. Sri Lanka's Residence Visa is renewable annually for those who can demonstrate financial self-sufficiency.`,
      Japan: `Japan has no restrictions on foreigners purchasing property — and property prices outside Tokyo/Osaka can be remarkably low. However, Japan's immigration system does not have a retirement visa category. Options include a cultural activities visa, a spouse visa if applicable, or the Highly Skilled Professional visa. The akiya (vacant house) market offers very low-cost rural property with free or near-free purchase prices.`,
      Taiwan: `Taiwan allows foreigners to purchase residential property without restrictions after obtaining a local ID (ARC). Taiwan does not have a retirement visa category — most long-term residents use work visas, entrepreneur visas, or the Taiwan gold card (for qualifying professionals). Property transactions require a local agent and attorney.`,
    };
    const visaText = asiaVisa[c] || `${c} has specific rules for foreign property ownership and residency — verify current requirements before making any commitments. Most countries in this region restrict freehold land ownership for foreigners; long-term leases are the common alternative.`;
    card2 = legalCard('🏠', `Property and residency for Americans in ${c}`, visaText);
    card3 = legalCard('📋', 'Renting vs. owning here',
      `Given the complexity of foreign property ownership in ${c}, most American retirees begin by renting — which is typically straightforward even where buying is complex. If you eventually want to buy, a long-term expat attorney who specializes in property for foreigners is essential. Don't rely on real estate agents alone to navigate ownership structures.`);
    disclaimer = `This is context, not legal or tax advice. Property ownership, residency, and US tax obligations in ${c} require professional guidance from a local attorney and a US expat tax advisor.`;
  } else if (['Australia', 'New Zealand'].includes(c)) {
    card2 = legalCard('🏠', `Residency in ${c} is not easy for Americans`,
      c === 'Australia'
        ? `Australia does not have a retirement visa. The main pathways for Americans are the Temporary Activity visa (limited), a sponsored work visa, or joining family members who are permanent residents/citizens. The Significant Investor visa requires AUD $5M+ ($3M+ USD). Without a pathway, Americans are limited to tourist visas (typically 90 days). Verify current programs — they change.`
        : `New Zealand similarly does not have a retirement visa. The Investor and Investor Plus categories require NZD $3–10M+ in investment. Family sponsorship is the most common path for retirees. Without a residency pathway, Americans cannot remain long-term. This is worth verifying with a New Zealand immigration attorney before planning a retirement here.`);
    card3 = legalCard('📋', 'Property ownership for Americans',
      `Americans can purchase residential property in ${c} if they have the appropriate residency status. Without residency, the Overseas Investment Office (NZ) or Foreign Investment Review Board (AU) approval may be required. These rules change — verify the current requirements. Property quality and consumer protections in both countries are high, comparable to the US.`);
    disclaimer = `This is context, not legal or tax advice. Immigration and property in ${c} are complex for Americans. Work with a licensed local immigration attorney and a US expat tax advisor before making plans.`;
  } else if (['Morocco', 'South Africa', 'Kenya', 'Tanzania', 'Ghana', 'Mauritius'].includes(c)) {
    const africaVisa = {
      Morocco: `Morocco offers a Retirement Residency visa for those 40+ who can demonstrate passive income (~$600–$1,000/month). Renewable annually. Property can be owned freehold by foreigners in many areas, though some rules apply to agricultural land. A local notary (notaire) is required for all property transactions.`,
      'South Africa': `South Africa's Retired Person visa requires proof of a monthly income or pension of at least ZAR 37,000 (~$2,000). Valid for 4 years, renewable. South Africa allows freehold property ownership for foreigners without restrictions. The strong property rights framework and English-language system make transactions relatively navigable.`,
      Kenya: `Kenya does not have a specific retirement visa but offers long-stay permits for those with sufficient financial means. Foreigners can own leasehold property (up to 99 years) but cannot own freehold land. Nairobi's expat community is established; Lamu and coastal areas have specific development/ownership rules to verify.`,
      Tanzania: `Tanzania has limited formal residency options for non-working foreigners. Long-stay permits are available but require financial proof. Foreigners cannot own land freehold in Tanzania — land is government-owned, with right-of-occupancy leases (typically 33 or 66 years) available.`,
      Ghana: `Ghana's "Joseph Project" and general openness to diaspora have made it increasingly popular. Foreigners can lease property for up to 50 years. The Land Act has improved title registration; still work with a local attorney. Ghana has a relatively stable currency and growing expat infrastructure.`,
      Mauritius: `Mauritius actively courts high-net-worth retirees. The Retirement Non-Citizen Permit requires proof of $1,500+/month in passive income (or a $18K+ annual transfer). Property ownership for foreigners is permitted through the Integrated Resort Scheme (IRS) and PDS programs — a minimum investment typically $375K+.`,
    };
    const visaText = africaVisa[c] || `${c} has residency options for foreigners with sufficient passive income. Verify current programs and thresholds with a local attorney.`;
    card2 = legalCard('🏠', `Residency and property in ${c}`, visaText);
    card3 = legalCard('📋', 'What to know before you buy',
      `Property ownership rules vary significantly across African countries — some allow full freehold ownership for foreigners, others restrict to leasehold. Title quality and registration processes also vary. A locally licensed property attorney and an independent title search are essential before any purchase. Renting first while you establish local knowledge is strongly recommended.`);
    disclaimer = `This is context, not legal or tax advice. Property transactions and residency in ${c} require professional guidance from a local attorney and a US expat tax advisor.`;
  } else {
    // Truly generic fallback
    card2 = legalCard('🏠', `Residency options for Americans in ${c}`,
      `Most countries have some form of residency permit for financially independent foreigners — often called a retirement visa, passive income visa, or financially independent person visa. Requirements vary widely. Verify current income thresholds, health insurance requirements, and application timelines with a local immigration attorney before building plans around any specific program.`);
    card3 = legalCard('📋', 'Property ownership for Americans',
      `Rules for foreign property ownership vary significantly by country. Some allow full freehold ownership; others restrict foreigners to leasehold or require local partnerships. A local property lawyer is essential for any purchase — real estate agents do not provide legal services. Renting first is the lowest-risk way to evaluate a place before committing to ownership.`);
    disclaimer = `This is context, not legal or tax advice. Property transactions and residency in ${c} require professional guidance from a local attorney and a US expat tax advisor.`;
  }

  return {
    cards: [usTaxCard, card2, card3],
    disclaimer,
  };
}

// ─── Rent vs. Buy section ──────────────────────────────────────────────────────
function getRentVsBuySection(dest) {
  if (!dest.isInternational) {
    return `
    <section class="rent-vs-buy">
      <div class="rent-vs-buy-inner">
        <p class="section-label">The big decision</p>
        <h2 class="section-headline">Rent first.<br><em>Almost always.</em></h2>
        <p class="section-sub">Whether you end up buying or renting long-term, starting with a rental gives you local knowledge that no amount of research can replicate.</p>
        <div class="rvb-grid">
          <div class="rvb-card rent">
            <h3 class="rvb-title">Renting first</h3>
            <p class="rvb-subtitle">The lower-risk path to figuring out where you actually want to live</p>
            <ul class="rvb-points">
              <li>You discover which neighborhood genuinely fits your lifestyle — not just which one looked good in photos</li>
              <li>You stay flexible while you figure out healthcare, social connections, and daily logistics</li>
              <li>You avoid the costs of a quick sale if you change your mind in year one</li>
              <li>You have time to understand local market conditions before making a purchase offer</li>
              <li>In most markets, you can find furnished rentals for shorter initial commitments</li>
            </ul>
            <div class="rvb-note">Typical lease: 12-month minimum in most markets. Month-to-month options exist at a premium. Always read the full lease; tenant protections vary by state.</div>
          </div>
          <div class="rvb-card buy">
            <h3 class="rvb-title">Buying when you're ready</h3>
            <p class="rvb-subtitle">Worth it when you have real conviction about the place</p>
            <ul class="rvb-points">
              <li>You've lived in the area for at least a year and you're confident in the neighborhood</li>
              <li>You understand the local property tax, HOA landscape, and insurance requirements</li>
              <li>You have pre-approval — lenders view retirees differently than W-2 earners; get this sorted early</li>
              <li>You're not buying as an investment — you're buying because this is where you want to live</li>
              <li>You have a local inspector and a buyer's agent (not shared with the seller) you trust</li>
            </ul>
            <div class="rvb-note">Budget 2–5% of purchase price for closing costs. Property taxes, HOA fees, and insurance are ongoing — factor them into your monthly cost calculation, not just the mortgage payment.</div>
          </div>
        </div>
      </div>
    </section>`;
  }

  return `
    <section class="rent-vs-buy">
      <div class="rent-vs-buy-inner">
        <p class="section-label">The big decision</p>
        <h2 class="section-headline">Rent first.<br><em>Almost always.</em></h2>
        <p class="section-sub">This isn't financial advice — it's the consistent experience of the expat community: don't buy before you've lived somewhere for at least a year.</p>
        <div class="rvb-grid">
          <div class="rvb-card rent">
            <h3 class="rvb-title">Renting first</h3>
            <p class="rvb-subtitle">The path most expats recommend</p>
            <ul class="rvb-points">
              <li>You discover what neighborhood actually fits your lifestyle — not just what looked good in photos</li>
              <li>You have time to understand local bureaucracy before committing to a purchase transaction</li>
              <li>You keep your options open: if the vibe doesn't hold up in year one, you leave</li>
              <li>No transfer taxes, no notary fees, no property manager search</li>
              <li>Long-term furnished rentals are available in most international expat destinations</li>
            </ul>
            <div class="rvb-note">Typical lease terms vary by country. Most international markets offer 6–12 month initial leases, often furnished. Deposits typically 1–2 months rent.</div>
          </div>
          <div class="rvb-card buy">
            <h3 class="rvb-title">Buying when you're ready</h3>
            <p class="rvb-subtitle">Worth it for the right circumstances</p>
            <ul class="rvb-points">
              <li>You've lived in the area for at least a year and you're genuinely confident</li>
              <li>You have a local real estate attorney (not just an agent) and understand the legal ownership structure for foreigners in this country</li>
              <li>You've worked out the US tax implications of owning foreign property with a qualified expat advisor</li>
              <li>You have a realistic budget that includes transaction costs, which can be 8–15% above purchase price internationally</li>
              <li>You're not buying as an investment — you're buying because this is where you want to live</li>
            </ul>
            <div class="rvb-note">Transaction costs vary significantly by country. In some markets, the buyer pays transfer tax; in others, the seller does. Your attorney will clarify before you commit.</div>
          </div>
        </div>
      </div>
    </section>`;
}

// ─── Neighborhood cards ────────────────────────────────────────────────────────
function getNeighborhoodsHTML(dest) {
  if (!dest.neighborhoods || dest.neighborhoods.length === 0) {
    return `<p style="color:var(--warm-gray)">Neighborhood details coming soon.</p>`;
  }

  const rentAmt = parseAmount(dest.housing.rent);
  const buyAmt  = parseAmount(dest.housing.buy);

  // Derive approximate per-neighborhood price ranges
  const ranges = [
    { rentLow: roundTo(rentAmt * 0.85, 50),  rentHigh: roundTo(rentAmt * 1.4, 50) },   // neighborhood 1 — typically upscale/expat area
    { rentLow: roundTo(rentAmt * 0.75, 50),  rentHigh: roundTo(rentAmt * 1.15, 50) },  // neighborhood 2 — mid-range
    { rentLow: roundTo(rentAmt * 0.55, 50),  rentHigh: roundTo(rentAmt * 0.9, 50) },   // neighborhood 3 — value/local area
  ];

  const vibes = ['vibe-upscale', 'vibe-comfortable', 'vibe-simple', 'vibe-luxury'];
  const vibeLabels = ['Upscale', 'Comfortable with Extras', 'Simple & Comfortable', 'Luxury'];

  return dest.neighborhoods.map((n, i) => {
    const r = ranges[i] || ranges[2];
    const vibe = vibes[i % vibes.length];
    const vibeLabel = vibeLabels[i % vibeLabels.length];
    const isDomestic = !dest.isInternational;
    const currency = isDomestic ? '$' : '$';

    // Format rent
    const rentLowFmt  = currency + r.rentLow.toLocaleString();
    const rentHighFmt = currency + r.rentHigh.toLocaleString();

    return `
      <div class="hood-card">
        <div class="hood-card-main">
          <h3 class="hood-name">${n.name}</h3>
          <p class="hood-desc">${n.desc}</p>
          <div class="hood-stats">
            <span class="hood-stat"><strong>Est. rent:</strong> ${rentLowFmt}–${rentHighFmt}/mo</span>
            <span class="hood-stat"><strong>Buy from:</strong> ${dest.housing ? dest.housing.buy : 'varies'}</span>
          </div>
        </div>
        <span class="hood-vibe ${vibe}">${vibeLabel}</span>
      </div>`;
  }).join('\n');
}

// Special case: Porto — hardcode the exact neighborhood content from browse-homes-international.html
function getPortoNeighborhoodsHTML() {
  return `
      <div class="hood-card">
        <div class="hood-card-main">
          <h3 class="hood-name">Foz do Douro</h3>
          <p class="hood-desc">Where the river meets the Atlantic. Broad avenues, sea air, and a strong expat community. This is the neighborhood most Americans end up in — and for good reason. Grocery stores, pharmacies, English-friendly cafés. The tradeoff: it's Porto's most expensive neighborhood, and it can feel a little international-bubble-ish if that's not what you're looking for.</p>
          <div class="hood-stats">
            <span class="hood-stat"><strong>1BR rent:</strong> $975–1,500/mo</span>
            <span class="hood-stat"><strong>2BR rent:</strong> $1,400–2,200/mo</span>
            <span class="hood-stat"><strong>Buy from:</strong> ~$300K</span>
          </div>
        </div>
        <span class="hood-vibe vibe-upscale">Upscale</span>
      </div>
      <div class="hood-card">
        <div class="hood-card-main">
          <h3 class="hood-name">Cedofeita</h3>
          <p class="hood-desc">The creative quarter. Independent bookshops, galleries, the best independent restaurants in the city. More bohemian, younger energy than Foz — you'll still find retirees here, but they tend to be the kind who want to be embedded in the city rather than above it. Excellent transit connections, walkable to downtown.</p>
          <div class="hood-stats">
            <span class="hood-stat"><strong>1BR rent:</strong> $810–1,200/mo</span>
            <span class="hood-stat"><strong>2BR rent:</strong> $1,025–1,625/mo</span>
            <span class="hood-stat"><strong>Buy from:</strong> ~$260K</span>
          </div>
        </div>
        <span class="hood-vibe vibe-comfortable">Comfortable with Extras</span>
      </div>
      <div class="hood-card">
        <div class="hood-card-main">
          <h3 class="hood-name">Bonfim</h3>
          <p class="hood-desc">The sleeper pick. Porto's most rapidly gentrifying neighborhood — still genuinely Portuguese, with old ladies on balconies and local tascas, but with a growing café scene and renovated apartments at prices that feel like a secret. Hilly, so factor that in. Early adopters here tend to feel very smug about their choice within six months.</p>
          <div class="hood-stats">
            <span class="hood-stat"><strong>1BR rent:</strong> $700–1,025/mo</span>
            <span class="hood-stat"><strong>2BR rent:</strong> $920–1,400/mo</span>
            <span class="hood-stat"><strong>Buy from:</strong> ~$220K</span>
          </div>
        </div>
        <span class="hood-vibe vibe-simple">Simple &amp; Comfortable</span>
      </div>
      <div class="hood-card">
        <div class="hood-card-main">
          <h3 class="hood-name">Matosinhos</h3>
          <p class="hood-desc">Technically a separate municipality, but a 15-minute metro ride from downtown Porto and increasingly popular with expats for exactly that reason. On the beach. Fish market two blocks away. More space for less money. If you don't need to be in the city every day and want to wake up to the Atlantic, this is worth a serious look.</p>
          <div class="hood-stats">
            <span class="hood-stat"><strong>1BR rent:</strong> $750–1,150/mo</span>
            <span class="hood-stat"><strong>2BR rent:</strong> $1,025–1,500/mo</span>
            <span class="hood-stat"><strong>Buy from:</strong> ~$240K</span>
          </div>
        </div>
        <span class="hood-vibe vibe-luxury">Luxury</span>
      </div>`;
}

// Special case: Porto — hardcode the exact price bands from browse-homes-international.html
function getPortoPriceBandsHTML() {
  return `
      <div class="band-card">
        <div class="band-range">$865–1,300/mo</div>
        <div class="band-label">Budget renting</div>
        <ul class="band-list">
          <li>1–2 bedroom apartment in Bonfim, Paranhos, or Matosinhos</li>
          <li>Furnished or semi-furnished, long-term lease</li>
          <li>Access to public transit, local markets, basic amenities</li>
          <li>Likely not Foz or Cedofeita at the lower end</li>
          <li>Older building stock — check for elevator and heating</li>
        </ul>
      </div>
      <div class="band-card">
        <div class="band-range">$1,300–1,950/mo</div>
        <div class="band-label">Comfortable renting</div>
        <ul class="band-list">
          <li>2-bedroom in Foz, Cedofeita, or renovated Baixa</li>
          <li>More likely to find modern kitchens and en-suite bathrooms</li>
          <li>Central neighborhoods, walkable to everything</li>
          <li>Expat-ready: furnished, English-speaking landlords common</li>
          <li>River or sea views available at this range</li>
        </ul>
      </div>
      <div class="band-card">
        <div class="band-range">$195K–345K</div>
        <div class="band-label">Buying</div>
        <ul class="band-list">
          <li>2BR apartment in Bonfim or Matosinhos purchase range</li>
          <li>Foz and Cedofeita 2BRs start around $300K+</li>
          <li>Transfer tax (IMT): 2–8% depending on purchase price</li>
          <li>Annual property tax (IMI): ~0.3–0.45% of assessed value</li>
          <li>Non-residents can buy freely; no restrictions for Americans</li>
        </ul>
      </div>`;
}

function getPriceBandsHTML(dest) {
  if (dest.id === 'porto') return getPortoPriceBandsHTML();

  const rentAmt = parseAmount(dest.housing.rent);
  const buyAmt  = parseAmount(dest.housing.buy);
  const buyStr  = dest.housing.buy || 'varies';
  const isIntl  = dest.isInternational;

  const b1Low  = roundTo(rentAmt * 0.65, 50);
  const b1High = roundTo(rentAmt * 0.95, 50);
  const b2Low  = roundTo(rentAmt * 0.85, 50);
  const b2High = roundTo(rentAmt * 1.5, 50);

  const label1 = isIntl ? 'Budget renting' : 'Budget renting';
  const label2 = isIntl ? 'Comfortable renting' : 'Comfortable renting';
  const cityName = dest.name;

  return `
      <div class="band-card">
        <div class="band-range">${fmtMo(b1Low)}–${fmtMo(b1High)}</div>
        <div class="band-label">${label1}</div>
        <ul class="band-list">
          <li>1–2 bedroom apartment in a local or up-and-coming neighborhood</li>
          <li>Local amenities nearby; may require a short commute to main centers</li>
          <li>Older building stock is common at this range — inspect carefully</li>
          <li>Furnished options exist, especially in expat-popular areas</li>
          <li>Good base to explore while you decide on your preferred neighborhood</li>
        </ul>
      </div>
      <div class="band-card">
        <div class="band-range">${fmtMo(b2Low)}–${fmtMo(b2High)}</div>
        <div class="band-label">${label2}</div>
        <ul class="band-list">
          <li>2-bedroom in a central or established neighborhood</li>
          <li>More likely to find modern finishes, AC, and reliable utilities</li>
          <li>Expat-friendly: furnished options, English-speaking landlords common</li>
          <li>Walkable to restaurants, markets, and services in most cities</li>
          <li>Views, outdoor space, or premium amenities available at the higher end</li>
        </ul>
      </div>
      <div class="band-card">
        <div class="band-range">${buyStr}</div>
        <div class="band-label">Buying</div>
        <ul class="band-list">
          <li>${dest.housing.buyDesc || '2-bedroom property in a residential neighborhood'}</li>
          <li>Budget 8–15% above purchase price for taxes, legal fees, and closing costs</li>
          <li>${isIntl ? 'Work with a local property attorney to understand ownership rules for foreigners' : 'Get pre-approved before you shop — lenders treat retirement income differently than W-2'}</li>
          <li>${isIntl ? 'Renting first for at least a year before buying is the consensus advice of the expat community' : 'Factor in property taxes, HOA fees, and insurance — not just the mortgage payment'}</li>
          <li>Prices can vary significantly by neighborhood — the number above is a market anchor, not a quote</li>
        </ul>
      </div>`;
}

// ─── Page CSS (shared across all generated pages) ─────────────────────────────
const PAGE_CSS = `
  :root {
    --cream: #FBF6EE; --cream-soft: #F4ECDD;
    --terracotta: #C97B5A; --terracotta-dark: #A8593A;
    --teal: #1B3A4B; --teal-soft: #2E5468;
    --gold: #C8A064; --gold-soft: #E4C998;
    --sage: #93A89A; --warm-gray: #7A6E5F;
    --white: #FFFFFF;
    --serif: 'DM Serif Display', Georgia, serif;
    --sans: 'Inter', -apple-system, system-ui, sans-serif;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { background: var(--cream); color: var(--teal); font-family: var(--sans); font-size: 16px; line-height: 1.6; -webkit-font-smoothing: antialiased; }

  /* Nav */
  .nav { position: sticky; top: 0; z-index: 50; display: flex; align-items: center; justify-content: space-between; padding: 18px 48px; background: rgba(251,246,238,.92); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(27,58,75,.06); }
  .wordmark { font-family: var(--serif); font-size: 24px; color: var(--teal); letter-spacing: -.01em; text-decoration: none; }
  .wordmark em { color: var(--terracotta); font-style: normal; }
  .nav-links { display: flex; align-items: center; gap: 32px; }
  .nav-links a { color: var(--teal); text-decoration: none; font-size: 15px; font-weight: 500; }
  .nav-links a:hover { color: var(--terracotta); }
  .nav-cta { padding: 12px 22px; background: var(--teal); color: var(--white) !important; border-radius: 999px; font-size: 14px; transition: all .25s ease; }
  .nav-cta:hover { background: var(--terracotta); }

  /* Hero */
  .hero { position: relative; min-height: 580px; display: flex; align-items: flex-end; padding: 0 48px 72px; overflow: hidden; }
  .hero-bg { position: absolute; inset: 0; background-size: cover; background-position: center 55%; }
  .hero-bg::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg,rgba(27,58,75,.1) 0%,rgba(27,58,75,.78) 100%); }
  .hero-inner { position: relative; z-index: 2; max-width: 1240px; width: 100%; }
  .hero-kicker { display: inline-flex; align-items: center; gap: 10px; padding: 8px 18px; background: rgba(251,246,238,.15); border: 1px solid rgba(255,255,255,.25); border-radius: 999px; font-size: 12px; font-weight: 600; letter-spacing: .18em; text-transform: uppercase; color: var(--gold-soft); margin-bottom: 22px; backdrop-filter: blur(6px); }
  .hero-kicker::before { content: ""; display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: var(--gold-soft); }
  .hero h1 { font-family: var(--serif); font-size: 60px; line-height: 1.04; letter-spacing: -.02em; color: var(--white); margin-bottom: 20px; }
  .hero h1 em { font-style: italic; color: var(--gold-soft); }
  .hero-sub { font-size: 18px; line-height: 1.55; color: rgba(255,255,255,.82); max-width: 540px; margin-bottom: 36px; }
  .hero-btns { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
  .btn-primary { display: inline-flex; align-items: center; gap: 10px; padding: 18px 36px; background: var(--terracotta); color: var(--white); border-radius: 999px; font-family: var(--sans); font-size: 16px; font-weight: 500; cursor: pointer; transition: all .25s ease; text-decoration: none; }
  .btn-primary:hover { background: var(--terracotta-dark); transform: translateY(-1px); }
  .btn-ghost { display: inline-flex; align-items: center; gap: 10px; padding: 17px 30px; background: rgba(255,255,255,.12); color: var(--white); border: 1px solid rgba(255,255,255,.3); border-radius: 999px; font-family: var(--sans); font-size: 15px; font-weight: 500; text-decoration: none; transition: all .25s ease; }
  .btn-ghost:hover { background: rgba(255,255,255,.2); }
  .hero-partner { margin-top: 16px; font-size: 12px; color: rgba(255,255,255,.45); letter-spacing: .06em; }

  /* Section shared */
  .section-label { font-size: 12px; letter-spacing: .22em; text-transform: uppercase; color: var(--warm-gray); font-weight: 500; margin-bottom: 14px; }
  .section-headline { font-family: var(--serif); font-size: 46px; color: var(--teal); line-height: 1.1; letter-spacing: -.015em; margin-bottom: 16px; }
  .section-headline em { color: var(--terracotta); font-style: italic; }
  .section-sub { font-size: 18px; color: var(--teal-soft); line-height: 1.6; max-width: 640px; margin-bottom: 56px; }

  /* Neighborhoods */
  .neighborhoods { background: var(--cream-soft); padding: 96px 48px; }
  .neighborhoods-inner { max-width: 1240px; margin: 0 auto; }
  .hood-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; }
  .hood-card { background: var(--white); border-radius: 16px; padding: 32px 30px; border: 1px solid rgba(27,58,75,.07); display: grid; grid-template-columns: 1fr auto; gap: 0 16px; align-items: start; }
  .hood-card-main { grid-column: 1; }
  .hood-vibe { grid-column: 2; display: inline-block; padding: 5px 12px; border-radius: 999px; font-size: 11px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; white-space: nowrap; margin-top: 2px; }
  .vibe-simple { background: rgba(147,168,154,.18); color: #4A7A5A; }
  .vibe-comfortable { background: rgba(200,160,100,.18); color: #8A6020; }
  .vibe-upscale { background: rgba(201,123,90,.14); color: var(--terracotta-dark); }
  .vibe-luxury { background: rgba(27,58,75,.1); color: var(--teal); }
  .hood-name { font-family: var(--serif); font-size: 26px; color: var(--teal); letter-spacing: -.01em; margin-bottom: 10px; }
  .hood-desc { font-size: 14px; line-height: 1.65; color: var(--teal-soft); margin-bottom: 16px; }
  .hood-stats { display: flex; gap: 20px; flex-wrap: wrap; }
  .hood-stat { font-size: 13px; color: var(--warm-gray); }
  .hood-stat strong { color: var(--teal); font-weight: 600; }

  /* Price bands */
  .price-bands { background: var(--teal); padding: 96px 48px; }
  .price-bands-inner { max-width: 1240px; margin: 0 auto; }
  .band-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; }
  .band-card { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); border-radius: 16px; padding: 30px 26px; }
  .band-range { font-family: var(--serif); font-size: 32px; color: var(--gold-soft); letter-spacing: -.01em; margin-bottom: 6px; }
  .band-label { font-size: 13px; font-weight: 600; color: rgba(255,255,255,.5); text-transform: uppercase; letter-spacing: .1em; margin-bottom: 20px; }
  .band-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
  .band-list li { font-size: 14px; color: rgba(255,255,255,.8); line-height: 1.5; padding-left: 16px; position: relative; }
  .band-list li::before { content: "→"; position: absolute; left: 0; color: var(--gold-soft); font-size: 12px; top: 2px; }

  /* Rent vs Buy */
  .rent-vs-buy { background: var(--cream); padding: 96px 48px; }
  .rent-vs-buy-inner { max-width: 1240px; margin: 0 auto; }
  .rvb-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
  .rvb-card { border-radius: 16px; padding: 38px 34px; border: 1px solid rgba(27,58,75,.1); }
  .rvb-card.rent { background: var(--white); }
  .rvb-card.buy { background: var(--cream-soft); }
  .rvb-title { font-family: var(--serif); font-size: 32px; color: var(--teal); letter-spacing: -.01em; margin-bottom: 8px; }
  .rvb-subtitle { font-size: 14px; color: var(--warm-gray); font-weight: 500; margin-bottom: 24px; }
  .rvb-points { list-style: none; display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
  .rvb-points li { font-size: 15px; line-height: 1.55; color: var(--teal-soft); padding-left: 20px; position: relative; }
  .rvb-points li::before { position: absolute; left: 0; top: 2px; font-size: 13px; }
  .rvb-card.rent .rvb-points li::before { content: "✓"; color: #4A7A5A; }
  .rvb-card.buy .rvb-points li::before { content: "✓"; color: var(--terracotta); }
  .rvb-note { font-size: 13px; color: var(--warm-gray); line-height: 1.55; background: rgba(27,58,75,.04); border-radius: 10px; padding: 14px 16px; }

  /* Legal */
  .legal-band { background: #122631; padding: 80px 48px; }
  .legal-band-inner { max-width: 1240px; margin: 0 auto; }
  .legal-band .section-label { color: rgba(255,255,255,.4); }
  .legal-band .section-headline { color: var(--white); font-size: 38px; }
  .legal-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; margin-top: 40px; }
  .legal-card { background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.09); border-radius: 14px; padding: 26px 24px; }
  .legal-icon { font-size: 26px; margin-bottom: 14px; }
  .legal-title { font-family: var(--serif); font-size: 20px; color: var(--gold-soft); margin-bottom: 10px; }
  .legal-body { font-size: 13px; line-height: 1.65; color: rgba(255,255,255,.7); }
  .legal-disclaimer { margin-top: 32px; font-size: 13px; color: rgba(255,255,255,.35); line-height: 1.6; max-width: 720px; }

  /* Main CTA */
  .main-cta { background: var(--cream-soft); padding: 100px 48px; text-align: center; }
  .main-cta-inner { max-width: 680px; margin: 0 auto; }
  .main-cta .section-label { text-align: center; }
  .cta-headline { font-family: var(--serif); font-size: 52px; color: var(--teal); line-height: 1.08; letter-spacing: -.02em; margin-bottom: 18px; }
  .cta-headline em { color: var(--terracotta); font-style: italic; }
  .cta-sub { font-size: 18px; color: var(--teal-soft); line-height: 1.6; margin-bottom: 40px; }
  .cta-btns { display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap; }
  .btn-teal { display: inline-flex; align-items: center; gap: 10px; padding: 18px 36px; background: var(--teal); color: var(--white); border-radius: 999px; font-family: var(--sans); font-size: 16px; font-weight: 500; text-decoration: none; transition: all .25s ease; }
  .btn-teal:hover { background: var(--teal-soft); transform: translateY(-1px); }
  .btn-outline { display: inline-flex; align-items: center; gap: 10px; padding: 17px 30px; background: transparent; color: var(--teal); border: 1.5px solid rgba(27,58,75,.25); border-radius: 999px; font-family: var(--sans); font-size: 15px; font-weight: 500; text-decoration: none; transition: all .25s ease; }
  .btn-outline:hover { border-color: var(--teal); }
  .cta-partner-note { margin-top: 20px; font-size: 12px; color: var(--warm-gray); }
  .cta-partner-note a { color: var(--warm-gray); }

  /* Also consider */
  .also { background: var(--teal); padding: 88px 48px; }
  .also-inner { max-width: 1240px; margin: 0 auto; }
  .also .section-label { color: rgba(255,255,255,.45); }
  .also-headline { font-family: var(--serif); font-size: 40px; color: var(--white); letter-spacing: -.015em; margin-bottom: 40px; }
  .also-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
  .also-card { background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); border-radius: 14px; padding: 28px 26px; transition: all .25s ease; text-decoration: none; display: block; }
  .also-card:hover { background: rgba(255,255,255,.09); transform: translateY(-2px); }
  .also-tag { font-size: 11px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: var(--gold-soft); margin-bottom: 12px; opacity: .8; }
  .also-title { font-family: var(--serif); font-size: 22px; color: var(--white); margin-bottom: 8px; letter-spacing: -.01em; }
  .also-desc { font-size: 13px; color: rgba(255,255,255,.65); line-height: 1.55; margin-bottom: 16px; }
  .also-link { font-size: 13px; color: var(--gold-soft); font-weight: 500; }

  /* Footer */
  footer { background: #0E2130; padding: 48px; }
  .footer-inner { max-width: 1240px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; }
  .footer-tag { font-size: 13px; color: rgba(255,255,255,.35); margin-top: 6px; }
  .footer-links { display: flex; gap: 28px; flex-wrap: wrap; }
  .footer-links a { font-size: 14px; color: rgba(255,255,255,.45); text-decoration: none; }
  .footer-links a:hover { color: rgba(255,255,255,.75); }
  .footer-legal { max-width: 1240px; margin: 32px auto 0; padding-top: 28px; border-top: 1px solid rgba(255,255,255,.06); font-size: 12px; color: rgba(255,255,255,.25); line-height: 1.6; }

  /* Responsive */
  @media (max-width: 980px) {
    .nav { padding: 16px 24px; }
    .hero { padding: 0 24px 56px; min-height: 480px; }
    .hero h1 { font-size: 40px; }
    .neighborhoods, .price-bands, .rent-vs-buy, .legal-band, .main-cta, .also { padding: 72px 24px; }
    .hood-grid { grid-template-columns: 1fr; }
    .band-grid { grid-template-columns: 1fr; gap: 16px; }
    .rvb-grid { grid-template-columns: 1fr; }
    .legal-grid { grid-template-columns: 1fr; }
    .also-grid { grid-template-columns: 1fr; }
    .section-headline { font-size: 34px; }
    footer { padding: 36px 22px 32px; }
    .footer-inner { flex-direction: column; align-items: flex-start; gap: 16px; }
  }
`;

// ─── Hero background image ─────────────────────────────────────────────────────
function getHeroBg(dest) {
  // Use the destination's own photo if it's a local image, else Unsplash fallback
  if (dest.photo && !dest.photo.startsWith('http')) {
    return `../../${dest.photo}`;
  }
  // Fallback Unsplash based on setting/country
  const unsplashFallbacks = {
    'United States': 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=2000&q=80',
    'Canada': 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=2000&q=80',
    'Portugal': 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=2000&q=80',
    'Spain': 'https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?auto=format&fit=crop&w=2000&q=80',
    'Mexico': 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=2000&q=80',
    'Italy': 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=2000&q=80',
    'France': 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=2000&q=80',
    'Greece': 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=80',
    'Thailand': 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=2000&q=80',
    'Colombia': 'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?auto=format&fit=crop&w=2000&q=80',
    'Australia': 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=2000&q=80',
    'New Zealand': 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=2000&q=80',
  };
  return unsplashFallbacks[dest.country] || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=80';
}

// ─── Full page generator ───────────────────────────────────────────────────────
function generatePage(dest) {
  const listings  = getListings(dest);
  const legal     = getLegalSection(dest);
  const isIntl    = dest.isInternational;
  const advisorPage = isIntl ? '../../advisor-international.html' : '../../advisor-domestic.html';
  const scoutingPage = isIntl ? '../../scouting-trips.html' : '../../scouting-trip-domestic.html';
  const destPage  = `../../destination-detail.html?id=${dest.id}`;
  const heroBg    = getHeroBg(dest);
  const regionLabel = isIntl ? 'International' : 'US Domestic';
  const neighborhoodsHTML = dest.id === 'porto'
    ? getPortoNeighborhoodsHTML()
    : getNeighborhoodsHTML(dest);
  const priceBandsHTML = getPriceBandsHTML(dest);
  const rentVsBuyHTML  = getRentVsBuySection(dest);

  // Hero content
  const heroH1 = `Find your home in <em>${dest.name}</em>`;
  const heroSub = dest.id === 'porto'
    ? `Real listings, real neighborhoods, no obligation. Browse what's actually available in Porto before you commit to anything.`
    : `Real listings, real neighborhoods, no obligation. Browse what's actually available in ${dest.name} before you commit to anything.`;

  // Legal section
  const legalSectionLabel = isIntl ? 'Before you sign anything' : 'Before you commit';
  const legalHeadline = isIntl
    ? 'Three things every American needs to know'
    : 'Three things to sort out before you move';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; font-src https://fonts.gstatic.com; img-src 'self' https://images.unsplash.com https://www.google-analytics.com data: blob:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com;">
<title>Find a Home in ${dest.name} — Real Estate Guide for Retirees | RetireVibes</title>
<meta name="description" content="Renting and buying in ${dest.name}, ${dest.country}: neighborhoods, price ranges, legal basics for Americans, and where to find real listings. A RetireVibes real estate guide." />
<link rel="canonical" href="https://www.retirevibes.com/destinations/${dest.id}/real-estate/" />
<meta property="og:title" content="Find a Home in ${dest.name} | RetireVibes" />
<meta property="og:description" content="Neighborhoods, price ranges, rent vs. buy, and legal basics for Americans retiring in ${dest.name}." />
<meta property="og:url" content="https://www.retirevibes.com/destinations/${dest.id}/real-estate/" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="RetireVibes" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="../../shared.css" />
<style>${PAGE_CSS}</style>
</head>
<body>

<!-- NAV -->
<nav class="nav">
  <a class="wordmark" href="../../homepage-mockup.html">Retire<em>Vibes</em></a>
  <div class="nav-links">
    <a href="../../homepage-mockup.html#destinations">Destinations</a>
    <a href="../../my-retirevibes.html">My RetireVibes</a>
    <a class="nav-cta" href="../../quiz.html">Find my RetireVibes →</a>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-bg" style="background-image: url('${heroBg}')"></div>
  <div class="hero-inner">
    <div class="hero-kicker">Real Estate Guide · ${regionLabel}</div>
    <h1>${heroH1}</h1>
    <p class="hero-sub">${heroSub}</p>
    <div class="hero-btns">
      <a class="btn-primary" href="${listings.rent}" target="_blank" rel="noopener noreferrer">
        Rent in ${dest.name} →
      </a>
      <a class="btn-ghost" href="${listings.buy}" target="_blank" rel="noopener noreferrer">
        Buy in ${dest.name}
      </a>
    </div>
    <p class="hero-partner">Listings via ${listings.platform} · Updated regularly</p>
  </div>
</section>

<!-- NEIGHBORHOODS -->
<section class="neighborhoods">
  <div class="neighborhoods-inner">
    <p class="section-label">Know the city before you search</p>
    <h2 class="section-headline">${dest.name}'s neighborhoods,<br><em>honestly described</em></h2>
    <p class="section-sub">${dest.name} isn't one place. The right neighborhood depends on how you want to live — not just which one looks best in photos.</p>
    <div class="hood-grid">
      ${neighborhoodsHTML}
    </div>
  </div>
</section>

<!-- PRICE BANDS -->
<section class="price-bands">
  <div class="price-bands-inner">
    <p class="section-label" style="color:rgba(255,255,255,0.45)">What your budget gets you</p>
    <h2 class="section-headline" style="color:var(--white)">${dest.name} real estate,<br><em style="color:var(--gold-soft)">by the numbers</em></h2>
    <p class="section-sub" style="color:rgba(255,255,255,0.7)">These ranges are based on current market data. Prices fluctuate — use these as a planning anchor, not a quote.</p>
    <div class="band-grid">
      ${priceBandsHTML}
    </div>
  </div>
</section>

<!-- RENT VS BUY -->
${rentVsBuyHTML}

<!-- LEGAL & VISA -->
<section class="legal-band">
  <div class="legal-band-inner">
    <p class="section-label">${legalSectionLabel}</p>
    <h2 class="section-headline">${legalHeadline}</h2>
    <div class="legal-grid">
      ${legal.cards.join('\n      ')}
    </div>
    <p class="legal-disclaimer">${legal.disclaimer}</p>
  </div>
</section>

<!-- MAIN CTA -->
<section class="main-cta">
  <div class="main-cta-inner">
    <p class="section-label">Start looking</p>
    <h2 class="cta-headline">Ready to see what's<br>actually <em>available?</em></h2>
    <p class="cta-sub">${listings.note}</p>
    <div class="cta-btns">
      <a class="btn-primary" href="${listings.rent}" target="_blank" rel="noopener noreferrer">
        Rent in ${dest.name} →
      </a>
      <a class="btn-teal" href="${listings.buy}" target="_blank" rel="noopener noreferrer">
        Buy in ${dest.name}
      </a>
      <a class="btn-outline" href="${scoutingPage}">Plan a scouting trip first</a>
    </div>
    <p class="cta-partner-note">We link to ${listings.platform} because it's the best tool for the job. We may earn a referral fee if you connect with a listing agent through our link. <a href="../../terms-of-service.html">Affiliate disclosure</a>.</p>
  </div>
</section>

<!-- ALSO CONSIDER -->
<section class="also">
  <div class="also-inner">
    <p class="section-label" style="color:rgba(255,255,255,0.45)">Don't stop here</p>
    <h2 class="also-headline">You'll also want these</h2>
    <div class="also-grid">
      <a class="also-card" href="${scoutingPage}">
        <div class="also-tag">Step 1</div>
        <h3 class="also-title">Plan a scouting trip</h3>
        <p class="also-desc">Walk the neighborhoods before you sign anything. See if the vibe holds up in person before you commit to anything.</p>
        <span class="also-link">Plan my trip →</span>
      </a>
      <a class="also-card" href="${advisorPage}">
        <div class="also-tag">Step 2</div>
        <h3 class="also-title">Talk to ${isIntl ? 'an expat' : 'a retirement'} advisor</h3>
        <p class="also-desc">${isIntl
          ? 'US taxation abroad, visa planning, account restructuring before you move. You need someone who has done this before.'
          : 'Social Security timing, Medicare coverage, state income tax implications. A fiduciary who works with retirees makes a real difference.'}</p>
        <span class="also-link">Find an advisor →</span>
      </a>

    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-inner">
    <div>
      <a class="wordmark" href="../../homepage-mockup.html" style="font-size:20px;">Retire<em>Vibes</em></a>
      <p class="footer-tag">Good RetireVibes only.</p>
    </div>
    <div class="footer-links">
      <a href="../../homepage-mockup.html#destinations">Destinations</a>
      <a href="../../homepage-mockup.html#how-it-works">How it works</a>
      <a href="../../find-an-advisor.html">Find an advisor</a>
      <a href="../../scouting-trips.html">Scouting trips</a>
      <a href="../../my-retirevibes.html">My RetireVibes</a>
    </div>
  </div>
  <p class="footer-legal">© 2025 RetireVibes. For informational and inspirational purposes only. We are not financial advisors, tax advisors, immigration attorneys, or real estate agents. Always verify current visa requirements, tax rules, and property regulations with licensed professionals. Destination costs and real estate prices are estimates based on publicly available data and are subject to change.</p>
</footer>
<script src="../../shared.js"></script>
</body>
</html>`;
}

// ─── Run ───────────────────────────────────────────────────────────────────────
const outputRoot = __dirname;
let count = 0;
const errors = [];

for (const dest of DESTINATIONS) {
  try {
    const dir = path.join(outputRoot, 'destinations', dest.id, 'real-estate');
    fs.mkdirSync(dir, { recursive: true });
    const html = generatePage(dest);
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
    count++;
    process.stdout.write(`✓ ${dest.name}, ${dest.country}\n`);
  } catch (e) {
    errors.push(`✗ ${dest.id}: ${e.message}`);
  }
}

console.log(`\n✅ Generated ${count} real estate pages in /destinations/[slug]/real-estate/`);
if (errors.length) {
  console.log('\nErrors:');
  errors.forEach(e => console.log(e));
}
