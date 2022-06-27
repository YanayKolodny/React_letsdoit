import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getStudents } from './data'

const StuList = () => {
  return (
    <div>
      <nav>
        {getStudents().map(stu => <Link to={stu.link}>{stu.name}<br /></Link>)}
      </nav>
      <Outlet />
    </div>
  )
}

export default StuList