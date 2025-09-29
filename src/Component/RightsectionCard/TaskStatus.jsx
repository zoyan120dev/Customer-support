import React from "react";

function TaskStatus({ UpdateItems, RemoveButtonData, handelclikedButton, setPurchesButton, puchesButton }) {
  const handleClicked = () => {
    setPurchesButton([...puchesButton, UpdateItems]);
    RemoveButtonData(UpdateItems);
    handelclikedButton();
  };

  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <h1 className="text-gray-900 text-2xl font-medium w-full">
        {UpdateItems.title}
      </h1>
      <button
        className="btn btn-success w-full text-white text-lg rounded-2xl mt-2"
        onClick={handleClicked}
      >
        Complete
      </button>
    </div>
  );
}

export default TaskStatus;
