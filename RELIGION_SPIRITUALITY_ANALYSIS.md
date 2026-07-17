# Religion & Spirituality — Visual Asset Analysis

**File:** `religion-spirituality.html` (~48KB, 8 sections, 20 subsections, 14 tables, 6 callouts)
**Prefix for new assets:** `relig_*` (or `rs_*` if reusing relationship prefix — recommend `relig_*` for clarity)
**Existing religion-specific assets:** NONE. Zero `relig_*` files exist in `img/`.
**Character portraits available:** All 29 `char_*.png` portraits. Narrative examples use **Amara** (char_amara.png ✓), **Marcus** (char_marcus.png ✓), **Sarah** (char_sarah.png ✓), **James** (char_james.png ✓), **David** (char_david.png ✓). New characters introduced: **Layla** (no portrait), **Elena** (no portrait).

---

## FILE STRUCTURE OVERVIEW

| # | Section | Tables | Callouts | Examples | Key Mechanics |
|---|---------|--------|----------|----------|---------------|
| 0 | Intro + Warning | 0 | 1 (warning) | 0 | compare-grid |
| 1 | Detailed Religious Practice | 3 (Devotion, Daily Prayer, Fasting) | 2 (tip) | 1 (Amara/Ramadan) | Devotion Levels, SP effects |
| 2 | Religious Community Dynamics | 3 (Trust, Leadership, Tithing) | 1 (rule) | 1 (Marcus/Committee) | Community Trust, leadership roles |
| 3 | Deconversion & Loss of Faith | 3 (Stages, Family Reaction) | 1 (rule) | 1 (Sarah's Journey) | Deconversion stages, SP cascade |
| 4 | Religious Trauma | 2 (Types, Healing) | 1 (rule) | 1 (James/Recovery) | Trauma tags, healing activities |
| 5 | Interfaith Relationships | 1 (Negotiation) | 1 (rule) | 1 (Layla+David) | Negotiation framework |
| 6 | Religious Extremism | 1 (Stages) | 1 (rule) | 0 | Radicalization stages |
| 7 | SBNR | 2 (Practices, Meditation Skill) | 1 (tip) | 0 | Meditation skill, practice matrix |
| 8 | Existential Crisis | 2 (Triggers, Paths) | 1 (rule) | 1 (Elena/Loss) | Crisis phases, resolution paths |
| X | Cross-Cutting + Quick Ref | 2 (Faith Identity, SP Summary) | 1 (tip) | 0 | Faith Identity Score |

**Totals:** 14 tables, 10 callouts, 6 narrative examples, 1 compare-grid.

---

## 🔴 PHASE 1: Zero-Effort CSS Activations

### 1.1 — Devotion Levels table → `.tn-ladder` or `.condition-track`
**Location:** Section 1, "Devotion Levels"
**What:** 6-row table (Level 0–5: None → Full-Time) with Time/Week, Monthly Cost, SP Benefit, Community Bonus, Social Visibility columns.
**Why:** This is the CORE mechanic of the page — the devotion ladder is the player's primary reference. A visual ladder makes it instantly scannable.
**CSS class:** `.tn-ladder` (ladder-style progression) OR `.condition-track` (if styled as a health-like track).
**Effort:** Pure CSS class swap on existing `<table>`. Zero new assets.
**Priority:** HIGHEST — this table will be referenced constantly during play.

### 1.2 — Community Trust table → `.condition-track`
**Location:** Section 2, "Community Trust Resource"
**What:** 6-row table mapping Trust Levels 0–10 (Outsider → Pillar) with How to Gain, Benefits, Social Effect.
**Why:** Community Trust is a trackable resource (0–10) that functions like a condition track. Visualizing it as a progress bar makes the resource feel tangible.
**CSS class:** `.condition-track` (progressive resource track with level markers).
**Effort:** Pure CSS class swap.
**Priority:** HIGH — second most important trackable resource on the page.

### 1.3 — Deconversion Stages table → `.condition-track`
**Location:** Section 3, "The Deconversion Process"
**What:** 6-stage table (Doubt → Integration) with Duration, Description, SP Effect, Mechanical Effect.
**Why:** Deconversion is a linear progression with escalating stress — a perfect fit for a condition track showing the trajectory from doubt through reconstruction.
**CSS class:** `.condition-track` (showing progression through stages with SP accumulation visible).
**Effort:** Pure CSS class swap.
**Priority:** HIGH — this is the dramatic arc of one of the page's most intense sections.

### 1.4 — Meditation Skill table → `.tn-ladder`
**Location:** Section 7, "The Meditation Skill"
**What:** 6-level table (Novice → Master) with Practice, RES Bonus, SP Bonus, Special Ability.
**Why:** Identical pattern to Devotion Levels — a skill progression ladder. Visual consistency with the Devotion ladder reinforces the parallel between religious devotion and secular spiritual practice.
**CSS class:** `.tn-ladder`.
**Effort:** Pure CSS class swap.
**Priority:** HIGH — SBNR section is a major destination for players.

### 1.5 — Radicalization Stages table → `.condition-track`
**Location:** Section 6, "Radicalization Mechanics"
**What:** 5-stage table (Grievance → Burnout/Departure) with Trigger, Time, Mechanical Effect, Escape Difficulty.
**Why:** Shows the dangerous progression into extremism. A condition track makes the escalation feel real and the "Escape Difficulty" column visible as rising stakes.
**CSS class:** `.condition-track` (darkening or intensifying as stages progress).
**Effort:** Pure CSS class swap.
**Priority:** HIGH — critical for GMs running extremism arcs.

### 1.6 — Faith Identity Score table → `.tn-ladder`
**Location:** Cross-Cutting Mechanics, "The Faith Identity Score"
**What:** 7-level table (0–10) mapping identity centrality to SP impact multiplier.
**Why:** This is a character sheet stat — should be as visually referenceable as any other score. A ladder format makes the multiplier effect clear.
**CSS class:** `.tn-ladder`.
**Effort:** Pure CSS class swap.
**Priority:** MEDIUM — reference table, less frequently consulted during play.

### 1.7 — Daily Prayer table → `.card-grid`
**Location:** Section 1, "Daily Prayer & Meditation Routines"
**What:** 5-row table (Islam, Christianity, Judaism, Buddhism, Hinduism) with Daily Practice, Duration, SP Effect, RES Check Bonus.
**Why:** Five parallel traditions — perfect for card layout. Each tradition becomes a card showing its daily practice profile at a glance.
**CSS class:** `.card-grid`.
**Effort:** Pure CSS class swap.
**Priority:** MEDIUM — good for quick comparison across traditions.

### 1.8 — SBNR Practices table → `.card-grid`
**Location:** Section 7, "SBNR Practices & Their Mechanics"
**What:** 8-row table (Meditation, Nature, Yoga, Journaling, Astrology, Tarot, Crystals, Retreats) with Time, Cost, SP Effect, Benefits, Evidence Base.
**Why:** Eight practice options — ideal card grid. The "Evidence Base" column (Strong/Moderate/None) could be color-coded or emoji-tagged in card format.
**CSS class:** `.card-grid`.
**Effort:** Pure CSS class swap.
**Priority:** MEDIUM — SBNR is a major section but the table is dense.

### 1.9 — Existential Crisis Triggers table → `.card-grid`
**Location:** Section 8, "Triggers for Existential Crisis"
**What:** 7-row table (Death, Terminal Dx, Midlife, Failure, Suffering, Beauty, Philosophy) with Severity, SP Impact, Duration.
**Why:** Seven distinct trigger types — good card candidates. Severity column could use color coding (Very High = red, Low = green).
**CSS class:** `.card-grid`.
**Effort:** Pure CSS class swap.
**Priority:** LOW-MEDIUM — reference table, not a core mechanic.

### 1.10 — Fasting Observances table → `.card-grid`
**Location:** Section 1, "Fasting Observances"
**What:** 6-row table (Ramadan, Lent, Yom Kippur, Ashura, Ekadashi, Uposatha) with Tradition, Duration, Physical/Spiritual/SP effects.
**Why:** Six fasting practices across traditions — card grid lets players scan for their character's tradition.
**CSS class:** `.card-grid`.
**Effort:** Pure CSS class swap.
**Priority:** LOW-MEDIUM — useful but not a primary mechanic.

### 1.11 — Leadership Roles table → `.card-grid`
**Location:** Section 2, "Leadership Roles"
**What:** 6-row table (Deacon, Imam, Rabbi, Priest, Monk, Ustaz) with Tradition, Time Commitment, Responsibilities, Mechanical Effect.
**Why:** Six leadership roles across traditions — each card shows the cost/benefit of taking on that role.
**CSS class:** `.card-grid`.
**Effort:** Pure CSS class swap.
**Priority:** LOW-MEDIUM — reference for GMs building NPC leaders.

### 1.12 — Religious Trauma Types table → `.card-grid`
**Location:** Section 4, "Types of Religious Trauma"
**What:** 5-row table (Fear-based, Shame-based, Emotional manipulation, Physical/sexual abuse, Doctrinal) with Description, Common in, SP Impact, Long-term Effect.
**Why:** Five trauma types — card format makes each type's trigger and long-term effect scannable.
**CSS class:** `.card-grid`.
**Effort:** Pure CSS class swap.
**Priority:** MEDIUM — trauma mechanics are core to Section 4.

### 1.13 — Healing Activities table → `.card-grid`
**Location:** Section 4, "Healing from Religious Trauma"
**What:** 5-row table (Therapy, Support groups, Retreats, Journaling, SBNR) with Time, Cost, SP Reduction, Effect.
**Why:** Five healing options — card grid lets players compare cost vs. benefit of each approach.
**CSS class:** `.card-grid`.
**Effort:** Pure CSS class swap.
**Priority:** MEDIUM — pairs with trauma types.

### 1.14 — Interfaith Issues table → `.card-grid`
**Location:** Section 5, "The Interfaith Negotiation Framework"
**What:** 6-row table (Holidays, Children, Family approval, Dietary, Death rites, Daily practice) with Difficulty, SP Impact, Resolution Cost.
**Why:** Six negotiation issues — card format makes difficulty and resolution cost visible per issue.
**CSS class:** `.card-grid`.
**Effort:** Pure CSS class swap.
**Priority:** MEDIUM — interfaith section is a major destination.

### 1.15 — Paths Out of Crisis table → `.card-grid`
**Location:** Section 8, "Paths Out of Crisis"
**What:** 6-row table (Deepening faith, SBNR, Philosophical, Service, Creative, Unresolved) with Description, Requirements, Outcome.
**Why:** Six resolution paths — card format helps GMs present options to players navigating a crisis arc.
**CSS class:** `.card-grid`.
**Effort:** Pure CSS class swap.
**Priority:** LOW-MEDIUM — reference table.

### 1.16 — Quick Reference SP Summary table → `.card-grid`
**Location:** Bottom of page, "Quick Reference: Religious Practice SP Summary"
**What:** 10-row summary table (Weekly worship, Daily prayer, Study, Volunteering, Holidays, Fasting, Tithing, Meditation, Nature, Yoga) with Frequency, SP Effect, Time/Money Cost.
**Why:** This is the CHEAT SHEET for the entire page — the most referenced table during play. Card grid makes it instantly scannable.
**CSS class:** `.card-grid`.
**Effort:** Pure CSS class swap.
**Priority:** HIGH — this is the go-to reference during sessions.

### 1.17 — Family Reaction table → `.tn-ladder`
**Location:** Section 3, Family Reaction Table (roll 2d10)
**What:** 6-row d100 table (Cut-off → Supportive) with Effect descriptions.
**Why:** This is a lookup table — ladder format makes the roll ranges and outcomes instantly readable.
**CSS class:** `.tn-ladder`.
**Effort:** Pure CSS class swap.
**Priority:** MEDIUM — consulted when deconversion scenes trigger.

### 1.18 — Deconversion Stress Event callout → existing `.callout rule` (already applied)
**Location:** Section 3, already has `callout rule` class.
**Status:** Already correct. No change needed.

### 1.19 — compare-grid (Intro section)
**Location:** Introduction, Fantasy vs Reality comparison.
**Status:** Already has `compare-grid` class. No change needed.

### 1.20 — Existing callout classes verification
- Section 0: `.callout warning` ✓ (Table Safety)
- Section 1: `.callout tip` ✓ (Worship Attendance), `.callout tip` ✓ (Religious Study)
- Section 1: `.callout example` ✓ (Amara/Ramadan)
- Section 2: `.callout rule` ✓ (Tithing), `.callout example` ✓ (Marcus/Committee)
- Section 3: `.callout rule` ✓ (Deconversion Stress), `.callout example` ✓ (Sarah's Journey)
- Section 4: `.callout rule` ✓ (Trauma Mechanics), `.callout example` ✓ (James/Recovery)
- Section 5: `.callout rule` ✓ (Interfaith Negotiation), `.callout example` ✓ (Layla+David)
- Section 6: `.callout rule` ✓ (Radicalization Checks), `.callout rule` ✓ (Departure)
- Section 7: `.callout tip` ✓ (SBNR Build)
- Section 8: `.callout rule` ✓ (Existential Crisis), `.callout example` ✓ (Elena/Loss)
- Cross-cutting: `.callout tip` ✓ (GM Guidance)
**Status:** All 10 callouts already have correct classes. No change needed.

### 1.21 — Character portrait activations for narrative examples
**Location:** Each `.callout example` block
**What:** Add `<img class="char-portrait" src="img/char_XXXX.png">` at the start of each example.
**Characters with existing portraits:**
- Amara → `char_amara.png` ✓ (Example 1: Ramadan)
- Marcus → `char_marcus.png` ✓ (Example 2: Church Committee)
- Sarah → `char_sarah.png` ✓ (Example 3: Deconversion)
- James → `char_james.png` ✓ (Example 4: Trauma Recovery)
- David → `char_david.png` ✓ (Example 5: Interfaith Marriage — partial, appears as co-lead)
**Characters needing new portraits:**
- Layla → needs `char_layla.png` (Example 5: Interfaith Marriage — co-lead)
- Elena → needs `char_elena.png` (Example 6: Existential Crisis)
**Effort:** 5 existing portrait inserts + 2 new portrait generations.
**Priority:** HIGH — portraits ground every narrative example.

---

## 🟡 PHASE 2: New SVG Diagrams

### 2.1 — Devotion Level Progression Diagram
**Prefix:** `relig_devotion_ladder.svg`
**Location:** Section 1, after "Devotion Levels" table
**What:** A vertical flowchart/ladder showing Levels 0→5 with time commitment and SP cost/benefit at each level. Visual parallel to `mh_therapy_ladder.svg` and `cm_dana_sp_chart.svg`.
**Why:** The Devotion Level system is the page's core mechanic. A visual ladder reinforces it beyond the table. Shows the trade-off: higher devotion = more community benefit BUT more time/money/SP cost.
**Design notes:** Vertical ladder with 6 rungs. Each rung shows Level name, time/week, and SP delta (green for benefit, red for cost). Arrow showing "commitment deepens" flowing upward. Color gradient from neutral (Level 0) to intense (Level 5).
**Size estimate:** ~400×500 viewBox.

### 2.2 — Community Trust Accumulation Flowchart
**Prefix:** `relig_community_trust_flow.svg`
**Location:** Section 2, after "Community Trust Resource" table
**What:** A flowchart showing how Community Trust is earned (attendance → volunteering → leadership → pillar) and what happens when it's lost (deconversion, conflict, abuse reporting). Inspired by `sd_social_capital_flow.svg` and `rs_trust_erosion_repair.svg`.
**Why:** Community Trust is a dynamic resource that can be gained AND lost. A flowchart shows the bidirectional nature: building trust takes time, losing it can be fast.
**Design notes:** Left side = gain path (slow, incremental arrows). Right side = loss triggers (faster, more dramatic arrows). Center = current trust level gauge. Bidirectional flow between states.
**Size estimate:** ~600×400 viewBox.

### 2.3 — Deconversion Process Timeline
**Prefix:** `relig_deconversion_timeline.svg`
**Location:** Section 3, after "The Deconversion Process" table
**What:** A timeline showing the 6 stages of deconversion with SP accumulation curve. Similar to `dg_grief_timeline.svg` and `rs_ldr_decay_curve.svg` but showing SP climbing dramatically during Crisis/Departure stages, then slowly declining during Reconstruction/Integration.
**Why:** The deconversion arc is the most dramatic stress event on this page. A timeline with an SP curve overlay shows players the brutal reality: 400+ SP over 3 years. The visual makes the scale tangible.
**Design notes:** Horizontal timeline (Months 1→60). SP curve starts flat, spikes at Stage 2 (Crisis), peaks at Stage 3 (Departure +10 SP event), then slowly descends through Reconstruction. Annotated with key events: "First absence," "Tells parents," "Christmas alone," "New social network forms."
**Size estimate:** ~700×350 viewBox.

### 2.4 — Religious Trauma Trigger → Coping → Recovery Cycle
**Prefix:** `relig_trauma_cycle.svg`
**Location:** Section 4, after "Religious Trauma Mechanics" callout
**What:** A cyclical diagram showing: Trigger Encounter → SP Impact → Coping Check (success/fail branches) → If fail: Avoidance Behavior → If success: SP halved → Long-term: Therapy/Support → Trauma tag value decreases. Inspired by `mh_bipolar_cycle.svg` and `sh_recovery_arc.svg`.
**Why:** Religious trauma is a recurring mechanic, not a one-time event. A cycle diagram helps players understand that each trigger encounter is a node in a longer recovery arc, and that therapy/support gradually reduces the tag's impact.
**Design notes:** Circular flow. Outer ring = acute encounter (trigger → SP → coping check). Inner ring = long-term arc (therapy → tag value drops → triggers hurt less). Two concentric cycles showing short-term and long-term dynamics.
**Size estimate:** ~500×500 viewBox.

### 2.5 — Radicalization → Departure Decision Tree
**Prefix:** `relig_radicalization_tree.svg`
**Location:** Section 6, after "Radicalization Mechanics" table
**What:** A decision tree showing the 5 stages of radicalization with RES check gates at each stage. At each gate: success = resist (stay at current stage), failure = deepen commitment. Shows the "Escape Difficulty" increasing at each stage. Inspired by `gm_relocation_decision_tree.svg` and `rs_elder_care_decision_tree.svg`.
**Why:** Radicalization is a cascading mechanic where each stage is harder to escape than the last. A decision tree makes the escalating difficulty and the point-of-no-return visible.
**Design notes:** Vertical tree descending through 5 stages. At each stage, a RES check gate with success (lateral exit arrow) and failure (downward to next stage). Escape Difficulty label gets more intense at each level (Easy → Very Hard). Color darkening from light yellow (Grievance) to deep red (Activation).
**Size estimate:** ~500×600 viewBox.

### 2.6 — Interfaith Negotiation Outcome Matrix
**Prefix:** `relig_interfaith_matrix.svg`
**Location:** Section 5, after "Interfaith Negotiation Mechanics" callout
**What:** A 2×2 matrix showing the four possible outcomes of interfaith negotiation rolls: Both Succeed (compromise, both −2 SP), One Succeeds/One Fails (winner's preference, loser +3 SP), Both Fail (no resolution, both +4 SP). Inspired by `sh_sti_risk_matrix.svg` and `me_investment_risk_matrix.svg`.
**Why:** The interfaith mechanic has a clean 2×2 outcome structure that maps perfectly to a matrix visualization. Players can see at a glance what happens when they roll.
**Design notes:** 2×2 grid. X-axis = Partner A (Success/Fail). Y-axis = Partner B (Success/Fail). Each quadrant shows the outcome and SP impact. Center = the negotiation issue being discussed (e.g., "How to raise children?").
**Size estimate:** ~500×400 viewBox.

### 2.7 — Existential Crisis Phase Diagram
**Prefix:** `relig_existential_crisis.svg`
**Location:** Section 8, after "Existential Crisis Mechanics" callout
**What:** A 3-phase diagram showing Shock → Questioning → Resolution with the weekly INT+RES check loop in Phase 2, and the final Resolution roll at Phase 3. Shows the possibility of cycling back from Phase 3 failure to Phase 2. Inspired by `dg_existential_outcomes.svg` and `fc_teen_rebellion_spiral.svg`.
**Why:** Existential crisis has a unique looping structure (Phase 3 can cycle back to Phase 2). A diagram makes this non-linear progression clear.
**Design notes:** Three phases left to right. Phase 2 has a weekly check loop annotation. Phase 3 has two arrows: success (Resolution → new meaning) and failure (cycling back arrow to Phase 2). SP levels shown at each phase.
**Size estimate:** ~600×350 viewBox.

### 2.8 — SBNR vs Religious Practice Comparison Radar
**Prefix:** `relig_sbnr_vs_religion.svg`
**Location:** Section 7, after "SBNR Character Build" callout
**What:** A radar chart comparing SBNR practice vs. religious practice across dimensions: SP Reduction, Community Trust, Time Cost, Money Cost, Flexibility, Doctrinal Constraints. Inspired by `ec_radar_chart.svg` and `me_ai_displacement_radar.svg`.
**Why:** The SBNR section explicitly discusses the trade-off: SBNR has better stress management but lacks Community Trust. A radar chart makes this trade-off visually concrete.
**Design notes:** 6-axis radar. Two overlapping shapes: religious practice (strong on Community Trust, weaker on Flexibility) and SBNR (strong on Flexibility/SP Reduction, weak on Community Trust). Shows the fundamental trade-off.
**Size estimate:** ~500×500 viewBox.

### 2.9 — Religious Practice SP Budget Flowchart
**Prefix:** `relig_sp_budget_flow.svg`
**Location:** Cross-Cutting Mechanics, "Religious Practice and the SP Budget"
**What:** A flowchart showing the double-edged nature of religious SP: SP Reduction sources (worship, prayer, community, meaning) flowing IN, vs. SP Generation sources (obligations, politics, guilt, conflict) flowing OUT. Net effect = positive or negative depending on environment quality.
**Why:** This is the conceptual heart of the entire page — religion as both stress source AND stress reducer. A flowchart makes the net effect calculation intuitive.
**Design notes:** Two-column flow. Left = SP Reduction (green arrows, sources listed). Right = SP Generation (red arrows, sources listed). Center = net effect gauge that tilts green (healthy community) or red (toxic environment). Shows the tipping point.
**Size estimate:** ~600×400 viewBox.

---

## 🟢 PHASE 3: New Scene Illustrations

### 3.1 — Amara's Ramadan Morning (Suhoor)
**Prefix:** `relig_amara_ramadan_suhoor.png`
**Location:** Section 1, Example 1 (Amara/Ramadan)
**What:** Amara waking before dawn in a modest apartment kitchen, preparing Suhoor (pre-dawn meal). Soft morning light through blinds. A prayer mat folded nearby. Phone showing 4:30 AM. Coffee and dates on the counter. She looks tired but determined.
**Why:** Grounds the Ramadan example in physical reality — the 4:30 AM wake-up, the preparation, the physical cost. Shows the daily discipline rather than abstract "person praying."
**Character:** Amara (char_amara.png exists for portrait pairing).
**Pairing:** `char_amara.png` portrait + this scene in the example callout.

### 3.2 — Marcus at Church Committee Meeting
**Prefix:** `relig_marcus_committee_meeting.png`
**Location:** Section 2, Example 2 (Marcus/Church Committee Crisis)
**What:** Marcus in a church fellowship hall after hours, surrounded by planning spreadsheets, vendor quotes, and a whiteboard with event logistics. Other committee members in the background — some engaged, one person (the gossiping member) whispering to another. Marcus looks overwhelmed but focused. Folding tables stacked in the corner.
**Why:** Shows the real work of church leadership — it's logistics, not just prayer. The gossiping member in the background foreshadows the "Problematic Community Members" section. Captures the 96 hours of unpaid labor.
**Character:** Marcus (char_marcus.png exists for portrait pairing).
**Pairing:** `char_marcus.png` portrait + this scene in the example callout.

### 3.3 — Sarah's First Church Absence
**Prefix:** `relig_sarah_first_absence.png`
**Location:** Section 3, Example 3 (Sarah's Deconversion Journey) — Stage 1/2 transition
**What:** Sarah sitting in her car in a church parking lot on a Sunday morning. Engine off. Hands on the steering wheel. She can't bring herself to go inside through the windshield. Phone buzzing with a text from her mother: "We didn't see you at coffee hour last week?" Sunday morning light. She looks anxious, not rebellious — this is doubt, not defiance.
**Why:** The "first absence" is the most emotionally charged moment in the deconversion arc. This is the moment of real tension — not dramatic confrontation but quiet internal crisis. Avoids cliché "angry ex-Christian" imagery.
**Character:** Sarah (char_sarah.png exists for portrait pairing).
**Pairing:** `char_sarah.png` portrait + this scene in the example callout.

### 3.4 — Sarah at Secular Mutual Aid Group
**Prefix:** `relig_sarah_mutual_aid_group.png`
**Location:** Section 3, Example 3 — Intervention phase
**What:** Sarah sitting in a circle of 6-8 people in a community center room. Folding chairs. Someone is speaking; others are listening. Sarah has a notebook and looks like she's finding a place where she doesn't have to explain herself. Warm, unpretentious lighting. A box of tissues on a side table.
**Why:** Shows the "Intervention" that saves Sarah — the secular mutual aid group providing the −2 SP/week that makes her deconversion survivable. Real community support, not religious community.
**Character:** Sarah (char_sarah.png exists for portrait pairing).
**Pairing:** `char_sarah.png` portrait + this scene.

### 3.5 — Sarah's Devastating Christmas Alone
**Prefix:** `relig_sarah_christmas_alone.png`
**Location:** Section 3, Example 3 — Stage 4 (Grief)
**What:** Sarah alone in her apartment on Christmas Eve. A laptop open to a deconversion forum. No decorations — she took them all down. A half-eaten takeout container on the coffee table. Phone screen showing an unread text from her mother: "Merry Christmas, honey. We miss you." She's staring at the screen, not crying dramatically — just hollow. The blue light of the laptop on her face.
**Why:** The holiday grief of deconversion is one of the most real and underrepresented aspects of leaving faith. This is not dramatic — it's the quiet devastation of losing the rituals that structured your life.
**Character:** Sarah (char_sarah.png exists for portrait pairing).
**Pairing:** `char_sarah.png` portrait + this scene.

### 3.6 — James at Christmas Eve Service (Trigger Event)
**Prefix:** `relig_james_christmas_trigger.png`
**Location:** Section 4, Example 4 (James/Religious Trauma Recovery)
**What:** James standing just inside the doors of a church on Christmas Eve. Stained glass casting colored light. He's frozen — not running, not staying. His sister is visible in the background, looking hopeful and anxious. James's body language says "I wanted to try but I can't." He's clutching his phone (the text he'll send: "I love you but I can't stay").
**Why:** Shows a trauma trigger encounter in real time — the exact moment the mechanic activates. Not a flashback, not a nightmare — a present-moment boundary decision.
**Character:** James (char_james.png exists for portrait pairing).
**Pairing:** `char_james.png` portrait + this scene in the example callout.

### 3.7 — James in Therapy Session
**Prefix:** `relig_james_therapy_session.png`
**Location:** Section 4, Example 4 — Aftermath/Long-term arc
**What:** James in a therapy office, mid-session. Therapist (not a named character, just a professional presence) listening. James is talking, gesturing — actively engaged, not broken. A window showing daylight. Books on a shelf include titles about trauma recovery. This is the "therapy works" scene — slow, real progress.
**Why:** Shows the healing process in action — not a magical cure but the real work of trauma-informed therapy. Reinforces that the −1 SP/week from therapy is earned through actual sessions.
**Character:** James (char_james.png exists for portrait pairing).
**Pairing:** `char_james.png` portrait + this scene.

### 3.8 — Layla and David's Interfaith Conversation
**Prefix:** `relig_layla_david_kitchen_talk.png`
**Location:** Section 5, Example 5 (Layla and David's Interfaith Marriage)
**What:** Layla and David at a kitchen table, engaged in a serious but loving conversation. Layla wearing a hijab; David wearing a kippah that he's taken off and set on the table (symbolic — he's willing to listen). A baby registry printout between them. They're looking at each other, not at the paper. This is the "how will we raise the children" conversation. Tension but love.
**Why:** Interfaith negotiation is about real conversations between real people, not abstract mechanics. This scene shows the human moment behind the PRC roll.
**Characters:** David (char_david.png exists). Layla needs a new portrait (`char_layla.png`).
**Pairing:** `char_david.png` + new `char_layla.png` + this scene.

### 3.9 — Elena Reading Frankl at Night
**Prefix:** `relig_elena_reading_night.png`
**Location:** Section 8, Example 6 (Elena's Existential Crisis After Loss) — Phase 2
**What:** Elena at her kitchen table at 2 AM, reading Viktor Frankl's "Man's Search for Meaning" with a highlighter. Empty coffee mug. A framed photo of her son on the table — she's not hiding the grief, living with it. The house is dark except for a reading lamp. She looks exhausted but engaged — the "something clicks" moment at Week 9.
**Why:** Shows the real work of existential processing — late-night reading, grief and intellectual search happening simultaneously. Not abstract philosophy but a grieving mother finding meaning at 2 AM.
**Character:** Elena — needs new portrait (`char_elena.png`).
**Pairing:** new `char_elena.png` + this scene.

### 3.10 — Elena at Children's Hospital (Volunteering)
**Prefix:** `relig_elena_volunteering.png`
**Location:** Section 8, Example 6 — Phase 3 (Resolution)
**What:** Elena volunteering at a children's hospital, reading to a young patient in a hospital bed. She's wearing a volunteer badge. The patient is smiling at her. Elena looks present, not haunted — the service has given her a way to channel her grief into purpose. Natural hospital lighting.
**Why:** Shows the "service/contribution" path out of existential crisis. Elena found meaning not in a god but in helping others. This is the resolution of her arc — concrete, actionable, real.
**Character:** Elena (char_elena.png from Phase 3).
**Pairing:** `char_elena.png` + this scene.

### 3.11 — Radicalization: Online Echo Chamber
**Prefix:** `relig_radicalization_echo_chamber.png`
**Location:** Section 6, Radicalization Mechanics — "Seeking" stage
**What:** A person (gender-neutral, no named character) sitting at a desk late at night, multiple browser tabs open showing extremist forums and propaganda. The room is dark except for monitor glow. Phone notifications pinging with group chat messages. The person looks increasingly isolated — no photos on the desk, no personal items. The "echo chamber" stage of radicalization.
**Why:** Radicalization is a major topic but has no narrative example. A scene showing the "Seeking" stage — the online radicalization pipeline — grounds the mechanic in reality. No named character needed; this is an archetypal scene.
**Character:** No named character — archetypal scene.
**Pairing:** Standalone scene illustration.

### 3.12 — SBNR: Morning Meditation Practice
**Prefix:** `relig_sbnr_morning_meditation.png`
**Location:** Section 7, SBNR Practices — after the SBNR Character Build callout
**What:** A person sitting on a meditation cushion in a quiet apartment at dawn. Phone timer showing 20:00. A simple space — no incense, no crystals, no altar. Just a person, a cushion, and the practice. Natural morning light. This is SECULAR mindfulness — deliberately free of religious imagery.
**Why:** SBNR is a major section with no narrative example. This scene shows what secular spiritual practice actually looks like — simple, unadorned, disciplined. Contrasts with religious practice scenes.
**Character:** No named character — archetypal SBNR practitioner.
**Pairing:** Standalone scene illustration.

---

## SUMMARY COUNTS

### Phase 1 (Zero-Effort CSS Activations)
| Category | Count | Details |
|----------|-------|---------|
| Tables → `.tn-ladder` | 4 | Devotion Levels, Meditation Skill, Faith Identity Score, Family Reaction |
| Tables → `.condition-track` | 3 | Community Trust, Deconversion Stages, Radicalization Stages |
| Tables → `.card-grid` | 10 | Daily Prayer, SBNR Practices, Crisis Triggers, Fasting, Leadership, Trauma Types, Healing Activities, Interfaith Issues, Paths Out of Crisis, Quick Reference SP Summary |
| Character portraits | 7 | 5 existing (Amara, Marcus, Sarah, James, David) + 2 new (Layla, Elena) |
| **TOTAL Phase 1** | **24 items** | All existing CSS + existing assets + 2 new portraits |

### Phase 2 (New SVGs)
| # | SVG | Section | Purpose |
|---|-----|---------|---------|
| 1 | `relig_devotion_ladder.svg` | §1 | Core mechanic visualization |
| 2 | `relig_community_trust_flow.svg` | §2 | Dynamic resource flowchart |
| 3 | `relig_deconversion_timeline.svg` | §3 | SP curve over 5-year arc |
| 4 | `relig_trauma_cycle.svg` | §4 | Trigger→coping→recovery cycle |
| 5 | `relig_radicalization_tree.svg` | §6 | Decision tree with RES gates |
| 6 | `relig_interfaith_matrix.svg` | §5 | 2×2 outcome matrix |
| 7 | `relig_existential_crisis.svg` | §8 | 3-phase diagram with loop |
| 8 | `relig_sbnr_vs_religion.svg` | §7 | Radar chart comparison |
| 9 | `relig_sp_budget_flow.svg` | Cross-cutting | SP double-edged flowchart |
| **TOTAL Phase 2** | **9 SVGs** | | |

### Phase 3 (New Scene Images)
| # | Image | Section | Character |
|---|-------|---------|-----------|
| 1 | `relig_amara_ramadan_suhoor.png` | §1 Ex1 | Amara |
| 2 | `relig_marcus_committee_meeting.png` | §2 Ex2 | Marcus |
| 3 | `relig_sarah_first_absence.png` | §3 Ex2 | Sarah |
| 4 | `relig_sarah_mutual_aid_group.png` | §3 Ex2 | Sarah |
| 5 | `relig_sarah_christmas_alone.png` | §3 Ex2 | Sarah |
| 6 | `relig_james_christmas_trigger.png` | §4 Ex4 | James |
| 7 | `relig_james_therapy_session.png` | §4 Ex4 | James |
| 8 | `relig_layla_david_kitchen_talk.png` | §5 Ex5 | Layla + David |
| 9 | `relig_elena_reading_night.png` | §8 Ex6 | Elena |
| 10 | `relig_elena_volunteering.png` | §8 Ex6 | Elena |
| 11 | `relig_radicalization_echo_chamber.png` | §6 | Archetypal |
| 12 | `relig_sbnr_morning_meditation.png` | §7 | Archetypal |
| **TOTAL Phase 3** | **12 scene images** | | |

### GRAND TOTALS
- **Phase 1:** 24 items (17 CSS table conversions + 7 character portrait activations)
- **Phase 2:** 9 new SVGs
- **Phase 3:** 12 new scene images + 2 new character portraits
- **New files:** 23 total (9 SVGs + 12 scenes + 2 portraits)
- **Estimated final page size:** ~48KB → ~65-75KB (with CSS activations and image references)

---

## DESIGN PRINCIPLES (carried forward from relationship-structures.html lessons)

1. **SVG text overflow:** Calculate full bounding boxes. Left-aligned text: verify `x + estimated_width ≤ container_right_edge`. Center-aligned: verify both sides. Check descenders against bottom viewBox edge. Add 20-30px padding.

2. **Contrast:** No muted gray (`#7f8c8d`) on pastel backgrounds. Use darker variants: `#1e8449` on green, `#2980b9` on blue, `#922b21` on red.

3. **Scene images:** Focus on real moments — the 4:30 AM wake-up, the car in the parking lot, the late-night reading with grief — NOT abstract "person praying" or "group meditating" stock imagery.

4. **Character consistency:** Layla (Muslim, Devotion Level 3, engaged) and Elena (secular humanist, 42, grieving mother) need portraits that match their scene details.

5. **Sensitive topics:** Religious trauma, extremism, and deconversion are emotionally charged. Scene images should show dignity and realism, not sensationalism.
