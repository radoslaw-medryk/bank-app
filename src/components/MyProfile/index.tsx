import * as React from "react";
import { styled } from "linaria/react";
import { MyProfileAvatar } from "./internal/Avatar";
import { MyProfileEmail } from "./internal/Email";
import { MyProfileLogout } from "./internal/Logout";
import { Icon } from "../Icon";

const MyProfileBox = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`;

export type MyProfileProps = {
    email: string;
    onLogout: () => void;
};

export const MyProfile: React.SFC<MyProfileProps> = ({ email, onLogout }) => {
    return (
        <MyProfileBox>
            <MyProfileAvatar>
                <Icon type="Man1" />
            </MyProfileAvatar>
            <MyProfileEmail>{email}</MyProfileEmail>
            <MyProfileLogout href="#" onClick={onLogout}>
                Logout
            </MyProfileLogout>
        </MyProfileBox>
    );
};
