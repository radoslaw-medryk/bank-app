import { styled } from "linaria/react";
import { mobileMenuHeight } from "src/components/MobileMenu";

export const PageBox = styled.div`
    padding: 0 0 ${mobileMenuHeight}px 0;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;
