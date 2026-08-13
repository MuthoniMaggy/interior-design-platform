import "./ProjectCard.css";
function ProjectCard({ project }) {
    return (
        <div className="project-card">
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
        </div>
    );
}
export default ProjectCard;