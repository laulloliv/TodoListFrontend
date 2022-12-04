import { ReactNode } from 'react'
import './style.css'

interface HeaderProps {
  children?: ReactNode
  text?: string
  child?: ReactNode
}

export const Title = ({ children, text, child }: HeaderProps) => {
  return (
    <div className="header">
      <div id="span">
        {child}
        <h1>{text}</h1>
      </div>
      {children}
    </div>
  )
}
