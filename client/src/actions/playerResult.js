import * as api from "../api";
import {
  CREATE_PLAYER_RESULT,
  FETCH_PLAYER_RESULT,
  ADD_ANSWER,
  PLAYER_RESULT,
} from "../constants/actionTypes";

export const createPlayerResult = (playerResult) => async (dispatch) => {
  try {
    const { data } = await api.createPlayerResult(playerResult);
    dispatch({ type: CREATE_PLAYER_RESULT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPlayerResult = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPlayerResult(id);
    dispatch({ type: FETCH_PLAYER_RESULT, payload: { playerResult: data } });
  } catch (error) {
    console.log(error);
  }
};
export const getPlayer = (id) => async (dispatch) => {
  try {
    const { data } = await api.PlayerResult(id);
    console.log("🚀 ~ getPlayer ~ data:", data);
    dispatch({ type: PLAYER_RESULT, payload: { playerData: data } });
  } catch (error) {
    console.log(error);
  }
};

export const addAnswer = (newAnswer, id) => async (dispatch) => {
  try {
    const { data } = await api.addAnswer(newAnswer, id);
    dispatch({ type: ADD_ANSWER, payload: data });
    return data;
  } catch (error) {
    console.log(error);
  }
};
