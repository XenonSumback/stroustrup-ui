import React, { Component } from 'react'



export default class Comment extends Component {

   render(){
         const comment = this.props.comment

             return (
               <div className='container'>
                 <div className="panel panel-default">
                   <div className="panel-heading">
                     <h3 className="panel-title">{comment.user}</h3>
                   </div>
                   <div className="panel-body">
                    <p className="text-left">{comment.comment}</p>
                   </div>
                   <div className="panel-footer"><p className="text-left">{comment.date}</p></div>
                 </div>
               </div>

              )

           }
}
