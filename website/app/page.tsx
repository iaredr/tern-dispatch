import { Flightboard, TokenCalculator, Install } from './tern-interactive';

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#content">
        跳到正文
      </a>
      <header className="shell nav">
        <a className="wordmark" href="#top">
          <img src="/tern.png" alt="" width="42" height="42" />
          tern<span className="brand-dot">↗</span>
        </a>
        <nav aria-label="主导航">
          <a href="#routing">如何分工</a>
          <a href="#tokens">Token 账本</a>
          <a
            className="nav-github"
            href="https://github.com/iaredr/tern-dispatch"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </nav>
        <a className="button button-small" href="#install">
          开始使用 <span>↗</span>
        </a>
      </header>
      <section className="shell hero" id="content">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> OPEN-SOURCE AGENT DISPATCH
          </p>
          <h1>
            Big ideas.
            <br />
            <span>Lighter wings.</span>
          </h1>
          <p className="hero-description">
            你负责想法。
            <br />让 AI 决定怎么分工。
          </p>
          <p className="hero-detail">
            一个轻量的 Codex 技能。简单的事直接做，需要帮手时派出 Luna，最后由主
            AI 检查交付。
          </p>
          <div className="hero-actions">
            <a className="button" href="#install">
              让 Tern 接手分工 <span>↗</span>
            </a>
            <a className="text-link" href="#routing">
              看看它如何判断 <span>↓</span>
            </a>
          </div>
          <div className="hero-footnote">
            <span>MIT LICENSE</span>
            <span>WORKS WITH PONYTAIL</span>
          </div>
        </div>
        <Flightboard />
      </section>
      <div className="principles shell">
        <span>Small task? Stay solo.</span>
        <span>Clear scope. Fresh context.</span>
        <span>Dispatch. Check. Deliver.</span>
      </div>
      <section className="shell intent-section" id="approach">
        <div className="section-intro">
          <p className="section-kicker">01 / DELIBERATE BY DEFAULT</p>
          <h2>
            每一份思考，
            <br />
            <span>用在值得的地方。</span>
          </h2>
          <p>
            Tern 不会见到任务就派代理。
            <br />
            先理解目标，再决定谁来做。
          </p>
          <a
            className="text-link"
            href="https://github.com/iaredr/tern-dispatch/tree/main/plugins/tern-dispatch/skills/tern-dispatch"
            target="_blank"
            rel="noreferrer"
          >
            读完整调度规则 ↗
          </a>
        </div>
        <div className="rule-list">
          <article>
            <span className="rule-index">01</span>
            <div>
              <h3>能直接做，就直接做。</h3>
              <p>
                改一句话、回答一个问题，主 AI 就够了。调度的成本也要算进去。
              </p>
            </div>
            <span className="effort-label">MAIN</span>
          </article>
          <article>
            <span className="rule-index">02</span>
            <div>
              <h3>工作有边界，思考有分寸。</h3>
              <p>
                机械工作用 Luna Low；需要理解关联用
                Medium。更复杂时才升档，或交回主 AI。
              </p>
            </div>
            <span className="effort-label">LUNA</span>
          </article>
          <article>
            <span className="rule-index">03</span>
            <div>
              <h3>派出去，也要收回来检查。</h3>
              <p>
                通常最多 2 个代理并行，必要时最多 3 个。限定修改范围，由主 AI
                检查、整合、交付。
              </p>
            </div>
            <span className="effort-label">CHECK</span>
          </article>
        </div>
      </section>
      <section className="token-section" id="tokens">
        <div className="shell token-grid">
          <div className="section-intro">
            <p className="section-kicker">02 / SHOW THE MATH</p>
            <h2>
              省了多少？
              <br />
              <span>把账算明白。</span>
            </h2>
            <p>
              更多代理，不代表更少 token。
              <br />
              更轻的模型，也不等于更少用量。
            </p>
            <p className="honest-note">
              Tern
              还没有公开实测数据。先用假设看看收支，再用同一任务对比验证。这里的百分比随输入变化，不是产品承诺。
            </p>
            <a
              className="text-link"
              href="https://github.com/iaredr/tern-dispatch/blob/main/benchmark.md"
              target="_blank"
              rel="noreferrer"
            >
              查看对比方法 ↗
            </a>
          </div>
          <TokenCalculator />
        </div>
        <div className="shell token-disclaimer">
          <span>EFFICIENCY, WITHOUT THE FAIRY TALES.</span>
          <p>
            Token 用量、API 费用和订阅额度是三种不同的指标。
            <a
              href="https://learn.chatgpt.com/docs/agent-configuration/subagents"
              target="_blank"
              rel="noreferrer"
            >
              了解代理开销 ↗
            </a>
          </p>
        </div>
      </section>
      <section className="shell install-section" id="install">
        <div className="section-intro">
          <p className="section-kicker">03 / READY FOR TAKEOFF</p>
          <h2>
            少一点调度。
            <br />
            <span>多一点创造。</span>
          </h2>
          <p>
            开源、可读、可修改。
            <br />
            一份技能，放进你的工作方式。
          </p>
          <div className="license-lockup">
            <img src="/tern.png" width="64" height="64" alt="" />
            <div>
              <strong>Tern</strong>
              <span>MIT licensed · Made for Codex</span>
            </div>
          </div>
        </div>
        <Install />
      </section>
      <footer className="shell footer">
        <a href="#top" className="wordmark">
          <img src="/tern.png" alt="" width="42" height="42" />
          tern<span className="brand-dot">↗</span>
        </a>
        <p>Give every task the right wings.</p>
        <div>
          <a
            href="https://github.com/iaredr/tern-dispatch"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://github.com/iaredr/tern-dispatch/blob/main/LICENSE"
            target="_blank"
            rel="noreferrer"
          >
            MIT License ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
