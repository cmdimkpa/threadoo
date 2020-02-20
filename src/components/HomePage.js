import React, {useEffect}  from 'react'
import './styles/main.css'
import axios from 'axios'
import { database } from './settings/database'
import Thread from './Thread'
import { useDispatch, useSelector } from 'react-redux'


function HomePage(props){

    useEffect(() => {
        fetchThreads()
    }, [])

    const fetchThreads = () => {
        
    }

    return (
        <div>
            {
                // array of threads
            }
        </div>
    )
}


export default HomePage