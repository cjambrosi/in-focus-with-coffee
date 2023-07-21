import S from './Avatar.module.css'

export const Avatar = ({ src, hasBorder = true }) => {
  return (
    <img 
      className={hasBorder ? S.avatarWithBorder : S.avatar}
      src={src} 
      alt=""
    />
  )
}
