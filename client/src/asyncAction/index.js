import { io } from "socket.io-client";
import { getInfoFromServer } from "../store/customReducer";

const serverHost = "https://savchenko-horses-backend.herokuapp.com/";

let socket = null;

export const startSession = () => {
  return (dispatch) => {
    socket.emit("start");
  };
};
export const connectToServer = () => {
  return (dispatch) => {
    socket = io.connect(serverHost);
    socket.on("connect", () => {
      socket.on("ticker", (msg) => {
        dispatch(getInfoFromServer(msg));
      });
    });
  };
};
