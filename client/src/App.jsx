import { EmpiricaClassic } from "@empirica/core/player/classic";
import { EmpiricaContext } from "@empirica/core/player/classic/react";
import { EmpiricaMenu, EmpiricaParticipant } from "@empirica/core/player/react";
import React from "react";
import { Game } from "./Game";
import { Introduction } from "./intro-exit/Introduction";
import { MyConsent } from "./intro-exit/Consent";
import { PreTask } from "./intro-exit/PreTask";
import { TypingSpeedTest } from "./intro-exit/TypingSpeedTest";
import { FinalScoreSummary } from "./intro-exit/FinalScoreSummary";
import { MyPlayerForm } from "./intro-exit/MyPlayerForm";
import { FailedGame } from "./intro-exit/FailedGame";
import { MyNoGames } from "./intro-exit/MyNoGames";

export default function App() {
  const urlParams = new URLSearchParams(window.location.search);

  // Get Prolific parameters
  const prolificPID = urlParams.get("PROLIFIC_PID");
  const studyID = urlParams.get("STUDY_ID");
  const sessionID = urlParams.get("SESSION_ID");

  const playerKey = prolificPID || "";
  const { protocol, host } = window.location;
  const url = `${protocol}//${host}/query`;

  function introSteps({ game, player }) {
    player.set("prolificPID", prolificPID);
    player.set("studyID", studyID);
    player.set("sessionID", sessionID);

    // Uncomment for intro steps
    return [
      PreTask, TypingSpeedTest, Introduction
    ];
  }

  //based on empirica documentation 
  function exitSteps({ game, player }) {
    if (player.get("ended") == "game ended") {
      return [FinalScoreSummary];
    }
    else{
      return [FailedGame];
    }
  }

  return (
    <EmpiricaParticipant url={url} ns={playerKey} modeFunc={EmpiricaClassic}>
      <div className="h-screen relative">
        <EmpiricaMenu position="bottom-left" />
        <div className="h-full overflow-auto">
          <EmpiricaContext
            noGames={MyNoGames}
            playerCreate={MyPlayerForm}
            consent={MyConsent}
            introSteps={introSteps}
            exitSteps={exitSteps}
          >
            <Game />
          </EmpiricaContext>
        </div>
      </div>
    </EmpiricaParticipant>
  );
}