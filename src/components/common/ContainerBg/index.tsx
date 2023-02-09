import React, { FC } from 'react'
import classNames from 'classnames'

interface Props {
  className?: string
  children?: React.ReactNode
}
const Index:FC<Props> = ({ className, children }) => {
  return <div className={classNames(className, 'web-container')}>
    {children}
  </div>
}

export default Index
