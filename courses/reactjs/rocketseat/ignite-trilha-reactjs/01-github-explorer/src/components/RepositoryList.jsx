import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "Unform2",
  description: "Forms in React",
  link: "http://github.com/unform/unform"
}

export function RepositoryList() {
  return (
    <section className="RepositoryList">
      <h1>Lista de Repositórios</h1>

      <ul>
        {/* <RepositoryItem 
          repository="Unform2" 
          description="Forms in React" 
          link="http://github.com/unform/unform" 
        /> */}
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />

      </ul>
    </section>
  )
}