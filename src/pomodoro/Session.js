import { secondsToDuration, minutesToDuration } from "../utils/duration"
import React from "react"

export default function Session({ session, focusDuration, breakDuration }) {
  if (!session) return null
  const currentSessionTime = session.label == "Focusing" ? focusDuration : breakDuration
  const currentPercent = 100 - (session.timeRemaining / (currentSessionTime * 60)) * 100
  return (
    <>
      <div className="row mb-2">
        <div className="col">
          <h2 data-testid="session-title">
            {session.label} for {minutesToDuration(currentSessionTime)} minutes
          </h2>
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(session.timeRemaining)} remaining
          </p>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={currentPercent}
              style={{ width: currentPercent + "%" }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
