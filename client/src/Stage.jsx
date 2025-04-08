import {
  usePlayer,
  useRound,
  useStage,
  usePlayers
} from "@empirica/core/player/classic/react";
import { Loading } from "@empirica/core/player/react";
import React from "react";
import { SwitchesId } from "./stages/SwitchesId";
import { VerbalFluencySolo } from "./stages/VerbalFluencySolo";

export function Stage() {
  const player = usePlayer();
  const players = usePlayers();
  const round = useRound();
  const stage = useStage();

  if (player.stage.get("submit")) {
    if (players.length === 1) {
      return <Loading />;
    }
    return (
      <div className="text-center text-gray-400 pointer-events-none">
        Please wait for other player(s).
      </div>
    );
  }

  switch (round.get("name")) {
    case "VerbalFluencySolo1":
    case "VerbalFluencySolo2":
    case "VerbalFluencySolo3":  
      switch (stage.get("name")) {
        case "VerbalFluencySolo":
          return <VerbalFluencySolo />;
        case "SwitchesId":
          return <SwitchesId />;
        default:
          return <Loading />;
      }
    default:
      return <Loading />;
  }
}