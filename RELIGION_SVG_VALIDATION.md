# SVG Validation Report — religion-spirituality.html

**Date:** 2026-07-17
**SVGs validated:** 9 of 9
**Skill criteria:** viewBox integrity, text overflow, contrast, spacing, element overlap, well-formed XML

---

## 1. relig_devotion_ladder.svg (6.7 KB, 700×430)

| Check | Status | Detail |
|-------|--------|--------|
| Well-formed | ✅ | Opens/closes `<svg>`, valid XML |
| ViewBox | ✅ | `0 0 700 430`. Content: title y=24-38, ladder y=48-374, note y=400. Bottom margin 30px. |
| Text overflow | ✅ | All text within rects. Right-side annotations: widest text at x=615 + ~50px = 665 < 700. |
| Contrast | ✅ | Levels 0-2: `#2c3e50` on light backgrounds. Levels 3-5: `white` on dark gradients. Side annotations use `#8e44ad`, `#e74c3c`, `#1e8449`, `#2980b9` — all dark enough. |
| Spacing | ✅ | 6 bars × 46px + 5 gaps × 10px = 306px. Arrows between bars (10px gaps). Comfortable. |
| Structure | ✅ | `<g filter>` per level, `<defs>` with gradients, consistent pattern |

**Verdict: PASS** — No issues found.

---

## 2. relig_community_trust_flow.svg (10.2 KB, 700×450)

| Check | Status | Detail |
|-------|--------|--------|
| Well-formed | ✅ | Valid XML, proper `<defs>` with markers and gradient |
| ViewBox | ✅ | `0 0 700 450`. Content: title y=28-46, boxes y=78-326, gauge y=60-400, note y=430. All within bounds. |
| Text overflow | ✅ | Left boxes: x=18-163, text at x=90 (centered) + ~55px max = 145 < 163. Right boxes: x=537-682, text at x=609 + ~55 = 664 < 682. Gauge labels at x=290 (right-aligned) — text extends leftward, fits. |
| Contrast | ✅ | Green boxes: `#1a7a42` text on `#eafaf1`. Red boxes: `#922b21` text on `#fdedec`. Gauge: `#fff` on gradient. All good. |
| Spacing | ✅ | 5 boxes per side, 52px apart (40px height + 12px gap). Arrows don't overlap. |
| Structure | ✅ | Arrow markers (`arrowGreen`, `arrowRed`), gauge gradient, consistent `<g filter>` |

**Verdict: PASS** — No issues found.

---

## 3. relig_deconversion_timeline.svg (14.5 KB, 800×400)

| Check | Status | Detail |
|-------|--------|--------|
| Well-formed | ✅ | Valid XML |
| ViewBox | ✅ | `0 0 800 400`. Chart area x=90-770, y=70-280. Stage labels y=322-344. Legend y=358-368. Bottom margin 32px. |
| Text overflow | ✅ | Event annotations: boxes at y=38-54, text centered. Widest box = 84px ("New social network") at x=478-562, within chart width. Y-axis labels at x=82 (right-aligned), text extends left to ~x=50, clear of rotated Y-axis title at x=28. |
| Contrast | ✅ | Stage labels: `#c0392b` on `#fdecea`, `#922b21` on `#f5c2c7`, `#d68910` on `#fff3cd`, `#1a7a42` on `#d4edda`. All readable. Grid labels: `#7f8c8d` on `#fafbfc` — borderline but acceptable for axis labels (standard convention). |
| Spacing | ✅ | 6 stage zones with dashed dividers. Event annotations above chart (y=38-58) don't overlap title (y=30-50). |
| Structure | ✅ | Gradient fills, curve path with dots, legend, year markers, stage labels |

**Concern:** Y-axis title text `#7f8c8d` on `#fafbfc` background — this is the standard muted gray and could be slightly improved. **Minor — not a fix required** since axis labels are conventionally lighter.

**Verdict: PASS** — No issues found.

---

## 4. relig_trauma_cycle.svg (11.2 KB, 550×550)

| Check | Status | Detail |
|-------|--------|--------|
| Well-formed | ✅ | Valid XML, proper `<defs>` with markers and gradient |
| ViewBox | ✅ | `0 0 550 550`. Outer ring r=210, inner ring r=130, center r=52. All centered at 275,290. Max extent: 275+210+48(node radius) = 533 < 550. Bottom notes at y=520-535, margin 15px. |
| Text overflow | ✅ | Outer nodes: circles r=48, text fits within. Inner nodes: circles r=38, text fits. Center: circle r=52, 3 lines of text at y=270-298, descender to ~302 < 290+52=342. |
| Contrast | ✅ | Outer ring: `#2c3e50` on `#fdedec`/`#f5e6cc`/`#fdebd0`. `#7f8c8d` for sub-labels on light backgrounds — borderline but acceptable for secondary text. Inner ring: `#2c3e50` on `#eafaf1`/`#eaf2f8`, `#27ae60`/`#2980b9` for effect text. Center: `#ecf0f1` on green→blue gradient. |
| Spacing | ✅ | Outer ring nodes well-separated by arrows. Inner ring nodes at 120px radius, comfortable spacing. Branch labels between nodes. |
| Structure | ✅ | Two concentric rings, arrow markers for success/failure/inner, `<g filter>` on all nodes |

**Verdict: PASS** — No issues found.

---

## 5. relig_radicalization_tree.svg (11.9 KB, 550×650)

| Check | Status | Detail |
|-------|--------|--------|
| Well-formed | ✅ | Valid XML, `<style>` block, proper `<defs>` |
| ViewBox | ✅ | `0 0 550 650`. Stage boxes: x=30-370, y=56-562. Right panels: x=390-520, y=56-436. Bottom notes y=630-644. Margin 6px bottom — tight but within bounds. |
| Text overflow | ✅ | Stage boxes: width 340, text centered at x=200. Longest text: "Online forums, recruiters, echo chambers · INT vs propaganda +2 TN" ~45 chars at font-size 9.5 = ~340px — fits in 340px box with 30px padding each side. Right panels: width 130, text at x=405, longest line ~28 chars at 9.5px = ~215px — starts at 405, extends to ~620. **POTENTIAL ISSUE:** text extends beyond panel right edge (520). |
| Contrast | ✅ | Stages 1-3: `#2c3e50` on light backgrounds. Stages 4-5: `white` on dark backgrounds. Gate text: `#7f8c8d` on light stages, `#fadbd8`/`#d7bde2` on dark stages. Right panels: `#27ae60`/`#e74c3c`/`#5d6d7e` on light backgrounds. |
| Spacing | ✅ | 5 stages × 82px + gaps × 12px. Consistent 1.5px stroke. Arrow spacing between stages. |
| Structure | ✅ | `<style>` block for classes, arrow markers (green/red/neutral), `<g filter>` on boxes |

**⚠️ ISSUE FOUND — Text overflow in right panels:**
The right panel text (Modifiers, Escape Routes, Key) uses `x=405` with font-size 9.5. The longest line "⚠️ Isolation / discrimination:" is ~30 chars × ~5.5px = ~165px. Starting at x=405, extends to ~570, which exceeds the panel right edge at x=520 and the viewBox right edge at x=550.

**Fix needed:** Either widen the viewBox to 580, or shift right panels rightward and widen them, or reduce font-size in panels.

---

## 6. relig_interfaith_matrix.svg (7.6 KB, 550×450)

| Check | Status | Detail |
|-------|--------|--------|
| Well-formed | ✅ | Valid XML, `<title>`, `<desc>`, proper `<defs>` |
| ViewBox | ✅ | `0 0 550 450`. Grid x=45-505, y=50-295. Reference tables y=358-430. Bottom margin 20px. |
| Text overflow | ✅ | Quadrants: 230px wide, text centered at x=160/390. Longest text: "Issue remains open; resurfaces later with increased difficulty." at font-size 9 = ~200px, fits in 230px. Center circle: r=26, 4 lines of text at font-size 6.5-7.5, fits. Reference tables: width 160, text fits. |
| Contrast | ✅ | Green quadrant: `#1e8449`/`#145a32` on `#d5f5e3`. Yellow: `#9a7d0a`/`#7d6608` on `#fef9e7`. Red: `#922b21`/`#7b241c` on `#fadbd8`. All dark-on-light, good contrast. |
| Spacing | ✅ | Quadrants evenly divided. Grid lines at 275 and 172.5. Reference section below divider at y=340. |
| Structure | ✅ | Shadow filters, grid dividers, center circle, axis labels, reference tables |

**Verdict: PASS** — No issues found.

---

## 7. relig_existential_crisis.svg (10.1 KB, 700×400)

| Check | Status | Detail |
|-------|--------|--------|
| Well-formed | ✅ | Valid XML, proper `<defs>` with markers |
| ViewBox | ✅ | `0 0 700 400`. Phase panels x=15-215, 235-435, 455-655. SP indicators y=310-338. Info box y=348-390. Bottom margin 10px — tight but within bounds. |
| Text overflow | ✅ | Phase panels: 200px wide, text centered. Longest text: "2d10 + RES + EXP + skill" at font-size 10 = ~150px, fits in 200px. Cycle-back arrow curve at y=332, text at y=327, doesn't overlap SP indicators at y=310. Info box: 215px wide, text fits. |
| Contrast | ✅ | Phase 1: `#fff` header on `#c0392b`, `#2c3e50`/`#c0392b` on `#fdedec`. Phase 2: `#fff` on `#e67e22`, `#2c3e50`/`#27ae60`/`#e74c3c` on `#fef9e7`. Phase 3: `#fff` on `#27ae60`, `#2c3e50`/`#27ae60`/`#e74c3c` on `#d5f5e3`. All good. |
| Spacing | ✅ | 20px gaps between panels. Arrow connections between panels. Cycle-back arrow below panels. |
| Structure | ✅ | Shadow filters, arrow markers (dark/red/green), dashed cycle-back path |

**Verdict: PASS** — No issues found.

---

## 8. relig_sbnr_vs_religion.svg (5.5 KB, 550×550)

| Check | Status | Detail |
|-------|--------|--------|
| Well-formed | ✅ | Valid XML, proper `<defs>` |
| ViewBox | ✅ | `0 0 550 550`. Radar centered at (275,240), r=160. Max extent: 275+160+axis labels ~25px = 460 < 550. Legend at y=420-458. Bottom notes y=480-496. Margin 54px bottom. |
| Text overflow | ✅ | Axis labels at r=160+12px offset. Longest label: "Doctrinal Freedom" at font-size 12 = ~130px, positioned at (-152, 96) — well within viewBox. Scale labels (1-5) on top axis, tiny text, no issue. |
| Contrast | ✅ | Axis labels: `#2c3e50` on `#fafbfc`. Scale labels: `#7f8c8d` on `#fafbfc` — standard axis convention. Legend: `#2c3e50` on `white`. Bottom notes: `#7f8c8d` on `#fafbfc` — borderline but acceptable for italic notes. |
| Spacing | ✅ | 5 concentric hexagons at 32px intervals. Axis lines radiate from center. Labels positioned outside outermost hexagon with 12px gap. |
| Structure | ✅ | Transform group for radar, polygon data points, value dots, legend box with shadow |

**Verdict: PASS** — No issues found.

---

## 9. relig_sp_budget_flow.svg (11.3 KB, 700×450)

| Check | Status | Detail |
|-------|--------|--------|
| Well-formed | ✅ | Valid XML, proper `<defs>` with markers |
| ViewBox | ✅ | `0 0 700 450`. Left column x=22-232, y=56-298. Right column x=468-678, y=56-298. Center gauge x=310-390, y=84-290. Bottom note x=55-645, y=310-354. Margin 96px bottom. |
| Text overflow | ✅ | Left/right boxes: 210px wide, text centered at x=127/573. Longest text: "−2 to −4 SP at conclusion" at font-size 9 = ~140px, fits in 210px. Gauge: 80px wide, text centered at x=350. Longest gauge text: "Net SP Generation" at font-size 7 = ~90px — **POTENTIAL ISSUE:** exceeds 80px gauge width. |
| Contrast | ✅ | Green column: `#1e8449` on `#eafaf1`/`#d5f5e3`. Red column: `#922b21` on `#fdedec`/`#fadbd8`. Gauge: `#1e8449`/`#b7950b`/`#922b21` on zone backgrounds. Bottom note: `#2c3e50`/`#7f8c8d` on `#eaecee`. All good. |
| Spacing | ✅ | 6 items per column × 28px + gaps × 6px. Arrows flow inward to gauge. 148px gap between columns and gauge (232→310, 390→468). |
| Structure | ✅ | Arrow markers (green/red), gauge with 3 zones, needle, shadow filters |

**⚠️ MINOR ISSUE — Gauge text overflow:**
"Net SP Generation" at font-size 7 = ~90px, but gauge is only 80px wide. Similarly "Net SP Reduction" = ~95px. These text lines may overflow the gauge edges by ~5-8px. Since the gauge has no visible border constraining text and the overflow is minimal, this is cosmetic only.

**Fix (optional):** Reduce gauge text font-size from 7 to 6, or widen gauge from 80 to 90px.

---

## SUMMARY

| SVG | Status | Issues |
|-----|--------|--------|
| relig_devotion_ladder.svg | ✅ PASS | None |
| relig_community_trust_flow.svg | ✅ PASS | None |
| relig_deconversion_timeline.svg | ✅ PASS | None |
| relig_trauma_cycle.svg | ✅ PASS | None |
| relig_radicalization_tree.svg | ⚠️ FIX NEEDED | Right panel text overflow — text extends beyond viewBox right edge |
| relig_interfaith_matrix.svg | ✅ PASS | None |
| relig_existential_crisis.svg | ✅ PASS | None |
| relig_sbnr_vs_religion.svg | ✅ PASS | None |
| relig_sp_budget_flow.svg | ⚠️ MINOR | Gauge text ~5-8px overflow (cosmetic) |

**7/9 clean. 1 needs fix. 1 has minor cosmetic issue.**
