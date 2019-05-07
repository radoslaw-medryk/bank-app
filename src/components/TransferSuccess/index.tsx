import * as React from "react";
import { Section } from "../Section";
import { Icon } from "../Icon";
import { styled } from "linaria/react";

const IconBox = styled.div`
    margin: 100px 0 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    & > svg {
        fill: var(--green1);
    }
`;

const TitleBox = styled.p`
    margin: 10px 0 0;
    color: var(--green1);
    font-size: 18px;
    font-weight: 600;
    text-align: center;
`;

export type TransferSuccessProps = {
    //
};

export const TransferSuccess: React.SFC<TransferSuccessProps> = ({}) => {
    return (
        <Section>
            <IconBox>
                <Icon type="Success" />
            </IconBox>
            <TitleBox>Transfer successful!</TitleBox>
        </Section>
    );
};
