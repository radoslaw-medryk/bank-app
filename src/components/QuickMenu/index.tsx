import { styled } from "linaria/react";

export const QuickMenu = styled.div`
    padding: 15px 15px 10px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;

    & > * {
        margin: 0 4px;
    }
`;
