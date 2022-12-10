import { ReactNode } from 'react'
import './style.css'

interface BoxCategoryProps {
  text?: string
  children?: ReactNode
  className?: string
  item?: string
  onClick?: React.MouseEventHandler<HTMLElement>
}

export const BoxCategory = ({
  text,
  children,
  className,
  item,
  onClick
}: BoxCategoryProps) => {
  return (
    <div className={className} onClick={onClick}>
      <div id={item}>
        <p>{text}</p>
        {children}
      </div>
    </div>
  )
}
