import { styled } from "linaria/react";
import * as React from "react";
import { Icon } from "../Icon";

const QuickMenuBox = styled.div`
    padding: 0 15px 0;
    height: 50px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;

    & > * {
        margin: 0 8px;
    }
`;

const CloseButtonBox = styled.div`
    margin: 0 auto 0 0;
    & > svg {
        fill: var(--gray4);
    }
`;

export type QuickMenuProps = {
    showClose?: boolean;
    onClose?: () => void;
};

export const QuickMenu: React.SFC<QuickMenuProps> = ({ showClose, onClose, children }) => {
    const closeButton = showClose ? (
        <CloseButtonBox onClick={onClose}>
            <Icon type="Close" />
        </CloseButtonBox>
    ) : (
        undefined
    );

    return (
        <QuickMenuBox>
            {closeButton}
            {children}
        </QuickMenuBox>
    );
};
