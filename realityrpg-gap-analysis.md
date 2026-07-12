# Reality RPG — Comprehensive Gap Analysis & Expansion Roadmap

**Date:** Audit of 17 existing pages at `/var/www/html/realityrpg`
**Pages Read in Full:** core-mechanics, inventory-economy, social-dynamics, daily-life, law-civic, weather-environment, character-creation, family-children
**Pages Read Partially:** mental-health, neurodivergence

---

## EXECUTIVE SUMMARY

The existing 17 pages are **exceptionally well-built** for the micro-level of individual daily life. The mechanical design is consistent (d100 + modifier vs. TN, Stress Points, condition tracks, time budgets, cascade failures). What's missing is the **macro-level**: systems that operate above the individual — economies, geopolitics, institutions, technology trends, and large-scale social movements. The user specifically requested depth in 7 areas; this audit identifies **47 specific gaps** across 11 categories, organized by severity.

---

## SECTION 1: MACRO-ECONOMICS (NEW PAGE: `macro-economy.html`)

### GAP 1.1: Inflation System — SEVERITY: HIGH
- **WHAT is missing:** No mechanic for how inflation erodes purchasing power over campaign time. The inventory-economy page has static dollar amounts but no dynamic cost-of-living adjustment.
- **WHY it matters:** In 2022–2024, inflation was 8%+ in the US. A character's $4,200/month income that covered expenses in Year 1 doesn't in Year 3. This is a core life simulation challenge.
- **HOW:** Annual Inflation Event. GM rolls on an Inflation Table (1d6: 1=Deflation −2%, 2–3=Low 1–3%, 4=Normal 2–4%, 5=High 5–8%, 6=Crisis 10%+). All costs scale. Characters with fixed income (pension, minimum wage job) suffer most. Characters with assets (real estate, stocks) may benefit. INT check (TN 45) to hedge against inflation via index funds, inflation-linked bonds, or negotiation for raises.
- **NEW PAGE:** `macro-economy.html`

### GAP 1.2: Recessions & Economic Cycles — SEVERITY: HIGH
- **WHAT is missing:** No mechanic for business cycles. The daily-life page mentions "Recession" as a job market condition modifier but has no system for triggering, duration, or recovery.
- **WHY it matters:** Recessions define life trajectories. Getting laid off during a recession vs. a boom changes everything. A campaign that spans years should feel the rhythm of the economy.
- **HOW:** Economic Cycle Track (Boom → Slowdown → Recession → Depression → Recovery → Boom). GM advances the track every 6–12 months of play. Each phase changes: job availability (TN modifiers), hiring freezes, wage growth, housing market, consumer confidence (SP effects). Characters who "time the market" or build emergency funds during booms survive recessions; those who don't spiral.
- **NEW PAGE:** `macro-economy.html`

### GAP 1.3: Credit Score System — SEVERITY: HIGH
- **WHAT is missing:** Credit cards are mentioned in inventory-economy but there's no Credit Score mechanic. Credit scores determine apartment approvals, car loan interest rates, insurance premiums, and even job eligibility.
- **WHY it matters:** A credit score of 580 vs. 780 can cost a character $10,000–$30,000 over a car loan's life. This is one of the most impactful financial metrics in modern life.
- **HOW:** Credit Score 300–850. Starts based on socioeconomic background (Wealthy: 700+, Middle: 650–720, Working: 580–650, Poor: 500–580). Actions affect score: on-time payments +5–15/month, late payments −30–100, maxing cards −50, bankruptcy −200+. Score bands: Poor (<580, denied most credit), Fair (580–669, high APR), Good (670–739, standard), Very Good (740–799, preferred rates), Excellent (800+, best rates). Affects apartment applications, loan approval, insurance premiums, some employer background checks.
- **NEW PAGE:** `macro-economy.html`

### GAP 1.4: Housing Market Dynamics — SEVERITY: HIGH
- **WHAT is missing:** Housing costs are static tiers. No mechanic for housing bubbles, renter/owner dynamics, first-time homebuyer challenges, or gentrification.
- **WHY it matters:** Housing is the single largest expense for most people and the primary wealth-building mechanism in the US. The difference between renting and owning defines financial futures.
- **HOW:** Housing Market Track per region (Affordable → Balanced → Tight → Overheated → Bubble → Crash). Affects: rent increases, home prices, mortgage rates, affordability index. First-time homebuyer mechanics: down payment savings tracker, pre-approval process (INT check TN 50), inspection negotiation, closing costs (2–5% of purchase price). Gentrification: neighborhood transitions from Low-Income to Standard to Comfortable tier, displacing existing residents (forced move event, +5 SP, lose community Social Capital).
- **NEW PAGE:** `macro-economy.html`

### GAP 1.5: Stock Market & Investing — SEVERITY: MEDIUM
- **WHAT is missing:** No investing mechanics. Characters who are middle-class or wealthy should have the option (and pressure) to invest for retirement.
- **WHY it matters:** Retirement savings through 401(k), IRA, and brokerage accounts is a core life decision. Market crashes (2008, 2020) wipe out years of savings. The choice between spending now vs. investing for later is a fundamental life tension.
- **HOW:** Investment Portfolio tracker. Characters allocate funds to: Stocks (high return, high volatility), Bonds (low return, stable), Real Estate (moderate), Cash (no return, safe). Annual Market Event: GM rolls on Market Performance Table affecting portfolio value. Characters with high portfolio value gain "Wealth Tier" bonuses. Market Crash Event (1d100: 1–3/year): portfolio drops 20–50%. Characters who panic-sell lock in losses. Characters who "buy the dip" (RES check TN 55) gain long-term advantage.
- **NEW PAGE:** `macro-economy.html`

### GAP 1.6: Wealth Inequality & Generational Wealth — SEVERITY: HIGH
- **WHAT is missing:** Character creation has 5 socioeconomic tiers but no mechanic for wealth transfer, inheritance, or the compounding advantage of generational wealth.
- **WHY it matters:** The child of a wealthy character doesn't start at the same place as the child of a poor character, even with the same attributes. This is the defining feature of modern economic life.
- **HOW:** Generational Wealth Score (GWS) 0–10. Wealthy: GWS 8–10 (family trust funds, college paid, down payment on house, professional network). Upper Middle: GWS 5–7 (college savings, some network). Middle: GWS 3–5 (college loans possible, some family support). Working: GWS 1–3 (no safety net, no college without loans). Poor: GWS 0 (family may need YOUR support). GWS affects: starting money, access to opportunities (referrals, internships), emergency buffer, inheritance events, and intergenerational transfer when characters age out or die.
- **NEW PAGE:** `macro-economy.html`

### GAP 1.7: Bankruptcy & Recovery — SEVERITY: MEDIUM
- **WHAT is missing:** Financial Freefall is mentioned in inventory-economy but there's no bankruptcy mechanic or recovery path.
- **WHY it matters:** ~600,000 Americans file for bankruptcy annually. It's a real event that wipes out credit, lasts 7–10 years on your record, but also provides a fresh start.
- **HOW:** Bankruptcy Event triggers when Budget Score hits 0 for 6+ months. Chapter 7 (liquidation): wipe most debts, lose non-exempt assets, credit score drops to 550, 10-year stain. Chapter 13 (reorganization): 3–5 year payment plan, keep assets, credit score drops to 580, 7-year stain. Recovery Track: each year post-bankruptcy, INT check TN 50 to rebuild credit. After 3 years: score +50. After 7 years: score +100. After 10 years: clean slate. Roleplay: stigma, shame, family conflict, rebuilding trust.
- **NEW PAGE:** `macro-economy.html`

### GAP 1.8: Entrepreneurship & Small Business — SEVERITY: MEDIUM
- **WHAT is missing:** No mechanic for starting a business. Characters can only work jobs; they can't create their own income streams beyond "side hustle" mention.
- **WHY it matters:** 33% of US adults have side income. 12% are self-employed. The gig economy, freelancing, and small business ownership are major life paths.
- **HOW:** Business Creation mini-campaign. Steps: Business Plan (INT check TN 50), Funding (savings, loans, investors — Finance check TN 55), Launch (EXP check TN 60), First Year Operations (weekly Business Health check using INT + EXP, TN 55). Business Health Score 0–100. Below 30 = at risk of failure. Above 70 = profitable, can hire. Business types: Service (low startup, labor-intensive), Product (high startup, scalable), Digital (low startup, high competition). Risk: 20% of small businesses fail in year 1, 50% by year 5.
- **NEW PAGE:** `macro-economy.html`

### GAP 1.9: Corporate Career Ladders — SEVERITY: MEDIUM
- **WHAT is missing:** Career progression exists (daily-life §4.6) but is generic. No mechanic for office politics, performance reviews, promotions, lateral moves, or corporate restructuring.
- **WHY it matters:** Climbing the corporate ladder involves more than just "doing good work." It involves visibility, sponsorship, timing, office politics, and sometimes sacrifice.
- **HOW:** Corporate Career Track with 5 levels (Individual Contributor → Senior IC → Manager → Director → Executive). Each promotion requires: Performance (3+ strong checks), Visibility (Networking check TN 50 — being seen by decision-makers), Sponsorship (having a mentor advocate for you), Timing (GM determines if positions are open). Office Politics Track: characters navigate alliances, rivalries, and information flow. Lateral moves: switching departments for better growth. Restructuring events: layoffs, mergers, acquisitions that reset career progress.
- **NEW PAGE:** `macro-economy.html`

### GAP 1.10: Unions & Labor Movements — SEVERITY: MEDIUM
- **WHAT is missing:** No mechanic for collective bargaining, unionization, strikes, or worker organizing.
- **WHY it matters:** Union membership affects wages (union workers earn ~10–20% more), benefits, job security, and workplace conditions. The right-to-work vs. union debate is a defining political issue.
- **HOW:** Union Status per workplace (Non-Union, Unionizing, Unionized). Unionization campaign: Leadership check (PRC + EXP, TN 55) to organize coworkers. Need 30% of workforce to sign cards, then majority vote. If unionized: collective bargaining events (annual negotiation), strike mechanics (walkout → economic pressure → settlement), union dues (1–2% of pay). Anti-union retaliation: employer may fire organizers (Legal check to challenge). Union members gain: higher wages (+10–20%), better benefits, job protection, grievance process. Lose: flexibility, individual negotiation.
- **NEW PAGE:** `macro-economy.html`

### GAP 1.11: Automation & AI Impact on Jobs — SEVERITY: HIGH
- **WHAT is missing:** No mechanic for technological displacement. The weather-environment page has basic "Technology & Digital Life" but nothing about AI replacing jobs.
- **WHY it matters:** AI is actively replacing jobs in writing, design, customer service, coding, legal analysis, and more. Characters in vulnerable fields face real career extinction risk.
- **HOW:** Automation Risk per job type (Low/Medium/High/Critical). High-risk jobs: data entry, basic writing, customer service, paralegal, some coding. Each year, GM rolls Automation Check (1d100). If job is High-risk: 15% chance of displacement event. Character must: retrain (INT check TN 55, 3–6 months, $5,000–$20,000 in training costs), pivot to AI-augmented role (EXP check TN 50), or accept lower-paying work. Characters who proactively upskill gain +1 to relevant Professional skill and immunity to displacement for 2 years.
- **NEW PAGE:** `macro-economy.html`

### GAP 1.12: Student Loan Crisis — SEVERITY: MEDIUM
- **WHAT is missing:** Student loans are mentioned in law-civic §3.5 but lack depth. No mechanic for loan consolidation, income-driven repayment, default cascades, or the "college premium" vs. trade school debate.
- **WHY it matters:** $1.7 trillion in student debt affects 43 million Americans. Loan debt delays home buying, marriage, retirement savings, and entrepreneurship for a decade.
- **HOW:** Student Loan Tracker: balance, interest rate, monthly payment, servicer. Events: interest capitalization (deferred interest added to principal), rate changes (federal rate adjustments), forgiveness programs (PSLF, public service forgiveness), default cascade (missed payments → collections → wage garnishment → credit destruction). Trade School vs. College path at character creation: College = higher earning ceiling but $30K–$200K debt; Trade School = $5K–$30K debt, faster employment, lower ceiling but stable income.
- **NEW PAGE:** `macro-economy.html` (or new `education-finance.html`)

---

## SECTION 2: GEOGRAPHY & MOBILITY (NEW PAGE: `geography-mobility.html`)

### GAP 2.1: Moving Cities / Relocation — SEVERITY: HIGH
- **WHAT is missing:** No mechanic for domestic relocation. Characters are assumed to stay in one place.
- **WHY it matters:** ~40 million Americans move each year. Relocation for jobs, cost of living, family, or lifestyle is a major life event with cascading effects on every system.
- **HOW:** Relocation Event: decision trigger (job offer, cost pressure, relationship, lifestyle). Moving costs: $1,000–$10,000+ depending on distance and home ownership. Packing, hiring movers, utility transfers, change of address. New City Integration: losing Social Capital (resets to Unknown in new area), finding new housing (apartment hunting mini-campaign), building new relationships (slower due to time investment in moving). Cost of Living Adjustment: new city may have higher/lower rent, wages, taxes.
- **NEW PAGE:** `geography-mobility.html`

### GAP 2.2: Moving Abroad / Expat Life — SEVERITY: HIGH
- **WHAT is missing:** Zero coverage of international relocation, expat experience, cultural adaptation, or living abroad.
- **WHY it matters:** ~30 million Americans live abroad at some point. Expats face unique challenges: visa stress, cultural isolation, dual taxation, expat community dynamics, reverse culture shock.
- **HOW:** International Move Event: Visa process (see law-civic for basics, expand with work visa, digital nomad visa, retirement visa). Cultural Adaptation Track: 5 levels (Culture Shock → Adjustment → Adaptation → Integration → Bicultural). Each level requires EXP + INT checks. At Culture Shock: +3 SP/day, −2 to all social checks in new culture. Cultural faux pas events (1d10 per month: 1–2 = social embarrassment, +2 SP). Expat Community: forming bonds with other expats (+1 Social Capital in expat circle, but may isolate from locals). Reverse Culture Shock on return: same Adaptation Track in reverse.
- **NEW PAGE:** `geography-mobility.html`

### GAP 2.3: Language Barriers — SEVERITY: HIGH
- **WHAT is missing:** Language skill exists in core-mechanics but no mechanic for learning a language, language barriers in daily life, or bilingual advantages.
- **WHY it matters:** Language barriers affect healthcare access, employment, social integration, legal navigation, and mental health (isolation).
- **HOW:** Language Proficiency Track per language: None → Beginner (A1) → Conversational (B1) → Fluent (C1) → Native. Learning: 100+ hours per level, INT check TN 50 per level advancement. Language Barrier penalties: Beginner = +10 TN on all social interactions in that language; Conversational = +5 TN; Fluent = no penalty. Healthcare in foreign language: +5 TN on understanding diagnosis, following treatment. Bilingual advantage: +5 to Empathy in cross-cultural settings, access to dual job markets, cognitive benefits (+1 INT after reaching Fluent).
- **NEW PAGE:** `geography-mobility.html`

### GAP 2.4: Diaspora Communities & Immigrant Experience — SEVERITY: MEDIUM
- **WHAT is missing:** No mechanic for diaspora life — the experience of maintaining cultural identity while navigating a host country.
- **WHY it matters:** 45 million immigrants in the US. Second-generation immigrants face unique pressures: assimilation vs. cultural preservation, family expectations, code-switching, identity conflict.
- **HOW:** Diaspora Identity Score 0–10. High = strong ties to heritage culture (family pressure, cultural obligations, community support). Low = assimilated (less community support, possible guilt/shame, smoother institutional navigation). Events: family pressure to marry within culture (RES check TN 50 to resist), holiday conflicts (heritage vs. host country traditions), language maintenance with children, sending remittances home ($200–$2,000/month drain). Positive: dual cultural fluency, community support network, entrepreneurial advantages in ethnic enclaves.
- **NEW PAGE:** `geography-mobility.html`

### GAP 2.5: International Dating & Cross-Cultural Marriage — SEVERITY: MEDIUM
- **WHAT is missing:** Dating mechanics exist but are mononational. No coverage of cross-cultural romantic relationships.
- **WHY it matters:** Intercultural marriages face unique challenges: family approval, cultural expectations, visa sponsorship, language barriers, different conflict styles.
- **HOW:** Cross-Cultural Relationship modifiers: Family approval check (EXP + RES, TN 55 — higher if cultures are more distant), Visa sponsorship process (time-intensive, +3 SP from uncertainty), Cultural expectation conflicts (monthly RES check TN 45 to navigate differences), Holiday negotiation (whose holidays do you celebrate?). Benefits: broader worldview, language learning, access to two communities.
- **NEW PAGE:** `geography-mobility.html`

---

## SECTION 3: REMOTE WORK & DIGITAL NOMADISM (NEW SECTION in `daily-life.html` or NEW PAGE: `remote-work.html`)

### GAP 3.1: Remote Work Deep Mechanics — SEVERITY: HIGH
- **WHAT is missing:** Remote work is mentioned in weather-environment §5.6 but only as a comparison table. No deep mechanics for remote work productivity, isolation, boundary management, or career impact.
- **WHY it matters:** ~35% of US workers can work remotely. Remote work fundamentally changes daily structure, social connections, career trajectory, and location flexibility.
- **HOW:** Remote Work Track: Productivity (INT + EXP check TN 45 daily; failure = distracted, work spills into evening), Boundary Management (RES check TN 40 daily; failure = overworking or underworking), Social Isolation (+2 SP/week; PRC check TN 40 to maintain coworker connections), Career Visibility (−1 to promotion checks unless actively networking; "proximity bias" penalty). Digital Nomad variant: add Travel Stress (+1 SP/day from constant movement), Time Zone Management (−2 to meeting participation if working across 3+ time zones), Visa compliance (legal risk).
- **EXPAND:** `weather-environment.html` §5.6 or NEW `remote-work.html`

### GAP 3.2: Multiple Jobs & Gig Economy — SEVERITY: HIGH
- **WHAT is missing:** No mechanic for working multiple jobs, gig work (Uber, DoorDash, freelancing), or the "portfolio career."
- **WHY it matters:** 57 million Americans (36% of workforce) have gig income. Many work 2+ jobs to make ends meet. Gig work offers flexibility but no benefits, no job security, and unpredictable income.
- **HOW:** Gig Work System: Characters can take gig jobs alongside primary employment. Each gig job: Uber/DoorDash (VIG check TN 35 per shift, $15–$25/hr gross, vehicle wear), Freelance (Professional skill check TN 50 per project, $25–$150/hr), TaskRabbit (DXT check TN 40, $20–$40/hr). Multiple Job penalty: each additional job adds +3 SP/day from exhaustion, −1 to all checks after 10 total work hours. Income variability: gig income fluctuates weekly (1d6 × $100–$500). No benefits: no health insurance, no paid time off, no retirement contributions. Platform risk: deactivation (lose income source, +5 SP).
- **NEW PAGE:** `remote-work.html`

---

## SECTION 4: RELATIONSHIPS — POLYAMORY & NON-MONOGAMY (NEW PAGE: `relationship-structures.html`)

### GAP 4.1: Polyamory Mechanics — SEVERITY: HIGH
- **WHAT is missing:** Zero coverage of polyamory, ethical non-monogamy, open relationships, or relationship anarchy. The social-dynamics page assumes monogamous romance.
- **WHY it matters:** ~4–5% of Americans practice consensual non-monogamy (2–4 million people). Polyamory involves unique mechanics: managing multiple relationship tracks simultaneously, jealousy, time allocation, legal invisibility, social stigma.
- **HOW:** Polyamory Framework: Multiple Relationship Tracks (each partner tracked separately on the existing Relationship Tier system). Jealousy Track: characters gain Jealousy Points when partners spend time with metamours; must make RES check TN 45 to process healthily; failure = +3 SP, potential conflict. Time Allocation: managing 2+ romantic relationships requires 4–8 additional hours/week per partner. Agreements & Boundaries: characters negotiate relationship agreements (EXP check TN 50); boundary violations cost relationship points. Social Stigma: +5 TN on social interactions with monogamous-normative people; may lose Social Capital in conservative communities. Legal Invisibility: only one partner has legal rights (hospital visitation, medical decisions, inheritance).
- **NEW PAGE:** `relationship-structures.html`

### GAP 4.2: Open Relationships & Situationships — SEVERITY: MEDIUM
- **WHAT is missing:** No coverage of relationship structures between monogamy and polyamory: open relationships, situationships, friends with benefits, soft monogamy.
- **WHY it matters:** These are extremely common relationship structures, especially among young adults. The "what are we?" conversation is a defining modern dating experience.
- **HOW:** Relationship Definition Track: Casual → Dating → Situationship → Exclusive → Committed. Each transition requires a "Define the Relationship" conversation (EXP check TN 50; failure = miscommunication, +2 SP). Situationship penalty: no clear expectations → ambiguity stress (+2 SP/week). Open Relationship mechanics: primary partner + secondary partners with agreed-upon boundaries; boundary negotiation events (quarterly EXP check TN 45); STI testing schedule (monthly/bi-monthly).
- **NEW PAGE:** `relationship-structures.html`

### GAP 4.3: Friend Group Dynamics — SEVERITY: MEDIUM
- **WHAT is missing:** Individual relationships are tracked but not group dynamics. Friend groups have their own politics, cliques, inside jokes, and exclusion mechanics.
- **WHY it matters:** Friend groups are central to social identity, especially for young adults. Being excluded from a friend group is devastating. Friend group drama is a major source of SP.
- **HOW:** Friend Group Track: Group Cohesion Score 0–100. Characters have Individual Standing within the group. Group events: inside jokes (+1 Social Capital), group exclusion (−5 Social Capital, +5 SP), drama (1d10 per month: 1–3 = conflict between members, requiring mediation). Clique formation: subgroups within friend group create loyalty conflicts. Group dissolution: as life changes (moving, relationships, kids), friend groups naturally fracture.
- **NEW PAGE:** `relationship-structures.html`

### GAP 4.4: Roommate Conflicts — SEVERITY: MEDIUM
- **WHAT is missing:** No mechanic for roommate relationships, which combine friendship, cohabitation, and financial partnership.
- **WHY it matters:** ~34 million Americans have roommates. Roommate conflicts are a leading cause of stress for young adults and students.
- **HOW:** Roommate Compatibility Score 0–100 at move-in (based on lifestyle alignment, cleanliness standards, financial responsibility, social habits). Monthly Roommate Check: if Score < 50, conflict event (chore disputes, guest complaints, bill disagreements). Resolution: EXP check TN 45 for productive conversation; failure = escalation, possible lease-breaking. Roommate tiers: Compatible (Score 70+), Tolerable (40–69), Conflictual (20–39), Unlivable (<20 — must find new housing).
- **NEW PAGE:** `relationship-structures.html`

### GAP 4.5: Elder Care Decisions — SEVERITY: MEDIUM
- **WHAT is missing:** No mechanic for adult children caring for aging parents (the "sandwich generation").
- **WHY it matters:** ~60 million Americans are caregivers. Elder care decisions involve: in-home care vs. assisted living vs. nursing home, financial burden, sibling conflict, guilt, and the emotional toll of watching a parent decline.
- **HOW:** Caregiver Track: triggered when a parent reaches 70+ or develops a chronic condition. Caregiver gains: +3 SP/week from responsibility, 5–15 hours/week of caregiving time. Decision points: in-home care ($5,000–$10,000/month), assisted living ($3,000–$6,000/month), nursing home ($7,000–$12,000/month). Sibling conflict: EXP check TN 55 to coordinate care responsibilities fairly. Guilt Track: RES check TN 50 monthly; failure = guilt SP (+2). The "sandwich" penalty: characters with both children and aging parents face +5 SP/week.
- **NEW PAGE:** `relationship-structures.html` (or expand `death-grief.html`)

### GAP 4.6: Choosing to Be Childfree / DINK Lifestyle — SEVERITY: LOW
- **WHAT is missing:** No positive modeling of choosing NOT to have children. The family-children page is comprehensive but assumes parenthood is the path.
- **WHY it matters:** ~20% of women under 50 are childfree by choice. DINK (Dual Income, No Kids) couples face unique social pressure and have different financial trajectories.
- **HOW:** Childfree Identity: characters who choose to be childfree gain: +$500–$1,500/month disposable income, +4 hours/day free time, no sleep disruption. Social pressure: RES check TN 50 when family/friends question the choice; failure = +2 SP from guilt or conflict. Financial advantage: can invest more aggressively (compounding advantage over 20+ years). Social disadvantage: may feel isolated from parent-centric social circles; different life timeline than peers.
- **NEW PAGE:** `relationship-structures.html`

---

## SECTION 5: RELIGION (NEW PAGE: `religion-spirituality.html`)

### GAP 5.1: Detailed Worship Mechanics — SEVERITY: HIGH
- **WHAT is missing:** Religion is a checkbox at character creation with basic community bonuses. No mechanic for actual worship practice, religious observance, spiritual growth, or the daily reality of religious life.
- **WHY it matters:** Religion affects daily schedule (prayer times, Sabbath observance), diet (kosher, halal, vegetarian), social circles, political views, conflict with secular life, and mental health.
- **HOW:** Religious Practice Track: Nominal → Practicing → Devout → Zealous. Each level requires weekly time investment (1–10+ hours). Practice bonuses: Practicing = −5 SP/week from community; Devout = +1 RES from faith; Zealous = +2 RES but +5 TN on checks conflicting with doctrine. Observance mechanics: daily prayer (5–30 min), weekly service (1–3 hours), fasting periods (VIG penalty, RES bonus), tithing (10% of income, $200–$2,000+/month). Religious holidays as campaign events: Holy Week, Ramadan, Diwali, Yom Kippur — each with specific mechanical effects.
- **NEW PAGE:** `religion-spirituality.html`

### GAP 5.2: Deconversion & Loss of Faith — SEVERITY: HIGH
- **WHAT is missing:** No mechanic for losing religious faith, which is a major life transition for millions.
- **WHY it matters:** ~30% of Americans who were raised religious have left their faith. Deconversion involves identity loss, community loss, family conflict, and existential crisis.
- **HOW:** Deconversion Track: Doubt → Questioning → Leaving → Post-Religious Identity. Doubt: RES check TN 45 when encountering contradictory information; repeated failures advance the track. Questioning: +5 SP/week from cognitive dissonance; conflict with religious community members. Leaving: lose Religious Practice bonuses; Social Capital in religious community resets to 0; family conflict events (EXP check TN 55 to maintain relationships). Post-Religious: building new identity, finding secular community, processing religious trauma if applicable.
- **NEW PAGE:** `religion-spirituality.html`

### GAP 5.3: Religious Trauma — SEVERITY: HIGH
- **WHAT is missing:** No mechanic for the psychological damage of abusive religious upbringing.
- **WHY it matters:** Religious trauma syndrome is recognized by psychologists. Effects include: fear of hell, shame around sexuality, fear of death, difficulty making independent decisions, hypervigilance around moral transgression.
- **HOW:** Religious Trauma Condition (similar to existing mental health conditions). Symptoms: fear-based anxiety (SP spikes around moral/religious topics), shame spiral (perfectionism around "sin"), decision paralysis (can't make choices without divine guidance), community dependency (fear of leaving). Triggers: religious language, moral judgment, discussions of afterlife, guilt-inducing situations. Treatment: secular therapy (EXP check TN 50 to find non-religious therapist), support groups, gradual exposure to secular worldviews. Recovery Track: 6–24 months, RES check TN 55 per quarter.
- **NEW PAGE:** `religion-spirituality.html`

### GAP 5.4: Interfaith Marriage Conflicts — SEVERITY: MEDIUM
- **WHAT is missing:** No mechanic for marriages between different faiths or between religious and secular people.
- **WHY it matters:** ~54% of recent marriages are interfaith or interfaith-adjacent. These marriages face unique challenges: holiday negotiation, child-rearing decisions, family pressure.
- **HOW:** Interfaith Relationship modifiers: Holiday negotiation (whose holidays do you celebrate? EXP check TN 45 per holiday season), Child religious education (major conflict point; RES check TN 55 to agree on approach), Family pressure (both families may disapprove; +3 SP per family conflict event), Identity negotiation (does one partner convert? RES check TN 60 to resist conversion pressure). Benefits: broader worldview, exposure to multiple traditions, modeling tolerance for children.
- **NEW PAGE:** `religion-spirituality.html`

### GAP 5.5: "Spiritual But Not Religious" — SEVERITY: LOW
- **WHAT is missing:** No mechanic for the growing "spiritual but not religious" (SBNR) demographic.
- **WHY it matters:** ~25% of Americans identify as SBNR. They seek meaning without institutional religion: meditation, nature spirituality, energy work, mindfulness.
- **HOW:** SBNR Practice Track: Curious → Exploring → Integrated. Benefits: flexibility (no doctrinal conflict), mindfulness bonuses (+2 to RES checks if meditating regularly), nature connection (+1 SP recovery from outdoor time). Challenges: lack of community structure (harder to build Social Capital), vague practice (no clear framework for spiritual growth), possible conflict with religious family members.
- **NEW PAGE:** `religion-spirituality.html`

---

## SECTION 6: POLITICS & SYSTEMIC CHANGE (NEW PAGE: `politics-activism.html`)

### GAP 6.1: Community Organizing — SEVERITY: HIGH
- **WHAT is missing:** No mechanic for grassroots organizing, running for office, or influencing policy change.
- **WHY it matters:** Political engagement beyond voting — attending town halls, joining neighborhood associations, organizing protests, running for school board — is how real change happens.
- **HOW:** Activism Track: Awareness → Participation → Organizing → Leadership. Each level requires time investment and carries SP costs. Community organizing: Leadership check (PRC + EXP, TN 50) to rally people. Campaign events: door-knocking (EXP check TN 40 per contact), phone banking (INT check TN 35), fundraising (Finance check TN 50). Running for office: full mini-campaign with fundraising, endorsements, debates (Communication check TN 55), and election day. Impact: successful campaigns change the game world's policy environment (tax rates, school quality, housing regulations).
- **NEW PAGE:** `politics-activism.html`

### GAP 6.2: Political Polarization Affecting Relationships — SEVERITY: HIGH
- **WHAT is missing:** No mechanic for how political differences damage friendships, families, and romantic relationships.
- **WHY it matters:** Political polarization is the #1 relationship stressor in modern America. 30% of Americans have lost a friend over politics. Family dinners are minefields.
- **HOW:** Political Alignment Score per relationship (−5 to +5, where same = +5, opposite = −5). When political topics arise (elections, news events, casual conversation): if Alignment ≤ 0, Communication check TN 55 to discuss productively; failure = argument (escalation per social-dynamics conflict rules). Chronic polarization: relationships with Alignment ≤ −3 decay 1 point/month. Political trauma events: major political events (assassination attempts, elections, policy changes) trigger SP for characters whose preferred outcome fails. "Political exhaustion": characters who constantly navigate political conflict gain +1 SP/week from the ambient tension.
- **NEW PAGE:** `politics-activism.html`

### GAP 6.3: Misinformation & Media Literacy — SEVERITY: MEDIUM
- **WHAT is missing:** No mechanic for encountering misinformation, echo chambers, or the cognitive effects of consuming partisan media.
- **WHY it matters:** Misinformation affects health decisions, financial decisions, voting behavior, and social relationships. Media literacy is a critical life skill.
- **HOW:** Media Literacy Score 0–10 (based on INT and EXP). Low literacy: characters believe misinformation (INT check TN 45 to fact-check; failure = believe false information, may act on it). Echo Chamber Track: characters who only consume same-aligned media gain +2 SP from outrage but lose ability to understand opposing views (−5 to Empathy checks with politically different people). Social media algorithms: SMI system already exists; expand with algorithm radicalization (heavy users of partisan content drift toward more extreme views over 6+ months).
- **NEW PAGE:** `politics-activism.html`

### GAP 6.4: Lobbying & Institutional Influence — SEVERITY: MEDIUM
- **WHAT is missing:** No mechanic for how money and influence shape policy.
- **WHY it matters:** Wealthy characters and corporations can lobby for favorable legislation. This affects everyone through tax policy, environmental regulation, healthcare law, etc.
- **HOW:** Influence Track for wealthy characters (GWS ≥ 7): can fund PACs, donate to campaigns, lobby legislators. Each lobbying effort: EXP + Social Capital check TN 55. Success = favorable policy outcome (lower taxes, deregulation, etc.). Failure = public backlash, −3 Social Capital. Policy impact events: when lobbying succeeds/fails, the GM adjusts relevant game mechanics (tax rates, healthcare access, environmental quality).
- **NEW PAGE:** `politics-activism.html`

---

## SECTION 7: HEALTH EXPANSIONS (EXPAND EXISTING PAGES)

### GAP 7.1: Detailed Exercise & Fitness System — SEVERITY: MEDIUM
- **WHAT is missing:** Exercise is listed as a leisure activity with generic SP/VIG recovery. No mechanic for specific fitness programs, gym culture, body image, or fitness milestones.
- **WHY it matters:** Fitness is a $80 billion industry. People invest significant time, money, and identity into exercise. Fitness journeys have their own arcs: starting out, progressing, plateauing, injury, coming back.
- **HOW:** Fitness Track: Sedentary → Active → Fit → Athletic → Peak. Each level requires consistent exercise (3–5×/week). Benefits scale: Active = +1 VIG daily; Fit = +2 VIG daily, −1 to aging penalties; Athletic = +3 VIG, visible physical transformation (+1 PRC). Costs: gym membership ($30–$200/month), equipment ($100–$2,000), time (1–2 hours/day). Injury risk: 1d10 per month of intense training; 9–10 = overuse injury (2–6 weeks recovery). Plateau events: after reaching a level, progress stalls without changing routine.
- **EXPAND:** `weather-environment.html` §6

### GAP 7.2: Diet Culture & Body Image — SEVERITY: MEDIUM
- **WHAT is missing:** No mechanic for diet culture pressure, body image issues, or the fitness industry's impact on mental health.
- **WHY it matters:** Diet culture affects ~90% of women and growing numbers of men. Body image issues contribute to eating disorders, depression, and anxiety.
- **HOW:** Body Image Score 0–10. Low score: negative self-perception, +2 SP when encountering mirrors/social media fitness posts, −1 to PRC checks in social settings. Dieting: characters may attempt diets (RES check TN 45 weekly to maintain; failure = binge, +3 SP). Social media fitness comparison: SMI ≥ 2 characters gain +1 SP/day from body comparison. Positive fitness identity: characters who exercise for health (not appearance) gain +2 RES and immunity to diet culture SP.
- **EXPAND:** `weather-environment.html` §6 or `mental-health.html`

### GAP 7.3: Cosmetic Procedures — SEVERITY: LOW
- **WHAT is missing:** No mechanic for cosmetic surgery, Botox, teeth whitening, or aesthetic medical procedures.
- **WHY it matters:** The US cosmetic procedure market is $18 billion+. Procedures range from teeth whitening ($500) to full facelifts ($15,000+). They affect self-perception, social confidence, and finances.
- **HOW:** Cosmetic Procedure decision tree: motivation check (why is the character seeking this? EXP check TN 40 to assess if motivation is healthy vs. insecurity-driven), consultation (cost: $200–$500), procedure (VIG check TN 40 for recovery; failure = complications), results (PRC +1 to +3 depending on procedure, but only if motivation was healthy; insecure motivation = temporary boost that fades in 6 months). Costs: Botox ($300–$600, lasts 3–6 months), teeth whitening ($500–$1,000), rhinoplasty ($5,000–$15,000), liposuction ($3,000–$10,000).
- **EXPAND:** `weather-environment.html` §6

### GAP 7.4: Healthcare System Navigation — SEVERITY: MEDIUM
- **WHAT is missing:** Healthcare costs are listed but no mechanic for navigating the US healthcare system: choosing plans, prior authorizations, out-of-network surprises, specialist referrals.
- **WHY it matters:** The US healthcare system is uniquely complex. Patients lose thousands due to billing errors, denied claims, and navigation failures.
- **HOW:** Healthcare Navigation Track: characters must make INT checks to understand insurance terms (TN 45), file appeals for denied claims (TN 50), find in-network providers (TN 40). Prior Authorization events: specialist visits require pre-approval; INT check TN 45 or visit is denied (+3 SP, delay in treatment). Surprise billing: 1d10 per quarter; 1 = unexpected out-of-network bill ($500–$5,000). Medical debt: unpaid bills accumulate interest and go to collections.
- **EXPAND:** `inventory-economy.html` §8

---

## SECTION 8: EDUCATION (NEW PAGE: `education.html`)

### GAP 8.1: College Experience — SEVERITY: MEDIUM
- **WHAT is missing:** No mechanic for the college experience itself: dorm life, party culture, academic pressure, social development, campus politics.
- **WHY it matters:** College is a defining 4-year life chapter for millions. It's where people form identities, meet partners, develop career paths, and accumulate debt.
- **HOW:** College Mini-Campaign (4 years). Each semester: Academic Performance (INT check TN 50 per course; GPA tracker), Social Life (PRC + EXP checks for partying, clubs, Greek life), Financial Management (Budget Score tracker with tuition, room/board, food, textbooks). Campus events: finals week stress (+5 SP), party events (VIG checks for hangover, RES checks for risky behavior), relationship events (college is peak dating years). Greek life: fraternity/sorority membership with its own Social Capital system. Academic probation: if GPA drops below 2.0, financial aid at risk.
- **NEW PAGE:** `education.html`

### GAP 8.2: Trade Schools & Vocational Training — SEVERITY: MEDIUM
- **WHAT is missing:** No mechanic for alternative education paths: trade schools, apprenticeships, coding bootcamps, certifications.
- **WHY it matters:** Trade jobs are in high demand and well-paying. The college-for-all narrative is being challenged. Trade schools cost $5K–$30K vs. $40K–$200K for college.
- **HOW:** Education Path choice at character creation or during play: College (4 years, high cost, high ceiling), Trade School (1–2 years, lower cost, stable income), Apprenticeship (earn while learning, no debt, trade-specific skill +2), Self-Taught (free, slow progress, INT check TN 55 per skill advancement). Each path has different career outcomes, social circles, and lifestyle implications.
- **NEW PAGE:** `education.html`

### GAP 8.3: Going Back to School as an Adult — SEVERITY: LOW
- **WHAT is missing:** No mechanic for adult education, career changes through education, or lifelong learning.
- **WHY it matters:** ~40% of students are non-traditional (25+). Adult students face unique challenges: balancing work/family/study, imposter syndrome, age discrimination.
- **HOW:** Adult Student Track: juggling work + school (+5 SP/week from time pressure), family support check (EXP check TN 45 to maintain relationships while studying), imposter syndrome (RES check TN 50 when surrounded by younger students), financial aid limitations (adult students often ineligible for some aid). Benefits: maturity bonus (+1 to INT checks from life experience), clearer goals (knowing why you're there), networking with professionals.
- **NEW PAGE:** `education.html`

---

## SECTION 9: HOUSING DEEP DIVE (NEW PAGE: `housing.html`)

### GAP 9.1: Landlord Battles & Tenant Rights — SEVERITY: HIGH
- **WHAT is missing:** No mechanic for landlord-tenant conflicts, repair requests, security deposit disputes, or tenant rights.
- **WHY it matters:** Landlord-tenant disputes are among the most common civil conflicts. Bad landlords withhold repairs, raise rent illegally, or retaliate against complaints.
- **HOW:** Landlord Quality Track: Responsive → Adequate → Neglectful → Abusive. At start of each month, if Landlord ≤ Neglectful: repair request event (landlord fails to fix issue; tenant must EXP check TN 45 to advocate; failure = issue persists, −1 Environment Score). Security deposit disputes: at move-out, landlord may withhold deposit; small claims court process (INT + EXP check TN 50). Rent control: in rent-controlled cities, rent increases capped at 3–5% vs. market rate. Tenant's union: organizing with other tenants for collective bargaining.
- **NEW PAGE:** `housing.html`

### GAP 9.2: Eviction Process — SEVERITY: HIGH
- **WHAT is missing:** No detailed eviction mechanic. Inventory-economy mentions eviction as a Financial Freefall consequence but doesn't model the process.
- **WHY it matters:** ~4 million eviction cases are filed annually. The eviction process takes 3–6 months, destroys credit, creates a permanent record, and can lead to homelessness.
- **HOW:** Eviction Track: Missed Rent → Notice to Pay or Quit (14–30 days) → Court Filing → Hearing → Judgment → Writ of Possession → Physical Eviction. At each stage, the tenant can: catch up on rent (Finance check TN 55), negotiate payment plan (EXP check TN 50), seek legal aid (INT check TN 45 to find free lawyer), appeal (if grounds for defense). Eviction record: stays on background for 7 years, making future housing applications much harder (+10 TN on apartment applications).
- **NEW PAGE:** `housing.html`

### GAP 9.3: Home Renovation & Improvement — SEVERITY: LOW
- **WHAT is missing:** No mechanic for home improvement projects.
- **WHY it matters:** Homeowners invest $500–$50,000+ annually in renovations. DIY projects save money but risk disaster. Contractors can be unreliable or overcharge.
- **HOW:** Renovation Project system: scope (cosmetic $500–$5,000; moderate $5,000–$20,000; major $20,000–$100,000+), DIY vs. Contractor (DIY = DXT check TN 45 per task; failure = botched job, may cost more to fix; Contractor = INT check TN 40 to find reliable pro; failure = overcharging or poor work). Permits: major projects require building permits (INT check TN 40; failure = fine $500–$5,000). Home value increase: successful renovation adds 50–70% of cost to home value.
- **NEW PAGE:** `housing.html`

### GAP 9.4: HOA Politics — SEVERITY: LOW
- **WHAT is missing:** HOA fees are listed as a cost but no mechanic for HOA conflicts, rules, or governance.
- **WHY it matters:** ~73 million Americans live in HOA communities. HOAs regulate everything from paint colors to pet sizes to guest parking. HOA conflicts are a major source of stress.
- **HOW:** HOA Relationship Track: Compliant → Questioned → Cited → Fined → Legal Action. Monthly: 1d10; 1 = HOA violation notice (paint color, lawn height, parking, etc.). Resolution: comply (costs time/money) or appeal (EXP check TN 50). Running for HOA board: Leadership campaign, policy influence. HOA fees: $100–$500/month, special assessments $500–$5,000.
- **NEW PAGE:** `housing.html`

---

## SECTION 10: CRIME & SAFETY (NEW PAGE: `crime-safety.html`)

### GAP 10.1: Being a Victim of Crime — SEVERITY: HIGH
- **WHAT is missing:** No mechanic for being victimized by crime: burglary, assault, robbery, carjacking, identity theft.
- **WHY it matters:** ~23 million crimes occur annually in the US. Being a victim has lasting psychological, financial, and practical effects.
- **HOW:** Crime Risk per neighborhood (Low/Medium/High/Critical). Monthly Crime Check: 1d100; threshold based on neighborhood risk. Crime types: Property (theft, burglary — financial loss $200–$10,000, +5 SP), Personal (assault, robbery — physical injury, +8 SP, possible trauma), Digital (identity theft, fraud — months of cleanup, +3 SP/month). Aftermath: reporting to police (EXP check TN 40), insurance claim (see existing system), psychological recovery (RES check TN 50 per month; failure = PTSD symptoms).
- **NEW PAGE:** `crime-safety.html`

### GAP 10.2: Wrongful Accusation — SEVERITY: MEDIUM
- **WHAT is missing:** No mechanic for being falsely accused of a crime.
- **WHY it matters:** Wrongful accusations happen regularly, especially to marginalized groups. The stress of being suspected is devastating even if cleared.
- **HOW:** Wrongful Accusation Event: triggered by 1d100 roll (1–2/year in high-risk demographics). Investigation phase: +5 SP/week, INT check TN 50 to provide evidence of innocence, EXP check TN 45 to maintain composure with investigators. Resolution: cleared (still +3 SP from the experience) or wrongfully convicted (catastrophic — see legal system). Media attention: if publicized, Social Capital drops 3–5 points regardless of outcome.
- **NEW PAGE:** `crime-safety.html`

### GAP 10.3: Self-Defense — SEVERITY: MEDIUM
- **WHAT is missing:** Combat skill exists but no self-defense training, situational awareness, or legal self-defense mechanics.
- **WHY it matters:** Self-defense is a real skill that affects safety outcomes. Legal self-defense (stand your ground, duty to retreat) varies by state and has real legal consequences.
- **HOW:** Self-Defense Skill: trainable through classes ($100–$500, 8–20 hours). Levels: Aware → Trained → Proficient → Expert. Each level reduces Crime Risk by 1 tier. Self-Defense check: when victimized, roll 2d10 + Self-Defense + VIG vs. TN 50. Success = escape unharmed; failure = injury. Legal consequence: using force triggers Police Interaction Check; must justify use of force (EXP check TN 55; failure = criminal charges even if justified). Situational Awareness: trained characters get warning before dangerous situations (prevents 50% of surprise attacks).
- **NEW PAGE:** `crime-safety.html`

### GAP 10.4: Neighborhood Safety — SEVERITY: MEDIUM
- **WHAT is missing:** No mechanic for neighborhood safety ratings, crime hotspots, or how safety affects daily life.
- **WHY it matters:** Neighborhood safety determines: walking comfort, property values, school quality, insurance costs, and daily SP.
- **HOW:** Neighborhood Safety Score 0–100. Affects: daily SP (unsafe neighborhoods add +1 SP/day from ambient stress), property values (±20–50% vs. city average), insurance costs (±30%), walking comfort (unsafe = +5 TN on outdoor tasks after dark), school quality correlation. Gentrification events can change Safety Score over time. Characters can move to safer neighborhoods but face higher rent.
- **NEW PAGE:** `crime-safety.html`

---

## SECTION 11: ENVIRONMENT & CLIMATE (EXPAND `weather-environment.html`)

### GAP 11.1: Climate Anxiety — SEVERITY: MEDIUM
- **WHAT is missing:** No mechanic for eco-anxiety, the psychological toll of living with climate change awareness.
- **WHY it matters:** 54% of young people report climate anxiety. It's a chronic, low-grade stressor that affects daily mood and life decisions.
- **HOW:** Climate Awareness Score 0–10. High awareness: +2 SP/week from eco-anxiety, but also motivates pro-environmental behavior. Climate events (heat waves, storms, fires) trigger +3–8 SP depending on personal impact. Doom spiral: characters with SMI ≥ 2 who consume climate news gain additional +2 SP/day. Mitigation: taking climate action ( volunteering, reducing consumption) reduces SP by 1–2 per action.
- **EXPAND:** `weather-environment.html`

### GAP 11.2: Sustainable Living Costs — SEVERITY: LOW
- **WHAT is missing:** No mechanic for the cost premium of sustainable/ethical consumption.
- **WHY it matters:** Sustainable choices (organic food, EVs, solar panels, ethical clothing) cost 20–200% more than conventional options. This creates a real tension between values and budget.
- **HOW:** Sustainability Track: characters choose how "green" to live. Each level: costs more but reduces environmental impact score. Organic food: +30–50% grocery cost. EV: $30,000–$60,000 upfront but −$500/year in gas. Solar panels: $15,000–$30,000 upfront, −$100–$200/month on electric bill. Ethical clothing: +50–100% cost. Budget impact: high sustainability reduces Budget Score by 5–15 points unless character has high income.
- **EXPAND:** `weather-environment.html`

---

## SECTION 12: MISSING IMAGES

The project has an `img/` directory. Based on the content, these image types are needed:

| Image Type | Purpose | Priority |
|---|---|---|
| **Economic Cycle Diagram** | Visual showing Boom → Recession → Recovery cycle with SP and budget effects | HIGH |
| **Credit Score Impact Chart** | Visual showing how credit score bands affect loan rates, apartment approval, insurance | HIGH |
| **Relationship Structure Map** | Diagram comparing monogamy, polyamory, open relationships, situationships with mechanical differences | HIGH |
| **Housing Market Bubble Timeline** | Visual showing how housing markets inflate and crash over years | HIGH |
| **Climate Risk Heat Map** | Regional map showing disaster frequency by US region | MEDIUM |
| **Career Ladder Diagram** | Visual showing corporate career progression with promotion gates | MEDIUM |
| **Education Path Comparison** | Visual comparing College vs. Trade School vs. Apprenticeship outcomes | MEDIUM |
| **Neighborhood Safety Map** | Example city map with safety zones, crime hotspots, gentrification areas | MEDIUM |
| **Religious Practice Calendar** | Visual showing major religious holidays and their mechanical effects | MEDIUM |
| **Daily Time Budget Infographic** | Visual pie chart showing the 24-hour breakdown (already described, needs illustration) | LOW |
| **Family Budget Cascade Diagram** | Flow chart showing how one expense triggers a cascade of effects | LOW |
| **Character Sheet Mockup** | Visual of filled-out character sheet for reference | LOW |

---

## SECTION 13: MISSING STRUCTURAL ELEMENTS

### 13.1: Sample Campaigns — SEVERITY: HIGH
**WHAT:** No pre-written campaign scenarios. Players have no guidance on how to run a Reality RPG campaign.
**WHY:** New GMs need ready-to-play scenarios to understand how the mechanics work together.
**HOW:** Create `campaigns.html` with 3–5 sample campaigns:
- **"First Apartment"** (18–22 year olds navigating independence, roommates, first jobs)
- **"The Midlife Pivot"** (35–45 year olds facing career changes, aging parents, empty nests)
- **"Starting Over"** (post-divorce, post-bankruptcy, post-disaster recovery)
- **"The Sandwich Generation"** (40–50 year olds caring for kids and aging parents simultaneously)
- **"Digital Nomad"** (remote workers navigating international life)

### 13.2: GM Tools — SEVERITY: HIGH
**WHAT:** No GM-specific tools: encounter tables, random event generators, stress event tables, economic cycle tracker.
**WHY:** GMs need quick-reference tools to run the game without constant page flipping.
**HOW:** Create `gm-tools.html` with:
- Random Life Event Table (1d100, covering all systems)
- Economic Cycle Tracker (printable card)
- Weather/Season Quick Reference
- Stress Event Generator
- Relationship Decay Reminder
- Monthly Budget Check Template
- Random Emergency Table

### 13.3: Quick-Reference Cards — SEVERITY: MEDIUM
**WHAT:** No printable quick-reference cards for players.
**WHY:** The rules are dense. Players need at-a-glance references during play.
**HOW:** Create `quick-reference.html` (printable) with:
- Core d100 resolution rules
- Six attributes and modifiers
- Stress Point levels and effects
- Health condition track
- Relationship tiers and point thresholds
- Daily time budget template
- Budget Score effects

### 13.4: Scenario Generator — SEVERITY: MEDIUM
**WHAT:** No procedural scenario generator for GMs to create custom life events.
**WHY:** GMs need tools to generate interesting, realistic scenarios on the fly.
**HOW:** Create `scenario-generator.html` with:
- 3d6 scenario generator (Category + Complication + Twist)
- Category tables: Work, Home, Relationships, Health, Finance, Legal, Social
- Complication tables: Time pressure, Resource constraint, Social pressure, Moral dilemma
- Twist tables: Unexpected ally, Hidden cost, Cascade effect, Plot convergence

### 13.5: More Worked Examples — SEVERITY: HIGH
**WHAT:** Most pages have 1–3 examples. Each page needs 2–3 additional worked examples showing mechanics in action.
**WHY:** Examples are the #1 way players learn complex systems. The existing examples are excellent but insufficient.
**HOW:** Add examples to every page, especially:
- Macro-economy examples (inflation affecting a character's budget over 3 years)
- Polyamory examples (managing 3 relationships simultaneously)
- Religion examples (weekly worship affecting daily schedule)
- Political examples (organizing a neighborhood campaign)
- Remote work examples (a full week of remote work with boundary failures)

---

## SECTION 14: PRIORITY MATRIX & FILE RECOMMENDATIONS

### Phase 1: HIGH Priority (Create These First)

| New File | Content | Estimated Size |
|---|---|---|
| `macro-economy.html` | Inflation, recessions, credit scores, housing market, wealth inequality, bankruptcy, entrepreneurship, career ladders, unions, automation | ~25K–35K words |
| `relationship-structures.html` | Polyamory, open relationships, situationships, friend groups, roommate conflicts, elder care, childfree/DINK | ~15K–20K words |
| `religion-spirituality.html` | Worship mechanics, deconversion, religious trauma, interfaith marriage, SBNR | ~12K–18K words |
| `politics-activism.html` | Community organizing, polarization, misinformation, lobbying | ~12K–18K words |
| `geography-mobility.html` | Moving cities, expat life, language barriers, diaspora, international dating | ~15K–20K words |
| `remote-work.html` | Remote work deep mechanics, gig economy, multiple jobs | ~10K–15K words |
| `campaigns.html` | 3–5 sample campaigns | ~15K–20K words |
| `gm-tools.html` | GM tools, tables, generators | ~10K–15K words |

### Phase 2: MEDIUM Priority

| New File | Content | Estimated Size |
|---|---|---|
| `housing.html` | Landlord battles, eviction, renovation, HOA | ~10K–15K words |
| `crime-safety.html` | Crime victimization, wrongful accusation, self-defense, neighborhood safety | ~10K–15K words |
| `education.html` | College experience, trade schools, adult education | ~10K–15K words |
| `quick-reference.html` | Printable quick-reference cards | ~5K–8K words |
| `scenario-generator.html` | Procedural scenario generator | ~5K–8K words |

### Phase 3: LOW Priority (Enhancements)

| Enhancement | Target Page | Content |
|---|---|---|
| Climate anxiety | `weather-environment.html` | Eco-anxiety, sustainable living costs |
| Fitness system | `weather-environment.html` | Detailed exercise, diet culture, cosmetic procedures |
| Healthcare navigation | `inventory-economy.html` | Insurance navigation, prior auth, surprise billing |
| Student loans | `law-civic.html` | Expanded student loan crisis mechanics |
| More examples | All pages | 2–3 additional worked examples per page |

### Total Estimated New Content: ~150K–220K words across 13 new/expanded pages

---

## SECTION 15: CROSS-CUTTING OBSERVATIONS

### Mechanical Consistency Issues Found:
1. **Dual TN Systems:** core-mechanics uses d100 TN (25/35/50/65/80/90) while social-dynamics uses d6 TN (5/7/9/10/11+) and law-civic uses d10+modifier DC (8/10/12/14). This inconsistency will confuse players. **Recommendation:** Standardize to one TN system across all pages, or clearly document when each system applies.

2. **Stress Point Recovery Inconsistency:** core-mechanics says −1 SP per good night's sleep; daily-life says exercise clears 2 SP; weather-environment says meditation clears 2 SP; family-children says pets give −2 SP/day. Recovery rates are not harmonized. **Recommendation:** Create a unified SP Recovery Table.

3. **Missing Navigation Links:** Some pages (e.g., `neurodivergence.html`, `disability.html`) are not linked in the nav of all pages. The nav is inconsistent across pages — some include all 17 links, some are missing pages. **Recommendation:** Standardize nav across all pages.

4. **Character Sheet Gaps:** The character sheet (`character-sheet.html`) likely doesn't have fields for all tracked values: Credit Score, Business Health, Political Alignment, Religious Practice Level, Fitness Level, Media Literacy, Diaspora Identity, etc. **Recommendation:** Update character sheet to include all tracked values.

### Design Philosophy Observations:
- The existing pages excel at **micro-realism** (daily routines, item-level detail, cascade failures) but lack **macro-realism** (systemic forces, economic cycles, institutional dynamics).
- The tone is consistently empathetic and non-judgmental — new pages should maintain this voice.
- The mechanical style (tables, dice notation, callout boxes, examples) is excellent and should be replicated exactly.
- Safety tools (X-card, content warnings, Lines & Veils) are well-implemented in sensitive areas — new pages covering trauma-adjacent topics (crime, religious trauma, political polarization) must include equivalent safety language.
