import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Students = () => {
  return (
    <div>
      <h3>Students</h3>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="stulist">Students List</Link> |{" "}
        <Link to="stuclasses">Classes</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Students