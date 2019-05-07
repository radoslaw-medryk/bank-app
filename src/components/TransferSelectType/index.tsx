import * as React from "react";
import { Link } from "react-router-dom";
import { Option } from "src/components/Option";
import { Icon } from "src/components/Icon";
import { OptionsList } from "../OptionsList";
import { styled } from "linaria/react";

const TransferOptionsList = styled(OptionsList)`
    margin: 30px 0 0;
`;

const DisabledOption = styled(Option)`
    color: var(--gray4);

    svg {
        fill: var(--gray4);
    }
`;

export type TransferSelectTypeProps = {
    baseUrl: string;
};

export const TransferSelectType: React.SFC<TransferSelectTypeProps> = ({ baseUrl }) => {
    return (
        <TransferOptionsList>
            <Link to={`${baseUrl}/friend`}>
                <Option
                    icon={<Icon type="Contacts" />}
                    title="To a friend"
                    description="Transfer funds to a friend that already has an account"
                />
            </Link>
            <Link to={`${baseUrl}/bank`}>
                <DisabledOption
                    icon={<Icon type="Bank" />}
                    title="To bank account"
                    description="Transfer funds to bank account as SEPA / SWIFT transfer"
                />
            </Link>
            <Link to={`${baseUrl}/email`}>
                <DisabledOption
                    icon={<Icon type="Email" />}
                    title="To email address"
                    description="Recipient will recieve email with instructions how to accept transfer"
                />
            </Link>
        </TransferOptionsList>
    );
};
