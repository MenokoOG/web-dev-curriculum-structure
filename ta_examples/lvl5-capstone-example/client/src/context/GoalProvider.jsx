import axios from 'axios';
import React, { useState, useEffect, createContext } from 'react';


const GoalContext = createContext()


const GoalProvider = (props) => {

    const [goals, setGoals] = useState([])

    const getGoals = async () => {
        try {
            const res = await axios.get('/goal')
            setGoals(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const addNewGoal = async(newGoal) => {
        try {
            const res = await axios.post('/goal', newGoal)
            setGoals(prev => [...prev, res.data])
        } catch (err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
        getGoals()
    },[])


    return (
        <GoalContext.Provider value={{addNewGoal, goals}}>
            {props.children}
        </GoalContext.Provider>
    )
}

export { GoalContext, GoalProvider }