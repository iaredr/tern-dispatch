import assert from 'node:assert/strict';
import { tokenComparison } from './token-math.ts';
assert.deepEqual(tokenComparison(30000, 9000, 15000), {
  total: 24000,
  saved: 6000,
  percent: 20,
});
assert.equal(tokenComparison(30000, 12000, 24000).percent, -20);
assert.equal(tokenComparison(30000, 30000, 0).percent, 0);
for (const args of [
  [0, 0, 0],
  [-1, 0, 0],
  [1, -1, 0],
  [1, 0, NaN],
  [1, 0, Infinity],
  [1, 0.5, 0],
  [1, Number.MAX_SAFE_INTEGER, 1],
])
  assert.equal(tokenComparison(...args), null);
console.log(
  'Token comparison: savings, overhead, break-even and invalid inputs pass.',
);
