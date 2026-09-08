---
name: tern-dispatch
description: Use when the user enables Tern, asks for $tern-dispatch, or requests automatic delegation to Codex sub-agents. The main agent chooses whether to delegate, selects an available model and reasoning effort, and accepts the result.
---

# Tern

Use this skill to coordinate focused sub-agent work inside the current task. The main agent keeps responsibility for understanding the goal, integrating changes, checking results, and delivering the final answer.

## Enable and disable

- Enable for the current conversation when the user says “enable Tern”, “开启 Tern”, “开启代理调度”, or invokes `$tern-dispatch`.
- Disable when the user says “disable Tern”, “关闭 Tern”, “关闭代理调度”, or “stop tern dispatch”. Do not start new or replacement sub-agents after that; finish safe in-flight work and report anything unfinished.
- A project instruction may activate this skill when it is installed; follow that project activation without changing global defaults or global instructions. A later user instruction to disable Tern wins for the current conversation.
- Do not split the conversation or create a new conversation.
- Tern controls delegation. Other skills, including ponytail, continue to control their own concerns and can be used together.

## Decide whether to delegate

Understand the goal and inspect the necessary material first. The main agent should work directly when the task is tiny, purely conversational, tightly coupled, or when delegation and review would cost more than it saves.

- Clear, bounded mechanical work: dispatch `model: "gpt-5.6-luna"` with `reasoning_effort: "low"`.
- Work that needs code reading or a few related files: use `model: "gpt-5.6-luna"` with `reasoning_effort: "medium"`.
- Complex, independent reasoning: use `model: "gpt-5.6-luna"` with `reasoning_effort: "high"`, or keep it with the main agent.
- Use `reasoning_effort: "max"` only for a clear problem where more reasoning has concrete value; the main agent may take over instead.

Check the current tool-provided model list before dispatching. Availability is environment-specific. An explicit model or reasoning preference from the user always wins; pass it explicitly when spawning. If the requested model or effort is unavailable, say so plainly and do not silently substitute another model for dependent work. If delegation was optional, the main agent may take over; if the user explicitly required the unavailable agent, report the blocker instead.

## Dispatch rules

- Dispatch only independent, bounded work with its input, allowed file scope, and acceptance criteria stated clearly.
- Use the current environment’s sub-agent tool. If delegation was optional and the tool is unavailable, the main agent completes the work and briefly says why. If the user explicitly required an unavailable agent, report the blocker instead.
- When spawning, pass the selected `model`, `reasoning_effort`, and `fork_turns: "none"`. Do not inherit the full conversation as a substitute for focused context.
- Run at most 2 sub-agents by default. A third is allowed only when it is genuinely independent and useful; never exceed 3 or the environment’s lower limit.
- Do not let sub-agents dispatch more sub-agents. Do not have multiple agents edit the same file at the same time.
- While a sub-agent runs, the main agent should advance other independent useful work when available.
- Retries are bounded: after a failure, identify the cause and retry once with a concrete correction. If it fails again, the main agent takes over or stops with a clear blocker. Never retry indefinitely or use model escalation as a loop.
- The main agent must inspect the actual result, run the relevant checks, resolve integration issues, and make the final acceptance decision. A sub-agent’s claim of success is not acceptance.
- Do not use delegation to split one user conversation into several conversations.

Keep the user-facing report concise: mention the actual model and effort only when confirmed by the tool, the checks performed, and any handoff to the main agent. Never claim token savings, speedups, or other metrics without measurements.
