'use client';
import { useState } from 'react';
const examples = [
  {
    name: '改一句文案',
    owner: 'MAIN AI',
    effort: 'DIRECT',
    reason: '一步就能完成，主 AI 直接处理。',
    work: '直接修改',
    count: '00',
  },
  {
    name: '批量整理资料',
    owner: 'LUNA',
    effort: 'LOW',
    reason: '规则明确，把机械工作交给轻量代理。',
    work: '按规则整理',
    count: '01',
  },
  {
    name: '修复移动端布局',
    owner: 'LUNA',
    effort: 'MEDIUM',
    reason: '需要理解页面与关联样式，再交回主 AI 检查。',
    work: '定位并修复',
    count: '01',
  },
];
export function Flightboard() {
  const [selected, setSelected] = useState(1);
  const current = examples[selected];
  return (
    <div className="flightboard" id="routing">
      <div className="board-top">
        <span>THE FLIGHT BOARD</span>
        <span>
          <i />
          交互示意
        </span>
      </div>
      <div className="board-art">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <img
          className="tern-art"
          src="/tern.png"
          alt="Tern 燕鸥标志：展开的双翼与分叉的尾羽"
          width="1280"
          height="1280"
        />
        <span className="flight-coordinate coordinate-left">
          01 / UNDERSTAND
        </span>
        <span className="flight-coordinate coordinate-right">03 / CHECK</span>
        <div className="flight-stamp">
          <span>ACTIVE AGENTS</span>
          <strong>{current.count}</strong>
        </div>
      </div>
      <div className="route">
        <span className="route-origin">YOU</span>
        <span className="route-line" />
        <div key={selected} className="route-agent">
          <b>{current.owner}</b>
          <span>{current.effort}</span>
        </div>
        <span className="route-line" />
        <span className="route-end">✓ DONE</span>
      </div>
      <div className="scenario" aria-live="polite">
        <p>{current.reason}</p>
        <div className="scenario-buttons" aria-label="选择任务示例">
          {examples.map((item, i) => (
            <button
              key={item.name}
              aria-pressed={selected === i}
              onClick={() => setSelected(i)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div className="board-bottom">
        <span>BOUNDED CONTEXT</span>
        <span>HUMAN INTENT → CHECKED WORK</span>
      </div>
    </div>
  );
}

import { Input } from '@/components/ui/input';
import { tokenComparison } from '@/lib/token-math';

export function TokenCalculator() {
  const [values, setValues] = useState(['30000', '9000', '15000']);
  const parsed = values.map((v) => (v.trim() === '' ? NaN : Number(v)));
  const result = tokenComparison(parsed[0], parsed[1], parsed[2]);
  const labels = ['原来的任务总用量', '主 AI 用量', '全部子代理用量'];
  const hints = [
    '同一任务、同一验收要求',
    '包括调度、上下文、复查和重试',
    '包括所有代理的上下文和重试',
  ];
  return (
    <div className="calculator">
      <div className="calc-top">
        <span className="section-kicker">TOKEN FLIGHT LOG</span>
        <span className="sample-label">假设算例 · 非实测</span>
      </div>
      <div className="calc-inputs">
        {labels.map((label, i) => (
          <div className="calc-field" key={label}>
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
                  ? '在这组假设下，token 减少'
                  : result.saved < 0
                    ? '在这组假设下，token 增加'
                    : '在这组假设下，token 不变'}
              </span>
              <strong className={result.saved < 0 ? 'more-tokens' : ''}>
                {Math.abs(result.percent).toFixed(1)}
                <em>%</em>
              </strong>
            </div>
            <div className="calc-total">
              <span>调度后的合计</span>
              <b>{result.total.toLocaleString('en-US')}</b>
              <small>主 AI + 全部子代理</small>
            </div>
          </>
        ) : (
          <p className="calc-error">
            请输入有效的整数：原用量大于 0，其他用量不小于 0。
          </p>
        )}
      </div>
      <div className="calc-presets">
        <span>换一组假设</span>
        <button onClick={() => setValues(['30000', '9000', '15000'])}>
          减少 20%
        </button>
        <button onClick={() => setValues(['30000', '12000', '24000'])}>
          增加 20%
        </button>
      </div>
      <p className="calc-note">
        公式：1 −（主 AI + 全部子代理）÷
        原任务用量。统计输入与输出总量，缓存输入、推理 token 不重复累加。
      </p>
    </div>
  );
}
const installCommand =
  'codex plugin marketplace add https://github.com/iaredr/tern-dispatch\ncodex plugin add tern-dispatch@tern-dispatch';
export function Install() {
  const [status, setStatus] = useState('');
  async function copy(text: string, label: string) {
    try {
      await navigator.clipboard.writeText(text);
      setStatus(`${label}已复制`);
    } catch {
      setStatus('复制未成功，请选中下方文字手动复制。');
    }
  }
  return (
    <div className="install-content">
      <div className="install-step">
        <span className="step-num">01</span>
        <div>
          <h3>安装到 Codex</h3>
          <p>在终端运行这两行，添加开源插件。</p>
        </div>
        <button
          className="copy-button"
          onClick={() => copy(installCommand, '安装命令')}
        >
          复制命令 ↗
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
          <h3>照常提需求</h3>
          <p>新开 Codex 任务，选中技能后说出你的想法。</p>
        </div>
        <button
          className="copy-button"
          onClick={() => copy('$tern-dispatch', '启用指令')}
        >
          复制指令 ↗
        </button>
      </div>
      <div className="prompt-line">
        <span>›</span>
        <code>$tern-dispatch</code>
        <span className="prompt-label">帮我把这个想法做出来。</span>
      </div>
      <p className="install-note">
        当前对话持续生效。说“关闭代理调度”即可停止。项目默认开启的写法见{' '}
        <a
          href="https://github.com/iaredr/tern-dispatch#optional-project-activation"
          target="_blank"
          rel="noreferrer"
        >
          GitHub 文档 ↗
        </a>
        。
      </p>
      <p className="copy-status" role="status">
        {status}
      </p>
    </div>
  );
}
