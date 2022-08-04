import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
);
root.render(
        <React.StrictMode>
            <BrowserRouter>
                <AppRoutes/>
            </BrowserRouter>

        </React.StrictMode>
);

