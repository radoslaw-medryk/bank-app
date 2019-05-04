import * as React from "react";
import { PageProps } from "./PageProps";
import { PageBox } from "./PageBox";
import { MobileMenuContainer } from "src/containers/MobileMenuContainer";
import { AuthRedirect } from "src/containers/AuthRedirect";
import { AccountSwitcherContainer } from "src/containers/AccountSwitcherContainer";
import { TransferSelectType } from "src/components/TransferSelectType";
import { Section } from "src/components/Section";
import { Switch, Route, Redirect } from "react-router";
import { TextField } from "src/components/TextField";
import { Spacer } from "src/components/Spacer";
import { FriendsListContainer } from "src/containers/FriendsListContainer";
import { TransferToFriendContainer } from "src/containers/TransferToFriendContainer";
import { FetchFriendsContainer } from "src/containers/FetchFriendsContainer";
import { QuickMenu } from "src/components/QuickMenu";

const AccountSwitcherSpacer: React.SFC<{}> = () => <Spacer height="52px" />;

const SelectPart: React.SFC<PageProps> = ({ match }) => (
    <>
        <AccountSwitcherSpacer />
        <AccountSwitcherContainer />
        <Section>
            <TransferSelectType baseUrl={match.url} />
        </Section>
    </>
);

const FriendsPart: React.SFC<PageProps> = ({ match }) => (
    <>
        <FetchFriendsContainer />
        <AccountSwitcherSpacer />
        <AccountSwitcherContainer />
        <Section>
            <Spacer height="30px" />
            <TextField placeholder="Search" icon="Search" />
            <FriendsListContainer linkTo={friend => `${match.url}/${friend.id}`} />
        </Section>
    </>
);

const SelectedFriendPart: React.SFC<PageProps> = ({ match, history }) => {
    const friendId = parseInt((match.params as any).id, 10);

    const onClose = () => history.goBack();

    return (
        <>
            <QuickMenu showClose={true} onClose={onClose} />
            <TransferToFriendContainer friendId={friendId} />
        </>
    );
};

export const TransferPage: React.SFC<PageProps> = ({ match }) => {
    return (
        <PageBox>
            <AuthRedirect to="/login" when="not-logged-in" />
            <Switch>
                <Route exact path={`${match.url}/`} component={SelectPart} />
                <Route exact path={`${match.url}/friend`} component={FriendsPart} />
                <Route exact path={`${match.url}/friend/:id`} component={SelectedFriendPart} />
                <Route render={() => <Redirect to={match.url} />} />
            </Switch>
            <MobileMenuContainer />
        </PageBox>
    );
};
