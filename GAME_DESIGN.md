# Wemakoshi — Game Design Document

**Version:** 1.2  
**Last Updated:** April 2026

---

## Vision

**Wemakoshi** is an AI-powered life companion game where players care for a character who faces real-world challenges across their lifespan. Unlike traditional virtual pets that track hunger and happiness bars, Wemakoshi's character has its own personality, makes autonomous decisions, remembers past experiences, and evolves in response to the quality of care it receives.

The player's goal is not to "win" but to **grow as a caregiver** — developing skills as a teacher, parent, doctor, lawyer, therapist, and friend — while watching the character navigate life with increasing resilience, wisdom, and emotional depth.

---

## Core Design Principles

1. **The character is a person.** They think, speak, and feel as a human being at their age — not as an animal. Their appearance is the form the player chose; their identity is entirely their own.
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
- **Animal** — chosen from 8 free animals (see Animal System below); determines visual appearance and personality flavor, not identity
- **Starting age** — 5 (childhood), 13 (teen), 18 (young adult), or 30 (adult)
- **Background seed** — a brief origin that seeds the Big Five personality (e.g., "grew up in a large family," "only child of a single parent," "recently moved to a new city")

### Human Identity Model

A foundational design decision: **characters do not know or think of themselves as animals.** The animal selection shapes visual design and informs a personality flavor — it does not define the character's self-concept, speech patterns, or inner world.

In practice this means:
- The character never references fur, paws, tails, whiskers, or species traits
- Their dialogue, vocabulary, and concerns are authentically human at their current age
- The CHAR_PERSONALITY system defines human temperament archetypes (e.g., "self-sufficient and sharp, with a dry wit") that happen to be selected by the animal choice — not animal behaviors

### Animal System

Wemakoshi features 13 animal characters rendered as expressive SVG illustrations. Each animal has a unique color palette and body shape, and maps to a human personality archetype. The active cosmetic outfit overrides the animal's natural color scheme on the body; the head always keeps the animal's native colors.

**Free Animals (8) — available to all players at character creation:**

| Animal | Emoji | Personality Archetype |
|--------|-------|-----------------------|
| Pig | 🐷 | Naturally curious and upbeat — finds joy in small things, asks a lot of questions |
| Cat | 🐱 | Self-sufficient and sharp with dry wit — seems unbothered but cares deeply |
| Dog | 🐶 | Openly enthusiastic and loyal — wears emotions on their sleeve |
| Rabbit | 🐰 | Gentle and sincere with an anxious streak — deeply empathetic, sometimes overthinks |
| Bear | 🐻 | Warm and grounded, a quiet protector — speaks carefully, makes others feel safe |
| Cow | 🐮 | Patient and steady with a nurturing presence — never in a rush, always listening |
| Duck | 🦆 | Chatty and social — fills silences, quick to make jokes, always has an opinion |
| Sheep | 🐑 | Soft-spoken and reflective — observes more than they speak, but lands it when they do |

**Premium Exotic Animals (5) — unlocked with Gems:**

| Animal | Emoji | Gem Cost | Personality Archetype |
|--------|-------|----------|-----------------------|
| Fox | 🦊 | 15 💎 | Sharp and playful with a hint of mischief — thinks quickly, gets bored of the obvious |
| Panda | 🐼 | 15 💎 | Easygoing and quietly philosophical — low-key surface, surprisingly thoughtful underneath |
| Capybara | 🦫 | 20 💎 | Extraordinarily unhurried with zen-like perspective — stress slides off them |
| Penguin | 🐧 | 15 💎 | Composed and somewhat formal, privately quite warm and a little awkward in an endearing way |
| Red Panda | 🦝 | 20 💎 | Passionate and expressive — rides emotional highs and lows hard, treats everything like a big deal |

Premium animals do not appear in the character creation screen — they are exclusively accessible through the Shop once purchased.

### Age-Stage Voice Profiles

The character's speech, vocabulary, emotional register, and concerns shift authentically as they age. This is not cosmetic — the AI system prompt injects a detailed behavioral voice profile tuned to the character's current age, divided into seven sub-stages:

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

Outfits recolor the animal's body using an override palette (main color, light accent, dark accent). The Classic Denim outfit applies a blue denim palette to the body. Head, ear, and facial colors are always the animal's native palette and are never recolored by outfits.

| Outfit | Cost | Notes |
|--------|------|-------|
| Classic Denim | Free | Blue denim palette — each animal's default styled look |
| Forest Green | 80 🪙 | Earthy, nature-inspired |
| Royal Red | 80 🪙 | Bold and proud |
| Pastel Rose | 100 🪙 | Sweet and soft |
| Ocean Blue | 100 🪙 | Deep and cool |
| Sunset Orange | 120 🪙 | Warm and bright |
| Galaxy | 10 💎 | Deep purple starfield |
| Vintage Gold | 8 💎 | Classic warm golds |

### Accessories (9 total)

Accessories are SVG overlays rendered on top of the character. Only one can be equipped at a time.

| Accessory | Cost | Description |
|-----------|------|-------------|
| None | Free | No accessory |
| Top Hat | 120 🪙 | A dapper little top hat |
| Flower Crown | 100 🪙 | A wreath of small flowers |
| Sunglasses | 80 🪙 | Cool vibes |
| Bow Tie | 80 🪙 | Very dapper |
| Backpack | 100 🪙 | Adventure ready |
| Wizard Hat | 12 💎 | A tall starry wizard hat |
| Star Glasses | 10 💎 | Shine bright |

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

The character's personality, emotional state, memories, age, stage-specific voice profile, and recent conversation history are injected as a system prompt. The LLM generates in-character responses with natural variation, personality-appropriate language, and contextual memory recall.

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

### AI System Prompt Design

The system prompt is carefully engineered to prevent common failure modes:

- **Human identity rule** — character is explicitly told they are a person and must not reference animal traits
- **Age voice injection** — a detailed behavioral voice profile matching the character's exact age is included, shaping vocabulary, sentence length, emotional register, and concerns
- **Need state prose** — raw need values (e.g., "Hunger: 23%") are converted to natural inner state descriptions ("pretty hungry") before injection, preventing label parroting
- **Event anchoring** — when a life event is active, a CRITICAL rule block prevents the AI from drifting off-topic mid-conversation
- **Inline dialogue** — all character speech appears in the chat scroll; no floating popup overlay

### AI Status UI
A header chip shows the current AI tier (🟢 Groq / 🔵 Local AI / ⚪ Scripted). Clicking it opens the AI settings modal where players can enter or remove a Groq key, see tier availability, and trigger WebLLM loading manually.

---

## Voice System

Wemakoshi supports full two-way voice interaction using the Web Speech API, requiring no external service or API key.

### Character Voice (Text-to-Speech)
Every line the character speaks in the chat scroll is read aloud automatically using the browser's speech synthesis engine. Voice behavior is tuned by life stage:

| Stage | Pitch | Rate | Tone |
|-------|-------|------|------|
| Child (5–12) | 1.35 | 1.05 | Light, energetic |
| Teen (13–17) | 1.15 | 1.02 | Animated, slightly elevated |
| Young Adult (18–25) | 1.00 | 1.00 | Natural default |
| Adult (26+) | 0.90 | 0.93 | Lower, more measured |

The system selects from available browser voices, preferring local (non-network) English voices. For younger characters it biases toward voices with names suggesting a lighter timbre (Samantha, Karen, Ava, etc.).

**Voice toggle:** A 🔊/🔇 button in the game header lets the player mute character voice at any time. The preference is persisted to `localStorage`. Speech is cancelled immediately when the player begins typing or sends a message.

### Player Voice (Speech-to-Text)
A 🎤 mic button sits next to the send button in the chat input area. Tapping it activates the browser's speech recognition engine. As the player speaks, their words transcribe live into the text field. When speech ends, the input is ready to review and send normally.

- The mic button pulses red while listening
- Sending a message automatically stops any active recording
- Character speech is cancelled when the player sends, preventing overlap
- If the browser does not support `SpeechRecognition` (Firefox), a friendly toast notifies the player

**Browser support:** TTS is available in all modern browsers. STT is available in Chrome, Edge, and Safari.

---

## Player System

### Free-Text Interaction
The player does **not** choose a role or pick from multiple-choice options. Instead, the character approaches with a problem, and the player **responds naturally via free text or voice**. The system then analyzes what the player wrote to detect which caregiver skills they demonstrated.

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
3. **Free Conversation** — Player types or speaks natural responses (up to 3 exchanges per event)
4. **Character Reacts** — Response quality determines how the character receives help; AI or scripted response generated and spoken aloud
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

Head and ear colors are always the animal's native palette — outfit recoloring applies only to the body, never the face. Every outfit including Classic Denim applies a real color palette to the body.

### UI Layout
- **Left panel** — Character SVG with mood indicators, needs bars, activity badge, scene prop
- **Center panel** — Story/dialogue: narrative scene, conversation bubbles, evaluation feedback, chat input with mic button
- **Right panel** — Skills, emotions, player stats, wallet
- **Header** — Logo, day/age/stage info, wallet HUD, shop, dashboard, voice toggle, theme toggle, AI status chip
- **Shop tab** — Cosmetics browser and gem store
- **Dashboard** — Character Growth, Your Performance, Life Journal, Premium Insights, Save & Share tabs

### Mobile Layout
On screens ≤ 767px, the three panels collapse into a bottom tab bar (🐾 Character / 💬 Story / 📊 Stats) with swipe-between-tab gesture support. The character tab shows a badge when new activity happens while browsing other tabs. iOS viewport height is handled via `--vh` CSS custom property updated on resize. Voice input and TTS work on mobile browsers that support the Web Speech API.

### Color & Tone
Warm, rounded aesthetic with soft pastels and gentle gradients. Full dark/light theme support via CSS custom properties, switchable from both the welcome screen and the game header.

---

## Platform & Distribution

### PWA
Wemakoshi is installable as a Progressive Web App on any platform. The service worker pre-caches the game shell, logo, and icon for fully offline gameplay. Cache versioning ensures players always receive the latest build on update. Auto-save ensures no progress is lost between sessions.

### App Stores (via PWABuilder / Capacitor)
- **Google Play** and **Microsoft Store** — via PWABuilder, wrapping the PWA in a Trusted Web Activity
- **Apple App Store** — via Capacitor, with the `$99/year` Apple Developer Program required

### Distribution
Current live version: GitHub Pages (zero infrastructure, free, instant deploys via git push).

---

## Technical Implementation

### Single-File Architecture
The game is a single HTML file with embedded CSS and JavaScript — no build system, no external libraries, no server. Runs in any modern browser.

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
`buildCharSVG(animalKey, activityId, moodScore)` constructs the character SVG dynamically. All outfits (including Classic Denim) define `ov/ovLt/ovDk` color values that override the animal's natural body palette. Head, ear, and facial colors always use the animal's native `tc/tl/td` values and are never overridden.

### AI Prompt Architecture
`buildSystemPrompt()` composes the full character context sent on every AI call:
- Human identity and age (no species reference)
- `CHAR_PERSONALITY` archetype — human temperament descriptor mapped from animal choice
- `_getStageVoice()` — 10-level age-specific behavioral voice profile
- `_needsAsInnerState()` — need values translated to natural prose (e.g., "pretty hungry and tired"), preventing AI label parroting
- Character memories, mood, and current activity
- Core rules including explicit prohibition on animal self-reference

`callClaudeForChat()` appends a per-exchange situational block. When a life event is active, a `CRITICAL` event-anchoring rule prevents the AI from drifting off-topic mid-conversation.

### Voice System
`speakCharLine(text)` strips HTML and bracket tags from character dialogue, then calls `SpeechSynthesisUtterance` with age-tuned pitch and rate values. Voice selection prefers local English voices and biases toward lighter-timbre voices for younger characters. Voices are pre-loaded via `speechSynthesis.getVoices()` on init.

`SpeechRecognition` (or `webkitSpeechRecognition`) powers player voice input. Interim results update the textarea live; final results close the mic automatically.

### NLP Role Detection
Player responses are analyzed using a keyword + regex pattern matching engine. Each of the 6 roles has a weighted signal list. Scores are normalized and thresholded into strong/moderate/light detection. The overall quality score is computed from positive signals minus negative signals, with length and specificity bonuses.

### Canvas Charts
All analytics charts (radar, line, bar) are rendered using the Canvas 2D API — no external charting library.

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
| v1.1 | ✅ Complete | Human identity model — characters think and speak as people, not animals; age-stage voice profiles; AI prompt overhaul (event anchoring, need prose, no label parroting, Day 1 entrance) |
| v1.2 | ✅ Complete | Voice system — character TTS with age-tuned pitch/rate, player STT via mic button, voice toggle; outfit fix (Classic Denim now renders correctly) |
| v1.3 | 🔜 Planned | NPC relationship system (named friends, family, romantic interests with quality scores) |
| v1.4 | 🔜 Planned | Character photo mode (download/share character SVG as styled card) |
| v1.5 | 🔜 Planned | App store release (Google Play via PWABuilder, Apple App Store via Capacitor) |
| v2.0 | 🔜 Planned | Multiplayer care — two players raising the same character, seeing each other's responses |

---

*Wemakoshi — Because the best games teach us to care.*
