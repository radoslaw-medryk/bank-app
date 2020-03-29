import * as React from "react";
import { PageProps } from "./PageProps";
import { PageBox } from "./PageBox";
import { MobileMenuContainer } from "src/containers/MobileMenuContainer";
import { AuthRedirect } from "src/containers/AuthRedirect";
import { AccountSwitcherContainer } from "src/containers/AccountSwitcherContainer";
import { TransferSelectType } from "src/components/TransferSelectType";
import { Section } from "src/components/Section";
import { Switch, Route } from "react-router";
import { TextField } from "src/components/TextField";
import { Spacer } from "src/components/Spacer";
import { FriendsListContainer } from "src/containers/FriendsListContainer";
import { TransferToFriendContainer } from "src/containers/TransferToFriendContainer";
import { FetchFriendsContainer } from "src/containers/FetchFriendsContainer";
import { QuickMenu } from "src/components/QuickMenu";
import { TransferFriendSuccessfulRedirect } from "src/containers/TransferFriendSuccessfulRedirect";
import { MissingPage } from "./MissingPage";
import { QuickMenuItem } from "src/components/QuickMenu/Item";
import { AddFriendContainer } from "src/containers/AddFriendContainer";
import { AddFriendSuccessfulRedirect } from "src/containers/AddFriendSuccessfulRedirect";
import { SuccessPopup } from "src/components/SuccessPopup";

const SelectPart: React.SFC<PageProps> = ({ match }) => (
    <>
        <QuickMenu />
        <AccountSwitcherContainer />
        <Section>
            <TransferSelectType baseUrl={match.url} />
        </Section>
    </>
);

const FriendsPart: React.SFC<PageProps> = ({ match }) => {
    const [search, setSearch] = React.useState("");

    return (
        <>
            <FetchFriendsContainer />
            <QuickMenu>
                <QuickMenuItem to={`${match.url}/add`} icon="AddFriend" />
            </QuickMenu>
            <AccountSwitcherContainer />
            <Section>
                <Spacer height="30px" />
                <TextField placeholder="Search" icon="Search" value={search} onChange={setSearch} />
                <FriendsListContainer linkTo={friend => `${match.url}/${friend.id}`} search={search} />
            </Section>
        </>
    );
};

const AddFriendPart: React.SFC<PageProps> = ({ match, history }) => {
    const onClose = () => history.goBack();

    return (
        <>
            <AddFriendSuccessfulRedirect to={`/transfer/friend/add/success`} />
            <QuickMenu showClose={true} onClose={onClose} />
            <AddFriendContainer />
        </>
    );
};

const SelectedFriendPart: React.SFC<PageProps> = ({ match, history }) => {
    const friendId = parseInt((match.params as any).id, 10);

    const onClose = () => history.goBack();

    return (
        <>
            <TransferFriendSuccessfulRedirect to={`/transfer/success`} />
            <QuickMenu showClose={true} onClose={onClose} />
            <TransferToFriendContainer friendId={friendId} />
        </>
    );
};

const TransferSuccessPart: React.SFC<PageProps> = ({ match, history }) => {
    const onClose = () => history.push("/");

    return (
        <PageBox>
            <QuickMenu showClose={true} onClose={onClose} />
            <SuccessPopup title="Transfer successful!" />
            <MobileMenuContainer />
        </PageBox>
    );
};

const AddFriendSuccessPart: React.SFC<PageProps> = ({ match, history }) => {
    const onClose = () => history.push("/transfer/friend");

    return (
        <PageBox>
            <QuickMenu showClose={true} onClose={onClose} />
            <SuccessPopup title="You made a new friend!" />
            <MobileMenuContainer />
        </PageBox>
    );
};

export const TransferPage: React.SFC<PageProps> = ({ match }) => {
    return (
        <PageBox>
            <AuthRedirect to="/login" when="not-logged-in" />
            <Switch>
                <Route exact path={`${match.url}/`} component={SelectPart} />
                <Route exact path={`${match.url}/success`} component={TransferSuccessPart} />
                <Route exact path={`${match.url}/friend`} component={FriendsPart} />
                <Route exact path={`${match.url}/friend/add/success`} component={AddFriendSuccessPart} />
                <Route exact path={`${match.url}/friend/add`} component={AddFriendPart} />
                <Route exact path={`${match.url}/friend/:id`} component={SelectedFriendPart} />
                <Route path={`${match.url}/`} component={MissingPage} />
            </Switch>
            <MobileMenuContainer />
        </PageBox>
    );
};
