import Button from "./Button";

export default function ProjectSidebar({
    onStartAddProject,
    projects,
    onSelectProject,
    selectedProjectId
}) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-800 text-stone-400 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject} >
                    + New Project
                </Button>
            </div>
            <ul className="mt-8">
                {projects.map((project) => {
                    console.log('project selected id:', selectedProjectId)
                    let cssClasses = 'w-full text-left px-2 py-1  hover:text-stone-200 hover:bg-stone-950';
                    if (project.id === selectedProjectId) {
                        cssClasses = cssClasses + ' text-stone-200 bg-stone-950'
                    } else {
                        cssClasses += ' text-stone-400'
                    }
                    return (
                        <li key={project.id}>
                            <button
                                onClick={()=>onSelectProject(project.id)}
                                className={cssClasses}
                            >
                                {project.title}
                            </button>
                        </li>
                    )
                })}
            </ul>

        </aside>
    )
}