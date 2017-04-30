import React, { Component } from 'react'



    class Login extends Component {


       render(){
           return(
             <div id="login-form">
                     <h1>Авторизация на сайте</h1>
                     <fieldset>
                         <form>
                             <input type="email" value="Логин"  />
                             <input type="password" value="Пароль" />
                             <input type="submit" value="ВОЙТИ" />
                             <footer className="clearfix">
                                 <p><span className="info">?</span><a href="#">Забыли пароль?</a></p>
                             </footer>
                         </form>
                     </fieldset>

                 </div>
           );
       }
    }


    export default Login
