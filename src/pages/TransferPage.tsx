import * as React from "react";
import { PageProps } from "./PageProps";
import { PageBox } from "./PageBox";
import { MobileMenuContainer } from "src/containers/MobileMenuContainer";
import { AuthRedirect } from "src/containers/AuthRedirect";
import { AccountSwitcherContainer } from "src/containers/AccountSwitcherContainer";
import { styled } from "linaria/react";
import { Option } from "src/components/Option";
import { Icon } from "src/components/Icon";
import { Section } from "src/components/Section";
import { Link } from "react-router-dom";

const Spacer = styled.div`
    height: 52px;
`;

const OptionsList = styled.div`
    margin: 30px 0 0;

    & > a {
        display: block;

        &:link,
        &:visited,
        &:hover,
        &:active {
            color: unset;
        }

        &:not(:first-child) {
            margin: 30px 0 0;
        }
    }
`;

export const TransferPage: React.SFC<PageProps> = ({ match }) => {
    return (
        <PageBox>
            <AuthRedirect to="/login" when="not-logged-in" />
            <Spacer />
            <AccountSwitcherContainer />
            <Section>
                <OptionsList>
                    <Link to={`${match.url}/friend`}>
                        <Option
                            icon={<Icon type="Contacts" />}
                            title="To a friend"
                            description="Transfer funds to a friend that already has an account"
                        />
                    </Link>
                    <Link to={`${match.url}/bank`}>
                        <Option
                            icon={<Icon type="Bank" />}
                            title="To bank account"
                            description="Transfer funds to bank account as SEPA / SWIFT transfer"
                        />
                    </Link>
                    <Link to={`${match.url}/email`}>
                        <Option
                            icon={<Icon type="Email" />}
                            title="To email address"
                            description="Recipient will recieve email with instructions how to accept transfer"
                        />
                    </Link>
                </OptionsList>
            </Section>
            <MobileMenuContainer />
        </PageBox>
    );
};
