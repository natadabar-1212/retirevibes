/**
 * convert-destinations.js
 * Converts destinations-data.js (RetireVibes quiz engine file) into:
 *   - destinations.json  (master data file for directory + real estate pages)
 *   - destinations-audit.csv  (for content team to fill in missing fields)
 *
 * HOW TO RUN:
 *   node convert-destinations.js
 *   node convert-destinations.js /path/to/destinations-data.js
 *
 * No npm packages required — Node.js built-ins only.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ─────────────────────────────────────────────────────────────────────────────
// CONFIG — After your first run, paste the 30 featured destination slugs here.
// ─────────────────────────────────────────────────────────────────────────────
const FEATURED_SLUGS = new Set([
  'porto', 'merida', 'asheville', 'sarasota', 'chiang-mai', 'medellin',
  'santa-fe', 'bend', 'greenville-sc', 'sedona', 'st-augustine', 'victoria-bc',
  'halifax', 'puerto-rico', 'roatan', 'lisbon', 'valencia', 'oaxaca',
  'chattanooga', 'tucson', 'panama-city', 'malaga', 'algarve', 'athens',
  'florence', 'split', 'san-miguel', 'puerto-vallarta', 'cuenca', 'costa-rica'
]);

// ─────────────────────────────────────────────────────────────────────────────
// COUNTRY → REGION MAP
// ─────────────────────────────────────────────────────────────────────────────
const COUNTRY_REGION = {
  'portugal': 'Europe', 'spain': 'Europe', 'italy': 'Europe', 'greece': 'Europe',
  'france': 'Europe', 'germany': 'Europe', 'croatia': 'Europe', 'malta': 'Europe',
  'cyprus': 'Europe', 'netherlands': 'Europe', 'austria': 'Europe', 'switzerland': 'Europe',
  'czech republic': 'Europe', 'poland': 'Europe', 'hungary': 'Europe', 'romania': 'Europe',
  'bulgaria': 'Europe', 'serbia': 'Europe', 'albania': 'Europe', 'montenegro': 'Europe',
  'slovenia': 'Europe', 'estonia': 'Europe', 'latvia': 'Europe', 'lithuania': 'Europe',
  'mexico': 'Latin America', 'colombia': 'Latin America', 'peru': 'Latin America',
  'ecuador': 'Latin America', 'argentina': 'Latin America', 'chile': 'Latin America',
  'uruguay': 'Latin America', 'brazil': 'Latin America', 'bolivia': 'Latin America',
  'panama': 'Central America', 'costa rica': 'Central America', 'belize': 'Central America',
  'guatemala': 'Central America', 'honduras': 'Central America', 'nicaragua': 'Central America',
  'puerto rico': 'Caribbean', 'grenada': 'Caribbean', 'barbados': 'Caribbean',
  'bahamas': 'Caribbean', 'jamaica': 'Caribbean', 'dominican republic': 'Caribbean',
  'st. lucia': 'Caribbean', 'antigua': 'Caribbean', 'cayman islands': 'Caribbean',
  'thailand': 'Southeast Asia', 'malaysia': 'Southeast Asia', 'vietnam': 'Southeast Asia',
  'indonesia': 'Southeast Asia', 'philippines': 'Southeast Asia', 'cambodia': 'Southeast Asia',
  'singapore': 'Southeast Asia', 'myanmar': 'Southeast Asia', 'laos': 'Southeast Asia',
  'japan': 'East Asia', 'south korea': 'East Asia', 'taiwan': 'East Asia',
  'india': 'South Asia', 'sri lanka': 'South Asia', 'nepal': 'South Asia',
  'morocco': 'Middle East & Africa', 'south africa': 'Middle East & Africa',
  'kenya': 'Middle East & Africa', 'turkey': 'Middle East & Africa', 'georgia': 'Middle East & Africa',
  'jordan': 'Middle East & Africa', 'uae': 'Middle East & Africa',
  'usa': 'North America', 'united states': 'North America', 'canada': 'North America',
  'australia': 'Oceania', 'new zealand': 'Oceania',
};

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function slugify(name) {
  return name
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[&\/,]+/g, '-')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function getRegion(country) {
  if (!country) return 'Unknown';
  return COUNTRY_REGION[country.toLowerCase().trim()] || 'Unknown';
}

function normalizeClimate(val) {
  if (!val) return null;
  const v = String(val).toLowerCase();
  if (v.includes('trop')) return 'Tropical';
  if (v.includes('med')) return 'Mediterranean';
  if (v.includes('temp')) return 'Temperate';
  if (v.includes('desert') || v.includes('arid')) return 'Arid';
  if (v.includes('alpine') || v.includes('mountain')) return 'Alpine';
  return null;
}

function normalizeCost(val) {
  if (!val) return null;
  const v = String(val).toLowerCase();
  if (v.includes('low') || v.includes('budget') || v === '1') return 'low';
  if (v.includes('mod') || v === '2') return 'moderate';
  if (v.includes('high') || v.includes('premium') || v === '3') return 'high';
  return null;
}

function normalizeHealthcare(val) {
  if (!val) return null;
  const v = String(val).toLowerCase();
  if (v.includes('high') || v.includes('excel') || v === '3') return 'high';
  if (v.includes('med') || v.includes('good') || v === '2') return 'moderate';
  if (v.includes('low') || v.includes('basic') || v === '1') return 'low';
  return null;
}

function normalizeVisa(val) {
  if (!val) return null;
  const v = String(val).toLowerCase();
  if (v.includes('easy') || v.includes('simple') || v === '1') return 'easy';
  if (v.includes('mod') || v === '2') return 'moderate';
  if (v.includes('complex') || v.includes('hard') || v === '3') return 'complex';
  return null;
}

function normalizeEnglish(val) {
  if (!val) return null;
  const v = String(val).toLowerCase();
  if (v.includes('high') || v.includes('wide') || v === '3') return 'high';
  if (v.includes('mod') || v === '2') return 'moderate';
  if (v.includes('low') || v.includes('limit') || v === '1') return 'low';
  return null;
}

function get(obj, ...keys) {
  for (const k of keys) {
    if (obj[k] !== undefined && obj[k] !== null && obj[k] !== '') return obj[k];
    const camel = k.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
    const snake = k.replace(/([A-Z])/g, '_$1').toLowerCase();
    if (obj[camel] !== undefined && obj[camel] !== null && obj[camel] !== '') return obj[camel];
    if (obj[snake] !== undefined && obj[snake] !== null && obj[snake] !== '') return obj[snake];
  }
  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// MAP RAW DESTINATION → SCHEMA
// ─────────────────────────────────────────────────────────────────────────────

function mapDestination(raw) {
  const name = get(raw, 'name', 'display_name', 'displayName', 'city', 'destination') || '';
  const country = get(raw, 'country') || '';
  const slug = get(raw, 'slug', 'id') || slugify(name);
  const isActive = get(raw, 'status') === 'active' || get(raw, 'featured') || FEATURED_SLUGS.has(slug);
  const status = isActive ? 'active' : 'coming-soon';
  const region = getRegion(country);
  const featured = FEATURED_SLUGS.has(slug) || !!get(raw, 'featured') || false;
  const tagline = get(raw, 'tagline', 'subtitle', 'description', 'shortDescription') || '';
  const heroImage = get(raw, 'hero_image', 'heroImage', 'image', 'img') || '';

  const climate = normalizeClimate(get(raw, 'climate', 'climate_tag', 'climateTag'));
  const costOfLiving = normalizeCost(get(raw, 'cost_of_living', 'costOfLiving', 'cost', 'cost_index'));
  const healthcareQuality = normalizeHealthcare(get(raw, 'healthcare', 'healthcare_quality', 'healthcareQuality'));
  const visaEase = normalizeVisa(get(raw, 'visa_ease', 'visaEase', 'visa', 'visa_difficulty'));
  const englishPrevalence = normalizeEnglish(get(raw, 'english', 'english_prevalence', 'englishPrevalence'));

  const needsFilters = !climate || !costOfLiving || !healthcareQuality || !visaEase || !englishPrevalence;

  return {
    slug,
    display_name: name,
    country,
    region,
    status,
    featured,
    tagline,
    hero_image: heroImage,
    filters: {
      climate: climate || 'NEEDS_REVIEW',
      cost_of_living: costOfLiving || 'NEEDS_REVIEW',
      healthcare_quality: healthcareQuality || 'NEEDS_REVIEW',
      visa_ease: visaEase || 'NEEDS_REVIEW',
      english_prevalence: englishPrevalence || 'NEEDS_REVIEW',
    },
    seo: {
      meta_title: `Retire in ${name}, ${country} | RetireVibes`,
      meta_description: tagline || `Everything you need to know about retiring in ${name}.`,
      canonical_url: `/destinations/${slug}/`,
      noindex: status === 'coming-soon',
    },
    real_estate: {
      has_page: false,
      seo: {
        meta_title: `${name} Real Estate for American Retirees — Rent & Buy Guide | RetireVibes`,
        meta_description: `Explore ${name}'s neighborhoods, rent and purchase price ranges, and what American retirees need to know before moving.`,
        canonical_url: `/destinations/${slug}/real-estate/`,
        noindex: true,
      },
    },
    content_status: {
      detail_page_ready: status === 'active',
      real_estate_page_ready: false,
      _needs_tagline: !tagline,
      _needs_hero_image: !heroImage,
      _needs_filters: needsFilters,
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// PARSE destinations-data.js — 5 strategies
// ─────────────────────────────────────────────────────────────────────────────

function parseDestinationsFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  let result = null;

  // Strategy 1: module.exports
  console.log('Trying strategy 1: module.exports...');
  try {
    const mod = { exports: {} };
    vm.runInNewContext(source, { module: mod, exports: mod.exports, console });
    const val = mod.exports;
    if (Array.isArray(val) && val.length > 0) { result = val; console.log('✓ Strategy 1 succeeded.'); }
    else if (val && typeof val === 'object') {
      const arr = Object.values(val).find(v => Array.isArray(v) && v.length > 5);
      if (arr) { result = arr; console.log('✓ Strategy 1 (object) succeeded.'); }
    }
  } catch (e) { console.log(`  Strategy 1 failed: ${e.message}`); }

  // Strategy 2: window.X / globalThis.X
  if (!result) {
    console.log('Trying strategy 2: window/globalThis assignment...');
    try {
      const fakeGlobal = {};
      vm.runInNewContext(source, { window: fakeGlobal, globalThis: fakeGlobal, console });
      const arr = Object.values(fakeGlobal).find(v => Array.isArray(v) && v.length > 5);
      if (arr) { result = arr; console.log('✓ Strategy 2 succeeded.'); }
    } catch (e) { console.log(`  Strategy 2 failed: ${e.message}`); }
  }

  // Strategy 3: var/let/const X = [...]
  if (!result) {
    console.log('Trying strategy 3: variable declaration...');
    try {
      const match = source.match(/(?:var|let|const)\s+([A-Za-z_$][A-Za-z0-9_$]*)\s*=/);
      if (match) {
        const varName = match[1];
        const wrapped = `(function(){ ${source}; return typeof ${varName} !== 'undefined' ? ${varName} : undefined; })()`;
        const val = vm.runInNewContext(wrapped, { console });
        if (Array.isArray(val) && val.length > 0) { result = val; console.log(`✓ Strategy 3 succeeded (var: ${varName}).`); }
      }
    } catch (e) { console.log(`  Strategy 3 failed: ${e.message}`); }
  }

  // Strategy 4: ESM export default
  if (!result) {
    console.log('Trying strategy 4: ESM export default...');
    try {
      const mod = { exports: {} };
      const stripped = source.replace(/export\s+default\s+/, 'module.exports = ').replace(/^export\s+/gm, '');
      vm.runInNewContext(stripped, { module: mod, exports: mod.exports, console });
      if (Array.isArray(mod.exports) && mod.exports.length > 0) { result = mod.exports; console.log('✓ Strategy 4 succeeded.'); }
    } catch (e) { console.log(`  Strategy 4 failed: ${e.message}`); }
  }

  // Strategy 5: Regex — extract first large array literal
  if (!result) {
    console.log('Trying strategy 5: regex array extraction...');
    try {
      const start = source.indexOf('[{');
      if (start !== -1) {
        let depth = 0, i = start, inStr = false, strChar = '';
        for (; i < source.length; i++) {
          const c = source[i];
          if (inStr) { if (c === strChar && source[i - 1] !== '\\') inStr = false; continue; }
          if (c === '"' || c === "'" || c === '`') { inStr = true; strChar = c; continue; }
          if (c === '[' || c === '{') depth++;
          if (c === ']' || c === '}') { depth--; if (depth === 0) break; }
        }
        // Attempt JSON parse with light coercion
        const raw = source.slice(start, i + 1);
        try {
          result = JSON.parse(raw);
          if (Array.isArray(result) && result.length > 0) console.log('✓ Strategy 5 succeeded (JSON).');
          else result = null;
        } catch (_) {
          const coerced = raw.replace(/'/g, '"').replace(/,\s*([}\]])/g, '$1');
          result = JSON.parse(coerced);
          if (Array.isArray(result) && result.length > 0) console.log('✓ Strategy 5 succeeded (coerced).');
          else result = null;
        }
      }
    } catch (e) { console.log(`  Strategy 5 failed: ${e.message}`); }
  }

  if (!result) {
    console.error('\n❌ All parsing strategies failed. Manual options:\n');
    console.error('  Option A: Add to the TOP of destinations-data.js:');
    console.error('            module.exports = <yourVariableName>;');
    console.error('            Then re-run this script.\n');
    console.error('  Option B: In your browser console (quiz.html), run:');
    console.error('            copy(JSON.stringify(window.destinations || window.DESTINATIONS))');
    console.error('            Save the output as destinations-raw.json and repoint this script to it.\n');
    console.error('  Option C: Share destinations-data.js with your developer directly.');
    process.exit(1);
  }

  return result;
}

// ─────────────────────────────────────────────────────────────────────────────
// WRITE CSV
// ─────────────────────────────────────────────────────────────────────────────

function toCSV(destinations) {
  const headers = ['slug','display_name','country','region','status','featured',
    'NEEDS_TAGLINE','NEEDS_HERO_IMAGE','NEEDS_SEO_DESCRIPTION','NEEDS_FILTERS'];
  const rows = destinations.map(d => [
    d.slug, d.display_name, d.country, d.region, d.status, d.featured ? 'YES' : 'NO',
    d.content_status._needs_tagline ? 'YES' : '',
    d.content_status._needs_hero_image ? 'YES' : '',
    (!d.seo.meta_description || d.seo.meta_description.startsWith('Everything you need')) ? 'YES' : '',
    d.content_status._needs_filters ? 'YES' : '',
  ].map(v => `"${String(v ?? '').replace(/"/g, '""')}"`).join(','));
  return [headers.join(','), ...rows].join('\n');
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────────────────────

const inputFile = process.argv[2] || path.join(__dirname, 'destinations-data.js');
const outputJson = path.join(__dirname, 'destinations.json');
const outputCsv  = path.join(__dirname, 'destinations-audit.csv');

console.log(`\nRetireVibes destinations converter`);
console.log(`Reading: ${inputFile}\n`);

if (!fs.existsSync(inputFile)) {
  console.error(`❌ File not found: ${inputFile}`);
  console.error(`   Place destinations-data.js in the same folder as this script, or pass the path as an argument.`);
  process.exit(1);
}

const raw = parseDestinationsFile(inputFile);
console.log(`\nFound ${raw.length} raw destinations.\n`);

// Map + deduplicate
const seen = new Set();
const destinations = [];
let dupes = 0;
for (const item of raw) {
  const mapped = mapDestination(item);
  if (seen.has(mapped.slug)) {
    console.warn(`  ⚠ Duplicate slug skipped: "${mapped.slug}" (display_name: "${mapped.display_name}")`);
    dupes++;
  } else {
    seen.add(mapped.slug);
    destinations.push(mapped);
  }
}

// Write JSON (strip internal audit flags)
const jsonOutput = destinations.map(d => {
  const clean = { ...d, content_status: { ...d.content_status } };
  delete clean.content_status._needs_tagline;
  delete clean.content_status._needs_hero_image;
  delete clean.content_status._needs_filters;
  return clean;
});

fs.writeFileSync(outputJson, JSON.stringify({ destinations: jsonOutput }, null, 2), 'utf8');
fs.writeFileSync(outputCsv, toCSV(destinations), 'utf8');

// Summary
const needsTagline = destinations.filter(d => d.content_status._needs_tagline).length;
const needsImage   = destinations.filter(d => d.content_status._needs_hero_image).length;
const needsFilters = destinations.filter(d => d.content_status._needs_filters).length;
const comingSoon   = destinations.filter(d => d.status === 'coming-soon').length;
const active       = destinations.filter(d => d.status === 'active').length;

console.log('\n─────────────────────────────────────────');
console.log(`✅  destinations.json written (${destinations.length} destinations)`);
console.log(`✅  destinations-audit.csv written`);
console.log('─────────────────────────────────────────');
console.log(`  Active:         ${active}`);
console.log(`  Coming soon:    ${comingSoon}`);
console.log(`  Duplicates:     ${dupes}`);
console.log(`  Needs tagline:  ${needsTagline}`);
console.log(`  Needs image:    ${needsImage}`);
console.log(`  Needs filters:  ${needsFilters}`);
if (FEATURED_SLUGS.size === 0) {
  console.log('\n  ⚠ FEATURED_SLUGS is empty.');
  console.log('    After reviewing destinations.json, copy your 30 featured slugs');
  console.log('    into the FEATURED_SLUGS set at the top of this script and re-run.');
}
console.log('─────────────────────────────────────────\n');
