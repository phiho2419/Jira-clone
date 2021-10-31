import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            home
            <Link to="/login">
                <button>login</button>
            </Link>
            <Link to="/signup">
                <button>signup</button>
            </Link>
        </div>
    )
}
