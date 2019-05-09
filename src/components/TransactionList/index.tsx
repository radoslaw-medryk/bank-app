import * as React from "react";
import { TransactionListItem, itemHeight } from "./internal/Item";
import { TransactionListHeader, headerHeight } from "./internal/Header";
import { VariableSizeList, ListChildComponentProps } from "react-window";
import { TransactionListEntry } from "./Entry";
import { TransactionListNoOperations } from "./internal/NoOperations";

const InfiniteLoader = require("react-window-infinite-loader").default;

export type TransactionListProps = {
    height: number;
    accountId: number | undefined;
    // TODO [RM]: add isLoading
    entries: TransactionListEntry[];
    getMore: () => void;
};

export const TransactionList: React.SFC<TransactionListProps> = ({ height, accountId, entries, getMore }) => {
    React.useEffect(() => {
        if (accountId !== undefined) {
            getMore();
        }
    }, [accountId]);

    if (entries.length === 0) {
        return <TransactionListNoOperations height={height} />;
    }

    const getItemSize = (index: number) => {
        const entry = entries[index];

        if (entry.type === "header") {
            return headerHeight;
        }

        return itemHeight;
    };

    const VariableSizeListItem: React.SFC<ListChildComponentProps> = ({ index, style, data, isScrolling }) => {
        const entry = entries[index];

        const result =
            entry.type === "header" ? (
                <TransactionListHeader date={entry.date} />
            ) : (
                <TransactionListItem transaction={entry.transaction} />
            );

        return <div style={style}>{result}</div>;
    };

    const isItemLoaded = (i: number) => i < entries.length;

    return (
        <InfiniteLoader
            itemCount={entries.length + 1}
            isItemLoaded={isItemLoaded}
            loadMoreItems={getMore}
            overscanCount={10}
        >
            {(loader: any) => (
                <VariableSizeList
                    height={height}
                    ref={loader.ref}
                    onItemsRendered={loader.onItemsRendered}
                    itemCount={entries.length}
                    itemSize={getItemSize}
                    width="100%"
                >
                    {VariableSizeListItem}
                </VariableSizeList>
            )}
        </InfiniteLoader>
    );
};
