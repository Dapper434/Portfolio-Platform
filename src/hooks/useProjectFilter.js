export function useProjectFilter(projects, searchTerm) {
  const normalizedSearch = searchTerm.trim().toLowerCase()

  if (!normalizedSearch) {
    return projects
  }

  return projects.filter(({ title, description }) => {
    return (
      title.toLowerCase().includes(normalizedSearch) ||
      description.toLowerCase().includes(normalizedSearch)
    )
  })
}
