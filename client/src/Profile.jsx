import {
  usePlayer,
  useRound,
  useStage,
  useGame
} from "@empirica/core/player/classic/react";
import React from "react";
import { Avatar } from "./components/Avatar";
import { Timer } from "./components/Timer";


export function Profile() {
  const player = usePlayer();
  const round = useRound();
  const stage = useStage();
  const game = useGame();
 
  const taskIndices = game.get("taskCategories") || [];
  const roundName = round?.get("name");
  const currentRoundIndex = game.get("currentRoundIndex") || 0;

  // Use the round index for display
  const displayRoundNumber = currentRoundIndex + 1;
  const maxRounds = taskIndices.length;
  const roundScore = player.round.get("score") || 0;
  //add Roundscore to previous score to get totalscore
  const totalScore = player.get("score") + roundScore || 0 + roundScore;
  const penalties = player.get("slowResponsePenalties") || 0;

  return (
    <div className="min-w-lg md:min-w-2xl mt-2 m-x-auto px-3 py-2 text-gray-500 rounded-md grid grid-cols-3 items-center border-.5">
      <div className="leading-tight ml-1">
        <div className="text-gray-600 font-semibold">
          {round ? `Round ${displayRoundNumber} of ${maxRounds}` : ""}
        </div>
        <div className="text-empirica-500 font-medium">
          {stage ? (stage.get("name").includes("Result") ? "Results" : "Task") : ""}
        </div>
      </div>
      <Timer />
      <div className="flex space-x-3 items-center justify-end">
        <div className="flex flex-col items-center">
          <div className="text-xs font-semibold uppercase tracking-wide leading-none text-gray-400">
            Score
          </div>
          <div className="text-3xl font-semibold !leading-none tabular-nums">
            {roundScore}
          </div>
          <div className="text-xs font-semibold text-gray-400 mt-1">
            Total: {totalScore}
          </div>
          <div className="text-xs font-semibold text-gray-400 mt-1">
            Penalties: {penalties}
          </div>
        </div>
        <div className="h-11 w-11">
          <Avatar player={player} />
        </div>
      </div>
    </div>
  );
}