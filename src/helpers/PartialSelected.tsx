type PartialSelected<T, S extends keyof T> = { [K in keyof T]: K extends S ? T[K] | undefined : T[K] };
