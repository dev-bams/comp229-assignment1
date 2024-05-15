import ProjectList from "./ProjectList";

function ProjectsSection() {
  return (
    <div
      className="flex justify-center dark:bg-first-primary bg-second-primary transition-colors duration-300 min-h-lvh"
      id="projects"
    >
      <div className="max-w-7xl w-full p-4  flex flex-col justify-center gap-10 ">
        <div className="flex h-full items-center">
          <ProjectList />
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
