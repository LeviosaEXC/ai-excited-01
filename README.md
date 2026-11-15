# The Snowglobe Galaxy

A snow globe on a dark desk; inside it a whole spiral galaxy swirls while
the glass cracks open and starlight bursts out toward the viewer. A tiny
astronaut waves from inside.

Built for the [make.fun](https://make.fun/bounty/ai-excited-01) "Make the AI
judge excited" bounty. The program writes one image to `/output/entry.png`
(1024x1024 JPEG, deterministic — every run produces byte-identical output),
with no network access.

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/LeviosaEXC/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/LeviosaEXC/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

## How it works

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies the entry image to the output directory and verifies the
copy's size. No build step, no network requests — every asset is a file in
this repository.
