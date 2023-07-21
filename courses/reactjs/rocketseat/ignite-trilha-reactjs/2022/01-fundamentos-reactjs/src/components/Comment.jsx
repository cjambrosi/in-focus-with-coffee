import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import S from './Comment.module.css'

export const Comment = () => {
  return (
    <div className={S.comment}>
      <Avatar src="https://avatars.githubusercontent.com/u/9125404?v=4" hasBorder={false} />

      <div className={S.commentBox}>
        <div className={S.commentContent}>
          <header>
            <div className={S.authorAndTime}>
              <strong>Cristian J. Ambrosi</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
