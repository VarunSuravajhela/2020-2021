import Node from './node.js';
import React from 'react';
import './key.css';
const socket = require('socket.io-client')('http://localhost:4040');


export default class key extends React.Component {
   constructor() {
      super();
      this.state = {
         left: false,
         up: false,
         down: false,
         right: false
      };

      document.addEventListener("keydown", event => {
         if(event.keyCode === 65){
            console.log('you pressed left')
            this.setState({
               left: true
            });
         }
         if(event.keyCode === 87){
            this.setState({
               up: true
            });
         }
         if(event.keyCode === 83){
            this.setState({
               down: true
            });
         }
         if(event.keyCode === 68){
            this.setState({
               right: true
            });
         }
         socket.emit("Send State", this.state);
      });

      document.addEventListener("keyup", event => {
         if(event.keyCode === 65){
            this.setState({
               left: false
            });
         }
         if(event.keyCode === 87){
            this.setState({
               up: false
            });
         }
         if(event.keyCode === 83){
            this.setState({
               down: false
            });
         }
         if(event.keyCode === 68){
            this.setState({
               right: false
            });
         }
         socket.emit("Send State", this.state);
      });
   }


   render() {
      let topArrows = [
            (<Node display="hidden"/>), 
            (<Node 
               id="up" 
               display={this.state.up ? "pressed" : "not"} />), 
            (<Node display="hidden"/>)
      ];
      
      let bottomArrows = [
      (<Node 
         id="left" 
         display={this.state.left ? "pressed" : "not"} />), 
      (<Node 
         id="down" 
         display={this.state.down ? "pressed" : "not"} />), 
      (<Node 
         id="right" 
         display={this.state.right ? "pressed" : "not"} />)];
      return(
         <div className="key">
            <div>{topArrows}</div>
            <div>{bottomArrows}</div>
         </div>
      );
   }
}
