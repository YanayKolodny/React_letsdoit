import React from 'react'
import { getStudents } from '../data'

const Yanay = () => {
  return (
    <div>
      {getStudents().filter(stu => stu['link'] === "yanay").map(stu =>
        <p>
          name: {stu.name}<br />
          age: {stu.age}<br />
          from: {stu.from}<br />
          class: {stu.class}<br />
          <img width={250} src={stu.img} alt='fsdfsd'></img>
        </p>)}

    </div >
  )
}

export default Yanay