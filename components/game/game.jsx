import { GameCell } from "./game-cell";
import { GameInfo } from "./game-info";
import styles from "./game.module.css";
// import { ResetButton } from "./reset-button";
import { useGameState } from "./use-game-state";

export function Game() {
  const {
    cells,
    currentStep,
    winnerSymbol,
    isDraw,
    resetGame,
    toggleCell,
    getWinnerCell,
  } = useGameState();

  return (
    <div className="flex flex-col items-center w-40 mx-auto my-24 border border-black p-5">
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className="grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={getWinnerCell(index)}
            onClick={() => toggleCell(index)}
          />
        ))}
      </div>
      <button
        className="cursor-pointer mt-2.5 bg-transparent border border-gray-400 py-1 px-3 rounded"
        onClick={resetGame}
      >
        Сбросить
      </button>
    </div>
  );
}
// "flex flex-col items-center w-40 mx-auto my-24 border border-black p-5"
// "grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]"

// {styles["game"]}
// {styles["game-field"]}
