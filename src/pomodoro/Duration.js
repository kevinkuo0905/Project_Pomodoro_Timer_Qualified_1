import React from "react"
import { minutesToDuration } from "../utils/duration"

export default function Duration({
  session,
  focusDuration,
  setFocusDuration,
  breakDuration,
  setBreakDuration,
}) {
  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            Focus Duration: {minutesToDuration(focusDuration)}
          </span>
          <div className="input-group-append">
            <button
              onClick={() => setFocusDuration((duration) => duration - 5)}
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              disabled={focusDuration == 5 || session}
            >
              <span className="oi oi-minus" />
            </button>
            <button
              onClick={() => setFocusDuration((duration) => duration + 5)}
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              disabled={focusDuration == 60 || session}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              Break Duration: {minutesToDuration(breakDuration)}
            </span>
            <div className="input-group-append">
              <button
                onClick={() => setBreakDuration((duration) => duration - 1)}
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                disabled={breakDuration == 1 || session}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                onClick={() => setBreakDuration((duration) => duration + 1)}
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                disabled={breakDuration == 15 || session}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
