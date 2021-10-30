import React from 'react'
import { Route } from 'react-router'

export default function UserTemplate(props) {
    return <Route path={props.path} exact render={(propsRoute) => {
        return <div className="bg_user_template w-screen h-screen ">
            <div className="container">
                <div className="grid grid-cols-2 gap-4 h-screen">
                    <div className="flex items-center">
                        {/* <div className="flex-1">
                            <img src="../../images/hlw1.png" alt="hlw" width={400} />
                        </div> */}
                        <div className="flex-1">
                            <div className="user_template_content">
                                <p className="wel">Welcome to iPhiHo's Jira clone </p>
                                <p>Start your world now!</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <props.component {...propsRoute} />
                    </div>
                </div>
            </div>
        </div>
    }
    }>

    </Route >
}
