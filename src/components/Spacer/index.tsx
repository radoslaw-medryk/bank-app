import { styled } from "linaria/react";

export type SpacerProps = {
    height: string;
};

export const Spacer = styled.div<SpacerProps>`
    height: ${props => props.height};
`;
