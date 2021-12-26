import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import dashboardLogo from '../../images/pngImages/icon-calender.png';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';

export default function HomeDashboard() {
    let location = useLocation();

    /** 
     * changeItemActive lấy id đổi css dashboard_item active
     * Nếu refes trang : lấy pathname từ location để biết dashboard_item nào đang active
     */
    const changeItemActive = (id, pathname) => {
        const item = document.querySelectorAll(".dashboard_item");
        for (let index = 0; index < item.length; index++) {
            const element = item[index];
            element.className = "dashboard_item"
        }
        if (id) {
            return document.getElementById(id).className = "dashboard_item active";
        } else if (pathname === '/') {
            return document.getElementById('db_item1').className = "dashboard_item active";
        } else if (pathname === '/board') {
            return document.getElementById('db_item2').className = "dashboard_item active";
        } else if (pathname === '/createproject') {
            return document.getElementById('db_item3').className = "dashboard_item active";
        } else if (pathname === '/setting') {
            return document.getElementById('db_item4').className = "dashboard_item active";
        }
    }

    useEffect(() => {
        changeItemActive(null, location.pathname);
    }, [])
    return (
        <div id="dashboard" className="dashboard active h-screen ">
            <div>
                <div className="dashboard_logo flex items-center">
                    <img src={dashboardLogo} width={85} />
                    <div>
                        <p className="title_logo"> iPhiho's Jira clone </p>
                        <p className="ver_logo"> Version 1.0.0  </p>
                    </div>
                </div>
                <ul className="dashboard_list " style={{ color: 'white' }}>
                    <NavLink to='/'>
                        <li id="db_item1" className="dashboard_item active" onClick={() => { changeItemActive('db_item1') }}>
                            <HomeOutlinedIcon />
                            <span className="name_item mt-1">Home</span>
                        </li>
                    </NavLink>
                    <NavLink to='/board'>
                        <li id="db_item2" className="dashboard_item" onClick={() => { changeItemActive('db_item2') }}>
                            <DashboardOutlinedIcon />
                            <span className="name_item mt-1" >Board</span>
                        </li>
                    </NavLink>
                    <NavLink to='/createproject'>
                        <li id="db_item3" className="dashboard_item" onClick={() => { changeItemActive('db_item3') }}>
                            <DashboardCustomizeOutlinedIcon />
                            <span className="name_item mt-1">Create Project</span>
                        </li>
                    </NavLink>
                    <NavLink to='/setting'>
                        <li id="db_item4" className="dashboard_item" onClick={() => { changeItemActive('db_item4') }}>
                            <SettingsIcon />
                            <span className="name_item  mt-1">Setting</span>
                        </li>
                    </NavLink>

                </ul>
                <hr style={{ width: '80%', marginLeft: '10px' }} />
            </div>
            
        </div>
    )
}
