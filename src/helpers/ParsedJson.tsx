// Since parsed JSON will not deserialize Date automatically, we replace Date type into string type.
export type ParsedJson<T> = { [K in keyof T]: T[K] extends Date | infer U ? string | U : T[K] };
