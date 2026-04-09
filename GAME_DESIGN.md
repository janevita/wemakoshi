# Wemakoshi — Game Design Document

**Version:** 1.0  
**Last Updated:** April 2026

---

## Vision

**Wemakoshi** is an AI-powered life companion game where players care for a character who faces real-world challenges across their lifespan. Unlike traditional virtual pets that track hunger and happiness bars, Wemakoshi's character has its own personality, makes autonomous decisions, remembers past experiences, and evolves in response to the quality of care it receives.

The player's goal is not to "win" but to **grow as a caregiver** — developing skills as a teacher, parent, doctor, lawyer, therapist, and friend — while watching the character navigate life with increasing resilience, wisdom, and emotional depth.

---

## Core Design Principles

1. **The character is not a puppet.** It has its own wants, fears, and reactions. It can resist advice, make mistakes, and surprise the player.
2. **Growth is emergent.** The character's development arises from accumulated experiences, not scripted progression.
3. **Every role matters.** Different life challenges require different caregiver perspectives. A therapist approach to a legal problem may comfort but not solve; a lawyer approach to an emotional crisis may miss the point.
4. **Consequences compound.** Early experiences shape later reactions. A child who was taught resilience handles teenage setbacks differently than one who was sheltered.
5. **The player grows too.** Players develop intuition about when to push, when to listen, when to advise, and when to step back.
6. **A life has an arc.** Every character ages from childhood to 65+, passes through milestone moments, and leaves a legacy that shapes the next character.

---

## Character System

### Identity (Player-configured at start)
- **Name** — chosen by player
- **Animal** — chosen from 8 free animals (see Animal System below)
- **Starting age** — 5 (childhood), 13 (teen), 18 (young adult), or 30 (adult)
- **Background seed** — a brief origin that seeds the Big Five personality (e.g., "grew up in a large family," "only child of a single parent," "recently moved to a new city")

### Animal System

Wemakoshi features 13 animal characters rendered as expressive SVG illustrations. Each animal has a unique color palette and body shape. The active cosmetic outfit overrides the animal's natural color scheme; the Classic outfit preserves each animal's natural look.

**Free Animals (8) — available to all players at character creation:**

| Animal | Emoji | Personality Flavour |
|--------|-------|---------------------|
| Pig | 🐷 | Cheerful & curious |
| Cat | 🐱 | Independent & clever |
| Dog | 🐶 | Loyal & energetic |
| Rabbit | 🐰 | Gentle & imaginative |
| Bear | 🐻 | Calm & dependable |
| Cow | 🐮 | Gentle & steady |
| Duck | 🦆 | Playful & social |
| Sheep | 🐑 | Fluffy & calm |

**Premium Exotic Animals (5) — unlocked with Gems:**

| Animal | Emoji | Gem Cost | Personality Flavour |
|--------|-------|----------|---------------------|
| Fox | 🦊 | 15 💎 | Clever & mischievous |
| Panda | 🐼 | 15 💎 | Gentle & thoughtful |
| Capybara | 🦫 | 20 💎 | Chill & social |
| Penguin | 🐧 | 15 💎 | Dapper & determined |
| Red Panda | 🦝 | 20 💎 | Curious & creative |

Premium animals do not appear in the character creation screen — they are exclusively accessible through the Shop once purchased.

### Personality (Big Five model, scale 0–100)
- **Openness** — curiosity, creativity, willingness to try new things
- **Conscientiousness** — discipline, organization, follow-through
- **Extraversion** — social energy, assertiveness, need for connection
- **Agreeableness** — empathy, cooperation, conflict avoidance
- **Neuroticism** — emotional sensitivity, anxiety, stress reactivity

Personality traits shift gradually based on experiences. A child encouraged to explore becomes more open; one punished for mistakes may develop higher neuroticism.

### Emotional State (dynamic, changes in real-time)
- **Happiness** (0–100) — overall life satisfaction
- **Stress** (0–100) — current pressure level
- **Confidence** (0–100) — self-belief and agency
- **Trust** (0–100) — how much the character trusts the player's guidance

### Life Skills (develop over time, 0–100)
- **Academic** — learning ability, problem-solving, knowledge
- **Social** — communication, relationship-building, empathy
- **Emotional** — self-awareness, regulation, resilience
- **Physical** — health awareness, self-care, energy management
- **Creative** — expression, imagination, adaptability
- **Practical** — financial literacy, decision-making, independence

### Memory System
The character maintains a memory of significant events, organized by:
- **What happened** — the event itself
- **How they felt** — emotional impact at the time
- **What the player did** — the caregiver's response
- **Outcome** — how it resolved
- **Lesson learned** — what the character took away

Memories influence future behavior. A character who remembers being listened to during a crisis will be more likely to open up in future crises.

---

## Cosmetics System

Cosmetics are purely visual — they do not affect gameplay stats. All cosmetics are managed through the Shop and stored in the character's save state.

### Outfits (8 total)

Outfits recolor the animal's body using an override palette (main color, light accent, dark accent). The Classic outfit preserves each animal's natural colors.

| Outfit | Cost | Notes |
|--------|------|-------|
| Classic Denim | Free | Each animal's natural look |
| Forest Green | 80 🪙 | Earthy, nature-inspired |
| Sunset Orange | 80 🪙 | Warm autumn tones |
| Ocean Blue | 80 🪙 | Cool, calming blues |
| Rose Quartz | 100 🪙 | Soft pinks and creams |
| Midnight | 100 🪙 | Deep navy and slate |
| Galaxy | 10 💎 | Deep purple starfield |
| Golden Hour | 10 💎 | Rich warm golds |

### Accessories (8 total)

Accessories are SVG overlays rendered on top of the character. Only one can be equipped at a time.

| Accessory | Cost | Description |
|-----------|------|-------------|
| None | Free | No accessory |
| Top Hat | 120 🪙 | A dapper little top hat |
| Flower Crown | 80 🪙 | A wreath of small flowers |
| Bow Tie | 60 🪙 | A classic bow tie |
| Glasses | 60 🪙 | Round reading glasses |
| Cape | 100 🪙 | A small hero's cape |
| Wizard Hat | 12 💎 | A tall starry wizard hat |
| Halo | 8 💎 | A glowing golden ring |

---

## Economy & Monetization

### Dual Currency

**Coins 🪙** — earned through gameplay. Players receive coins for completing interactions, reaching day milestones, and unlocking life stage transitions. Coins are spent on standard cosmetic items.

**Gems 💎** — purchased with real money (simulated in the current prototype). Gems unlock premium cosmetics, premium animals, and story packs. Gems cannot be earned through normal gameplay.

### Gem Store (3 Tiers)

| Pack | Gems | Approx. Price |
|------|------|---------------|
| Starter | 15 💎 | $0.99 |
| Popular | 50 💎 | $2.99 |
| Value | 120 💎 | $5.99 |

### Earning Coins
- Completing a daily interaction: 10–25 🪙 (based on score)
- Completing a week (7 in-game days): 50 🪙 bonus
- Reaching a new life stage: 100 🪙 milestone bonus
- Completing a story pack event: 15–30 🪙 per event, plus a pack completion bonus

### Design Intent
The economy is designed around **perceived value over paywalls**: free players have a rich experience with 8 animals, 8 outfits, 8 accessories, and all 28 built-in life events. Gems buy cosmetic personalization, exotic animals with unique visual design, and curated narrative depth via story packs — not gameplay advantage.

---

## Life Events System

### Full Life Arc — 28 Built-in Events (7 per stage)

Events fire based on the character's age, personality, skills, day count, and weighted randomness. Every stage has 7 events so the character's story never feels thin, regardless of starting age.

**Childhood (5–12)**

| Event | Trigger | Core Theme |
|-------|---------|------------|
| First Day at School | Day ≤ 3 | Anxiety, belonging |
| Trouble at Recess | Day > 3, social < 50 | Bullying, speaking up |
| Struggling with Reading | Day > 5, academic < 45 | Learning differences |
| A Broken Friendship | Day > 8 | Betrayal, forgiveness |
| Saying Goodbye | Day > 10, happiness > 40 | Grief, loss of a pet |
| The Moving Box | Day > 14 | Upheaval, new beginnings |
| The Talent Show | Day > 12, creative < 60 | Courage, performing despite fear |

**Adolescence (13–17)**

| Event | Trigger | Core Theme |
|-------|---------|------------|
| The Party | Always | Peer pressure, identity |
| Who Am I? | Day > 4 | Identity exploration |
| The Grades Spiral | Day > 3, academic < 55 | Pressure, smart ≠ effort |
| The Post | Day > 7 | Social media, cyberbullying |
| First Job Jitters | Day > 5 | Responsibility, imposter syndrome |
| The Almost-Conversation | Day > 6, social < 65 | Vulnerability, crushes |
| Running on Empty | Day > 9, stress > 50 | Mental health, asking for help |

**Young Adulthood (18–25)**

| Event | Trigger | Core Theme |
|-------|---------|------------|
| The Fork in the Road | Always | Career vs. passion |
| Heartbreak | Day > 4 | Loss, self-worth |
| The Bill | Day > 6, practical < 50 | Financial reality |
| Growing Apart | Day > 8, social < 60 | Adult friendship drift |
| The First Session | Day > 5, stress > 45 | Seeking therapy |
| The Highlight Reel | Day > 10 | Comparison, social media |
| The Test of Living Together | Day > 12 | Cohabitation, compromise |

**Adulthood (26–65)**

| Event | Trigger | Core Theme |
|-------|---------|------------|
| The Wall | Always | Burnout, sustainable effort |
| Am I Doing This Right? | Day > 4 | Parenting doubt |
| The Call | Day > 7 | Role reversal, aging parents |
| The Midpoint | Age ≥ 38, Day > 4 | Midlife reflection |
| The Quiet House | Age ≥ 42, Day > 6 | Empty nest, identity |
| What Am I Leaving Behind? | Age ≥ 50, Day > 3 | Legacy thinking |
| The Last Chapter | Age ≥ 58, Day > 4 | Approaching retirement |

### Event Structure
Each event has trigger conditions, a narrative scene, the character's age/personality-aware opening line, an internal thought (visible at high therapist skill), a free-text player response phase (up to 3 exchanges), outcome scoring, and long-term memory effects.

### Crisis Events
Occasionally, major crises occur that test everything — severe bullying, family crisis, health emergency, legal trouble, betrayal, loss. These require careful, multi-step intervention. Wrong approaches can make things worse. The character's accumulated resilience determines baseline coping.

### Idle / Check-in Days
On days when no event fires, the character approaches the player with a low-stakes emotional check-in. These days reinforce the daily habit and generate personality-driven idle dialogue shaped by the character's current mood.

---

## Story Packs (Seasonal Arcs)

Story packs are **curated seasonal narrative arcs** — paid content that adds richly written events with deeper dialogue, unique emotional textures, and completion rewards. Pack events mix into regular gameplay at a 40% chance when eligible.

### How Packs Work
When a player owns one or more packs, the event engine builds a pool of available pack events alongside the standard event pool. Each day, there is a 40% chance a pack event fires (rather than a standard event) if eligible pack events exist for the current life stage. Pack progress is tracked per event. Completing all five events in a pack awards a coin bonus and marks it complete.

### Available Packs (4 × 5 events)

**🌸 Spring Blooms** — 20 💎 | Reward: 60 🪙  
New beginnings, renewal, and the emotional weight of starting over. All life stages.

**☀️ Summer Adventures** — 20 💎 | Reward: 60 🪙  
Freedom, risk, and the bittersweet nature of peak moments. Best for teen and young adult stages.

**🍂 Autumn Reflections** — 20 💎 | Reward: 60 🪙  
Change, loss, and finding meaning in endings. Well-suited to adult and midlife stages.

**❄️ Winter Warmth** — 20 💎 | Reward: 80 🪙  
Five deeply written events across all stages — first snow, holiday pressure, gift-giving, New Year's Eve, and the stillness of deep winter.

---

## Milestone System

At key ages, a full-screen milestone overlay appears — celebrating the character's transition and contextualizing the next life chapter for the player.

| Age | Milestone | Title |
|-----|-----------|-------|
| 13 | 🌿 Teen Years Begin | Identity, pressure, and who they'll become |
| 18 | 🎓 Into Adulthood | The world opens up — and so does responsibility |
| 25 | 🌟 Finding Their Way | Building a life with their own hands |
| 30 | 🏡 Roots and Reach | Knowing themselves a little better now |
| 40 | ⚖️ The Midpoint | Time for reflection and intentional choices |
| 50 | 🌅 A New Horizon | Carrying hard-won wisdom forward |
| 65 | 🌸 A Life Fully Lived | The final chapter approaches |

---

## Life Ending & Legacy System

When the character reaches age 65, the game enters its **ending sequence**.

### The Ending Screen
The ending shows:
- **Character name, animal, age, and days together**
- **Care Score** — the player's average interaction score across the entire run
- **Legacy Tier** — a message tier based on care quality

| Score Range | Legacy Tier | Tone |
|-------------|-------------|------|
| 80–100 | Extraordinary | Deep, unconditional presence recognized |
| 60–79 | Meaningful | Consistent effort, real impact |
| 40–59 | Honest | Imperfect but present |
| 0–39 | Complicated | An honest reckoning with gaps |

Each tier has a unique message written to honor the player's journey without shame.

### Begin Legacy
After the ending, the player can start a new character. The previous character's Big Five personality traits are encoded and passed forward — the new character inherits a 30% personality nudge from their predecessor. This creates an intergenerational thread: caregiving choices echo forward.

A toast message appears shortly after starting the new character: *"🌱 A spark of legacy carried forward…"*

---

## Save & Share System

Progress is never lost. The save system operates on three layers.

### Auto-Save
The game saves automatically to the browser's `localStorage` on every birthday (age-up), and every 3 in-game days. On revisiting the page, the player is prompted to resume their character's story.

### Save Codes
Players can generate a **compact save code** — a base64-encoded JSON snapshot of all essential game state. The code can be:
- Copied to clipboard and stored anywhere
- Pasted back in to restore progress on any device
- Shared as a URL (`?save=<code>`) — anyone who opens the link is prompted to load that character's story

**Serialized state includes:** character identity, all Big Five personality traits, emotional state, skills, player roles, need values, wallet, cosmetics, owned items, pack progress, event history, character memories, day count, and role usage history.

### Social Sharing
Two share modes are available from the "Save & Share" dashboard tab:

**Share Link** — embeds the full save code in a URL. Uses the Web Share API (native share sheet on mobile) with a clipboard fallback on desktop.

**Share Story Card** — generates a text card with the character's name, animal emoji, age, day count, and care score. Shareable to any platform via the same share API chain.

---

## AI Dialogue System (Tiered)

Character responses to player inputs use a three-tier AI system, selected automatically based on the player's setup. This ensures natural dialogue without requiring any API key.

### Tier 1 — Groq Cloud (Primary)
If the player enters a Groq API key (free tier, no credit card required), responses are generated by **Llama 3.1 8B Instant** via Groq's OpenAI-compatible endpoint. This delivers fast, high-quality dialogue (~150 tokens/sec) across all devices including mobile.

The character's personality, emotional state, memories, age, and recent conversation history are injected as a system prompt. The LLM generates in-character responses with natural variation, personality-appropriate language, and contextual memory recall.

Invalid or expired keys are detected silently — the system falls back to the next tier without disrupting gameplay.

### Tier 2 — WebLLM (Offline, Desktop Only)
On desktop browsers with WebGPU support (`navigator.gpu`), the game can load **Llama 3.2 1B Instruct** directly in the browser using WebLLM — no server, no API key. A progress bar tracks the one-time model download (~800MB, cached after first load). Once loaded, dialogue generation runs entirely offline.

WebLLM is not attempted on mobile because WebGPU is not supported in mobile browsers.

### Tier 3 — Enriched Scripted Fallback
When no AI is available (no key, no WebGPU, or offline), the game uses a **personality-driven scripted response system**. Responses are selected from pools keyed by:
- The current interaction type (needs, events, idle)
- The character's Big Five personality values
- Current emotional state (mood score, stress, trust, confidence)
- Interaction score tier (8 tiers from excellent to cold)

The scripted system uses function-wrapped response generators — not static strings — so personality values are evaluated at runtime, producing genuinely varied and contextually appropriate responses even without an LLM.

### AI Status UI
A header chip shows the current AI tier (🟢 Groq / 🔵 Local AI / ⚪ Scripted). Clicking it opens the AI settings modal where players can enter or remove a Groq key, see tier availability, and trigger WebLLM loading manually.

---

## Player System

### Free-Text Interaction
The player does **not** choose a role or pick from multiple-choice options. Instead, the character approaches with a problem, and the player **responds naturally via free text**. The system then analyzes what the player wrote to detect which caregiver skills they demonstrated.

This is a core design decision: the game teaches caregiving by letting people practice it naturally, not by selecting from a menu.

### Caregiver Roles (Detected, Not Chosen)

| Role | Signals Detected | Best For |
|------|-----------------|----------|
| **Teacher** | Guidance, strategies, learning framing, analytical questions | Academic struggles, curiosity, growth mindset |
| **Parent** | Warmth, unconditional support, safety, reassurance | Family conflicts, life transitions, identity |
| **Doctor** | Health awareness, physical care, breathing, sleep/nutrition | Physical/mental health, stress, burnout |
| **Lawyer** | Rights, fairness, boundaries, accountability, advocacy | Bullying, workplace issues, ethical dilemmas |
| **Therapist** | Feeling words, validation, open questions, reflective listening | Emotional crises, trauma, relationship patterns |
| **Friend** | Relatability, humor, casual support, shared experience | Loneliness, celebration, everyday moments |

### Response Evaluation
After each interaction, the player receives an evaluation showing:
- **Overall score** (0–100) based on response quality
- **Detected roles** and their strength (strong/moderate/light)
- **Character impact** — which emotions and skills changed
- **Coaching feedback** — what worked, what was missing, and what to try

### Quality Signals
- **Positive:** Asking questions, active listening language, respecting autonomy, acknowledging feelings, using the character's name
- **Negative:** Dismissiveness, minimizing feelings, toxic positivity, commanding tone, shutting down emotions
- **Effort:** Response length, specificity, follow-up questions

---

## Premium Insights Dashboard

The Premium Insights Dashboard surfaces deeper analytics about the player's caregiving style. Unlocked once with 30 💎.

### Caregiver Archetype System

| Archetype | Emoji | Core Trait | Detected When |
|-----------|-------|-----------|----------------|
| The Confidant | 💛 | Empathy first, always | Therapist/Friend dominant (>60%) |
| The Mentor | 📘 | Growth through wisdom | Teacher dominant |
| The Protector | 🛡️ | Safety above all | Parent dominant |
| The Advocate | ⚖️ | Voice for the voiceless | Lawyer dominant |
| The Healer | 🌿 | Body and mind in balance | Doctor dominant |
| The Balancer | 🌀 | All things in proportion | Uniform role distribution |
| The Specialist | 🎯 | Deep in one lane | Any single role >60%, fewer interactions |
| The Novice | 🌱 | Still finding your way | Fewer than 3 interactions |

Each archetype card shows a dominant strength and a growth edge — where the player can stretch their caregiving practice.

### Impact Analysis
- Radar chart of all six skills and their trends over time
- Emotion history as a line chart
- Interaction score history showing consistency and improvement
- Role breakdown showing how often each caregiver hat was worn

### Caregiver Profile Card
Players can generate a **shareable SVG profile card** showing archetype, caregiver stats, top roles, strength, and growth edge — downloadable and shareable on social media.

### Weekly Reports
Every 7 in-game days, a **Weekly Caregiver Report** is delivered in-chat covering: emotion shifts, skill growth, most-used role, most impactful interaction, and a personal coaching note.

---

## Game Flow

### Time System
- Each in-game "day" represents roughly a week of the character's life
- Every 10 days, the character ages by 1 year
- The game runs from starting age through 65+, spanning 600+ in-game days for a full life

### Daily Loop
1. **Morning Report** — Autonomous events, mood drift, auto-log of personality-driven behavior
2. **Character Approaches** — A life event (built-in or story pack) fires, or an idle check-in
3. **Free Conversation** — Player types natural responses (up to 3 exchanges per event)
4. **Character Reacts** — Response quality determines how the character receives help; AI or scripted response generated
5. **Evaluation** — Score, detected roles, coaching feedback, stat changes
6. **Day Summary** — Stats update, memory formed, time advances, coins awarded, auto-save
7. **Weekly Report** (every 7 days) — In-chat narrative report
8. **Milestone Celebration** (at key ages) — Full-screen overlay marks the life stage transition
9. **Life Ending** (age 65) — Ending screen with care score, legacy message, and legacy start option

### Progression

**Short-term:** Resolving challenges, stabilizing emotions, earning coins.

**Medium-term:** Building skills, deepening relationships, personality growth, cosmetic unlocking.

**Long-term:** Watching the character reach independence and resilience; developing a caregiver archetype; completing story packs; reaching the life ending; starting a legacy run.

### Success Indicators
There is no "win state," but signs of success include: the character voluntarily sharing feelings (high trust), the character making good autonomous decisions (high skills), the character recovering from setbacks faster (resilience), the player's archetype evolving from Novice toward Balancer, and a life ending score in the Meaningful or Extraordinary tier.

---

## Visual Design

### Branding
Wemakoshi has a dedicated logo and app icon:

- **Logo** (`logo.png`) — The full Wemakoshi wordmark in a colorful bubbly treatment. Displayed on the welcome screen (up to 340px wide, 230px on mobile) and in the game header (34px tall) with a pink drop shadow. Falls back to Caveat-font text if the image is unavailable.
- **App Icon** (`icon.png`) — A rounded-square orange-and-yellow eye icon, used as the browser favicon, iOS home screen icon, and PWA install icon. The icon's built-in rounded-square shape makes it naturally maskable for Android adaptive icons.

### Character Representation
Characters are **procedural SVG illustrations** rendered in real-time. Each animal has a distinct body shape, facial structure, ear type, and color palette. The SVG updates based on: active outfit (recolors the body), active accessory (SVG overlay), current mood (posture and expression), and current activity (sleeping, eating, studying, playing, etc.).

Head and ear colors are always the animal's native palette — outfit recoloring applies only to the body, never the face.

### UI Layout
- **Left panel** — Character SVG with mood indicators, needs bars, activity badge
- **Center panel** — Story/dialogue: narrative scene, conversation bubbles, evaluation feedback
- **Right panel** — Skills, emotions, player stats, wallet
- **Shop tab** — Cosmetics browser and gem store
- **Dashboard** — Character Growth, Your Performance, Life Journal, Premium Insights, Save & Share tabs

### Mobile Layout
On screens ≤ 767px, the three panels collapse into a bottom tab bar (🐾 Character / 💬 Story / 📊 Stats) with swipe-between-tab gesture support. The character tab shows a badge when new activity happens while browsing other tabs. iOS viewport height is handled via `--vh` CSS custom property updated on resize.

### Color & Tone
Warm, rounded aesthetic with soft pastels and gentle gradients. Full dark/light theme support via CSS custom properties, switchable from both the welcome screen and the game header.

---

## Platform & Distribution

### PWA
Wemakoshi is installable as a Progressive Web App on any platform. The service worker pre-caches the game shell, logo, and icon for fully offline gameplay. Auto-save ensures no progress is lost between sessions.

### App Stores (via PWABuilder / Capacitor)
- **Google Play** and **Microsoft Store** — via PWABuilder, wrapping the PWA in a Trusted Web Activity
- **Apple App Store** — via Capacitor, with the `$99/year` Apple Developer Program required

### Distribution
Current live version: GitHub Pages (zero infrastructure, free, instant deploys via git push).

---

## Technical Implementation

### Single-File Architecture
The game is a single HTML file with embedded CSS and JavaScript — no build system, no external libraries, no server. Runs in any modern browser. The file is ~245KB.

### State Object (G)
All game state lives in a single JavaScript object `G`:

```
G = {
  charName, animal, age, startAge, day, background,
  personality: { openness, conscientiousness, extraversion, agreeableness, neuroticism },
  emotions:    { happiness, stress, confidence, trust },
  skills:      { academic, social, emotional, physical, creative, practical },
  needs:       { hunger, energy, hygiene, social, fun, health },
  playerRoles: { teacher, parent, doctor, lawyer, therapist, friend },
  wallet:      { coins, gems },
  cosmetics:   { outfit, accessory },
  owned:       { outfits[], accessories[], animals[], packs[], premium },
  packProgress: { packId: [completedEventIds] },
  eventHistory: [],
  memories: [], charMemory: [],
  history:  { interactions[], roleUsage{}, snapshots[] },
  _endingShown: bool
}
```

### Save Code Serialization
Game state is serialized via `_serializeState()` → `JSON.stringify()` → `encodeURIComponent()` → `btoa()`. The resulting base64 string is compact enough to embed in a URL query parameter. Deserialization reverses the chain with full validation (schema version check, safe defaults for missing keys). Schema version is `v:1`.

### SVG Character Rendering
`buildCharSVG(animalKey, activityId, moodScore)` constructs the character SVG dynamically. Outfit colors override the animal's natural body palette via `ov/ovLt/ovDk` variables. Head, ear, and facial colors always use the animal's native `tc/tl/td` values, never overridden by outfits.

### NLP Role Detection
Player responses are analyzed using a keyword + regex pattern matching engine. Each of the 6 roles has a weighted signal list. Scores are normalized and thresholded into strong/moderate/light detection. The overall quality score is computed from positive signals minus negative signals, with length and specificity bonuses.

### Canvas Charts
All analytics charts (radar, line, bar) are rendered using the Canvas 2D API — no external charting library.

### AI Integration
Groq API calls use the OpenAI-compatible endpoint (`https://api.groq.com/openai/v1/chat/completions`, model `llama-3.1-8b-instant`). WebLLM uses `@mlc-ai/web-llm` via dynamic import from `esm.run`, loading `Llama-3.2-1B-Instruct-q4f32_1-MLC`. Both are gated: Groq by key presence, WebLLM by `navigator.gpu` availability.

---

## Roadmap

| Version | Status | Features |
|---------|--------|---------|
| v0.1 | ✅ Complete | Core loop, basic events, personality system, SVG characters |
| v0.2 | ✅ Complete | Full life progression, memory system, all 6 caregiver roles, free-text NLP |
| v0.3 | ✅ Complete | Big Five personality from background, needs system, needs interactions |
| v0.4 | ✅ Complete | Evaluated responses, coaching feedback, skill/emotion progression, cosmetics shop |
| v0.5 | ✅ Complete | Premium animal unlocks, dual currency, 4 seasonal story packs |
| v0.6 | ✅ Complete | 8 caregiver archetypes, impact analysis dashboard, profile card SVG, weekly reports |
| v0.7 | ✅ Complete | Dark/light theme, character display fixes (arm geometry, outfit/head color split) |
| v0.8 | ✅ Complete | Mobile-first layout, bottom tab bar, swipe gestures, PWA packaging, service worker |
| v0.9 | ✅ Complete | Tiered AI dialogue (Groq → WebLLM → enriched scripted), AI settings UI |
| v1.0 | ✅ Complete | Save code system, social sharing, 28-event life arc, milestone celebrations, life ending + legacy, branding assets |
| v1.1 | 🔜 Planned | NPC relationship system (named friends, family, romantic interests with quality scores) |
| v1.2 | 🔜 Planned | Character photo mode (download/share character SVG as styled card) |
| v1.3 | 🔜 Planned | App store release (Google Play via PWABuilder, Apple App Store via Capacitor) |
| v2.0 | 🔜 Planned | Multiplayer care — two players raising the same character, seeing each other's responses |

---

*Wemakoshi — Because the best games teach us to care.*
