import "./ProjectCard.css";
import { Link } from "react-router-dom";
function ProjectCard({ project }) {
    return (
        <Link 
          to={`/projects/${project.id}`}
          className="project-card">
            <img
            src={project.image}
            alt={project.title}
            className="project-image"
            />
            <div className="project-content">
                <p className="project-category">
                    {project.category}
                </p>
                <h3 className="project-title">
                    {project.title}
                </h3>
            </div>
        </Link>
    );
}
export default ProjectCard;