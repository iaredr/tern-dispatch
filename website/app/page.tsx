import { Flightboard, TokenCalculator, Install } from './tern-interactive';

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#content">
        {'Skip to content'}
      </a>
      <header className="shell nav">
        <a className="wordmark" href="#top">
          <img src="/tern.png" alt="" width="42" height="42" />
          tern<span className="brand-dot">↗</span>
        </a>
        <nav aria-label={'Main navigation'}>
          <a href="#routing">{'How it works'}</a>
          <a href="#tokens">{'Token math'}</a>
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
          {'Get started'}
          <span>↗</span>
        </a>
      </header>
      <section className="shell hero" id="content">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> {'OPEN-SOURCE AGENT DISPATCH'}
          </p>
          <h1>
            Big ideas.
            <br />
            <span>Lighter wings.</span>
          </h1>
          <p className="hero-description">
            {'You bring the idea.'}
            <br />
            {'Your AI finds the right hands.'}
          </p>
          <p className="hero-detail">
            {
              'A lightweight skill for Codex. Work directly when it is simple, call Luna when it helps, and let the main AI check the result.'
            }
          </p>
          <div className="hero-actions">
            <a className="button" href="#install">
              {'Start with Tern'}
              <span>↗</span>
            </a>
            <a className="text-link" href="#routing">
              {'See how it decides'}
              <span>↓</span>
            </a>
          </div>
          <div className="hero-footnote">
            <span>{'MIT LICENSE'}</span>
            <span>{'WORKS WITH PONYTAIL'}</span>
          </div>
        </div>
        <Flightboard />
      </section>
      <div className="principles shell">
        <span>{'Small task? Stay solo.'}</span>
        <span>{'Clear scope. Fresh context.'}</span>
        <span>{'Dispatch. Check. Deliver.'}</span>
      </div>
      <section className="shell intent-section" id="approach">
        <div className="section-intro">
          <p className="section-kicker">{'01 / DELIBERATE BY DEFAULT'}</p>
          <h2>
            {'Just enough thinking.'}
            <br />
            <span>{'Right where it matters.'}</span>
          </h2>
          <p>
            {'Delegation starts with a decision.'}
            <br />
            {'Understand the goal. Then choose who does it.'}
          </p>
          <a
            className="text-link"
            href="https://github.com/iaredr/tern-dispatch/tree/main/plugins/tern-dispatch/skills/tern-dispatch"
            target="_blank"
            rel="noreferrer"
          >
            {'Read the dispatch rules ↗'}
          </a>
        </div>
        <div className="rule-list">
          <article>
            <span className="rule-index">01</span>
            <div>
              <h3>{'Small task? Stay solo.'}</h3>
              <p>
                {
                  'A copy tweak or a quick answer needs no extra agent. Coordination has a cost, too.'
                }
              </p>
            </div>
            <span className="effort-label">MAIN</span>
          </article>
          <article>
            <span className="rule-index">02</span>
            <div>
              <h3>{'Clear scope. The right effort.'}</h3>
              <p>
                {
                  'Luna Low for clear, repeatable work. Medium for connected tasks. Go deeper only when needed, or let the main AI take over.'
                }
              </p>
            </div>
            <span className="effort-label">LUNA</span>
          </article>
          <article>
            <span className="rule-index">03</span>
            <div>
              <h3>{'Dispatch. Check. Deliver.'}</h3>
              <p>
                {
                  'Usually up to two agents at once; three only when useful. Bound their scope. The main AI checks, integrates, and delivers.'
                }
              </p>
            </div>
            <span className="effort-label">CHECK</span>
          </article>
        </div>
      </section>
      <section className="token-section" id="tokens">
        <div className="shell token-grid">
          <div className="section-intro">
            <p className="section-kicker">{'02 / SHOW THE MATH'}</p>
            <h2>
              {'Does it save tokens?'}
              <br />
              <span>{'Show the math.'}</span>
            </h2>
            <p>
              {'More agents can mean more tokens.'}
              <br />
              {'A lighter model is not a lower token count.'}
            </p>
            <p className="honest-note">
              {
                'Tern has no published benchmarks yet. Explore a hypothetical scenario, then compare the same task with and without it. These percentages are calculations, not promises.'
              }
            </p>
            <a
              className="text-link"
              href="https://github.com/iaredr/tern-dispatch/blob/main/benchmark.md"
              target="_blank"
              rel="noreferrer"
            >
              {'Read the benchmark method ↗'}
            </a>
          </div>
          <TokenCalculator />
        </div>
        <div className="shell token-disclaimer">
          <span>{'EFFICIENCY, WITHOUT THE FAIRY TALES.'}</span>
          <p>
            {
              'Token usage, API cost, and subscription limits are different measures.'
            }
            <a
              href="https://learn.chatgpt.com/docs/agent-configuration/subagents"
              target="_blank"
              rel="noreferrer"
            >
              {'Understand agent overhead ↗'}
            </a>
          </p>
        </div>
      </section>
      <section className="shell install-section" id="install">
        <div className="section-intro">
          <p className="section-kicker">{'03 / READY FOR TAKEOFF'}</p>
          <h2>
            {'Less coordination.'}
            <br />
            <span>{'More creation.'}</span>
          </h2>
          <p>
            {'Open source. Easy to read. Yours to adapt.'}
            <br />
            {'One small skill for the way you work.'}
          </p>
          <div className="license-lockup">
            <img src="/tern.png" width="64" height="64" alt="" />
            <div>
              <strong>Tern</strong>
              <span>{'MIT licensed \u00b7 Made for Codex'}</span>
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
        <p>{'Give every task the right wings.'}</p>
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
            {'MIT License \u2197'}
          </a>
        </div>
      </footer>
    </main>
  );
}
