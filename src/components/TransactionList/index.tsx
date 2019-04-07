import * as React from "react";
import { Transaction } from "src/models/Transaction";
import { TransactionListItem, itemHeight } from "./internal/Item";
import { TransactionListHeader, headerHeight } from "./internal/Header";
import { getDate } from "src/helpers/getDate";
import { VariableSizeList, ListChildComponentProps } from "react-window";

const InfiniteLoader = require("react-window-infinite-loader").default;

// TODO [RM]: too big file, split

type Item = Transaction | Header;

type Header = {
    type: "header";
    date: Date;
};

const isHeader = (item: Item): item is Header => {
    return (item as Header).type === "header";
};

const insertHeaders = (lastItem: Item | undefined, newItems: Item[]) => {
    let lastDate = lastItem ? getDate(lastItem.date) : undefined;

    let results: Item[] = [];
    for (const item of newItems) {
        const itemDate = getDate(item.date);

        if (!lastDate || itemDate.getTime() !== lastDate.getTime()) {
            const header: Header = {
                type: "header",
                date: itemDate,
            };
            results = [...results, header];
            lastDate = itemDate;
        }

        results = [...results, item];
    }

    return results;
};

export type TransactionListProps = {
    height: number;
    newItems: Transaction[];
    getMore: () => void;
};

export const TransactionList: React.SFC<TransactionListProps> = ({ height, newItems, getMore }) => {
    const [items, setItems] = React.useState<Item[]>([]);

    React.useEffect(() => {
        const lastItem = items.length > 0 ? items[items.length - 1] : undefined;
        const newItemsWithHeaders = insertHeaders(lastItem, newItems);
        setItems([...items, ...newItemsWithHeaders]);
    }, [newItems]);

    const getItemSize = (index: number) => {
        const item = items[index];

        if (isHeader(item)) {
            return headerHeight;
        }

        return itemHeight;
    };

    const VariableSizeListItem: React.SFC<ListChildComponentProps> = ({ index, style, data, isScrolling }) => {
        const item = items[index];

        const result = isHeader(item) ? (
            <TransactionListHeader date={item.date} />
        ) : (
            <TransactionListItem transaction={item} />
        );

        return <div style={style}>{result}</div>;
    };

    const isItemLoaded = (i: number) => i < items.length;

    return (
        <InfiniteLoader
            itemCount={items.length + 1}
            isItemLoaded={isItemLoaded}
            loadMoreItems={getMore}
            overscanCount={10}
        >
            {(loader: any) => (
                <VariableSizeList
                    height={height}
                    ref={loader.ref}
                    onItemsRendered={loader.onItemsRendered}
                    itemCount={items.length}
                    itemSize={getItemSize}
                    width="100%"
                >
                    {VariableSizeListItem}
                </VariableSizeList>
            )}
        </InfiniteLoader>
    );
};
