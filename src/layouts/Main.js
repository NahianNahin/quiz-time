import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNavbar from '../components/BottomNavbar/BottomNavbar';
import Header from '../components/Header/Header';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <BottomNavbar></BottomNavbar>
        </div>
    );
};

export default Main;