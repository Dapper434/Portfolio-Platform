import { useState } from 'react'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'
import SearchBar from './components/SearchBar'
import { useProjectFilter } from './hooks/useProjectFilter'
import './App.css'

const starterProjects = [
  {
    id: crypto.randomUUID(),
    title: 'Project 1',
    description: 'Project Description',
  },
  {
    id: crypto.randomUUID(),
    title: 'Project 2',
    description: 'Project Description',
  },
  {
    id: crypto.randomUUID(),
    title: 'Project 3',
    description: 'Project Description',
  },
]

function App() {
  const [projects, setProjects] = useState(starterProjects)
  const [searchTerm, setSearchTerm] = useState('')
  const filteredProjects = useProjectFilter(projects, searchTerm)

  const handleAddProject = (newProject) => {
    setProjects((currentProjects) => [newProject, ...currentProjects])
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
