import { LOADING, NFT_DATA, OPEN_MODAL, SINGLE_NFT } from "../type";

export const getAllNFT = (param) => (dispatch) => {
  dispatch({ type: NFT_DATA, payload: param });
};

export const Loader = (param) => (dispatch) => {
  dispatch({ type: LOADING, payload: param });
};

export const GetSingleNFT = (param) => (dispatch) => {
  dispatch({ type: SINGLE_NFT, payload: param });
};

export const ModalChecker = (param) => (dispatch) => {
  dispatch({ type: OPEN_MODAL, payload: param });
};
