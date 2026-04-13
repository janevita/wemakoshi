# Wemakoshi — Game Design Document

**Version:** 2.0  
**Last Updated:** April 2026

---

## Vision

**Wemakoshi** is an AI-powered life companion game where players care for a human character who faces real-world challenges across their lifespan. The character has a personality, makes autonomous decisions, remembers past experiences, and evolves in response to the quality of care they receive.

The player's goal is not to "win" but to **grow as a caregiver** — developing skills as a teacher, parent, doctor, lawyer, therapist, friend, and champion — while watching the character navigate life with increasing resilience, wisdom, and emotional depth.

---

## Core Design Principles

1. **The character is a person.** They think, speak, and feel as a human being at their current age. Their appearance is the form the player chose; their identity is entirely their own.
2. **The character is not a puppet.** It has its own wants, fears, and reactions. It can resist advice, make mistakes, and surprise the player.
3. **Growth is emergent.** The character's development arises from accumulated experiences, not scripted progression.
4. **Every role matters.** Different life challenges require different caregiver perspectives. A therapist approach to a legal problem may comfort but not solve; a lawyer approach to an emotional crisis may miss the point.
5. **Consequences compound.** Early experiences shape later reactions. A child who was taught resilience handles teenage setbacks differently than one who was sheltered.
6. **The player grows too.** Players develop intuition about when to push, when to listen, when to advise, and when to step back.
7. **A life has an arc.** Every character ages from childhood to 65+, passes through milestone moments, and leaves a legacy that shapes the next character.

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

| Pet | Icon | Personality |
|-----|------|-------------|
| Cat | 🐱 | Curious and independent |
| Dog | 🐶 | Loyal and endlessly playful |
| Bunny | 🐰 | Gentle and a little shy |
| Hamster | 🐹 | Tiny but full of energy |
| Frog | 🐸 | Calm and wonderfully strange |
| Fox | 🦊 | Clever and full of spirit |

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

### Pet Care (accessible from)
1. **Character scene** — the pet SVG sits in the bottom-right of the scene; clicking opens the care sheet
2. **Left panel** — a compact status section shows all four need bars and a "Care ›" button
3. **Games hub** — the Pet Time card opens the care sheet directly

### Pet Care Actions

| Action | Effect |
|--------|--------|
| 🍖 Feed | Hunger +38, Energy +5 |
| 🎾 Play | Happiness +32, Energy −8, Hunger −5 |
| 🛁 Groom | Hygiene +38, Happiness +8 |
| 🤗 Cuddle | Happiness +22, Energy +5, character Stress −4, character Happiness +3 |

### Pet Accessories
Players can equip a **collar** in 7 colour options (none, red, blue, green, purple, gold, pink) — free to change at any time via the Shop Pet tab.

### Adoption & Management
- First adoption is free
- Players can rename their pet at any time
- Switching to a different pet type replaces the current one
- Adoption triggers an in-chat narrator message introducing the new companion

---

## Cosmetics System

Cosmetics are purely visual — they do not affect gameplay stats. Managed through the Shop and stored in the save state.

### Avatar Customisation (Free, always available)

All avatar customisation is free and accessible from the **Shop → Customize** tab at any time after character creation. Changes apply live with instant visual feedback.

- Skin tone (6 options)
- Hair style (6 options)
- Hair colour (8 options)
- Eye shape (3 options)
- Outfit style (6 options)
- Outfit colour (6 options)
- Accessory (5 options including none)
- Build — Soft or Strong

### Outfits (8 total — character outfit shop)

| Outfit | Cost | Notes |
|--------|------|-------|
| Classic Denim | Free | Blue denim palette — default |
| Forest Green | 80 🪙 | Earthy, nature-inspired |
| Royal Red | 80 🪙 | Bold and proud |
| Pastel Rose | 100 🪙 | Sweet and soft |
| Ocean Blue | 100 🪙 | Deep and cool |
| Sunset Orange | 120 🪙 | Warm and bright |
| Galaxy | 10 💎 | Deep purple starfield |
| Vintage Gold | 8 💎 | Classic warm golds |

### Accessories (9 total — character accessory shop)

| Accessory | Cost |
|-----------|------|
| None | Free |
| Top Hat | 120 🪙 |
| Flower Crown | 100 🪙 |
| Sunglasses | 80 🪙 |
| Bow Tie | 80 🪙 |
| Backpack | 100 🪙 |
| Wizard Hat | 12 💎 |
| Star Glasses | 10 💎 |

### Pet Accessories (free)
- **Collar** — 7 colour options, equippable at any time from the Shop Pet tab

---

## Economy & Monetisation

### Dual Currency

**Coins 🪙** — earned through gameplay. Spent on standard outfit and accessory cosmetics.

**Gems 💎** — purchased with real money (simulated in the current prototype). Spent on premium cosmetics and story packs.

### Gem Store (3 Tiers)

| Pack | Gems | Approx. Price |
|------|------|---------------|
| Starter | 50 💎 | $0.99 |
| Value | 200 💎 | $2.99 |
| Mega | 500 💎 | $5.99 |

### Earning Coins
- Completing a daily interaction: 10–25 🪙 (based on score)
- Completing a week (7 in-game days): 50 🪙 bonus
- Reaching a new life stage: 100 🪙 milestone bonus
- Completing a story pack event: 15–30 🪙 per event, plus a pack completion bonus
- Game modes: Need Rush up to 15 💎, Crossroads up to 20 💎

---

## Life Events System

### Full Life Arc — 28 Built-in Events (7 per stage)

Events fire based on the character's age, personality, skills, day count, and weighted randomness. Every stage has 7 events so the character's story never feels thin, regardless of starting age.

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

Not all events are struggles. A significant portion of the event pool represents celebrations, wins, and joyful moments the character wants to share. These require the player to **celebrate rather than counsel** — a different caregiving skill entirely.

Examples: gold stars, bike riding triumphs, first kisses, promotions, academic achievements, milestones reached.

Positive events are weighted differently in the evaluation system — the Champion role is elevated, and joy-dismissal signals (e.g., "calm down," "it's not that special") are penalised.

### Event Structure
Each event has trigger conditions, a narrative scene, an age/personality-aware opening line, an internal thought (visible at high therapist skill), a free-text player response phase (up to 3 exchanges), outcome scoring, and long-term memory effects.

### Crisis Events
Occasionally, major crises occur that test everything — severe bullying, family crisis, health emergency, legal trouble, betrayal, loss. These require careful, multi-step intervention. Wrong approaches can make things worse. The character's accumulated resilience determines baseline coping.

### Idle / Check-in Days
On days when no event fires, the character approaches the player with a low-stakes emotional check-in.

---

## Story Packs (Seasonal Arcs)

Story packs are curated seasonal narrative arcs — paid content with richer writing and unique emotional textures. Pack events mix into regular gameplay at a 40% chance when eligible.

| Pack | Cost | Reward | Stages |
|------|------|--------|--------|
| 🌸 Spring Blooms | 20 💎 | 60 🪙 | All |
| ☀️ Summer Adventures | 20 💎 | 60 🪙 | Teen + Young Adult |
| 🍂 Autumn Reflections | 20 💎 | 60 🪙 | Adult + Midlife |
| ❄️ Winter Warmth | 20 💎 | 80 🪙 | All (5 deeply written events) |

---

## Milestone System

| Age | Milestone |
|-----|-----------|
| 13 | 🌿 Teen Years Begin |
| 18 | 🎓 Into Adulthood |
| 25 | 🌟 Finding Their Way |
| 30 | 🏡 Roots and Reach |
| 40 | ⚖️ The Midpoint |
| 50 | 🌅 A New Horizon |
| 65 | 🌸 A Life Fully Lived |

---

## Life Ending & Legacy System

When the character reaches age 65, the game enters its ending sequence showing care score and a Legacy Tier message.

| Score Range | Legacy Tier |
|-------------|-------------|
| 80–100 | Extraordinary |
| 60–79 | Meaningful |
| 40–59 | Honest |
| 0–39 | Complicated |

**Begin Legacy** — the player can start a new character, who inherits a 30% personality nudge from their predecessor, creating an intergenerational thread.

---

## Game Modes

Accessible from the **🎮 Games** button in the game header. Three modes are available once a character has been created.

### ⚡ Need Rush
A fast-paced falling-object game. Care items (food, rest, shower, play, talk, medicine) fall from the top of the screen. The player taps the correct care button before each item hits the ground. Wrong choices are penalised. Speed is influenced by the character's current stress level and age.

- **Duration:** 60 seconds
- **Scoring:** Correct catches accumulate; misses deduct
- **Reward:** Up to 15 💎

### 🌿 Crossroads
A strategic narrative branching puzzle. A scenario unfolds and the player makes two sequential choices without seeing where each path leads. Consequences compound — good first choices compound into better outcomes; poor choices foreclose options. Four scenarios rotate based on the character's current life stage.

- **Depth:** 2 choices deep (3 options each)
- **Scoring:** 3 pts (good) / 1 pt (ok) / 0 pts (bad) — max 6 pts
- **Reward:** Up to 20 💎, scaled proportionally

### 🐾 Pet Time
The Tamagotchi game mode. The player opens the pet care sheet and attends to the pet's needs: feeding, playing, grooming, and cuddling. A happy pet boosts the character's mood; a neglected pet quietly drains it.

- **No time limit** — care at your own pace
- **Reward:** Mood boost for both character and pet; character stress reduction on cuddle
- **Access:** Also from the character scene (click the pet) or the left panel "Care ›" chip

---

## Save & Share System

### Auto-Save
Saves automatically to `localStorage` on every birthday and every 3 in-game days.

### Save Codes
Players generate a compact base64-encoded JSON snapshot. Can be copied, pasted, or shared as a URL (`?save=<code>`).

**Serialised state includes:** character identity, avatar, all Big Five traits, emotional state, skills, player roles, need values, pet state (type, name, needs, collar), wallet, cosmetics, owned items, pack progress, event history, character memories, day count, role usage history.

---

## Player System

### Free-Text Interaction
The player responds naturally via free text or voice. The system analyzes the response to detect which caregiver skills were demonstrated. No role selection, no multiple-choice menus.

### Caregiver Roles (7 — detected, not chosen)

| Role | Signals Detected | Best For |
|------|-----------------|----------|
| **Teacher** 📚 | Guidance, strategies, learning framing, analytical questions | Academic struggles, growth mindset |
| **Parent** 🏠 | Warmth, unconditional support, safety, reassurance | Family conflicts, life transitions |
| **Doctor** 🩺 | Health awareness, physical care, breathing, sleep/nutrition | Stress, burnout, health crises |
| **Lawyer** ⚖️ | Rights, fairness, boundaries, advocacy | Bullying, workplace issues, ethical dilemmas |
| **Therapist** 💜 | Feeling words, validation, open questions, reflective listening | Emotional crises, trauma, relationship patterns |
| **Friend** 🤝 | Relatability, humor, casual support, shared experience | Loneliness, everyday moments |
| **Champion** 🎉 | Celebration, pride, encouragement, recognising achievement | Positive events, wins, milestones |

The Champion role was added specifically to handle positive scenarios — "I'm so proud of you!" and "that's huge!" are high-value signals when a character shares a win, but would be off-key responses to a crisis.

### Scenario-Aware Evaluation

The evaluation system detects the **type of scenario** (positive / challenge / need-based) and adjusts role weights accordingly:

| Context | Elevated Roles | Depressed Roles |
|---------|----------------|-----------------|
| **Positive** (celebrations, wins) | Champion, Friend, Parent | Doctor, Lawyer |
| **Challenge** (conflicts, struggles) | Therapist, Lawyer, Doctor | Champion |
| **Need** (hunger, sleep, hygiene) | Doctor, Parent, Therapist | Champion |

This prevents a high Champion score from appearing on a crisis event just because the player used encouraging words — the weighting ensures contextual appropriateness matters.

**Joy-dismissal signals** (e.g., "calm down," "it's not that special," "don't get too excited") are penalised specifically in positive scenarios, teaching players to celebrate genuinely.

### Response Evaluation

After each interaction:
- **Score** (0–100)
- **Detected roles** with strength (strong / moderate / light)
- **Character impact** — emotional and skill changes
- **Scenario-aware feedback** — rotating contextual messages, not static text

---

## AI Dialogue System (Tiered)

### Tier 1 — Groq Cloud (Primary)
Groq API key (free tier) → **Llama 3.1 8B Instant** → fast, high-quality responses (~150 tokens/sec).

### Tier 2 — WebLLM (Offline, Desktop Only)
Desktop with WebGPU → **Llama 3.2 1B Instruct** in-browser, fully offline. ~800MB one-time model download.

### Tier 3 — Enriched Scripted Fallback
Personality-driven response pools keyed by interaction type, Big Five values, emotional state, and interaction score tier.

### AI System Prompt Design
- **Human identity rule** — character is a person, no animal references
- **Age voice injection** — behavioral voice profile matching exact age
- **Big Five personality prose** — traits translated to natural-language personality descriptor
- **Need state prose** — raw values converted to inner state descriptions
- **Event anchoring** — CRITICAL rule block prevents off-topic drift during active events
- **Build-aware appearance** — avatar visual properties inform self-description when relevant

---

## Voice System

### Character Voice (TTS)
Age-tuned pitch and rate via Web Speech API:

| Stage | Pitch | Rate |
|-------|-------|------|
| Child (5–12) | 1.35 | 1.05 |
| Teen (13–17) | 1.15 | 1.02 |
| Young Adult (18–25) | 1.00 | 1.00 |
| Adult (26+) | 0.90 | 0.93 |

**Default: muted.** Voice is opt-in — the player enables it via the 🔊 header button. Preference persisted to `localStorage`.

### Player Voice (STT)
🎤 mic button activates SpeechRecognition. Live transcription into the text field. Available in Chrome, Edge, and Safari.

---

## Premium Insights Dashboard

Unlocked once with 30 💎.

### Caregiver Archetypes (8)

| Archetype | Core Trait | Detected When |
|-----------|-----------|----------------|
| The Confidant 💛 | Empathy first | Therapist/Friend dominant |
| The Mentor 📘 | Growth through wisdom | Teacher dominant |
| The Protector 🛡️ | Safety above all | Parent dominant |
| The Advocate ⚖️ | Voice for the voiceless | Lawyer dominant |
| The Healer 🌿 | Body and mind in balance | Doctor dominant |
| The Champion 🎉 | Celebrates every win | Champion dominant |
| The Balancer 🌀 | All things in proportion | Uniform role distribution |
| The Novice 🌱 | Still finding the way | Fewer than 3 interactions |

### Analytics
- Radar chart of life skills with trends
- Emotion history line chart
- Interaction score history
- Role breakdown

### Weekly Reports
Every 7 in-game days, an in-chat Caregiver Report covers emotion shifts, skill growth, most-used role, most impactful interaction, and a coaching note.

---

## Game Flow

### Time System
- Each in-game "day" represents roughly a week of the character's life
- Every 10 days, the character ages by 1 year
- Full life arc: starting age through 65+, spanning 600+ in-game days

### Daily Loop
1. **Morning Report** — Autonomous events, mood drift, needs decay
2. **Character Approaches** — Life event fires, or idle check-in
3. **Free Conversation** — Player types or speaks (up to 3 exchanges)
4. **Character Reacts** — AI or scripted response, spoken aloud
5. **Evaluation** — Score, roles, coaching feedback, stat changes
6. **Day Summary** — Stats update, memory formed, time advances, coins awarded, auto-save
7. **Weekly Report** (every 7 days)
8. **Milestone Celebration** (at key ages)
9. **Life Ending** (age 65) — Ending screen, legacy option

### Needs System (runs continuously)
Six physical/social needs decay in real-time every 8 seconds:

| Need | Decay | Alert Threshold |
|------|-------|-----------------|
| Hunger 🍎 | 0.35/tick | < 30 |
| Energy ⚡ | 0.22/tick | < 25 |
| Hygiene 🧼 | 0.14/tick | — |
| Social 💬 | 0.28/tick | < 25 |
| Fun 🎮 | 0.18/tick | < 20 |
| Health ❤️ | Derived | — |

When needs drop critically, an **alert chip** appears in the left panel with a character opening line the player can respond to.

---

## Visual Design

### UI Layout
- **Left panel** — Character SVG scene (with pet companion), activity badge, daily needs bars, pet status section (needs + care button), alert chips
- **Center panel** — Story/dialogue: narrative scene, conversation bubbles, evaluation feedback, chat input with mic button
- **Right panel** — Emotional state, life skills, caregiver roles, memory journal
- **Header** — Logo, day/age/stage, wallet HUD, shop, dashboard, games, voice toggle, theme toggle, AI status chip

### Character Representation
Characters are procedural SVG illustrations rendered in real-time by `buildHumanSVG(avatar, age, mood, activity)`. The avatar object drives all visual properties. Mood affects eye expression, mouth curve, and blush. Activity affects posture animation class (float, bounce, sway, sleep). Build ('soft'/'strong') affects body width, jaw shape, eye weight, and blush threshold.

### Pet Representation
Pets are mood-reactive SVG illustrations rendered by `buildPetSVG(type, mood, collar)`. Eyes widen and smile when happy; droop when sad. Blush cheeks appear when content. Collar is an SVG ellipse at the neck. The pet lives in the character scene bottom-right corner, scaled to roughly 60×60px.

### Scene System
Each activity triggers a different scene background (bedroom, kitchen, bathroom, study, outside, living room) and a contextual scene prop emoji.

### Mobile Layout
On screens ≤ 767px, panels collapse into a bottom tab bar (🐾 Character / 💬 Story / 📊 Stats). Badge indicator appears on the Character tab when new activity occurs.

---

## Platform & Distribution

### PWA
Installable as a Progressive Web App. Service worker pre-caches game shell for fully offline play. Cache versioning ensures fresh builds on update (currently `wemakoshi-v15`).

### App Stores
- **Google Play** and **Microsoft Store** — via PWABuilder
- **Apple App Store** — via Capacitor

### Distribution
Current live version: GitHub Pages (zero infrastructure, free, instant deploys via git push).

---

## Technical Implementation

### Single-File Architecture
Single HTML file with embedded CSS and JavaScript. No build system, no external libraries, no server.

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
| `buildHumanSVG(avatar, age, mood, activity)` | Renders full character SVG with build/age/mood-aware proportions |
| `buildPetSVG(type, mood, collar)` | Renders pet SVG with mood-reactive expression and optional collar |
| `_avProps(age)` | Returns age-appropriate head/body proportions |
| `analyzeText(text)` | NLP role detection + scenario-aware weighting |
| `_getScenarioCtx()` | Detects positive / challenge / need context |
| `computeEval(score, roles, ctx)` | Produces scenario-aware grade, feedback, and effects |
| `buildSystemPrompt()` | Composes full AI context with Big Five prose, age voice, need prose |
| `tickNeeds()` | Advances needs + pet needs decay every 8s; triggers alerts |
| `updatePetUI()` | Renders pet in character scene |
| `updatePetStatusUI()` | Renders compact pet status in left panel |

### Evaluation Architecture

`analyzeText()` scans player responses against keyword + regex signal lists for all 7 roles. Post-scoring, multipliers from `_getScenarioCtx()` are applied — so Champion × 1.6 on a positive event, Champion × 0.6 on a challenge. `computeEval()` then maps to grade/feedback using context-specific rotating message pools (no static strings).

---

## Roadmap

| Version | Status | Features |
|---------|--------|---------|
| v0.1 | ✅ | Core loop, basic events, personality system, SVG characters |
| v0.2 | ✅ | Full life progression, memory system, caregiver roles, free-text NLP |
| v0.3 | ✅ | Big Five personality from background, needs system, need interactions |
| v0.4 | ✅ | Evaluated responses, coaching feedback, skill/emotion progression, cosmetics |
| v0.5 | ✅ | Premium animals, dual currency, 4 seasonal story packs |
| v0.6 | ✅ | 8 caregiver archetypes, impact dashboard, profile card, weekly reports |
| v0.7 | ✅ | Dark/light theme |
| v0.8 | ✅ | Mobile-first layout, bottom tab bar, swipe gestures, PWA, service worker |
| v0.9 | ✅ | Tiered AI dialogue (Groq → WebLLM → enriched scripted) |
| v1.0 | ✅ | Save codes, social sharing, 28-event life arc, milestones, life ending + legacy |
| v1.1 | ✅ | Human identity model, age-stage voice profiles, AI prompt overhaul |
| v1.2 | ✅ | Voice system — TTS with age-tuned pitch/rate, STT mic input |
| v1.3 | ✅ | Positive events + Champion role, scenario-aware evaluation, sound default off |
| v1.4 | ✅ | Human avatar system — skin, hair, eyes, outfit, build, aging proportions, 8 presets |
| v1.5 | ✅ | Need Rush + Crossroads game modes |
| v1.6 | ✅ | Pet companion system — 6 pet types, 4 needs, collar accessories, scene integration |
| v1.7 | ✅ | Build system — Soft/Strong body types, masculine/feminine avatar range |
| v1.8 | ✅ | Pet Time game mode, pet status in left panel, games hub restructure |
| v2.0 | 🔜 | NPC relationship system (named friends, family, romantic interests) |
| v2.1 | 🔜 | Character photo mode (download/share styled character card) |
| v2.2 | 🔜 | App store release (Google Play via PWABuilder, Apple App Store via Capacitor) |
| v3.0 | 🔜 | Multiplayer care — two players raising the same character |

---

*Wemakoshi — Because the best games teach us to care.*
