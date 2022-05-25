import "./App.css";
import React, { useEffect } from "react";
import "./X.png"

const shapeO = "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/128x128/plain/shape_circle.png"
const shapeX = "https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/128x128/plain/navigate_cross.png";
// const shapeX = "./X.png";



function App() {
  let ItableValue = [[null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null]];
  const [tableValue, setTableValue] = React.useState(ItableValue);
  const [currentPlayer, setCurrentPlayer] = React.useState("X");
  const [icon, setIcon] = React.useState(shapeX);
  const [playerWon, setPlayerWon] = React.useState(null)



  function winCheck(player) {
    if (tableValue[0][0] === player && tableValue[1][0] === player && tableValue[2][0] === player)
      return endTheGame(player);
    if (tableValue[3][0] === player && tableValue[4][0] === player && tableValue[5][0] === player)
      return endTheGame(player);
    if (tableValue[6][0] === player && tableValue[7][0] === player && tableValue[8][0] === player)
      return endTheGame(player);
    if (tableValue[0][0] === player && tableValue[3][0] === player && tableValue[6][0] === player)
      return endTheGame(player);
    if (tableValue[1][0] === player && tableValue[4][0] === player && tableValue[7][0] === player)
      return endTheGame(player);
    if (tableValue[2][0] === player && tableValue[5][0] === player && tableValue[8][0] === player)
      return endTheGame(player);
    if (tableValue[0][0] === player && tableValue[4][0] === player && tableValue[8][0] === player)
      return endTheGame(player);
    if (tableValue[2][0] === player && tableValue[4][0] === player && tableValue[6][0] === player)
      return endTheGame(player);
    else return
  }

  function endTheGame(player) {
    console.log("end");
    setCurrentPlayer("X");
    setIcon(shapeX);
    setPlayerWon(player);
  }

  function newGame() {
    setTableValue(ItableValue);
    setCurrentPlayer("X");
    setIcon(shapeX);
    setPlayerWon(null);
  }


  function clickHandler(cell) {
    if (playerWon !== null) {
      PlayerIsWon();
    } else {
      if (cell[0] === null) {
        cell[0] = currentPlayer;
        cell[1] = icon;
        if (currentPlayer === "X") {
          setCurrentPlayer("O")
          setIcon(shapeO)
        } else {
          setCurrentPlayer("X");
          setIcon(shapeX)
        }
      }
    };
  };

  useEffect(() => {
    if (currentPlayer === "X") {
      winCheck("O")
    } else winCheck("X");
  }, [currentPlayer]);


  function PlayerIsWon() {
    if (playerWon !== null) {
      return <>
        {playerWon} won the game
      </>
    }
  };




  return (
    <>
      <header className="App-header">
        <h1>X Mix Drix</h1>
      </header>
      <main className="table-container">
        <div className="grid-container">
          {tableValue?.map((sq, i) => {
            return <div key={i} className="cell" onClick={() => clickHandler(sq, i)}>
              {sq[1] !== null &&
                <img src={sq[1]} alt=""></img>}

            </div>
          })}
        </div>
        <button className={ playerWon ? "button2" : "button1"} onClick={() => newGame()}>new game</button>
        <div className={ playerWon ? "playerWon" : null}><PlayerIsWon /></div>
      </main>

    </>
  );
}

export default App;

