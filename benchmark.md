# Benchmarking Tern

Compare paired runs of the same task with the same acceptance criteria: one run without Tern and one with Tern. Keep the task, model availability, relevant inputs, and acceptance decision comparable.

Aggregate input and output tokens from the main run and every child run, including bounded retries. Report cached input separately and do not count it twice. Reasoning tokens are a subset of token usage for this comparison; do not add them again. Tokens are not the same as monetary cost or subscription quota.

This is a paired comparison method, not a savings claim. The [official sub-agent guidance](https://learn.chatgpt.com/docs/agent-configuration/subagents) notes that comparable sub-agent workflows can consume more tokens. There are no measured Tern savings yet. For illustration only, if a baseline uses 30,000 total tokens, a Tern run using 24,000 is hypothetically 20% less; a run using 36,000 is hypothetically 20% more. These examples are not results.
