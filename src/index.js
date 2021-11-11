import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from "./Login.js";
import ACMenu from "./QuestionPages/ACQuestions/ACMenu.js";
import ACPage1 from "./QuestionPages/ACQuestions/Page1.js";
import ACPage2 from "./QuestionPages/ACQuestions/Page2.js";
import ACPage3 from "./QuestionPages/ACQuestions/Page3.js";
import ACPage4 from "./QuestionPages/ACQuestions/Page4.js";
import ACPage5 from "./QuestionPages/ACQuestions/Page5.js";
import IAMenu from "./QuestionPages/IAQuestions/IAMenu.js";
import IAPage1 from "./QuestionPages/IAQuestions/Page1.js";
import IAPage2 from "./QuestionPages/IAQuestions/Page2.js";
import IAPage3 from "./QuestionPages/IAQuestions/Page3.js";
import IAPage4 from "./QuestionPages/IAQuestions/Page4.js";
import IAPage5 from "./QuestionPages/IAQuestions/Page5.js";
import MPMenu from "./QuestionPages/MPQuestions/MPMenu.js";
import MPPage1 from "./QuestionPages/MPQuestions/Page1.js";
import MPPage2 from "./QuestionPages/MPQuestions/Page2.js";
import MPPage3 from "./QuestionPages/MPQuestions/Page3.js";
import MPPage4 from "./QuestionPages/MPQuestions/Page4.js";
import MPPage5 from "./QuestionPages/MPQuestions/Page5.js";
import PEMenu from "./QuestionPages/PEQuestions/PEMenu.js";
import PEPage1 from "./QuestionPages/PEQuestions/Page1.js";
import PEPage2 from "./QuestionPages/PEQuestions/Page2.js";
import PEPage3 from "./QuestionPages/PEQuestions/Page3.js";
import PEPage4 from "./QuestionPages/PEQuestions/Page4.js";
import PEPage5 from "./QuestionPages/PEQuestions/Page5.js";
import SCMenu from "./QuestionPages/SCQuestions/SCMenu.js";
import SCPage1 from "./QuestionPages/SCQuestions/Page1.js";
import SCPage2 from "./QuestionPages/SCQuestions/Page2.js";
import SCPage3 from "./QuestionPages/SCQuestions/Page3.js";
import SCPage4 from "./QuestionPages/SCQuestions/Page4.js";
import SCPage5 from "./QuestionPages/SCQuestions/Page5.js";
import SIMenu from "./QuestionPages/SIQuestions/SIMenu.js";
import SIPage1 from "./QuestionPages/SIQuestions/Page1.js";
import SIPage2 from "./QuestionPages/SIQuestions/Page2.js";
import SIPage3 from "./QuestionPages/SIQuestions/Page3.js";
import SIPage4 from "./QuestionPages/SIQuestions/Page4.js";
import SIPage5 from "./QuestionPages/SIQuestions/Page5.js";
import Dashboard from "./Dashboard.js";
import SideBar from './Components/SideBar';



const rootElement = document.getElementById("root");
    ReactDOM.render(
      // Imported from react-dom-router, use to redirect to different pages of the quiz
      <BrowserRouter>
        <SideBar/>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Login} />
          <Route path="/acmenu" component={ACMenu} />
          <Route path="/ac1" component={ACPage1} />
          <Route path="/ac2" component={ACPage2} />
          <Route path="/ac3" component={ACPage3} />
          <Route path="/ac4" component={ACPage4} />
          <Route path="/ac5" component={ACPage5} />
          <Route path="/iamenu" component={IAMenu} />
          <Route path="/ia1" component={IAPage1} />
          <Route path="/ia2" component={IAPage2} />
          <Route path="/ia3" component={IAPage3} />
          <Route path="/ia4" component={IAPage4} />
          <Route path="/ia5" component={IAPage5} />
          <Route path="/mpmenu" component={MPMenu} />
          <Route path="/mp1" component={MPPage1} />
          <Route path="/mp2" component={MPPage2} />
          <Route path="/mp3" component={MPPage3} />
          <Route path="/mp4" component={MPPage4} />
          <Route path="/mp5" component={MPPage5} />
          <Route path="/pemenu" component={PEMenu} />
          <Route path="/pe1" component={PEPage1} />
          <Route path="/pe2" component={PEPage2} />
          <Route path="/pe3" component={PEPage3} />
          <Route path="/pe4" component={PEPage4} />
          <Route path="/pe5" component={PEPage5} />
          <Route path="/scmenu" component={SCMenu} />
          <Route path="/sc1" component={SCPage1} />
          <Route path="/sc2" component={SCPage2} />
          <Route path="/sc3" component={SCPage3} />
          <Route path="/sc4" component={SCPage4} />
          <Route path="/sc5" component={SCPage5} />
          <Route path="/simenu" component={SIMenu} />
          <Route path="/si1" component={SIPage1} />
          <Route path="/si2" component={SIPage2} />
          <Route path="/si3" component={SIPage3} />
          <Route path="/si4" component={SIPage4} />
          <Route path="/si5" component={SIPage5} />
        </Switch>
      </BrowserRouter>,
      rootElement
    );
