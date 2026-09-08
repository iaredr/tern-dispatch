'use client';
import { useEffect, useState } from 'react';
import { Flightboard, TokenCalculator, Install } from './tern-interactive';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const t = (en: string, zh: string) => (language === 'en' ? en : zh);
  useEffect(() => {
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
  }, [language]);
  return (
    <main id="top">
      <a className="skip-link" href="#content">
        {t('Skip to content', '跳到正文')}
      </a>
      <header className="shell nav">
        <a className="wordmark" href="#top">
          <img src="/tern.png" alt="" width="42" height="42" />
          tern<span className="brand-dot">↗</span>
        </a>
        <nav aria-label={t('Main navigation', '主导航')}>
          <a href="#routing">{t('How it works', '如何分工')}</a>
          <a href="#tokens">{t('Token math', 'Token 账本')}</a>
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
          {t('Get started', '开始使用')}
          <span>↗</span>
        </a>
        <div
          className="language-switch"
          role="group"
          aria-label={t('Language', '语言')}
        >
          <button
            type="button"
            lang="en"
            aria-pressed={language === 'en'}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button
            type="button"
            lang="zh-CN"
            aria-pressed={language === 'zh'}
            onClick={() => setLanguage('zh')}
          >
            中文
          </button>
        </div>
      </header>
      <section className="shell hero" id="content">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />{' '}
            {t('OPEN-SOURCE AGENT DISPATCH', '开源 AI 代理调度')}
          </p>
          <h1>
            Big ideas.
            <br />
            <span>Lighter wings.</span>
          </h1>
          <p className="hero-description">
            {t('You bring the idea.', '你负责想法。')}
            <br />
            {t('Your AI finds the right hands.', '让 AI 决定怎么分工。')}
          </p>
          <p className="hero-detail">
            {t(
              'A lightweight skill for Codex. Work directly when it is simple, call Luna when it helps, and let the main AI check the result.',
              '一个轻量的 Codex 技能。简单的事直接做，需要帮手时派出 Luna，最后由主 AI 检查交付。',
            )}
          </p>
          <div className="hero-actions">
            <a className="button" href="#install">
              {t('Start with Tern', '让 Tern 接手分工')}
              <span>↗</span>
            </a>
            <a className="text-link" href="#routing">
              {t('See how it decides', '看看它如何判断')}
              <span>↓</span>
            </a>
          </div>
          <div className="hero-footnote">
            <span>{t('MIT LICENSE', 'MIT 开源许可')}</span>
            <span>{t('WORKS WITH PONYTAIL', '可与 PONYTAIL 搭配使用')}</span>
          </div>
        </div>
        <Flightboard t={t} />
      </section>
      <div className="principles shell">
        <span>{t('Small task? Stay solo.', '小任务，直接完成。')}</span>
        <span>
          {t('Clear scope. Fresh context.', '明确范围，精简上下文。')}
        </span>
        <span>{t('Dispatch. Check. Deliver.', '分派、检查、交付。')}</span>
      </div>
      <section className="shell intent-section" id="approach">
        <div className="section-intro">
          <p className="section-kicker">
            {t('01 / DELIBERATE BY DEFAULT', '01 / 先判断，再分工')}
          </p>
          <h2>
            {t('Just enough thinking.', '每一份思考，')}
            <br />
            <span>{t('Right where it matters.', '用在值得的地方。')}</span>
          </h2>
          <p>
            {t(
              'Delegation starts with a decision.',
              'Tern 不会见到任务就派代理。',
            )}
            <br />
            {t(
              'Understand the goal. Then choose who does it.',
              '先理解目标，再决定谁来做。',
            )}
          </p>
          <a
            className="text-link"
            href="https://github.com/iaredr/tern-dispatch/tree/main/plugins/tern-dispatch/skills/tern-dispatch"
            target="_blank"
            rel="noreferrer"
          >
            {t('Read the dispatch rules ↗', '读完整调度规则 ↗')}
          </a>
        </div>
        <div className="rule-list">
          <article>
            <span className="rule-index">01</span>
            <div>
              <h3>{t('Small task? Stay solo.', '能直接做，就直接做。')}</h3>
              <p>
                {t(
                  'A copy tweak or a quick answer needs no extra agent. Coordination has a cost, too.',
                  '改一句话、回答一个问题，主 AI 就够了。调度的成本也要算进去。',
                )}
              </p>
            </div>
            <span className="effort-label">MAIN</span>
          </article>
          <article>
            <span className="rule-index">02</span>
            <div>
              <h3>
                {t(
                  'Clear scope. The right effort.',
                  '工作有边界，思考有分寸。',
                )}
              </h3>
              <p>
                {t(
                  'Luna Low for clear, repeatable work. Medium for connected tasks. Go deeper only when needed, or let the main AI take over.',
                  '机械工作用 Luna Low；需要理解关联用 Medium。更复杂时才升档，或交回主 AI。',
                )}
              </p>
            </div>
            <span className="effort-label">LUNA</span>
          </article>
          <article>
            <span className="rule-index">03</span>
            <div>
              <h3>
                {t('Dispatch. Check. Deliver.', '派出去，也要收回来检查。')}
              </h3>
              <p>
                {t(
                  'Usually up to two agents at once; three only when useful. Bound their scope. The main AI checks, integrates, and delivers.',
                  '通常最多 2 个代理并行，必要时最多 3 个。限定修改范围，由主 AI 检查、整合、交付。',
                )}
              </p>
            </div>
            <span className="effort-label">CHECK</span>
          </article>
        </div>
      </section>
      <section className="token-section" id="tokens">
        <div className="shell token-grid">
          <div className="section-intro">
            <p className="section-kicker">
              {t('02 / SHOW THE MATH', '02 / 把账算明白')}
            </p>
            <h2>
              {t('Does it save tokens?', '省了多少？')}
              <br />
              <span>{t('Show the math.', '把账算明白。')}</span>
            </h2>
            <p>
              {t(
                'More agents can mean more tokens.',
                '更多代理，不代表更少 token。',
              )}
              <br />
              {t(
                'A lighter model is not a lower token count.',
                '更轻的模型，也不等于更少用量。',
              )}
            </p>
            <p className="honest-note">
              {t(
                'Tern has no published benchmarks yet. Explore a hypothetical scenario, then compare the same task with and without it. These percentages are calculations, not promises.',
                'Tern 还没有公开实测数据。先用假设看看收支，再用同一任务对比验证。这里的百分比随输入变化，不是产品承诺。',
              )}
            </p>
            <a
              className="text-link"
              href="https://github.com/iaredr/tern-dispatch/blob/main/benchmark.md"
              target="_blank"
              rel="noreferrer"
            >
              {t('Read the benchmark method ↗', '查看对比方法 ↗')}
            </a>
          </div>
          <TokenCalculator t={t} />
        </div>
        <div className="shell token-disclaimer">
          <span>
            {t(
              'EFFICIENCY, WITHOUT THE FAIRY TALES.',
              '用真实的账本，谈效率。',
            )}
          </span>
          <p>
            {t(
              'Token usage, API cost, and subscription limits are different measures.',
              'Token 用量、API 费用和订阅额度是三种不同的指标。',
            )}
            <a
              href="https://learn.chatgpt.com/docs/agent-configuration/subagents"
              target="_blank"
              rel="noreferrer"
            >
              {t('Understand agent overhead ↗', '了解代理开销 ↗')}
            </a>
          </p>
        </div>
      </section>
      <section className="shell install-section" id="install">
        <div className="section-intro">
          <p className="section-kicker">
            {t('03 / READY FOR TAKEOFF', '03 / 准备出发')}
          </p>
          <h2>
            {t('Less coordination.', '少一点调度。')}
            <br />
            <span>{t('More creation.', '多一点创造。')}</span>
          </h2>
          <p>
            {t(
              'Open source. Easy to read. Yours to adapt.',
              '开源、可读、可修改。',
            )}
            <br />
            {t(
              'One small skill for the way you work.',
              '一份技能，放进你的工作方式。',
            )}
          </p>
          <div className="license-lockup">
            <img src="/tern.png" width="64" height="64" alt="" />
            <div>
              <strong>Tern</strong>
              <span>
                {t(
                  'MIT licensed \u00b7 Made for Codex',
                  'MIT 开源许可 · 为 Codex 而生',
                )}
              </span>
            </div>
          </div>
        </div>
        <Install t={t} />
      </section>
      <footer className="shell footer">
        <a href="#top" className="wordmark">
          <img src="/tern.png" alt="" width="42" height="42" />
          tern<span className="brand-dot">↗</span>
        </a>
        <p>
          {t(
            'Give every task the right wings.',
            '让每个任务，都有合适的羽翼。',
          )}
        </p>
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
            {t('MIT License \u2197', 'MIT 许可证 ↗')}
          </a>
        </div>
      </footer>
    </main>
  );
}
