import userReducer from '../features/userSlice';
import appReducer from "../features/appSlice"
import {configureStore} from "@reduxjs/toolkit"

export default configureStore({
  reducer: {
    user : userReducer,
    app: appReducer,

  },
});
