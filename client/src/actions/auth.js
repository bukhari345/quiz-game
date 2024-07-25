// @ts-nocheck
import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: AUTH, data });
    if (data.result.userType === "Teacher") {
      history.push("/myquizes");
    } else {
      history.push("/games/joingame");
    }
  } catch (error) {
    console.log(error);
  }
};

export const register = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
