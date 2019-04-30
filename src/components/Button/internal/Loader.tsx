import { styled } from "linaria/react";

const height = 10;
const width = 200;
const loaderWidth = 40;

export const ButtonLoader = styled.div`
    width: ${width}px;
    height: ${height}px;

    &:before {
        content: "";
        display: block;
        border-radius: 9999px;
        background: var(--gray6);
        opacity: 0.75;
        width: ${loaderWidth}px;
        height: ${height}px;
        animation: 1s infinite alternate ease-in-out bounce;
    }

    @keyframes bounce {
        from {
            margin-left: 0;
        }

        to {
            margin-left: ${width - loaderWidth}px;
        }
    }
`;
