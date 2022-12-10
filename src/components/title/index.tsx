import { ReactNode } from 'react'
import './style.css'

interface TitleProps {
  children?: ReactNode
  text?: string
  child?: ReactNode
  isHome?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
}

export const Title = ({
  children,
  text,
  child,
  onClick,
  isHome
}: TitleProps) => {
  return (
    <div className="header">
      {isHome ? (
        <div id="span" onClick={onClick}>
          {child}
          <h1>{text}</h1>
        </div>
      ) : (
        <div id="span">
          <span onClick={onClick}>{child}</span>
          <h1>{text}</h1>
        </div>
      )}
      {children}
    </div>
  )
}
