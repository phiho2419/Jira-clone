import React, { useEffect } from 'react'
import HomeDashboard from '../components/HomeDashboard/HomeDashboard'
import { Route } from 'react-router'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeDashboardToprow from '../components/HomeDashboardToprow/HomeDashboardToprow';
import { history } from '../utils/history';
export default function HomeTemplate(props) {

    /* Thêm, xóa class active ở dashboard để thay đổi width
    toggle_hidden : display none
    */
    const activeDashboard = () => {
        document.getElementById('dashboard').classList.toggle("active");
        document.getElementById('toggle_on').classList.toggle("toggle_hidden");
        document.getElementById('toggle_off').classList.toggle("toggle_hidden");
    }


    // Check login
    const checkLogin = () => {
        if (!localStorage.getItem('userLogin')) {
            return history.push('/login')
        };
    }

    useEffect(() => {
        checkLogin()
    }, [])
    return (<Route path={props.path} exact render={(propsRoute) => {
        return <div className="flex">
            <div>
                <HomeDashboard />
            </div>
            <div className="flex flex-col flex-grow">
                <div className="HomeDashboardToprow">
                    <div>
                        <div className='toggle_dashboard ' onClick={() => { activeDashboard() }} >
                            <MenuIcon id="toggle_on" sx={{ fontSize: 40, color: '#232c33' }} className="toggle_on " />
                            <CloseIcon id="toggle_off" sx={{ fontSize: 40, color: '#232c33' }} className="toggle_off toggle_hidden" />
                        </div>
                    </div>
                    <HomeDashboardToprow />
                </div>
                <div>
                    <props.component {...propsRoute} />
                </div>
            </div>
        </div>


    }}>

    </Route >
    )
}
