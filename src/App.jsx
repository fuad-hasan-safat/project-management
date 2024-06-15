import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectSidebar.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,

      }
    })
  }

  function handleCancleAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,

      }
    })
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const projectId = crypto.randomUUID();
      const newProject = {
        ...projectData,
        id: projectId
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  console.log({ projectState })

  let content = ''
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onClose={handleCancleAddProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectSidebar
        projects={projectState.projects}
        onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
