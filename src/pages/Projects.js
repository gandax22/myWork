import { projects } from "../helpers/ProjectsList"
import Project from "../components/Project"
function Projects() {

    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projects.map((el, index)=>{
                        return(
                            <Project title={el.title} img={el.img} index={index}/>
                            )
                    })}
                <Project/>
                </ul>
            </div>
        </main>

    )
}
export default Projects