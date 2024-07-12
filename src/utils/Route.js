import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import InvoiceManage from "../page/InvoiceManage";

export const route=createBrowserRouter([
    {
        path:'/',
        Component:Home
    },
    {
        path:'/invoice-manager',
        Component:InvoiceManage
       
    }
   
])