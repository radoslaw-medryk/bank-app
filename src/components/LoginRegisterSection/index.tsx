import { styled } from "linaria/react";

export const LoginRegisterForm = styled.form`
    height: 100%;
    margin: 0 30px;
    display: flex;
    flex-flow: column nowrap;

    .logo {
        margin: 30px 0 0;
    }

    .field {
        margin: 10px 0 0;

        &.first {
            margin: 50px 0 0;
        }
    }

    .spacer {
        flex: 1 0 0;
    }

    .button {
        margin: 20px 0 40px;
    }
`;
