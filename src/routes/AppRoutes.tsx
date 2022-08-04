import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";

export default function AppRoutes() {
    return (
            <Routes>
                <Route index element={
                    <Home/>
                }/>


            </Routes>
    );
}
