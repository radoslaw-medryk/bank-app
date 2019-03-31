import { styled } from "linaria/react";

export type MobileMenuItemBoxProps = {
    className?: string;
};

export const MobileMenuItemBox = styled.a<MobileMenuItemBoxProps>`
    text-decoration: none;
    padding: 10px 0 6px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    color: var(--gray1);
    svg {
        fill: var(--gray1);
    }

    &.active {
        color: var(--primary);
        svg {
            fill: var(--primary);
        }
    }
`;
