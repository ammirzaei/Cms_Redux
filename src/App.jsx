import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

export default function App() {
  const Router = useRoutes(routes);

  return (
    <>
      <Header />
      <div class="container px-0">
        <main class="main">
          <div class="row justify-content-between mx-0">
            <Sidebar />

            {Router}
          </div>
        </main>
      </div>
    </>
  );
}
