import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";
import './asserts/script/ViewCount'
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>    
    </React.StrictMode>
     );
