function Product({ project }) {
  return (
    <article className="project-card">
      <div className="project-thumbnail" aria-hidden="true">
        <span></span>
        <span></span>
      </div>

      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </article>
  )
}

export default Product
