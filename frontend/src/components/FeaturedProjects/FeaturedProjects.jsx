import "./FeaturedProjects.css";
import projects from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
function FeaturedProjects(){
    return(
        <section id="portfolio" className="featured-projects">
            <div className="featured-projects-header">
                <p className="section-label">
                    OUR WORK
                </p>
                <h2 className="section-title">
                    Featured Projects
                </h2>
                <p className="section-description">
                    Explore some of our latest interior design transformations.
                </p>
            </div>
            <div className="projects-grid">
                {projects.map((project)=>(
                    <ProjectCard
                    key={project.id}
                    project={project}
                    />
                ))
                }
            </div>
        </section>
    );
}
export default FeaturedProjects;