import React from "react";
import { Container } from "@mui/material";
import Resorts from "./pages/Resorts/list";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ResortsDetail from "./pages/Resorts/detail";
import { Provider } from "react-redux";
import store from "./redux/store";
import CustomSnackbar from "./components/Snackbar";
import Header from "./components/Header";
import Bucket from "./pages/Bucket/Bucket";
function App() {
  return (
    <Provider store={store}>
      <CustomSnackbar />

      <Router>
        <Header
          children={
            <>
              <Routes>
                <Route path={`/bucket`} element={<Bucket />} />
                <Route path={`/:id`} element={<ResortsDetail />} />
                <Route path="/" element={<Resorts />} />
              </Routes>
            </>
          }
        ></Header>
      </Router>
    </Provider>
  );
}

export default App;
