import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]); // Armazenar estados

  useEffect(()=> {
    fetch('https://api.github.com/users/cjambrosi/repos')
    .then(response => response.json())
    .then(data => setRepositories(data));
  }, [])

  return (
    <section className="RepositoryList">
      <h1>Lista de Repositórios</h1>

      <ul>
        {/* <RepositoryItem 
          repository="Unform2" 
          description="Forms in React" 
          link="http://github.com/unform/unform" 
        /> */}
        {
          repositories.map(repository => {
            return <RepositoryItem key={repository.name} repository={repository} />
          })
        }

      </ul>
    </section>
  )
}