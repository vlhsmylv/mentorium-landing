import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactNode } from "react";

interface RouteType {
  component: ReactNode;
  path: "/" | "/about" | "/try";
}

const routes: RouteType[] = [
  {
    component: <App />,
    path: "/",
  },
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      {routes.map((route, i) => (
        <Route element={route.component} path={route.path} key={i} />
      ))}
    </Routes>
  </BrowserRouter>
);
