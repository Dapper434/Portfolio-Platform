import Product from './Product'

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="project-list empty-state">
        <p>No projects match your search.</p>
      </div>
    )
  }

  return (
    <div className="project-list">
      {projects.map((project) => (
        <Product key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectList
