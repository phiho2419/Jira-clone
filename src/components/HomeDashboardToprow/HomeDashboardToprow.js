import { Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HomeDashboardToprow() {
    return (
        <div className="dashboard_header">
            <div className="button_group text-right">
                <NavLink to="/signin">
                    <Button style={{ color: "white" }}>Login</Button>
                </NavLink >
                <NavLink to="/signup">
                    <Button style={{ color: "white" }}>Sign up</Button>
                </NavLink >
            </div>
        </div>
    )
}
