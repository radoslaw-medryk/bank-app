export type FetchId = string | number;

type FetchStateBase = {
    id: FetchId;
};

type FetchStateNone = {
    status: "none";
};

type FetchStateLoading = {
    status: "loading";
};

type FetchStateSuccess<TData> = {
    status: "success";
    data: TData;
};

type FetchStateError<TError> = {
    status: "error";
    error: TError;
};

export type FetchStatus = "none" | "loading" | "success" | "error";

export type FetchState<TData, TError> = FetchStateBase &
    (FetchStateNone | FetchStateLoading | FetchStateSuccess<TData> | FetchStateError<TError>);
