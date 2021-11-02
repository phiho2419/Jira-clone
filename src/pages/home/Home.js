import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Home(props) {
    const dispatch = useDispatch();

    return (
        <div className="m-10">
            <NavLink to="/signin">
                <Button>signin</Button>
            </NavLink>
            <NavLink to="/signup">
                <Button>signup</Button>
            </NavLink>
            <Button onClick={()=>{
                props.history.push("/signup")
            }}>HISTORY PUSH</Button>

        </div>
    )
}
