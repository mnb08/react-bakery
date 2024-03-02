import React from 'react'
import { Sweets } from '../Sweets/Sweets.js'
import { Admin } from "../Admin/Admin.js";
import { Routes, Route } from "react-router-dom";
export const Main = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={<Sweets />}> </Route>
            <Route path='/admin' element={<Admin />}></Route>
            
        </Routes>
        </>
    )
}
