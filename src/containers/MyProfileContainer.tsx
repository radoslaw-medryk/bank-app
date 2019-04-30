import { connect } from "react-redux";
import { MyProfile } from "src/components/MyProfile";
import { AppState } from "src/state/store";
import { AppDispatch } from "src/state/types";
import { setTokenThunk } from "src/state/auth/thunks/setTokenThunk";

const mapStateToProps = (state: AppState) => ({
    email: (state.auth.profile && state.auth.profile.email) || "",
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    onLogout: () => dispatch(setTokenThunk(undefined, undefined, undefined)),
});

export const MyProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyProfile);
