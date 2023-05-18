import { useParams } from "react-router-dom"
import { projects } from "../helpers/ProjectsList"
import GitHubButton from "../components/GitHubButton"
function ProjectViews () {
    const {id} = useParams()
    const project = projects[id]
    return(
        <div className="ProjectViews">
            <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{project.title}</h1>

                <img src={project.imgBig} alt="" className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>{project.skills}</p>
                </div>
                {project.gitHubLink &&
                <GitHubButton link="https://github.com"/>}
             

            </div>
        </div>
    </main>
        </div>
    )
}
export default ProjectViews