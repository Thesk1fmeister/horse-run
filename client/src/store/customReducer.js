const defaultState = {
  horses: [],
  gameNumber: 1,
};

const GET_INFO = "GET_INFO";

export const distanceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_INFO: {
      let newGameNumber = state.gameNumber;
      if (
        state.horses.length > 0 &&
        action.payload[0].distance < state.horses[0].distance
      ) {
        newGameNumber += 1;
      }
      return {
        ...state,
        horses: [...action.payload],
        gameNumber: newGameNumber,
      };
    }

    default:
      return state;
  }
};

export const getInfoFromServer = (payload) => ({ type: GET_INFO, payload });
