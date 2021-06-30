import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div className="container">
            <div className="row my-2" >
  <div className="col-sm-6 my-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.desc}</p>
        <button type="button" className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
    </div>
  </div>
  
</div>
            
            
        </div>
        </>
    )
}
