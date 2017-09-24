/**
 * A StrMap type. Works as a readonly object.
 * @name StrMap
 * @type
 */
export type StrMap<K extends string, V> = Readonly<Record<K, V>>
