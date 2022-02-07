import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import { store } from "./store/store";
function OrdenApp() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default OrdenApp;
