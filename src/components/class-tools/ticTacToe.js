import React, {useState} from 'react';

export default function TicTacToe() {
  
  const [board, setBoard] = useState([
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
  ]);

  function updateArray(){
    let item = {
      ...board[0][1],
      name: 'P'
  }
    setBoard(() => board[0][0] = "P")
  }
  
  return (
   <>
   <div className="row">
      <div onClick={updateArray}>
        {board[0][0]}
      </div>
      <div>
        {board[0][1]}
      </div>
      <div>
        {board[0][2]}
      </div>
   </div>
   <div className="row">
      <div>
        {board[1][0]}
      </div>
      <div>
        {board[1][1]}
      </div>
      <div>
        {board[1][2]}
      </div>
   </div>
   <div className="row">
      <div>
        {board[2][0]}
      </div>
      <div>
        {board[2][1]}
      </div>
      <div>
        {board[2][2]}
      </div>
   </div>
   </>
 )
  }