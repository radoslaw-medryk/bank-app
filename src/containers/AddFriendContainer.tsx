import { connect } from "react-redux";
import { AddFriend, AddFriendProps } from "src/components/AddFriend";
import { AreaKey, AddFriendKey } from "src/state/ui/state";
import { AppState } from "src/state/store";
import { AppDispatch } from "src/state/types";
import { uiSetField } from "src/state/ui/actions/UiSetField";
import { Validation } from "rusane";
import { uiSetErrors } from "src/state/ui/actions/UiSetErrors";
import { addFriendThunk } from "src/state/friends/thunks/addFriendThunk";

const areaKey: AreaKey = "addFriend";
const emailField: AddFriendKey = "email";

const mapStateToProps = (state: AppState) => {
    const addFriendFetch = state.friends.addFriendFetch;

    const uiFields = state.ui.fields[areaKey] || {};
    const uiErrors = state.ui.errors[areaKey] || {};

    const email = uiFields[emailField] || "";
    const emailError = uiErrors[emailField];

    const isInProgress = !!addFriendFetch && addFriendFetch.status === "loading";

    return {
        email: email,
        emailError: emailError,
        isInProgress: isInProgress,
    };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        setEmail: (newEmail: string) => {
            dispatch(uiSetField(areaKey, emailField, newEmail));
            dispatch(uiSetErrors(areaKey, [emailField], undefined));
        },
        _onSubmit: (email: string) => {
            if (email.length < 5 || Validation.validateEmail(email).error) {
                dispatch(uiSetErrors(areaKey, [emailField], "Please provide valid email address"));
                return;
            }

            dispatch(addFriendThunk(email));
        },
    };
};

type PropsFromState = ReturnType<typeof mapStateToProps>;
type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>;

const mergeProps = (stateProps: PropsFromState, dispatchProps: PropsFromDispatch): AddFriendProps => {
    const { _onSubmit, ...passedDispatchProps } = dispatchProps;

    const onSubmit = () => {
        _onSubmit(stateProps.email);
    };

    return {
        ...stateProps,
        ...passedDispatchProps,

        onSubmit: onSubmit,
    };
};

export const AddFriendContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(AddFriend);
