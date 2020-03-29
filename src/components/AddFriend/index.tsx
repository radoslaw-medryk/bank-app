import * as React from "react";
import { styled } from "linaria/react";
import { TextField } from "../TextField";
import { Section } from "../Section";
import { Button } from "../Button";
import { HiddenSubmit } from "../HiddenSubmit";

const TextBlock = styled.p`
    margin: 0 15px;
    font-size: 14px;
`;

const Title = styled(TextBlock)`
    font-weight: 600;
`;

const EmailSection = styled(Section)`
    margin-top: 20px;
`;

const Description = styled(Section)`
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
`;

const ButtonSection = styled(Section)`
    margin-top: 20px;
`;

export type AddFriendProps = {
    isInProgress: boolean;
    email: string;
    emailError?: string;
    setEmail?: (newEmail: string) => void;
    onSubmit?: () => void;
};

export const AddFriend: React.SFC<AddFriendProps> = ({ isInProgress, email, emailError, setEmail, onSubmit }) => {
    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit && onSubmit();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <HiddenSubmit />
            <Title>Add a friend:</Title>
            <EmailSection>
                <TextField
                    value={email}
                    mode={emailError ? "error" : "default"}
                    hint={emailError}
                    onChange={setEmail}
                    placeholder="Friend's email address"
                    icon="Login"
                />
            </EmailSection>
            <Description>
                Adding a friend allows you to send transfers to him, as well as use split bill functionality, and more!
            </Description>
            <ButtonSection>
                <Button onClick={onSubmit} isLoading={isInProgress}>
                    Add friend
                </Button>
            </ButtonSection>
        </form>
    );
};
