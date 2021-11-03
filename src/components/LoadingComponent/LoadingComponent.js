import React from 'react'
import { useSelector } from 'react-redux'

export default function LoadingComponent() {
    const {isLoading} = useSelector(state => state.LoadingReducer)
    if (isLoading) {
        return (
            <div className=" bg_loading">
    
            </div>
        )
    } else {
        return null
    }

}
