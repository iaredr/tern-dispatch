export function tokenComparison(
  baseline: number,
  main: number,
  agents: number,
) {
  if (
    ![baseline, main, agents].every(Number.isSafeInteger) ||
    baseline <= 0 ||
    main < 0 ||
    agents < 0 ||
    !Number.isSafeInteger(main + agents)
  )
    return null;
  const total = main + agents;
  return {
    total,
    saved: baseline - total,
    percent: ((baseline - total) / baseline) * 100,
  };
}
