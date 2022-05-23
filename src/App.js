import "./App.css";
import React from "react";
// import "./icons"

let shapeO = "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/128x128/plain/shape_circle.png"
let shapeX = "https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/128x128/plain/navigate_cross.png";
let tableValue = [[null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null]];
function App() {

  const [currentPlayer, setCurrentPlayer] = React.useState("X");
  const [icon, setIcon] = React.useState( shapeX );

  // console.log(currentPlayer);
  // winCheck(currentPlayer);


  function winCheck(player) {
    console.log(player);
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
    alert(`${player} WON!!!!!!`);
    tableValue = [[null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null]];
    
    setCurrentPlayer("X");
    setIcon(shapeX);
  }
 
  

  function CreateCells() {
    let tableArray = [];
    for (let i = 1; i < 10; i++) {
      tableArray.push(<div key={i} className="cell" onClick={() => clickHandler(i - 1)}><img src={tableValue[i - 1][1]} alt=""></img></div>)
    }
    winCheck(currentPlayer);
    return tableArray;

  }

  function clickHandler(cellNum) {
    if (tableValue[cellNum][0] === null) {
      tableValue[cellNum][0] = currentPlayer;
      tableValue[cellNum][1] = icon;
      if (currentPlayer === "X") {
        setCurrentPlayer("O")
        setIcon(shapeO)
      } else {
        setCurrentPlayer("X");
        setIcon(shapeX)
      }
      
      // console.log(tableValue);    // delete
      // console.log(currentPlayer);   // delete  
    };
  };

  return (
    <>
      <header className="App-header">
        <h1>X Mix Drix</h1>
      </header>
      <main className="table-container">
        <div className="grid-container">
          <CreateCells />
        </div>
      </main>

    </>
  );
}

export default App;




/*  write the name of the players
    choose number of matches
    start the game


    1. create state for player 
    2. player chooses a square
    3. insert x to the selected square
    4. check if the player won
      4.1. yes - end the game
      4.2. no - continue to other player

      end the game: 
      1. massage that the player won
      2. clear the tableValue
      3. 

*/