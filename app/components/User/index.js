import React, { Component } from 'react'
import { connect } from 'react-refetch'
import { browserHistory } from 'react-router';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e, id) {
    e.preventDefault()
    console.log('this is:',id,  e.target);
    var path= '/detail-user/'+ id +'/edit/'
    console.log(path)
    browserHistory.push(path);
  }
   render(){
     const user = this.props.user
     const id = this.props.id
     var editButton = null
     if (id === localStorage.getItem('id')){
       editButton = <button type="button" className="btn btn-success" onClick={(e) => {this.handleClick(e, id)}}>Edit Profile</button>
     }

     console.log(id);
       return(
         <div >
         <div className="row">
            <div className="col-md-8 col-md-offset-2">
                <p className="text-left">
                  <strong>Username: </strong>
                  {user.username}
                  </p><br/>
              <p className="text-left">
                <strong>E-mail: </strong>
                {user.email}
                </p><br/>
              <p className="text-left">
                <strong>First Name: </strong>  {user.first_name}
              </p><br/>
              <p className="text-left">
                <strong>Last name: </strong>  {user.last_name}
              </p><br/>
              {editButton}



            </div>
          </div>
         <div >

          </div>
          </div>
       );
   }
}
