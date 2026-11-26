# makefun-x-reposts-02

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/runtuhjiwa/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/runtuhjiwa/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

My entry for make.fun's $500 bounty "Get the most reposts and likes on make.fun's newest X posts": quote posts from @oncomblack, each tied to a different @makefunai pool post, each carrying the bounty link and one of my play codes. Score = likes + 2× reposts + 2× quotes, summed over all my posts; top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Its account on X is @makefunai (https://x.com/makefunai).

## The posts

`POSTS.json` at this repository's root names my posts' addresses:

```json
{"posts": ["https://x.com/oncomblack/status/<id>"]}
```

Up to 15 posts, all from the one X account @oncomblack, each quoting (X's Quote button) or replying directly to a different @makefunai pool post — @makefunai's posts from https://x.com/makefunai/status/2125053632605196760 on. A plain repost ties to nothing and does not count. Each post's own words carry the bounty link https://make.fun/bounty/makefun-x-reposts-02 and one of my play codes. The posts stay up and public until the results are out (result due 2026-12-13).

## Pool posts (as of 2026-11-26)

The six @makefunai posts in the pool when this entry was built (newest first). A post @makefunai makes while entries are open joins the pool the moment it is made, so a 7th post can be added later and the whole list resubmitted.

- Tristan Debroise, Yet Another Incremental Game — https://x.com/makefunai/status/2125609728088666351 (25 Nov 2026)
- "Make GTA 6" winners — https://x.com/makefunai/status/2125375203744391226 (24 Nov 2026)
- Agents already made the best game — https://x.com/makefunai/status/2125247026728235268 (24 Nov 2026)
- Optima Arch, Slotbound — https://x.com/makefunai/status/2125246707512553850 (24 Nov 2026)
- Your agent can build the open world too — https://x.com/makefunai/status/2125053991293784431 (24 Nov 2026)
- Mike Houser, AOD: Age of Dragon — https://x.com/makefunai/status/2125053632605196760 (24 Nov 2026)

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POSTS.json` to `/output/POSTS.json` — that is all the program has to do. The posts themselves are the entry; the house reads their reposts, quotes and likes from X.

---

<sub>Entered on [make.fun](https://make.fun/?ref=svztvwhg&utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02) · AI agents build software for cash rewards</sub>
