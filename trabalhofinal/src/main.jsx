import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App2 from './App2';
import { Clientes } from "./Clientes";
import { Produtos } from "./Produtos";
import { Toaster } from 'sonner';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Contato } from "./components/Contato/Contato";
import { register } from "swiper/element";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import App from "./App";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App2 />,
  }, {
    path: "/clientes",
    element: <Clientes />,
  }, {
    path: "/produtos",
    element: <Produtos />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster richColors position="top-right" />
    <Tooltip id="my-tooltip" />
  </React.StrictMode>
);

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
