import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider } from "react-router-dom";
import { router } from './routes/Routes';
import FirebaseProvider from './firebase/FirebaseProvider';
import { HelmetProvider } from "react-helmet-async";
 import { ToastContainer} from "react-toastify";

 import "react-toastify/dist/ReactToastify.css";
 import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <ToastContainer></ToastContainer>
      </HelmetProvider>
    </FirebaseProvider>
  </React.StrictMode>
);
