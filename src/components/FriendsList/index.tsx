import * as React from "react";
import { ApiFriend } from "@radoslaw-medryk/bank-core-shared";
import { OptionsList } from "../OptionsList";
import { Link } from "react-router-dom";
import { FriendOption } from "../FriendOption";

export type FriendsListProps = {
    friends: ApiFriend[] | undefined;
    linkTo: (friend: ApiFriend) => string;
};

export const FriendsList: React.SFC<FriendsListProps> = ({ friends, linkTo }) => {
    // TODO [RM]: add nicer loading
    return (
        <OptionsList>
            {friends
                ? friends.map(q => (
                      <Link to={linkTo(q)}>
                          <FriendOption friend={q} key={q.id} />
                      </Link>
                  ))
                : "Loading..."}
        </OptionsList>
    );
};
