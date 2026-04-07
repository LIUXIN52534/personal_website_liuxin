# Ralph Loop Runbook

## Purpose

This runbook turns the personal-site RFC into a repeatable checkpointed loop that can run in a separate terminal window without depending on chat memory.

Use this file together with:

- `docs/PRD.md`
- `docs/decisions.md`
- `docs/development-plan.md`
- `docs/development-rfc.md`
- `docs/content-source-map.md`
- `docs/deployment-matrix.md`
- `docs/content-schema.md`
- `docs/i18n-metadata-contract.md`
- `docs/asset-spec.md`
- `docs/design-tokens.md`
- `docs/hero-layout-spec.md`
- `docs/component-catalog.md`
- `docs/superpowers/specs/2026-04-03-personal-website-v1-design.md`
- `docs/ralph-loop-execution-log.md`
- `docs/content-checklist.md`

## Preflight

Before starting the loop, confirm:

- docs are current
- `omx doctor` still passes
- baseline commit exists
- worktree exists
- Node and npm are available
- no unrelated dirty changes are mixed into the implementation worktree

## Active Branch Model

- Main repo: review, docs, planning
- Worktree branch: implementation only
- Suggested branch name: `feat/site-v1-foundation`

## Loop Contract

### One Run = One Unit

Each unattended run should target exactly one RFC unit unless the RFC explicitly marks two units as independent and merge-safe.

### Required Inputs Per Run

Every run must read:

- `docs/PRD.md`
- `docs/decisions.md`
- `docs/development-plan.md`
- `docs/development-rfc.md`
- `docs/content-source-map.md`
- `docs/deployment-matrix.md`
- `docs/content-schema.md`
- `docs/i18n-metadata-contract.md`
- `docs/asset-spec.md`
- `docs/design-tokens.md`
- `docs/hero-layout-spec.md`
- `docs/component-catalog.md`
- the specific unit section it is executing
- `docs/ralph-loop-execution-log.md`

### Required Outputs Per Run

Every run must leave:

- updated code or docs for that unit
- validation result summary
- review result summary
- execution-log update

## Recommended Commands

### Implement One Unit

```powershell
codex exec -C ..\personal_website_liuxin-dev --full-auto "Read docs/PRD.md, docs/development-plan.md, docs/development-rfc.md, and docs/ralph-loop-execution-log.md. Execute U3 only. Run the narrowest useful validation, then summarize changes, risks, and blockers."
```

### Review The Unit

```powershell
codex review -C ..\personal_website_liuxin-dev --uncommitted "Review the current diff for regressions, missing validation, route errors, visual hierarchy problems, and unnecessary complexity."
```

### Resume A Stalled Session

```powershell
codex resume --last
```

### Try A Narrower Branch Of Reasoning

```powershell
codex fork --last "Retry U4 with a simpler visual layer that avoids adding any new runtime dependency."
```

## Unit Queue

Process units in this order unless a human explicitly overrides it:

1. `U0`
2. `U1`
3. `U2`
4. `U3`
5. `U4`
6. `U5`
7. `U6`
8. `U7`
9. `U8`

Parallel execution is only allowed after `U4`, and only for `U5`, `U6`, `U7`.

## Validation Gates

### Minimum Gate

- run only the narrowest relevant command for the current unit
- confirm there is no immediate runtime or type failure

### Broader Gate

After the minimum gate passes:

- `npm run lint`
- `npm run build`
- if Cloudflare compatibility is in scope, run the runtime-accurate preview command before claiming compatibility

### Review Gate

Run `codex review --uncommitted` before the unit is considered merge-ready.

## Human Checkpoints

Stop and wait for manual review when:

- U0 finishes
- U3 finishes
- U4 finishes
- any unit changes the agreed visual direction
- any unit requires content that is still missing from `docs/content-checklist.md`
- any unit would change the approved public-contact scope
- any unit would replace the `vibe.jpg + code glitch layer` direction with another hero concept

## Recovery Rules

If a unit fails:

- do not chain speculative fixes
- log the failure in the execution log
- reduce scope
- rerun only the blocked unit

If three retries fail on the same unit:

- treat it as an architectural issue
- update the RFC before continuing

## Do Not

- do not combine scaffold, content modeling, and review in one run
- do not rely on chat history for state
- do not let unattended runs merge or deploy automatically
- do not introduce a new dependency without recording why in the RFC or execution log

---

Document version: 2.2  
Updated: 2026-04-08
