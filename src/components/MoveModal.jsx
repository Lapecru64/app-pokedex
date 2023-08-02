import React from "react";

const MoveModal = ({ moves, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-btn">Close</button>
        <h3>Movements by Level</h3>
        <ul>
          {moves.map((move, index) => (
            <li key={index}>{move.move.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoveModal;

