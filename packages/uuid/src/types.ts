/**
 * A Universally Unique identifier.
 *
 * **Note:** A Uuid will *not* actually have ._uuid property on it. This is only used to
 * differentiate type `Uuid` from type `string` for an improved type experience.
 * @name Uuid
 * @type
 */
export type Uuid = string & { readonly _uuid: undefined }
