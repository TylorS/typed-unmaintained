/**
 * Returns the keys of an object.
 * @name keys<A>(obj: A): Array<keyof A>
 */
export const keys = <A>(obj: A): Array<keyof A> => (Object.keys(obj) as any) as Array<keyof A>
