import React, { Component } from "react";
export default class Signup extends Component{
    render(){
        return(
        <div>
          <form>
              <h1>Sign-Up</h1>
            <div>
              <input type="email" name="email" placeholder="Email" />
              <label htmlFor="email">E-mail</label>
            </div>
            <div>
              <input type="text" name="username" placeholder="Username" />
              <label htmlFor="username">Username</label>
            </div>
            <div>
              <input type="password" name="password" placeholder="Password" />
              <label htmlFor="password">Password</label>
            </div>
            <input type="submit" value="Signup" />
          </form>
        </div>
      )
    }
}