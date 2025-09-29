import React from "react";
import TaskStatus from "./RightsectionCard/TaskStatus";

function SetTaskStatus({ purchesItems = [], handelclikedButton, RemoveButtonData, setPurchesButton, puchesButton }) {
  return (
    <div className="min-h-[200px]">
      <h1 className="text-black text-2xl font-bold">Task Status</h1>
      <div className="space-y-3">
        {purchesItems.length > 0 ? (
          purchesItems.map((UpdateItems) => (
            <TaskStatus
              key={UpdateItems.id}
              UpdateItems={UpdateItems}
              handelclikedButton={handelclikedButton}
              RemoveButtonData={RemoveButtonData}
              setPurchesButton={setPurchesButton}
              puchesButton={puchesButton}
            />
          ))
        ) : (
          <p className="text-gray-500">No tasks available</p>
        )}
      </div>
    </div>
  );
}

export default SetTaskStatus;
