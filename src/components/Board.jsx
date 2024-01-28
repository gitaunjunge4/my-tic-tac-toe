import Strike from "./Strike";
import Tile from "./Tile";

function Board({ tiles, onTileClick, playerTurn, strikeClass }) {
    return (  
        <div className="board">
        <Strike strikeClass={strikeClass}/>
        <Tile 
          playerTurn={playerTurn}
          onClick={()=>onTileClick(0)} 
          value={tiles[0]} 
          className="vertical-border bottom-border"
        />
        <Tile
          playerTurn={playerTurn}
          onClick={()=>onTileClick(1)} 
          value={tiles[1]} 
          className="vertical-border bottom-border"
        />
        <Tile 
          playerTurn={playerTurn}
          onClick={()=>onTileClick(2)} 
          value={tiles[2]} 
          className="bottom-border"
        />
        <Tile 
          playerTurn={playerTurn}
          onClick={()=>onTileClick(3)} 
          value={tiles[3]} 
          className="vertical-border bottom-border"
        />
        <Tile 
          playerTurn={playerTurn}
          onClick={()=>onTileClick(4)} 
          value={tiles[4]} 
          className="vertical-border bottom-border"
        />
        <Tile 
          playerTurn={playerTurn}
          onClick={()=>onTileClick(5)} 
          value={tiles[5]} 
          className="bottom-border"
        />
        <Tile 
          playerTurn={playerTurn}
          onClick={()=>onTileClick(6)} 
          value={tiles[6]} 
          className="vertical-border"
        />
        <Tile 
          playerTurn={playerTurn}
          onClick={()=>onTileClick(7)} 
          value={tiles[7]} 
          className="vertical-border"
        />
        <Tile 
          playerTurn={playerTurn}
          onClick={()=>onTileClick(8)} 
          value={tiles[8]} 
        />
        </div>
    );
}

export default Board;