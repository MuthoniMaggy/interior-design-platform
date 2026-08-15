import { Link, useParams } from "react-router-dom";
import projects from "../../data/projects";
import "./ProjectDetails.css";

function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find(
        (project) => project.id === Number(id)
    );
    if (!project) {
        return <h1>Project not found</h1>;
    }
    return(
        <main className="project-details">
            <Link to="/#portfolio" classname="back-link">
             ← Back to Portfolio
            </Link>
            <h1>{project.title}</h1>
            <p>{project.category}</p>
            <img
              src={project.image}
              alt={project.title}
            />
        </main>
    );
}
export default ProjectDetails;