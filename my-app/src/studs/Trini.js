import React from 'react'
import { getStudents } from '../data'

const Trini = () => {
  return (
    <div>
      {getStudents().filter(stu => stu['link'] === "trini").map(stu =>
        <p>
          name: {stu.name}<br />
          age: {stu.age}<br />
          from: {stu.from}<br />
          class: {stu.class}<br />
          <img width={250} src={stu.img} alt='gdf'></img>
        </p>)}
    </div>
  )
}
export default Trini