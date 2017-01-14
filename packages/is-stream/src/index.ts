import { Stream } from 'most';

export function isStream<A>(x: any): x is Stream<A>;
export function isStream(x: any): x is Stream<any>;

export function isStream<A>(x: any): x is Stream<A> {
  return x && x.source && typeof x.source.run === 'function';
}
