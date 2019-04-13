import * as React from "react";
import { PageProps } from "./PageProps";
import { PageBox } from "./PageBox";
import { Icon } from "src/components/Icon";
import { Section } from "src/components/Section";
import { TextField } from "src/components/TextField";
import { styled } from "linaria/react";

const LoginSection = styled(Section)`
    .logo {
        margin: 40px 0 0;
    }

    .field {
        margin: 10px 0 0;

        &.email {
            margin: 60px 0 0;
        }
    }
`;

export const LoginPage: React.SFC<PageProps> = ({}) => {
    return (
        <PageBox>
            <LoginSection>
                <Icon type="Logo" className="logo" />
                <TextField icon="Login" className="field email" placeholder="Email" />
                <TextField icon="Password" className="field password" placeholder="Password" />
            </LoginSection>
        </PageBox>
    );
};
