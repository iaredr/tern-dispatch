<p align="center"><img src="plugins/tern-dispatch/assets/logo.png" alt="Tern logo" width="160"></p>

# Tern

**Big ideas. Lighter wings.**

You bring the idea. Your main AI decides when to call Luna, how much reasoning to use, and checks the work before delivery.

Tern is a small open-source Codex plugin for focused sub-agent dispatch. It helps the main agent decide when delegation is useful, choose an available model and reasoning effort, and review the result before delivery. It does not split a conversation or promise token savings.

## Install

Add the marketplace and install the plugin:

```sh
codex plugin marketplace add https://github.com/iaredr/tern-dispatch
codex plugin add tern-dispatch@tern-dispatch
```

Start a new Codex task so the installed skill is picked up, then enable it with `$tern-dispatch` or “enable Tern”. To stop it for the current conversation, say “disable Tern” or “关闭 Tern”.

You can use Tern with [ponytail](https://github.com/DietrichGebert/ponytail); Tern handles delegation and ponytail handles implementation simplicity. Tern is an independent plugin and is not derived from ponytail.

## Optional project activation

Add this to a project’s `AGENTS.md` when the project should activate Tern automatically after installation:

```md
If the Tern plugin is installed, apply `$tern-dispatch` for this project. A later user instruction to disable Tern or “关闭 Tern” wins for the current conversation. Do not change global configuration.
```

Chinese usage: say “开启 Tern” or “开启代理调度” to enable it, and “关闭 Tern” or “关闭代理调度” to disable it.

## Website

The product website lives in [`website/`](website/). Run `npm ci` and `npm run dev` there to start it locally. Its interactive token examples are hypothetical, not benchmarks.

## Benchmarking

See [benchmark.md](benchmark.md) for a small, honest comparison method. No savings have been measured yet.

## License

MIT. See [LICENSE](LICENSE).
