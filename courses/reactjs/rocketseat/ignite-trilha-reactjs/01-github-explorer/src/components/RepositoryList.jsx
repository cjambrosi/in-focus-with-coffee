const repositoryName = 'Unform';

export function RepositoryList() {
  return (
    <section className="RepositoryList">
      <h1>Lista de Repositórios</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Form in React</p>
          <a href="">
            Acessar repositório
          </a>
        </li>
        <li>
          <strong>Unform</strong>
          <p>Form in React</p>
          <a href="">
            Acessar repositório
          </a>
        </li>
        <li>
          <strong>Unform</strong>
          <p>Form in React</p>
          <a href="">
            Acessar repositório
          </a>
        </li>
      </ul>
    </section>
  )
}