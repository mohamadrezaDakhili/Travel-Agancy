import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import CustomSnackbar from "./components/Snackbar";
import Header from "./components/Header";
import TravelAgancyRoutes from "./router";
function App() {
  return (
    <Provider store={store}>
      <CustomSnackbar />

      <Router>
        <Header children={<TravelAgancyRoutes />}></Header>
      </Router>
    </Provider>
  );
}

export default App;
