import React from "react";
import { HelmetProvider } from "react-helmet-async";
import MainLayout from "./layouts/MainLayout";
import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <MainLayout />
    </HelmetProvider>
  );
}

export default App;