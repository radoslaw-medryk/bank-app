import { styled } from "linaria/react";

export const OptionsList = styled.div`
    width: 100%;

    & > a {
        display: block;

        &:link,
        &:visited,
        &:hover,
        &:active {
            color: unset;
        }
    }

    & > *:not(:first-child) {
        margin: 30px 0 0;
    }
`;
