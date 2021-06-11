
import React from 'react'
import {GrUserWorker} from 'react-icons/gr'
import{Link} from 'react-router-dom'

export const UnderConstruction =()=>{
    return (
      <div className="construction">
        <h1 style={{marginBottom:"10px"}}>
          Under Construction <GrUserWorker size={26} />
        </h1>
        <h2>
          <Link to="/"> Back to Main page</Link>
        </h2>
      </div>
    );
}

