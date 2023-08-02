import { configureStore } from "@reduxjs/toolkit";
import trainer from "./slices/trainer.slice";
import pokemon from "./slices/pokemon.slice";

export default configureStore({
  reducer: {
    trainer,
    pokemon
  }
});
