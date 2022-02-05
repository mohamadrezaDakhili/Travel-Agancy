import React from "react";
import { Container } from "@mui/material";
import Resorts from "./pages/Resorts/list";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ResortsDetail from "./pages/Resorts/detail";
import { Provider } from "react-redux";
import store from "./redux/store";
import CustomSnackbar from "./components/Snackbar";
import Header from "./components/Header";
function App() {
  return (
    <Provider store={store}>
      <Header
        children={
          <>
            <Router>
              <Routes>
                <Route path="/" element={<Resorts />} />
                <Route path={`/:id`} element={<ResortsDetail />} />
              </Routes>
            </Router>
            <CustomSnackbar />
          </>
        }
      ></Header>
    </Provider>
  );
}

export default App;
