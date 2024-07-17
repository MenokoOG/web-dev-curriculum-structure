import { useNavigate } from "react-router-dom"


const Navbar = () => {

    const navigate = useNavigate()

    const handleHomeClick = () => navigate('/')
    const handleAddGoalClick = () => navigate('/add-goal')
    const handleSeeGoalsClick = () => navigate('/all-goals')

    return(
        <div className="navbar">
            <button onClick={handleHomeClick}>Home</button>
            <button onClick={handleAddGoalClick}>Share Your Goal</button>
            <button onClick={handleSeeGoalsClick}>See Goals</button>
        </div>
    )
}

export default Navbar