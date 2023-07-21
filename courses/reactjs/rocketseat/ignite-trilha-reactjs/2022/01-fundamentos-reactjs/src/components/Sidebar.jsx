import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import S from './Sidebar.module.css'

export const Sidebar = () => {
  return (
    <aside className={S.sidebar}>
      <img 
        className={S.cover} 
        src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
      />
      <div className={S.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/9125404?v=4" />
        <strong>Cristian J. Ambrosi</strong>
        <span>Engenheiro de Software</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
