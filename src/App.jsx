import { useState } from 'react'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'
import SearchBar from './components/SearchBar'
import { useProjectFilter } from './hooks/useProjectFilter'
import './App.css'

// Default data so the page isn't empty on first load.
const starterProjects = [
  { id: 'p1', title: 'Project 1', description: 'Project Description' },
  { id: 'p2', title: 'Project 2', description: 'Project Description' },
  { id: 'p3', title: 'Project 3', description: 'Project Description' },
]

function App() {
  const [projects, setProjects] = useState(starterProjects)
  const [searchTerm, setSearchTerm] = useState('')
  const [nextProjectNumber, setNextProjectNumber] = useState(4)

  // essence of enabling filter(to have clean code)
  const filteredProjects = useProjectFilter(projects, searchTerm)

  const handleAddProject = (newProject) => {
    const projectWithId = {
      ...newProject,
      id: `p${nextProjectNumber}`,
    }
    setProjects((currentProjects) => [projectWithId, ...currentProjects])
    setNextProjectNumber((currentNumber) => currentNumber + 1)
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>Personal Project Showcase App</h1>
      </header>

      <ProjectForm onAddProject={handleAddProject} />

      <section className="projects-panel" aria-label="Projects">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search Projects"
        />
        <ProjectList projects={filteredProjects} />
      </section>
    </main>
  )
}

export default App
