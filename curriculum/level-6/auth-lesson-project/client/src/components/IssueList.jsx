import Issue from "./Issue";




function IssueList(props) {

    const { issues } = props

    const issueElements = issues.map(issue => {
        return (<Issue {...issue} key={issue._id} />
            
        )
    })

return (
    <div>
        {issueElements}
    </div>

)
}
export default IssueList;