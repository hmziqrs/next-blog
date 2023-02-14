export function getSafePageNo(max: number, page?: any) {
  if (Array.isArray(page)) return 1;
  const parsed = parseInt(page || "1", 10);
  const safe = Math.min(Math.max(1, parsed), max);
  return isNaN(safe) ? 1 : safe;
}
