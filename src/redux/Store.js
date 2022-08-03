import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import Reducer from "./Reducer";




const persistConfig={
    key:'root',
    storage:AsyncStorage,
}

const persistedReducer= persistReducer(persistConfig,Reducer)

export const store=createStore(persistedReducer)
export const persistor=persistStore(store)