import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { startSession, connectToServer } from "./asyncAction";
import { GiCheckeredFlag } from "react-icons/gi";
import { useEffect } from "react";


function App() {
  const dispatch = useDispatch();
  const horses = useSelector((state) => state.horses);
  const gameNumber = useSelector((state) => state.gameNumber);

  useEffect(() => {
    dispatch(connectToServer());
  }, []);

  const getHorses = () => {
    if (horses.filter((horse) => horse.distance < 1000).length == 0) {
      dispatch(startSession());
    } else {
      alert("Game is not finished");
    }
  };

  return (
    <div className="main">
      <div className="button-container">
        <GiCheckeredFlag onClick={() => getHorses()} />
        <p>START</p>
      </div>

      <div className="result-container" key={gameNumber}>
        {horses.map((horse) => (
          <li>
            <span>
              <h3>{horse.name}</h3>
              <p>Distance: {horse.distance}</p>
            </span>
            <div className="run-area">
              <div
                className="horse"
                style={{
                  marginLeft: horse.distance + "px",
                  transition: "margin-left 1000ms linear",
                  animationPlayState:
                    horse.distance < 1000 ? "running" : "paused",
                }}
              />
            </div>
            <div className="finish-area"></div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
