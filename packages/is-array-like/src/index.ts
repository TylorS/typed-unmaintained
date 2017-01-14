export function isArrayLike<T>(x: any): x is ArrayLike<T>;
export function isArrayLike(x: any): x is ArrayLike<any>;

export function isArrayLike<T>(x: any): x is ArrayLike<T> {
  return x && typeof x.length === 'number' && typeof x !== 'function';
}
