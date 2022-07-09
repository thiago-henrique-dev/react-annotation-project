import React from 'react'

function Notes({ data }){
    return (
        <>
         <li className="notepad-infos">
              <div>
                <strong>{data.title}</strong>
              <div>
                x
              </div>
              </div>
              <textarea defaultValue={data.notes}></textarea>
              <span>GO</span>
            </li>

           
        </>
    )
}

export default Notes