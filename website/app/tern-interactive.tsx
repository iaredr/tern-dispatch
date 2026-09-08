'use client';
import { useState } from 'react';
type CopyProps = { t: (en: string, zh: string) => string };
export function Flightboard({ t }: CopyProps) {
  const examples = [
    {
      name: t('Edit a line', '改一句文案'),
      owner: t('MAIN AI', '主 AI'),
      effort: t('DIRECT', '直接完成'),
      reason: t(
        'One simple step. The main AI handles it directly.',
        '一步就能完成，主 AI 直接处理。',
      ),
      work: t('Edit directly', '直接修改'),
      count: '00',
    },
    {
      name: t('Sort research', '批量整理资料'),
      owner: 'LUNA',
      effort: 'LOW',
      reason: t(
        'Clear rules. A lightweight agent handles the repeatable work.',
        '规则明确，把机械工作交给轻量代理。',
      ),
      work: t('Organize by rules', '按规则整理'),
      count: '01',
    },
    {
      name: t('Fix mobile layout', '修复移动端布局'),
      owner: 'LUNA',
      effort: 'MEDIUM',
      reason: t(
        'Trace the layout and styles, then return the work for review.',
        '需要理解页面与关联样式，再交回主 AI 检查。',
      ),
      work: t('Trace and fix', '定位并修复'),
      count: '01',
    },
  ];

  const [selected, setSelected] = useState(1);
  const current = examples[selected];
  return (
    <div className="flightboard" id="routing">
      <div className="board-top">
        <span>{t('THE FLIGHT BOARD', '任务调度面板')}</span>
        <span>
          <i />
          {t('Interactive demo', '交互示意')}
        </span>
      </div>
      <div className="board-art">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <img
          className="tern-art"
          src="/tern.png"
          alt={t(
            'Tern seabird mark with open wings and a forked tail',
            'Tern 燕鸥标志：展开的双翼与分叉的尾羽',
          )}
          width="1280"
          height="1280"
        />
        <span className="flight-coordinate coordinate-left">
          {t('01 / UNDERSTAND', '01 / 理解需求')}
        </span>
        <span className="flight-coordinate coordinate-right">
          {t('03 / CHECK', '03 / 检查结果')}
        </span>
        <div className="flight-stamp">
          <span>{t('ACTIVE AGENTS', '运行中的代理')}</span>
          <strong>{current.count}</strong>
        </div>
      </div>
      <div className="route">
        <span className="route-origin">{t('YOU', '你')}</span>
        <span className="route-line" />
        <div key={selected} className="route-agent">
          <b>{current.owner}</b>
          <span>{current.effort}</span>
        </div>
        <span className="route-line" />
        <span className="route-end">{t('\u2713 DONE', '✓ 完成')}</span>
      </div>
      <div className="scenario" aria-live="polite">
        <p>{current.reason}</p>
        <div
          className="scenario-buttons"
          aria-label={t('Choose a sample task', '选择任务示例')}
        >
          {examples.map((item, i) => (
            <button
              key={i}
              aria-pressed={selected === i}
              onClick={() => setSelected(i)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div className="board-bottom">
        <span>{t('BOUNDED CONTEXT', '精简上下文')}</span>
        <span>
          {t('HUMAN INTENT \u2192 CHECKED WORK', '你的想法 → 验收后的成果')}
        </span>
      </div>
    </div>
  );
}

import { Input } from '@/components/ui/input';
import { tokenComparison } from '@/lib/token-math';

export function TokenCalculator({ t }: CopyProps) {
  const [values, setValues] = useState(['30000', '9000', '15000']);
  const parsed = values.map((v) => (v.trim() === '' ? NaN : Number(v)));
  const result = tokenComparison(parsed[0], parsed[1], parsed[2]);
  const labels = [
    t('Baseline task total', '原来的任务总用量'),
    t('Main AI tokens', '主 AI 用量'),
    t('All subagent tokens', '全部子代理用量'),
  ];
  const hints = [
    t('Same task, same acceptance criteria', '同一任务、同一验收要求'),
    t(
      'Includes dispatch, context, review, and retries',
      '包括调度、上下文、复查和重试',
    ),
    t('Includes every agent, context, and retry', '包括所有代理的上下文和重试'),
  ];
  return (
    <div className="calculator">
      <div className="calc-top">
        <span className="section-kicker">
          {t('TOKEN FLIGHT LOG', 'TOKEN 用量账本')}
        </span>
        <span className="sample-label">
          {t('Illustration · Not a benchmark', '假设算例 · 非实测')}
        </span>
      </div>
      <div className="calc-inputs">
        {labels.map((label, i) => (
          <div className="calc-field" key={i}>
            <label htmlFor={`tokens-${i}`}>{label}</label>
            <div className="input-wrap">
              <Input
                id={`tokens-${i}`}
                type="number"
                min={i === 0 ? 1 : 0}
                step="1"
                value={values[i]}
                aria-describedby={`hint-${i}`}
                aria-invalid={
                  !Number.isSafeInteger(parsed[i]) ||
                  parsed[i] < (i === 0 ? 1 : 0)
                }
                onChange={(event) =>
                  setValues(
                    values.map((v, j) => (i === j ? event.target.value : v)),
                  )
                }
              />
              <span>tokens</span>
            </div>
            <p id={`hint-${i}`}>{hints[i]}</p>
          </div>
        ))}
      </div>
      <div className="calc-result" aria-live="polite">
        {result ? (
          <>
            <div>
              <span>
                {result.saved > 0
                  ? t(
                      'Fewer tokens in this scenario',
                      '在这组假设下，token 减少',
                    )
                  : result.saved < 0
                    ? t(
                        'More tokens in this scenario',
                        '在这组假设下，token 增加',
                      )
                    : t(
                        'No token change in this scenario',
                        '在这组假设下，token 不变',
                      )}
              </span>
              <strong className={result.saved < 0 ? 'more-tokens' : ''}>
                {Math.abs(result.percent).toFixed(1)}
                <em>%</em>
              </strong>
            </div>
            <div className="calc-total">
              <span>{t('Total with dispatch', '调度后的合计')}</span>
              <b>{result.total.toLocaleString('en-US')}</b>
              <small>
                {t('Main AI + all subagents', '主 AI + 全部子代理')}
              </small>
            </div>
          </>
        ) : (
          <p className="calc-error">
            {t(
              'Enter whole numbers. The baseline must be above zero; other values cannot be negative.',
              '请输入有效的整数：原用量大于 0，其他用量不小于 0。',
            )}
          </p>
        )}
      </div>
      <div className="calc-presets">
        <span>{t('Try a scenario', '换一组假设')}</span>
        <button onClick={() => setValues(['30000', '9000', '15000'])}>
          {t('20% fewer', '减少 20%')}
        </button>
        <button onClick={() => setValues(['30000', '12000', '24000'])}>
          {t('20% more', '增加 20%')}
        </button>
      </div>
      <p className="calc-note">
        {t(
          'Formula: 1 − (main AI + all subagents) ÷ baseline. Count total input and output tokens; do not count cached input or reasoning tokens twice.',
          '公式：1 −（主 AI + 全部子代理）÷ 原任务用量。统计输入与输出总量，缓存输入、推理 token 不重复累加。',
        )}
      </p>
    </div>
  );
}
const installCommand =
  'codex plugin marketplace add https://github.com/iaredr/tern-dispatch\ncodex plugin add tern-dispatch@tern-dispatch';
export function Install({ t }: CopyProps) {
  const [status, setStatus] = useState<'commands' | 'prompt' | 'error' | ''>(
    '',
  );
  async function copy(text: string, label: 'commands' | 'prompt') {
    try {
      await navigator.clipboard.writeText(text);
      setStatus(label);
    } catch {
      setStatus('error');
    }
  }
  return (
    <div className="install-content">
      <div className="install-step">
        <span className="step-num">01</span>
        <div>
          <h3>{t('Install in Codex', '安装到 Codex')}</h3>
          <p>
            {t(
              'Run these two lines in your terminal.',
              '在终端运行这两行，添加开源插件。',
            )}
          </p>
        </div>
        <button
          className="copy-button"
          onClick={() => copy(installCommand, 'commands')}
        >
          {t('Copy commands ↗', '复制命令 ↗')}
        </button>
      </div>
      <pre className="terminal">
        <code>
          <span className="terminal-comment">
            # add the marketplace, then install Tern
          </span>
          {'\n'}
          {installCommand}
        </code>
      </pre>
      <div className="install-step">
        <span className="step-num">02</span>
        <div>
          <h3>{t('Bring your next idea', '照常提需求')}</h3>
          <p>
            {t(
              'Start a new Codex task, select the skill, and ask.',
              '新开 Codex 任务，选中技能后说出你的想法。',
            )}
          </p>
        </div>
        <button
          className="copy-button"
          onClick={() => copy('$tern-dispatch', 'prompt')}
        >
          {t('Copy prompt ↗', '复制指令 ↗')}
        </button>
      </div>
      <div className="prompt-line">
        <span>›</span>
        <code>$tern-dispatch</code>
        <span className="prompt-label">
          {t('Help me bring this idea to life.', '帮我把这个想法做出来。')}
        </span>
      </div>
      <p className="install-note">
        {t(
          'Stays on for this conversation. Say “disable Tern” to stop. For project-wide activation, see the ',
          '当前对话持续生效。说“关闭代理调度”即可停止。项目默认开启的写法见 ',
        )}
        <a
          href="https://github.com/iaredr/tern-dispatch#optional-project-activation"
          target="_blank"
          rel="noreferrer"
        >
          {t('GitHub docs ↗', 'GitHub 文档 ↗')}
        </a>
        {t('.', '。')}
      </p>
      <p className="copy-status" role="status">
        {status === 'commands'
          ? t('Install commands copied.', '安装命令已复制。')
          : status === 'prompt'
            ? t('Activation prompt copied.', '启用指令已复制。')
            : status === 'error'
              ? t(
                  'Could not copy. Select the text and copy it manually.',
                  '复制未成功，请选中文字手动复制。',
                )
              : ''}
      </p>
    </div>
  );
}
