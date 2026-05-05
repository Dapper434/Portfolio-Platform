import { useState } from 'react'

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const cleanTitle = title.trim()
    const cleanDescription = description.trim()

    if (!cleanTitle || !cleanDescription) {
      return
    }

    onAddProject({
      title: cleanTitle,
      description: cleanDescription,
    })

    setTitle('')
    setDescription('')
  }

  return (, 
    <section className="panel add-project-panel">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit} className="add-project-form">
        <label htmlFor="project-title">Title</label>
        <input
          id="project-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label htmlFor="project-description">Description</label>
        <textarea
          id="project-description"
          rows="4"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </section>
  )
}

export default ProjectForm;