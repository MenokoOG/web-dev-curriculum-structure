import { useState, useContext } from "react"
import { GoalContext } from "../context/GoalProvider"


const AddGoal = () => {

    const [formData, setFormData] = useState({
        goalName: '',
        goalDescription: ''
    })

    const { addNewGoal } = useContext(GoalContext)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addNewGoal(formData)
        setFormData({
            goalName: '',
            goalDescription: ''
        })
    }


    return (
        <div className="add-goal">
            <form onSubmit={handleSubmit} className="add-goal-form">
                <h3>Share Your Goal!</h3>
                <input
                    type="text"
                    placeholder="Goal Name"
                    name="goalName"
                    value={formData.goalName}
                    onChange={handleChange}
                />
                <textarea
                    rows={15}
                    placeholder="Goal Plan"
                    name="goalDescription"
                    value={formData.goalDescription}
                    onChange={handleChange}
                />
                <button>Share!</button>
            </form>
        </div>
    )
}

export default AddGoal