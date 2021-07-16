import React from 'react'
import './style.css'
import Button from "./Button"
import { Color } from 'jest-matcher-utils/node_modules/chalk'


const App = () => {
    return(
        <div className="container">
            <h1 style={{textAlign:"center",color:"blue"}}>Hi! this is ansar</h1>
            <h2>Welcome to our react Assignment</h2>
            <div className="btn">
                <Button buttonText="rule-1"/>
                <Button buttonText="rule-2" />
                <Button buttonText="rule-3"/>
            </div>
            
            
           
        </div>
    )
}

export default App

