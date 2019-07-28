import { appState } from "./reducers/appState-reducer";
import { StoreModule } from "@ngrx/store";

const reducers = {
    appState
};

export const APP_STORE_PROVIDERS = [
    StoreModule.forRoot(reducers),
];
