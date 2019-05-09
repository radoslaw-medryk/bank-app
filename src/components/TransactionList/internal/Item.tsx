import * as React from "react";
import { styled } from "linaria/react";
import { Transaction } from "src/models/Transaction";
import * as moment from "moment";
import { Icon } from "../../Icon";
import { TransactionCategory } from "src/models/TransactionCategory";
import { formatMoney } from "src/helpers/formatMoney";
import { IconType } from "src/components/Icon/Type";

export const itemHeight = 24;

const TransactionListItemBox = styled.div`
    width: 100%;
    height: ${itemHeight}px;
    padding: 0 20px;
`;

const TransactionListItemInnerBox = styled.div`
    font-size: 12px;
    font-weight: 600;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;

const TransactionListItemTime = styled.div`
    flex: 0 0 30px;
    text-align: right;
`;

const TransactionListItemIcon = styled.div`
    margin: 0 6px 0 10px;
`;

const TransactionListItemTitle = styled.div`
    flex: 1 0 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

type TransactionListItemValueProps = JSX.IntrinsicElements["div"] & {
    isNegative: boolean;
};

const TransactionListItemValue = styled.div<TransactionListItemValueProps>`
    color: ${props => (props.isNegative ? "var(--red)" : "var(--green1)")};
`;

const iconTypeMap = new Map<TransactionCategory, IconType>([
    ["food", "Restaurant"],
    ["groceries", "Groceries"],
    ["transport", "Transport"],
    ["operation", "Operation"],
    ["topup", "Topup"],
]);

export type TransactionListItemProps = {
    transaction: Transaction;
};

export const TransactionListItem: React.SFC<TransactionListItemProps> = ({ transaction }) => {
    const timeString = moment(transaction.date).format("H:mm");

    const iconType: IconType = iconTypeMap.get(transaction.category) || "Restaurant"; // TODO [RM]: add unknown icon

    const valueFormated = formatMoney(transaction.value.value);
    const minusSign = valueFormated.isNegative ? "- " : "";
    const valueString = `${minusSign}${valueFormated.units}.${
        valueFormated.cents
    } ${transaction.value.currency.code.toUpperCase()}`;

    return (
        <TransactionListItemBox>
            <TransactionListItemInnerBox>
                <TransactionListItemTime>{timeString}</TransactionListItemTime>
                <TransactionListItemIcon>
                    <Icon type={iconType} />
                </TransactionListItemIcon>
                <TransactionListItemTitle>{transaction.title}</TransactionListItemTitle>
                <TransactionListItemValue isNegative={valueFormated.isNegative}>{valueString}</TransactionListItemValue>
            </TransactionListItemInnerBox>
        </TransactionListItemBox>
    );
};
