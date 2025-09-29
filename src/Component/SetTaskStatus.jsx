import React from "react";
import TaskStatus from "./RightsectionCard/TaskStatus";

function SetTaskStatus({ purchesItems, handelclikedButton, RemoveButtonData }) {
  return (
    <>
      <h1 className="text-black text-2xl font-bold">Task Status</h1>
      <div className="space-y-3">
        {purchesItems.map((UpdateItems) => (
          <TaskStatus
            RemoveButtonData={RemoveButtonData}
            key={UpdateItems.id}
            UpdateItems={UpdateItems}
            handelclikedButton={handelclikedButton}
          />
        ))}
      </div>
    </>
  );
}

export default SetTaskStatus;
