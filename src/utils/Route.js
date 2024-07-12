import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import CreateInvoice from "../components/CreateInvoice";
import AllInvoice from "../components/AllInvoice";

export const route=createBrowserRouter([
    {
        path:'/',
        Component:Home
    },
    {
        path:'/create-invoice',
        Component:CreateInvoice
    },
    {
        path:'/show-all-invoice',
        Component:AllInvoice
    }
])