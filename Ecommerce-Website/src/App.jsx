import React from "react";
import "./App.css";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
};

export default App;
