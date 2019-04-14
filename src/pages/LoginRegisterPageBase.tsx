import { Section } from "src/components/Section";
import { styled } from "linaria/react";

export const LoginRegisterSection = styled(Section)`
    height: 100%;
    display: flex;
    flex-flow: column nowrap;

    .logo {
        margin: 40px 0 0;
    }

    .field {
        margin: 10px 0 0;

        &.first {
            margin: 60px 0 0;
        }
    }

    .spacer {
        flex: 1 0 0;
    }

    .button {
        margin: 20px 0 40px;
    }
`;

export const LoginRegisterSwitch = styled.p`
    font-size: 12px;
`;
