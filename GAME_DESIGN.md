# Wemakoshi — Game Design Document

**Version:** 2.1  
**Last Updated:** April 2026

---

## Vision

**Wemakoshi** is an AI-powered life companion game where players care for a human character who faces real-world challenges across their lifespan. The character has a personality, makes autonomous decisions, remembers past experiences, and evolves in response to the quality of care they receive.

The player's goal is not to "win" but to **grow as a caregiver** — developing skills as a teacher, parent, doctor, lawyer, therapist, friend, and champion — while watching the character navigate life with increasing resilience, wisdom, and emotional depth.

Every life has an ending. The character's story closes at age 65. How well you cared for them determines the legacy they leave — and a trace of that legacy carries forward into the next life you begin.

---

## Core Design Principles

1. **The character is a person.** They think, speak, and feel as a human being at their current age. Their appearance is the form the player chose; their identity is entirely their own.
2. **The character is not a puppet.** It has its own wants, fears, and reactions. It can resist advice, make mistakes, and surprise the player.
3. **Growth is emergent.** The character's development arises from accumulated experiences, not scripted progression.
4. **Every role matters.** Different life challenges require different caregiver perspectives. A therapist approach to a legal problem may comfort but not solve; a lawyer approach to an emotional crisis may miss the point.
5. **Consequences compound.** Early experiences shape later reactions. A child who was taught resilience handles teenage setbacks differently than one who was sheltered.
6. **The player grows too.** Players develop intuition about when to push, when to listen, when to advise, and when to step back.
7. **A life has an arc.** Every character ages from childhood to 65+, passes through milestone moments, and leaves a legacy that shapes the next character.
8. **The interface should feel like a game.** The visual design is warm, confident, and candy-bright — not clinical. Players are in a game world, not a form.

---

## Character System

### Identity (Player-configured at start)
- **Name** — chosen by player
- **Avatar** — fully customisable human character (see Human Avatar System below)
- **Starting age** — 5 (childhood), 13 (teen), 18 (young adult), or 30 (adult)
- **Background seed** — a brief origin that seeds the Big Five personality (e.g., "grew up in a large family," "only child of a single parent," "recently moved to a new city")

### Human Avatar System

Characters are fully human. Players build their character using a composable avatar system with six axes of customisation, each rendered in real-time SVG.

**Avatar Properties:**

| Property | Options | Notes |
|----------|---------|-------|
| Skin tone | 6 shades (light → deep) | Applied to face, neck, hands |
| Hair style | Short Bob, Long Straight, Curly, Ponytail, Spiky, Braids | SVG-drawn, age-proportionate |
| Hair colour | 8 colours (black → platinum → red → violet) | Applied to all hair elements |
| Eye shape | Round, Almond, Wide | Affects eye SVG and highlight |
| Outfit style | Casual, Collared, Hoodie, Dress, Jacket, Sporty | Drawn on body, color separate |
| Outfit colour | 6 palettes | Applied to outfit, not skin |
| Accessory | None, Glasses, Hat, Bow, Headband | SVG overlay on head |
| Build | Soft, Strong | Affects body width, jaw, eye weight, blush threshold |

**8 Named Presets** — starter combinations players can apply instantly:

| Preset | Build | Vibe |
|--------|-------|------|
| Sunny | Soft | Light skin, blonde bob, wide eyes, casual blue |
| River | Strong | Medium skin, spiky black, hoodie, purple |
| Sage | Soft | Tan skin, long straight brown, almond, glasses |
| Mika | Soft | Brown skin, violet curls, wide eyes, pink dress, bow |
| Leo | Strong | Dark skin, short bob, almond, jacket, teal |
| Nova | Soft | Deep skin, braids, sporty, headband |
| Quinn | Strong | Medium skin, ponytail, gold hair, collared |
| Ash | Strong | Tan skin, red spiky hair, hoodie, dark grey |

**Aging Proportions** — the avatar automatically changes with age:

| Life Stage | Head Radius | Body | Feel |
|------------|-------------|------|------|
| Child (< 13) | Large (34) | Short, wide | Big-headed, childlike |
| Teen (13–17) | Medium (29) | Taller, leaner | Gangly adolescent |
| Young Adult (18–29) | Smaller (26) | Full height | Established proportions |
| Adult (30+) | Mature (25) | Broader | Settled adult build |

### Age-Stage Voice Profiles

The character's speech, vocabulary, emotional register, and concerns shift authentically as they age. The AI system prompt injects a detailed behavioral voice profile tuned to the current age.

| Age Range | Voice Profile Summary |
|-----------|-----------------------|
| 5–7 | Short sentences, literal thinking, "it's not fair," magical, can't always find the right word |
| 8–9 | Starting to reason but feelings lead, worried about inclusion, earnest to a fault |
| 10–12 | Aware childhood is ending, caring what peers think, beginning to develop opinions |
| 13–14 | Everything high-stakes, identity forming, easily embarrassed, pushing back |
| 15–17 | Stronger opinions, articulate and dramatic in the same breath, relationships feel profound |
| 18–21 | Newly free and overwhelmed, building identity through choices and mistakes |
| 22–25 | More self-aware, thinking about what life will actually look like |
| 26–32 | Complexity accepted, responsibilities real, measured but still feeling deeply |
| 33–38 | Lived-in language, quiet battles, watching what you thought was permanent change |
| 39+ | Earned perspective, thinks about legacy, hard-won warmth and occasional weariness |

### Personality (Big Five model, scale 0–100)
- **Openness** — curiosity, creativity, willingness to try new things
- **Conscientiousness** — discipline, organization, follow-through
- **Extraversion** — social energy, assertiveness, need for connection
- **Agreeableness** — empathy, cooperation, conflict avoidance
- **Neuroticism** — emotional sensitivity, anxiety, stress reactivity

Personality traits shift gradually based on experiences. A child encouraged to explore becomes more open; one punished for mistakes may develop higher neuroticism.

The Big Five traits are dynamically translated into natural-language personality descriptors injected into the AI system prompt (e.g., "curious and drawn to new ideas, outgoing and energised by people, emotionally intense and feels things deeply").

### Emotional State (dynamic, real-time)
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
The character maintains a memory of significant events:
- **What happened** — the event itself
- **How they felt** — emotional impact at the time
- **What the player did** — the caregiver's response
- **Outcome** — how it resolved
- **Lesson learned** — what the character took away

Memories influence future behavior. A character who remembers being listened to during a crisis will be more likely to open up in future crises.

---

## Pet Companion System

Every character can adopt a **pet companion** — a small animal that lives in their scene and has its own needs. The pet creates a Tamagotchi-like parallel care layer that runs alongside the main character loop.

### Pet Types (6, all free to adopt)

| Pet | Personality |
|-----|-------------|
| Cat | Curious and independent |
| Dog | Loyal and endlessly playful |
| Bunny | Gentle and a little shy |
| Hamster | Tiny but full of energy |
| Frog | Calm and wonderfully strange |
| Fox | Clever and full of spirit |

Pets are rendered as mood-reactive SVG illustrations. Each pet type has unique ears, tails, and body details. Mood (happy/neutral/sad) affects eye shape, mouth curve, and cheek blush.

### Pet State

Each pet has four needs (0–100) that decay over time:

| Need | Decay Rate | Restored By |
|------|-----------|-------------|
| Hunger | Medium-fast | Feed |
| Energy | Medium | Cuddle |
| Hygiene | Slow | Groom |
| Happiness | Varies | Play, Cuddle |

Happiness decays faster when the character is stressed (stress > 65 accelerates drain).

### Pet ↔ Character Connection

- **Neglected pet** (overall mood < 35) quietly drains the character's happiness over time
- **Happy pet** (overall mood > 72) gives the character a small happiness lift each tick
- **Cuddling** the pet reduces the character's stress by 4 points — it's mutual comfort
- A speech bubble appears in the scene when any pet need drops below threshold

### Pet Care Actions

| Action | Effect |
|--------|--------|
| Feed | Hunger +38, Energy +5 |
| Play | Happiness +32, Energy −8, Hunger −5 |
| Groom | Hygiene +38, Happiness +8 |
| Cuddle | Happiness +22, Energy +5, character Stress −4, character Happiness +3 |

### Pet Accessories
Players can equip a **collar** in 7 colour options (none, red, blue, green, purple, gold, pink) — free to change at any time via the Shop Pet tab.

---

## Cosmetics System

Cosmetics are purely visual — they do not affect gameplay stats. Managed through the Shop and stored in the save state.

### Avatar Customisation (Free, always available)

All avatar customisation is free and accessible from the **Shop → Customize** tab at any time after character creation.

### Outfits (8 total)

| Outfit | Cost | Notes |
|--------|------|-------|
| Classic Denim | Free | Default |
| Forest Green | 80 coins | Earthy, nature-inspired |
| Royal Red | 80 coins | Bold and proud |
| Pastel Rose | 100 coins | Sweet and soft |
| Ocean Blue | 100 coins | Deep and cool |
| Sunset Orange | 120 coins | Warm and bright |
| Galaxy | 10 gems | Deep purple starfield |
| Vintage Gold | 8 gems | Classic warm golds |

### Accessories (8 total)

| Accessory | Cost |
|-----------|------|
| None | Free |
| Glasses | Free |
| Top Hat | 120 coins |
| Flower Crown | 100 coins |
| Sunglasses | 80 coins |
| Bow | 80 coins |
| Wizard Hat | 12 gems |
| Star Glasses | 10 gems |

---

## Economy & Monetisation

### Dual Currency

**Coins** — earned through gameplay. Spent on standard outfit and accessory cosmetics.

**Gems** — purchased with real money (simulated in prototype). Spent on premium cosmetics and story packs. Also earnable in Game Modes.

### Gem Store (3 Tiers)

| Pack | Gems | Price |
|------|------|-------|
| Starter | 50 | $0.99 |
| Value | 200 | $2.99 |
| Mega | 500 | $5.99 |

### Earning Coins
- Daily interaction score: 10–25 coins
- Completing a week: 50 coin bonus
- Reaching a new life stage: 100 coin milestone bonus
- Story pack event: 15–30 coins per event + completion bonus

### Earning Gems (in-game)
- Need Rush: up to 15 gems per run
- Crossroads: up to 20 gems per run

---

## Life Events System

### Full Life Arc — 28 Built-in Events (7 per stage)

**Childhood (5–12)**

| Event | Core Theme |
|-------|------------|
| First Day at School | Anxiety, belonging |
| Trouble at Recess | Bullying, speaking up |
| Struggling with Reading | Learning differences |
| A Broken Friendship | Betrayal, forgiveness |
| Saying Goodbye | Grief, loss of a pet |
| The Moving Box | Upheaval, new beginnings |
| The Talent Show | Courage, performing despite fear |

**Adolescence (13–17)**

| Event | Core Theme |
|-------|------------|
| The Party | Peer pressure, identity |
| Who Am I? | Identity exploration |
| The Grades Spiral | Pressure, smart ≠ effort |
| The Post | Social media, cyberbullying |
| First Job Jitters | Responsibility, imposter syndrome |
| The Almost-Conversation | Vulnerability, crushes |
| Running on Empty | Mental health, asking for help |

**Young Adulthood (18–25)**

| Event | Core Theme |
|-------|------------|
| The Fork in the Road | Career vs. passion |
| Heartbreak | Loss, self-worth |
| The Bill | Financial reality |
| Growing Apart | Adult friendship drift |
| The First Session | Seeking therapy |
| The Highlight Reel | Comparison, social media |
| The Test of Living Together | Cohabitation, compromise |

**Adulthood (26–65)**

| Event | Core Theme |
|-------|------------|
| The Wall | Burnout, sustainable effort |
| Am I Doing This Right? | Parenting doubt |
| The Call | Role reversal, aging parents |
| The Midpoint | Midlife reflection |
| The Quiet House | Empty nest, identity |
| What Am I Leaving Behind? | Legacy thinking |
| The Last Chapter | Approaching retirement |

### Positive Events

Not all events are struggles. A significant portion of the event pool represents celebrations, wins, and joyful moments. These require the player to **celebrate rather than counsel** — a different caregiving skill entirely.

Positive events elevate the Champion role and penalise joy-dismissal signals ("calm down," "it's not that special").

### Event Structure
Each event has trigger conditions, a narrative scene, an age/personality-aware opening line, an internal thought (visible at high therapist skill), a free-text player response phase (up to 3 exchanges), outcome scoring, and long-term memory effects.

---

## Story Packs (Seasonal Arcs)

Curated seasonal narrative arcs — paid content with richer writing and unique emotional textures. Pack events mix into regular gameplay at 40% chance when eligible.

| Pack | Cost | Reward | Stages |
|------|------|--------|--------|
| Spring Blooms | 20 gems | 60 coins | All |
| Summer Adventures | 20 gems | 60 coins | Teen + Young Adult |
| Autumn Reflections | 20 gems | 60 coins | Adult + Midlife |
| Winter Warmth | 20 gems | 80 coins | All (5 deeply written events) |

---

## Milestone System

| Age | Milestone |
|-----|-----------|
| 13 | Teen Years Begin |
| 18 | Into Adulthood |
| 25 | Finding Their Way |
| 30 | Roots and Reach |
| 40 | The Midpoint |
| 50 | A New Horizon |
| 65 | A Life Fully Lived |

---

## Life Ending & Legacy System

When the character reaches age 65, the game enters its ending sequence.

| Score Range | Legacy Tier |
|-------------|-------------|
| 80–100 | Extraordinary |
| 60–79 | Meaningful |
| 40–59 | Honest |
| 0–39 | Complicated |

**Begin Legacy** — starting a new character inherits a 30% personality nudge from their predecessor, creating an intergenerational thread.

---

## Game Modes

Accessible from the Games button in the header.

### Need Rush
A fast-paced falling-object game. Care items fall from the top of the screen; the player taps the correct care button before each hits the ground. Speed is set by the character's stress level and age.

- **Duration:** 60 seconds
- **Reward:** Up to 15 gems

### Crossroads
A strategic narrative branching puzzle. A scenario unfolds and the player makes two sequential choices without seeing where each path leads. Consequences compound.

- **Depth:** 2 choices deep (3 options each)
- **Reward:** Up to 20 gems, scaled by score

### Pet Time
The Tamagotchi mode. The player opens the pet care sheet and tends to four needs. A happy pet boosts the character's mood; a neglected one quietly drains it.

- **No time limit** — care at your own pace
- **Reward:** Mood boost for character and pet

---

## Save & Share System

### Auto-Save
Saves automatically to `localStorage` on every birthday and every 3 in-game days.

### Save Codes
Players generate a compact base64-encoded JSON snapshot — copyable, pasteable, or shareable as a URL (`?save=<code>`).

**Serialised state includes:** character identity, avatar, Big Five traits, emotional state, skills, player roles, need values, pet state, wallet, cosmetics, owned items, pack progress, event history, memories, day count, role usage history.

---

## Onboarding

New players see a **full-screen intro splash** before character creation. It explains:

1. **The caregiver relationship** — who the character is and what the player's role is
2. **How to play** — talk, guide, and react in free text; your words shape who they become
3. **Needs and growth** — the six needs, how care shows up in their development
4. **Economy** — coins (earned by playing → cosmetics), gems (won in Game Modes → premium unlocks)
5. **The ending** — the story closes at 65; legacy is measured and carried forward

Returning players who have a save skip the intro and land directly on the resume screen.

---

## Player System

### Free-Text Interaction
The player responds naturally via free text or voice. The system analyzes the response to detect which caregiver skills were demonstrated. No role selection, no multiple-choice menus.

### Caregiver Roles (7 — detected, not chosen)

| Role | Signals Detected | Best For |
|------|-----------------|----------|
| Teacher | Guidance, strategies, learning framing, analytical questions | Academic struggles, growth mindset |
| Parent | Warmth, unconditional support, safety, reassurance | Family conflicts, life transitions |
| Doctor | Health awareness, physical care, breathing, sleep/nutrition | Stress, burnout, health crises |
| Lawyer | Rights, fairness, boundaries, advocacy | Bullying, workplace issues, ethical dilemmas |
| Therapist | Feeling words, validation, open questions, reflective listening | Emotional crises, trauma, relationship patterns |
| Friend | Relatability, humor, casual support, shared experience | Loneliness, everyday moments |
| Champion | Celebration, pride, encouragement, recognising achievement | Positive events, wins, milestones |

### Scenario-Aware Evaluation

| Context | Elevated Roles | Depressed Roles |
|---------|----------------|-----------------|
| Positive (celebrations, wins) | Champion, Friend, Parent | Doctor, Lawyer |
| Challenge (conflicts, struggles) | Therapist, Lawyer, Doctor | Champion |
| Need (hunger, sleep, hygiene) | Doctor, Parent, Therapist | Champion |

---

## AI Dialogue System (Tiered)

### Tier 1 — Groq Cloud (Primary)
Free Groq API key → **Llama 3.1 8B Instant** → fast, high-quality responses (~150 tok/s). Works on all platforms including mobile.

### Tier 2 — WebLLM (Offline, Desktop Only)
Desktop with WebGPU → **Llama 3.2 1B Instruct** in-browser, fully offline. ~800MB one-time model download.

### Tier 3 — Enriched Scripted Fallback
Personality-driven response pools keyed by interaction type, Big Five values, emotional state, and score tier. Always available.

### AI Status
An AI chip in the header shows current tier: Groq (green dot) / Local AI (yellow dot) / Scripted (grey).

### System Prompt Design
- Human identity rule — character is a person, no animal references
- Age voice injection — behavioral voice profile matching exact age
- Big Five personality prose
- Need state prose — raw values converted to inner state descriptions
- Event anchoring — prevents off-topic drift during active events

---

## Voice System

### Character Voice (TTS)
Age-tuned pitch and rate via Web Speech API. Default: muted (opt-in).

| Stage | Pitch | Rate |
|-------|-------|------|
| Child (5–12) | 1.35 | 1.05 |
| Teen (13–17) | 1.15 | 1.02 |
| Young Adult (18–25) | 1.00 | 1.00 |
| Adult (26+) | 0.90 | 0.93 |

### Player Voice (STT)
Mic button activates SpeechRecognition. Live transcription into the text field. Available in Chrome, Edge, and Safari.

---

## Premium Insights Dashboard

Unlocked once with 30 gems.

### Caregiver Archetypes (8)

| Archetype | Core Trait | Detected When |
|-----------|-----------|----------------|
| The Confidant | Empathy first | Therapist/Friend dominant |
| The Mentor | Growth through wisdom | Teacher dominant |
| The Protector | Safety above all | Parent dominant |
| The Advocate | Voice for the voiceless | Lawyer dominant |
| The Healer | Body and mind in balance | Doctor dominant |
| The Champion | Celebrates every win | Champion dominant |
| The Balancer | All things in proportion | Uniform role distribution |
| The Novice | Still finding the way | Fewer than 3 interactions |

### Analytics
- Radar chart of life skills with trends
- Emotion history line chart
- Interaction score history
- Role breakdown by frequency and strength

### Weekly Reports
Every 7 in-game days, an in-chat Caregiver Report covers emotion shifts, skill growth, most-used role, most impactful interaction, and a coaching note.

---

## Visual Design

### Philosophy
The UI is candy-bright and game-confident — deep blue panels, orange 3D action buttons, glossy card surfaces, and strong colour contrast. It should feel like opening a polished mobile game, not a form. Typography is Plus Jakarta Sans (sharp, distinctive) with Caveat (handwritten) for emotional moments.

### UI Layout
- **Left panel** — Character SVG scene (with pet companion), activity badge, daily needs bars, alert chips, pet status section
- **Center panel** — Story/dialogue: narrative, conversation bubbles, evaluation feedback, chat input with mic
- **Right panel** — Emotional state, life skills, caregiver roles, memory journal
- **Header** — Logo, season/age/stage, wallet, Shop, Games, Dashboard, voice toggle, theme toggle, AI chip

### Icon System
All UI icons use **LineIcons 5.1 Free** (solid variant) — a self-hosted vector icon font. No emoji in UI chrome. Icons render crisply at any size and in both light and dark modes.

### Character Representation
Procedural SVG illustrations rendered in real-time by `buildHumanSVG(avatar, age, mood, activity)`. Mood affects eye expression, mouth curve, and blush. Activity affects posture animation class. Build ('soft'/'strong') affects body width, jaw shape, eye weight, and blush threshold.

### Scene System
Each activity triggers a different scene background (bedroom, kitchen, bathroom, study, outside, living room) and a contextual scene prop.

### Mobile Layout
On screens ≤ 767px, panels collapse into a bottom tab bar (Character / Story / Stats). Badge indicator appears on the Character tab when new activity occurs.

### Theming
Full dark/light theme via CSS custom properties (`data-theme` attribute). All colours derived from `--bg`, `--card`, `--text`, `--accent`, `--btn-orange`, `--btn-green`. Switching is instant and persisted to `localStorage`.

---

## Platform & Distribution

### PWA
Installable as a Progressive Web App. Service worker pre-caches game shell (including icon font files) for fully offline play. Cache versioning ensures fresh builds on update (currently `wemakoshi-v20`).

### App Stores (planned)
- **Google Play** and **Microsoft Store** — via PWABuilder
- **Apple App Store** — via Capacitor

### Distribution
Current live version: GitHub Pages — zero infrastructure, free, instant deploys via git push.

---

## Technical Implementation

### Architecture
Single HTML file with embedded CSS and JavaScript. No build system, no external libraries, no server. Self-hosted LineIcons font in `/fonts/`.

### State Object (G)

```
G = {
  charName, age, startAge, day, background,
  avatar: { skinTone, hairStyle, hairColor, eyeShape, outfit, outfitColor, accessory, build },
  pet: { type, name, hunger, energy, happiness, hygiene, collar } | null,
  personality: { openness, conscientiousness, extraversion, agreeableness, neuroticism },
  emotions:    { happiness, stress, confidence, trust },
  skills:      { academic, social, emotional, physical, creative, practical },
  needs:       { hunger, energy, hygiene, social, fun, health },
  playerRoles: { teacher, parent, doctor, lawyer, therapist, friend, champion },
  wallet:      { coins, gems },
  cosmetics:   { outfit, accessory },
  owned:       { outfits[], accessories[], packs[], premium },
  packProgress: { packId: [completedEventIds] },
  eventHistory: [],
  memories: [], charMemory: [],
  history:  { interactions[], roleUsage{}, snapshots[] },
  _endingShown: bool
}
```

### Key Functions

| Function | Purpose |
|----------|---------|
| `buildHumanSVG(avatar, age, mood, activity)` | Renders full character SVG |
| `buildPetSVG(type, mood, collar)` | Renders mood-reactive pet SVG |
| `analyzeText(text)` | NLP role detection + scenario-aware weighting |
| `_getScenarioCtx()` | Detects positive / challenge / need context |
| `computeEval(score, roles, ctx)` | Produces grade, feedback, and stat effects |
| `buildSystemPrompt()` | Composes full AI context |
| `tickNeeds()` | Advances needs + pet needs every 8s |
| `showSetup()` | Transitions from intro splash to character creation |

---

## Roadmap

### Completed

| Version | Features |
|---------|---------|
| v0.1 | Core loop, basic events, personality system, SVG characters |
| v0.2 | Full life progression, memory system, caregiver roles, free-text NLP |
| v0.3 | Big Five personality from background, needs system, need interactions |
| v0.4 | Evaluated responses, coaching feedback, skill/emotion progression, cosmetics |
| v0.5 | Premium animals, dual currency, 4 seasonal story packs, save codes, sharing |
| v0.6 | 8 caregiver archetypes, impact dashboard, profile card, weekly reports |
| v0.7 | Dark/light theme |
| v0.8 | Mobile-first layout, bottom tab bar, PWA, service worker |
| v0.9 | Tiered AI dialogue (Groq → WebLLM → enriched scripted) |
| v1.0 | 28-event life arc, milestones, life ending + legacy system |
| v1.1 | Human identity model, age-stage voice profiles, AI prompt overhaul |
| v1.2 | Voice system — TTS with age-tuned pitch/rate, STT mic input |
| v1.3 | Positive events + Champion role, scenario-aware evaluation |
| v1.4 | Human avatar system — skin, hair, eyes, outfit, build, aging proportions, 8 presets |
| v1.5 | Need Rush + Crossroads game modes |
| v1.6 | Pet companion system — 6 pet types, 4 needs, collar accessories, scene integration |
| v1.7 | Build system — Soft/Strong body types |
| v1.8 | Pet Time game mode, pet status in left panel, games hub |
| v1.9 | Game UI redesign — candy-bright palette, 3D buttons, Plus Jakarta Sans, impeccable.style principles |
| v2.0 | LineIcons 5.1 integration — all emoji replaced with crisp self-hosted vector icons |
| v2.1 | Onboarding intro splash — explains the game, roles, economy, and ending before character creation |

### Upcoming

| Version | Priority | Features |
|---------|----------|---------|
| v2.2 | High | **NPC relationship system** — named friends, family members, and romantic interests that persist across seasons; relationship quality affects events and emotional state |
| v2.3 | High | **App store release** — Google Play via PWABuilder, Apple App Store via Capacitor |
| v2.4 | Medium | **Character photo mode** — styled shareable card with character portrait, age, life stats, and caregiver archetype |
| v2.5 | Medium | **Expanded event pool** — 14 more events across all stages (bringing total to 42), with branching based on personality and skill levels reached |
| v2.6 | Medium | **Soundtrack & ambient audio** — per-scene background loops, interaction sound effects, milestone chimes |
| v2.7 | Low | **Caregiver journal** — the player's own reflection space; optional prompts after hard interactions |
| v3.0 | Future | **Multiplayer care** — two players raising the same character, seeing each other's messages, diverging in style |

---

*Wemakoshi — Because the best games teach us to care.*
