import { useState } from 'react'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'
import SearchBar from './components/SearchBar'
import { useProjectFilter } from './hooks/useProjectFilter'
import './App.css'

const starterProjects = []

function App() {
  const [projects, setProjects] = useState(starterProjects)
  const [searchTerm, setSearchTerm] = useState('')
  const [nextProjectNumber, setNextProjectNumber] = useState(1)

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
        <div>
          <h1>Personal Project Showcase</h1>
          <p className="app-subtitle">
            Add your work, then search and share it.
          </p>
        </div>
      </header>

      <section className="app-layout" aria-label="Project showcase">
        <aside className="panel sidebar" aria-label="Add a project">
          <ProjectForm onAddProject={handleAddProject} />
        </aside>

        <section className="panel content" aria-label="Projects">
          <div className="content-header">
            <div>
              <h2 className="content-title">Projects</h2>
              <p className="content-meta">
                Showing {filteredProjects.length} of {projects.length}
              </p>
            </div>

            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search projects…"
            />
          </div>

          <ProjectList projects={filteredProjects} />
        </section>
      </section>
    </main>
  )
}

export default App
