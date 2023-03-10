import { NFT_DATA, LOADING, SINGLE_NFT, OPEN_MODAL } from "../type";

const initialState = {
  nftData: {},
  loader: true,
  singleNFT: {},
  openModal: false,
};

const NFTReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case NFT_DATA: {
      return {
        ...state,
        nftData: payload,
      };
    }

    case LOADING: {
      return {
        ...state,
        loader: payload,
      };
    }

    case SINGLE_NFT: {
      return {
        ...state,
        singleNFT: payload,
      };
    }

    case OPEN_MODAL: {
      return {
        ...state,
        openModal: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default NFTReducer;
