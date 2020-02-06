import { createStore } from "redux";
import rootReducer from "../redux/root-reducer";
import { persistStore } from "redux-persist";

export const store = createStore(rootReducer);

export const persistor = persistStore(store);

export default { store, persistor }
