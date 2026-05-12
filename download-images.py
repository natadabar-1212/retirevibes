#!/usr/bin/env python3
"""
RetireVibes — High-Resolution Image Downloader
================================================
Downloads a high-quality hero photo for every destination in destinations-data.js
and saves it to the images/ folder at the correct filename.

Requirements:
  pip3 install requests

Usage:
  python3 download-images.py YOUR_PEXELS_API_KEY

Get a free Pexels API key (200 req/hour, unlimited downloads) at:
  https://www.pexels.com/api/

Options:
  --force      Re-download even if the file already exists
  --dry-run    Print what would be downloaded without downloading anything
  --only ID    Only download the destination with this ID (e.g. --only porto)

Examples:
  python3 download-images.py abc123xyz
  python3 download-images.py abc123xyz --force
  python3 download-images.py abc123xyz --only bali --only queenstown-nz
"""

import sys
import os
import time
import json
import argparse

try:
    import requests
except ImportError:
    print("ERROR: 'requests' library not found. Run: pip3 install requests")
    sys.exit(1)

# ── Destination → (filename, pexels search query) ────────────────────────────
# Filename matches the path used in destinations-data.js.
# Query is tuned so Pexels returns a great landscape/cityscape hero shot.

DESTINATIONS = [
    # ── United States ──────────────────────────────────────────────────────────
    ("asheville.jpg",           "asheville north carolina mountains"),
    ("sarasota.jpg",            "sarasota florida gulf coast beach"),
    ("santa-fe.jpg",            "santa fe new mexico adobe architecture"),
    ("bend.jpg",                "bend oregon cascade mountains"),
    ("greenville.jpg",          "greenville south carolina downtown"),
    ("sedona.jpg",              "sedona arizona red rocks landscape"),
    ("st-augustine.jpg",        "saint augustine florida historic waterfront"),
    ("naples.jpg",              "naples florida gulf beach sunset"),
    ("boise.jpg",               "boise idaho river foothills"),
    ("fort-collins.jpg",        "fort collins colorado mountains"),
    ("scottsdale.jpg",          "scottsdale arizona desert saguaro"),
    ("burlington.jpg",          "burlington vermont lake champlain"),
    ("fredericksburg.jpg",      "fredericksburg texas hill country wildflowers"),
    ("chattanooga.jpg",         "chattanooga tennessee river lookout mountain"),
    ("tucson.jpg",              "tucson arizona saguaro desert landscape"),
    ("palm-springs.jpg",        "palm springs california desert mountains"),
    ("prescott.jpg",            "prescott arizona mountains forest"),
    ("wilmington.jpg",          "wilmington north carolina riverfront"),
    ("st-george.jpg",           "saint george utah red rock canyon"),
    ("charleston.jpg",          "charleston south carolina historic harbor"),

    # ── Canada ─────────────────────────────────────────────────────────────────
    ("victoria.jpg",            "victoria british columbia harbor gardens"),
    ("vancouver.jpg",           "vancouver canada mountains skyline"),
    ("kelowna.jpg",             "kelowna okanagan lake vineyard"),
    ("quebec-city.jpg",         "quebec city canada old town fortification"),
    ("ottawa.jpg",              "ottawa canada parliament buildings"),
    ("halifax.jpg",             "halifax nova scotia waterfront harbor"),
    ("canmore.jpg",             "canmore alberta rocky mountains"),
    ("charlottetown.jpg",       "charlottetown prince edward island pastoral"),
    ("niagara-on-the-lake.jpg", "niagara on the lake ontario wine country"),
    ("nanaimo.jpg",             "nanaimo vancouver island harbor"),

    # ── Caribbean ──────────────────────────────────────────────────────────────
    ("puerto-rico.jpg",         "old san juan puerto rico colorful"),
    ("roatan.jpg",              "roatan honduras tropical beach reef"),
    ("ambergris-caye.jpg",      "ambergris caye belize turquoise water"),
    ("las-terrenas.jpg",        "las terrenas dominican republic beach palm"),
    ("barbados.jpg",            "barbados caribbean beach coral"),
    ("st-croix.jpg",            "saint croix us virgin islands tropical"),
    ("turks-caicos.jpg",        "turks and caicos turquoise beach"),
    ("grenada.jpg",             "grenada caribbean spice island beach"),
    ("saint-kitts.jpg",         "saint kitts nevis island volcano"),
    ("cayman-islands.jpg",      "cayman islands grand cayman beach crystal"),
    ("saint-lucia.jpg",         "saint lucia pitons tropical landscape"),
    ("antigua.jpg",             "antigua caribbean sailboats harbor"),

    # ── Mexico ─────────────────────────────────────────────────────────────────
    ("merida.jpg",              "merida mexico colonial city architecture"),
    ("oaxaca.jpg",              "oaxaca mexico colonial architecture church"),
    ("san-miguel-de-allende.jpg", "san miguel de allende mexico colorful street"),
    ("puerto-vallarta.jpg",     "puerto vallarta mexico malecon bay"),
    ("playa-del-carmen.jpg",    "playa del carmen mexico riviera maya beach"),
    ("ajijic.jpg",              "ajijic lake chapala mexico colonial"),
    ("los-cabos.jpg",           "los cabos mexico arch rock ocean"),
    ("mazatlán.jpg",            "mazatlan mexico malecon pacific coast"),
    ("guadalajara.jpg",         "guadalajara mexico historic center cathedral"),

    # ── Latin America ──────────────────────────────────────────────────────────
    ("cartagena.jpg",           "cartagena colombia walled colonial city"),
    ("medellin.jpg",            "medellin colombia panoramic city hills"),
    ("cuenca.jpg",              "cuenca ecuador colonial domes river"),
    ("lake-atitlan.jpg",        "lake atitlan guatemala volcano"),
    ("panama-city.jpg",         "panama city skyline bay"),
    ("boquete.jpg",             "boquete panama cloud forest mountains coffee"),
    ("montevideo.jpg",          "montevideo uruguay rambla waterfront"),
    ("buenos-aires.jpg",        "buenos aires argentina city boulevard"),
    ("costa-rica.jpg",          "costa rica rainforest beach tropical"),

    # ── Portugal ───────────────────────────────────────────────────────────────
    ("porto.jpg",               "porto portugal ribeira waterfront"),
    ("lisbon.jpg",              "lisbon portugal tram alfama"),
    ("algarve.jpg",             "algarve portugal cliffs ocean beach"),
    ("funchal.jpg",             "funchal madeira portugal harbor flowers"),

    # ── Spain ──────────────────────────────────────────────────────────────────
    ("valencia.jpg",            "valencia spain city of arts sciences"),
    ("malaga.jpg",              "malaga spain city coast beach"),
    ("barcelona.jpg",           "barcelona spain sagrada familia architecture"),
    ("alicante.jpg",            "alicante spain harbor castle coast"),
    ("seville.jpg",             "seville spain plaza de espana"),
    ("granada.jpg",             "granada spain alhambra palace"),

    # ── Italy ──────────────────────────────────────────────────────────────────
    ("florence.jpg",            "florence italy duomo rooftop aerial"),
    ("puglia.jpg",              "puglia italy trulli alberobello"),
    ("sicily.jpg",              "sicily italy sea cliffs ancient"),
    ("abruzzo.jpg",             "abruzzo italy mountains medieval village"),

    # ── Greece ─────────────────────────────────────────────────────────────────
    ("athens.jpg",              "athens greece acropolis parthenon"),
    ("crete.jpg",               "crete greece beach sea cliff"),

    # ── Balkans ────────────────────────────────────────────────────────────────
    ("split.jpg",               "split croatia old town harbor"),
    ("kotor.jpg",               "kotor bay montenegro walled city"),
    ("ljubljana.jpg",           "ljubljana slovenia castle river"),

    # ── France ─────────────────────────────────────────────────────────────────
    ("nice.jpg",                "nice france cote d'azur promenade"),
    ("bordeaux.jpg",            "bordeaux france city waterfront"),
    ("montpellier.jpg",         "montpellier france city place de la comedie"),

    # ── Central/Eastern Europe ─────────────────────────────────────────────────
    ("prague.jpg",              "prague czech republic old town bridge"),
    ("budapest.jpg",            "budapest hungary parliament danube river"),
    ("krakow.jpg",              "krakow poland main square historic"),
    ("tbilisi.jpg",             "tbilisi georgia old town sulfur baths"),
    ("lugano.jpg",              "lugano switzerland lake mountains"),

    # ── Mediterranean Islands ──────────────────────────────────────────────────
    ("paphos.jpg",              "paphos cyprus sea coast"),
    ("valletta.jpg",            "valletta malta harbor grand"),

    # ── Southeast Asia ─────────────────────────────────────────────────────────
    ("chiang-mai.jpg",          "chiang mai thailand temple mountains"),
    ("hua-hin.jpg",             "hua hin thailand beach resort"),
    ("phuket.jpg",              "phuket thailand beach karst limestone"),
    ("kuala-lumpur.jpg",        "kuala lumpur malaysia petronas towers"),
    ("penang.jpg",              "penang malaysia street art heritage"),
    ("da-nang.jpg",             "da nang vietnam beach dragon bridge"),
    ("hoi-an.jpg",              "hoi an vietnam lanterns river"),
    ("taipei.jpg",              "taipei taiwan city night market mountains"),
    ("fukuoka.jpg",             "fukuoka japan city river cherry blossom"),
    ("cebu.jpg",                "cebu philippines island tropical"),
    ("galle.jpg",               "galle sri lanka fort colonial"),
    ("ho-chi-minh-city.jpg",    "ho chi minh city vietnam skyline"),
    ("bali.jpg",                "bali indonesia rice terrace temple sunset"),

    # ── Australia ──────────────────────────────────────────────────────────────
    ("gold-coast.jpg",          "gold coast australia skyline beach"),
    ("sunshine-coast.jpg",      "sunshine coast australia noosa beach"),
    ("byron-bay.jpg",           "byron bay australia lighthouse beach"),
    ("adelaide.jpg",            "adelaide australia city hills vineyard"),
    ("hobart.jpg",              "hobart tasmania australia harbor waterfront"),
    ("cairns.jpg",              "cairns australia tropical reef rainforest"),
    ("perth.jpg",               "perth australia city swan river"),
    ("melbourne.jpg",           "melbourne australia city laneways"),

    # ── New Zealand ────────────────────────────────────────────────────────────
    ("queenstown-nz.jpg",       "queenstown new zealand lake mountains"),
    ("wanaka.jpg",              "wanaka new zealand lake mountains lone tree"),
    ("tauranga.jpg",            "tauranga new zealand bay coast"),
    ("nelson-nz.jpg",           "nelson new zealand coast golden bay"),
    ("christchurch-nz.jpg",     "christchurch new zealand city garden"),

    # ── Africa ─────────────────────────────────────────────────────────────────
    ("marrakech.jpg",           "marrakech morocco medina architecture"),
    ("cape-town.jpg",           "cape town south africa table mountain"),
    ("accra.jpg",               "accra ghana africa city coast"),
]


def search_pexels(query, api_key, per_page=5):
    """Search Pexels and return photos list."""
    url = "https://api.pexels.com/v1/search"
    headers = {"Authorization": api_key}
    params = {
        "query": query,
        "per_page": per_page,
        "orientation": "landscape",
        "size": "large",
    }
    resp = requests.get(url, headers=headers, params=params, timeout=15)
    resp.raise_for_status()
    return resp.json().get("photos", [])


def best_photo_url(photo):
    """Return the best available download URL from a Pexels photo object."""
    src = photo.get("src", {})
    # Prefer 'large2x' (1880px wide), fall back to 'large' (1280px), then 'original'
    for size in ("large2x", "large", "original"):
        if src.get(size):
            return src[size]
    return None


def download_file(url, dest_path):
    """Stream-download a file to dest_path."""
    resp = requests.get(url, stream=True, timeout=60)
    resp.raise_for_status()
    with open(dest_path, "wb") as f:
        for chunk in resp.iter_content(chunk_size=65536):
            f.write(chunk)


def main():
    parser = argparse.ArgumentParser(description="Download high-res images for RetireVibes destinations")
    parser.add_argument("api_key", help="Your Pexels API key (free at pexels.com/api)")
    parser.add_argument("--force", action="store_true", help="Re-download even if file exists")
    parser.add_argument("--dry-run", action="store_true", help="Show what would be downloaded without downloading")
    parser.add_argument("--only", metavar="FILENAME", action="append", help="Only download this filename (can repeat)")
    args = parser.parse_args()

    script_dir = os.path.dirname(os.path.abspath(__file__))
    images_dir = os.path.join(script_dir, "images")
    os.makedirs(images_dir, exist_ok=True)

    targets = DESTINATIONS
    if args.only:
        only_set = set(args.only)
        targets = [(fn, q) for fn, q in DESTINATIONS if fn in only_set or fn.replace(".jpg", "") in only_set]
        if not targets:
            print(f"ERROR: No matching destinations for --only {args.only}")
            sys.exit(1)

    print(f"RetireVibes Image Downloader — {len(targets)} destinations\n")

    ok = 0
    skipped = 0
    failed = []

    for i, (filename, query) in enumerate(targets, 1):
        dest_path = os.path.join(images_dir, filename)
        prefix = f"[{i:>3}/{len(targets)}] {filename}"

        if os.path.exists(dest_path) and not args.force:
            print(f"{prefix}  — already exists, skipping")
            skipped += 1
            continue

        if args.dry_run:
            print(f"{prefix}  — would search: \"{query}\"")
            continue

        try:
            photos = search_pexels(query, args.api_key)
            if not photos:
                # Broaden search by dropping last word
                shorter = " ".join(query.split()[:-1])
                if shorter:
                    photos = search_pexels(shorter, args.api_key)

            if not photos:
                print(f"{prefix}  ✗  No results for \"{query}\"")
                failed.append((filename, query, "no results"))
                time.sleep(0.4)
                continue

            url = best_photo_url(photos[0])
            if not url:
                print(f"{prefix}  ✗  No download URL")
                failed.append((filename, query, "no url"))
                continue

            download_file(url, dest_path)
            size_kb = os.path.getsize(dest_path) // 1024
            print(f"{prefix}  ✓  {size_kb} KB")
            ok += 1

        except requests.exceptions.HTTPError as e:
            if e.response is not None and e.response.status_code == 429:
                print(f"\nRate limited. Waiting 60s…")
                time.sleep(60)
                i -= 1  # retry
                continue
            print(f"{prefix}  ✗  HTTP error: {e}")
            failed.append((filename, query, str(e)))

        except Exception as e:
            print(f"{prefix}  ✗  {e}")
            failed.append((filename, query, str(e)))

        # Pexels free tier: 200 requests/hour → ~0.4s between calls is safe
        time.sleep(0.4)

    # ── Summary ──────────────────────────────────────────────────────────────
    print(f"\n{'─'*50}")
    print(f"Done.  ✓ {ok} downloaded   — {skipped} skipped   ✗ {len(failed)} failed")

    if failed:
        print("\nFailed downloads (re-run with --only to retry individually):")
        for fn, q, reason in failed:
            print(f"  {fn}  ({reason})")
        print(f"\nExample retry:")
        print(f"  python3 download-images.py YOUR_KEY --only {failed[0][0].replace('.jpg', '')} --force")


if __name__ == "__main__":
    main()
