import React, { useState, useContext} from "react"
import { UserContext } from "../context/UserProvider"

export default function IssueForm(props) {

    const { addIssue } = useContext(UserContext)

        const initState = {
        title: "",
        description: "",
        imgUrl: ""
    }

    const [formData, setFormData] = useState(initState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addIssue(formData)
        setFormData(initState)
    }

    return (
        <div>
            <h1>Issue Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
                <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange}/>
                <input type="text" name="imgUrl" placeholder="Image Url" value={formData.imgUrl} onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    )

}