import { loginFailure, loginStart, loginSuccess, logOut, registerRequest, registerSuccess, registerFailure } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  try{
    dispatch(logOut());
  } catch(err){}
}

export const register = async (dispatch, userData) => {
  try {
      dispatch(registerRequest());
      const response = await publicRequest.post("/auth/register", userData);
      dispatch(registerSuccess(response.data));
  } catch (error) {
      dispatch(registerFailure(error.response.data.msg));
  }
};
