import { ReactNode } from 'react'
import './style.css'

interface BoxCategoryProps {
  text?: string
  children?: ReactNode
  className?: string
  item?: string
}

export const BoxCategory = ({
  text,
  children,
  className,
  item
}: BoxCategoryProps) => {
  return (
    <div className={className}>
      <div id={item}>
        <p>{text}</p>
        {children}
      </div>
    </div>
  )
}
