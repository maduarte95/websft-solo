import React from "react";
import { Button } from "../components/Button";

export function Introduction({ next }) {
  return (
    <div className="max-w-2xl mx-auto mt-3 sm:mt-5 p-8">
      <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
        Instructions: Item Naming
      </h3>

      {/* Canva Video Embed */}
      <div style={{position: "relative", width: "100%", height: 0, paddingTop: "56.2500%", paddingBottom: 0, boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", marginTop: "1.6em", marginBottom: "0.9em", overflow: "hidden", borderRadius: "8px", willChange: "transform"}}>
        <iframe 
          loading="lazy" 
          style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0}}
          src="https://www.canva.com/design/DAGkJ3uV2bI/lRWl0FBOc_zgwJ6F2IQOFA/watch?embed" 
          allowFullScreen={true}
          allow="fullscreen"
          title="Instructions Video"
        ></iframe>
      </div>
      
      <div className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <p className="text-base font-bold mb-3">Game Overview:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>You'll participate in three 3-minute rounds</li>
            <li>In each round, you'll be asked to name as many items as you can from a given category</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-base font-bold mb-3">Display and Scoring:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Submit an item by pressing Enter</li>
            <li>Score is based on the total number of unique items submitted</li>
            <li>The screen will display all items named and the current score</li>
            <li>A timer will show the remaining time for each round</li>
            <li>Once a word is submitted, an additional 20-second timer will be displayed. A penalty for slow responses will be applied every 20 seconds.</li>
          </ul>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <p className="text-base font-bold mb-3">Important Notes:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Submit items as fast as possible</li>
            <li>Submit only items from the requested category. Do not include anything else.</li>
            <li>Each item should be unique - no repetitions</li>
            <li>Your final bonus will be based on the combined scores from all rounds with a deduction for slow responses</li>
            <li>You will receive the code for your bonus after you complete the post-task assessment</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Button handleClick={next} autoFocus>
          Continue
        </Button>
      </div>
    </div>
  );
}