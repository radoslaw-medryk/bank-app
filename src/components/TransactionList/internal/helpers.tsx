// import { Transaction } from "src/models/Transaction";
// import { getDate } from "src/helpers/getDate";

// export type Item = Transaction | Header;

// export type Header = {
//     type: "header";
//     date: Date;
// };

// export const isHeader = (item: Item): item is Header => {
//     return (item as Header).type === "header";
// };

// export const insertHeaders = (lastItem: Item | undefined, newItems: Item[]) => {
//     let lastDate = lastItem ? getDate(lastItem.date) : undefined;

//     let results: Item[] = [];
//     for (const item of newItems) {
//         const itemDate = getDate(item.date);

//         if (!lastDate || itemDate.getTime() !== lastDate.getTime()) {
//             const header: Header = {
//                 type: "header",
//                 date: itemDate,
//             };
//             results = [...results, header];
//             lastDate = itemDate;
//         }

//         results = [...results, item];
//     }

//     return results;
// };
