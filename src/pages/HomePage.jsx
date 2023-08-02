import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTrainerG } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";
import Line from "../components/Line";

const HomePage = () => {
  const trainer = useSelector((state) => state.trainer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [trainerName, setTrainerName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trainerName.length >= 3) {
      dispatch(setTrainerG(trainerName));
      navigate("/pokedex");
    } else {
      alert("Trainer name should be at least 3 characters long");
    }
  };

  return (
    <div className="home-container">
      <h1>POKÉDEX</h1>
      <h2>Hi Trainer</h2>
      <p>To start with the app, give me your name trainer</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={trainerName}
          onChange={(e) => setTrainerName(e.target.value)}
        />
        <button type="submit" className="catch-button">Gotta catch'em all!</button>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Line color="red" />
      <Line color="black" />
    </div>
  );
};

export default HomePage;

