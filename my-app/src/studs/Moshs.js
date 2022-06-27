import React from 'react'
import { getStudents } from '../data'

const Moshs = () => {
  return (
    <div>
      {getStudents().filter(stu => stu['link'] === "mosh").map(stu =>
        <p>
          name: {stu.name}<br />
          age: {stu.age}<br />
          from: {stu.from}<br />
          class: {stu.class}<br />
          <img height={250} src={stu.img} alt=''></img>
        </p>)}
    </div>
  )
}

export default Moshs