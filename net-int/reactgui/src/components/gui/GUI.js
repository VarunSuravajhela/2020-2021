import React from "react";
import WidgetDisplay from "../widgets/WidgetDisplay.js";

import "./GUI.css";
import Console from "../console/Console"

class GUI extends React.Component {
   state = {
      websocket: null,
      settings: {},
   }

   constructor(props) {
      super(props);

      this.state.websocket = require('socket.io-client')('http://localhost:4040');
   }

   render() {
      return (
         <div className="gui">
            {
               //Render Nav Bar
               <WidgetDisplay />
               //Render Widget Display
               //Render Console
               //Render settings
               <Console />
            }
         </div>
      );
   }

   updateSettings = (newSettings) => {
      this.setState({ settings: newSettings });
   }

}

export default GUI;
