/**
 * Returns a shallow copy of `obj` with the specified `keys` omitted.
 *
 * @param obj - The source object.
 * @param keys - The list of own property keys to exclude from the copy.
 * @returns A new object containing all properties of `obj` except those in `keys`.
 *
 * @example
 * omit({ a: 1, b: 2, c: 3 }, ['a', 'c']) // { b: 2 }
 */
export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result;
}
