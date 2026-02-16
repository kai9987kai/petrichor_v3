# Petrichor Lab v3 — Bio-Atmospheric Synthesis Engine

**Petrichor Lab v3** is a stylized, modular *control-surface* concept for building rain/atmosphere “scenes” — an interface spec that reads like a sci-fi synth panel for **environment + weather + psychoacoustics + generative ambience**. ([GitHub][1])

The repo currently ships as a small web bundle (`index.html`, `style.css`, `js/`) intended to run in a browser. ([GitHub][1])

---

## What it is

The `index.html` defines the module layout and parameter vocabulary for the “lab” UI:

* **ENVIRONMENT (MOD-01)**: Location, Season, Cosmos, *Precipitation*, *Drop Weight*, *Surface Material* (Concrete / Wet Soil / Corrugated Metal / Dense Foliage). ([GitHub][2])
* **ATMOSPHERE (MOD-02 / MOD-41)**: Wind Speed, Thunder Probability, Urban Hum, Barometric Pressure, Auto-Weather toggle. ([GitHub][2])
* **CELESTIAL (MOD-09)**: Chime Density, Aurora Glow, Aurora Speed. ([GitHub][2])
* **GEOLOGY / TECTONICS / GEOMAGNETISM / SOLAR / VOLCANO**: Seismic activity, crustal stress, magnetic flux, solar intensity/flare frequency, vent intensity, etc. ([GitHub][2])
* **BIOLUME (MOD-44)**: Glow intensity + pulse rate (bioluminescent aesthetic layer). ([GitHub][2])
* **WELLNESS (MOD-07 / MOD-10)**: Breath guide, hearth toggle, a *Focus* timer (25:00) for work sessions. ([GitHub][2])
* **NEURAL LINK (MOD-03)**: Binaural mix + band selection (ALPHA / THETA / DELTA). ([GitHub][2])
* **SIGNAL / FX / TAPE**:

  * *ECHO (MOD-18)* input + cave verb + delay
  * *CASSETTE (MOD-24)* hiss/crackle/wobble + transport
  * *LABORATORY (MOD-25)* synth engine parameters (cutoff/resonance/waveform/detune)
  * *REACTOR (MOD-29)* drive/crush/meltdown
  * *SINGULARITY (MOD-30)* freeze/void/shimmer ([GitHub][2])
* **VISUAL/POST (MOD-12 / MOD-19 / MOD-22)**: lens presets (VHS/CINE/DREAM), color grade + intensity, kaleidoscope symmetry. ([GitHub][2])
* **META SYSTEMS**:

  * *THE ARCHIVE (MOD-34)* mood banks (DEFAULT / DEEP SPACE / URBAN / RAIN / ETHEREAL / DRONE / RADIO / STATIC)
  * *OBSERVATORY (MOD-27)* macro routing placeholders (Mercury/Venus/Mars assignments)
  * *CARTOGRAPHER (MOD-31)* category toggles (Nature/Wind/Synth/Cloud)
  * *ORACLE SNAPSHOT* state capture (“ARCHIVE READY_”) ([GitHub][2])
* **MONITORING / I/O**: “Spectrum”, “Scope”, “Geosmin Levels”, “Record Audio”, “Reset Audio Engine”, Master Gain. ([GitHub][2])

---

## Repository layout

* `index.html` — the Petrichor Lab v3 panel/spec (current core artifact). ([GitHub][1])
* `style.css` — stylesheet (currently empty in the main branch snapshot). ([GitHub][1])
* `js/` — JavaScript folder (engine/UI logic lives here). ([GitHub][1])

---

## Run it locally

### Option A — quick open

1. Download/clone the repo
2. Open `index.html` in a browser

### Option B — recommended (local server)

Some browser features (module imports, audio worklets, mic capture, etc.) typically require `http://` rather than `file://`.

```bash
# from the repo root
python -m http.server 8000
```

Then open:

* `http://localhost:8000/`

---

## How to use (intended flow)

1. **ZENITH INITIALIZE** → bring the system online (“SYSTEM OFFLINE” indicates an initial state). ([GitHub][2])
2. Shape the scene via:

   * **ENVIRONMENT** (surface + precipitation physics)
   * **ATMOSPHERE** (wind/thunder/pressure)
   * **CELESTIAL** (aurora + chime layer)
3. Add psychoacoustic layers:

   * **NEURAL LINK** (binaural band blend)
   * **ECHO / CASSETTE** (space + degradation)
4. Capture and iterate:

   * **THE ORACLE SNAPSHOT**
   * **PRESETS (MEM-01)** / **THE ARCHIVE mood banks** ([GitHub][2])

---

## Roadmap ideas (if you want to push v3 further)

* Implement a parameter graph (modules → engine nodes) with **automation lanes** (LFO/Pulsar driving weather, tape wobble, shimmer).
* Add a real “Geosmin” proxy meter (e.g., computed from precipitation * surface * humidity * wind).
* “Writer Mode”: convert typed text into evolving ambience cues (token → modulation matrix). ([GitHub][2])

---

## License

MIT License. ([GitHub][1])

[1]: https://github.com/kai9987kai/petrichor_v3 "GitHub - kai9987kai/petrichor_v3"
[2]: https://raw.githubusercontent.com/kai9987kai/petrichor_v3/main/index.html "Petrichor Lab v3 – Bio-Atmospheric Synth"
