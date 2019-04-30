import { FetchState } from "../FetchState";

export const isFetchLoading = <TData, TError>(fetch: FetchState<TData, TError> | undefined) => {
    return !!fetch && fetch.status === "loading";
};
