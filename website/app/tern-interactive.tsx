'use client';
import { useState } from 'react';
export function Flightboard() {
  const examples = [
    {
      name: 'Edit a line',
      owner: 'MAIN AI',
      effort: 'DIRECT',
      reason: 'One simple step. The main AI handles it directly.',
      work: 'Edit directly',
      count: '00',
    },
    {
      name: 'Sort research',
      owner: 'LUNA',
      effort: 'LOW',
      reason: 'Clear rules. A lightweight agent handles the repeatable work.',
      work: 'Organize by rules',
      count: '01',
    },
    {
      name: 'Fix mobile layout',
      owner: 'LUNA',
      effort: 'MEDIUM',
      reason: 'Trace the layout and styles, then return the work for review.',
      work: 'Trace and fix',
      count: '01',
    },
  ];

  const [selected, setSelected] = useState(1);
  const current = examples[selected];
  return (
    <div className="flightboard" id="routing">
      <div className="board-top">
        <span>{'THE FLIGHT BOARD'}</span>
        <span>
          <i />
          {'Interactive demo'}
        </span>
      </div>
      <div className="board-art">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <img
          className="tern-art"
          src="/tern.png"
          alt={'Tern seabird mark with open wings and a forked tail'}
          width="1280"
          height="1280"
        />
        <span className="flight-coordinate coordinate-left">
          {'01 / UNDERSTAND'}
        </span>
        <span className="flight-coordinate coordinate-right">
          {'03 / CHECK'}
        </span>
        <div className="flight-stamp">
          <span>{'ACTIVE AGENTS'}</span>
          <strong>{current.count}</strong>
        </div>
      </div>
      <div className="route">
        <span className="route-origin">{'YOU'}</span>
        <span className="route-line" />
        <div key={selected} className="route-agent">
          <b>{current.owner}</b>
          <span>{current.effort}</span>
        </div>
        <span className="route-line" />
        <span className="route-end">{'\u2713 DONE'}</span>
      </div>
      <div className="scenario" aria-live="polite">
        <p>{current.reason}</p>
        <div className="scenario-buttons" aria-label={'Choose a sample task'}>
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
        <span>{'BOUNDED CONTEXT'}</span>
        <span>{'HUMAN INTENT \u2192 CHECKED WORK'}</span>
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
  const labels = [
    'Baseline task total',
    'Main AI tokens',
    'All subagent tokens',
  ];
  const hints = [
    'Same task, same acceptance criteria',
    'Includes dispatch, context, review, and retries',
    'Includes every agent, context, and retry',
  ];
  return (
    <div className="calculator">
      <div className="calc-top">
        <span className="section-kicker">{'TOKEN FLIGHT LOG'}</span>
        <span className="sample-label">{'Illustration · Not a benchmark'}</span>
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
                  ? 'Fewer tokens in this scenario'
                  : result.saved < 0
                    ? 'More tokens in this scenario'
                    : 'No token change in this scenario'}
              </span>
              <strong className={result.saved < 0 ? 'more-tokens' : ''}>
                {Math.abs(result.percent).toFixed(1)}
                <em>%</em>
              </strong>
            </div>
            <div className="calc-total">
              <span>{'Total with dispatch'}</span>
              <b>{result.total.toLocaleString('en-US')}</b>
              <small>{'Main AI + all subagents'}</small>
            </div>
          </>
        ) : (
          <p className="calc-error">
            {
              'Enter whole numbers. The baseline must be above zero; other values cannot be negative.'
            }
          </p>
        )}
      </div>
      <div className="calc-presets">
        <span>{'Try a scenario'}</span>
        <button onClick={() => setValues(['30000', '9000', '15000'])}>
          {'20% fewer'}
        </button>
        <button onClick={() => setValues(['30000', '12000', '24000'])}>
          {'20% more'}
        </button>
      </div>
      <p className="calc-note">
        {
          'Formula: 1 − (main AI + all subagents) ÷ baseline. Count total input and output tokens; do not count cached input or reasoning tokens twice.'
        }
      </p>
    </div>
  );
}
const installCommand =
  'codex plugin marketplace add https://github.com/iaredr/tern-dispatch\ncodex plugin add tern-dispatch@tern-dispatch';
export function Install() {
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
          <h3>{'Install in Codex'}</h3>
          <p>{'Run these two lines in your terminal.'}</p>
        </div>
        <button
          className="copy-button"
          onClick={() => copy(installCommand, 'commands')}
        >
          {'Copy commands ↗'}
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
          <h3>{'Bring your next idea'}</h3>
          <p>{'Start a new Codex task, select the skill, and ask.'}</p>
        </div>
        <button
          className="copy-button"
          onClick={() => copy('$tern-dispatch', 'prompt')}
        >
          {'Copy prompt ↗'}
        </button>
      </div>
      <div className="prompt-line">
        <span>›</span>
        <code>$tern-dispatch</code>
        <span className="prompt-label">
          {'Help me bring this idea to life.'}
        </span>
      </div>
      <p className="install-note">
        {
          'Stays on for this conversation. Say “disable Tern” to stop. For project-wide activation, see the '
        }
        <a
          href="https://github.com/iaredr/tern-dispatch#optional-project-activation"
          target="_blank"
          rel="noreferrer"
        >
          {'GitHub docs ↗'}
        </a>
        {'.'}
      </p>
      <p className="copy-status" role="status">
        {status === 'commands'
          ? 'Install commands copied.'
          : status === 'prompt'
            ? 'Activation prompt copied.'
            : status === 'error'
              ? 'Could not copy. Select the text and copy it manually.'
              : ''}
      </p>
    </div>
  );
}
