import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React, { useState, useMemo } from "react";
import Login from "./Login.js";
import ACMenu from "./QuestionPages/ACQuestions/ACMenu.js";
import {ACQuizPage} from './QuestionPages/ACQuestions/ACQuizPage';
import IAMenu from "./QuestionPages/IAQuestions/IAMenu.js";
import {IAPage1} from "./QuestionPages/IAQuestions/Page1.js";
import {IAPage2} from "./QuestionPages/IAQuestions/Page2.js";
import {IAPage3} from "./QuestionPages/IAQuestions/Page3.js";
import {IAPage4} from "./QuestionPages/IAQuestions/Page4.js";
import MPMenu from "./QuestionPages/MPQuestions/MPMenu.js";
import {MPPage1} from "./QuestionPages/MPQuestions/Page1.js";
import PEMenu from "./QuestionPages/PEQuestions/PEMenu.js";
import {PEPage1} from "./QuestionPages/PEQuestions/Page1.js";
import {PEPage2} from "./QuestionPages/PEQuestions/Page2.js";
import SCMenu from "./QuestionPages/SCQuestions/SCMenu.js";
import {SCPage1} from "./QuestionPages/SCQuestions/Page1.js";
import {SCPage2} from "./QuestionPages/SCQuestions/Page2.js";
import SIMenu from "./QuestionPages/SIQuestions/SIMenu.js";
import {SIPage1} from "./QuestionPages/SIQuestions/Page1.js";
import {SIPage2} from "./QuestionPages/SIQuestions/Page2.js";
import {SIPage3} from "./QuestionPages/SIQuestions/Page3.js";
import {Dashboard} from "./Dashboard.js";
import SideBar from './Components/SideBar';
import {UserContext} from './UserContext';
import {Admin} from './Admin';
import {QuestionComponent} from './Components/QuestionComponent'

export function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);


  return (
      // Imported from react-dom-router, use to redirect to different pages of the quiz
    <BrowserRouter>
      <UserContext.Provider value={value}>
        <SideBar/>
        <Route exact path="/" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/acmenu" component={ACMenu} />
        <Route path="/acquizpage" component={ACQuizPage} />
        <Route path="/iamenu" component={IAMenu} />
        <Route path="/ia1" component={IAPage1} />
        <Route path="/ia2" component={IAPage2} />
        <Route path="/ia3" component={IAPage3} />
        <Route path="/ia4" component={IAPage4} />
        <Route path="/mpmenu" component={MPMenu} />
        <Route path="/mp1" component={MPPage1} />
        <Route path="/pemenu" component={PEMenu} />
        <Route path="/pe1" component={PEPage1} />
        <Route path="/pe2" component={PEPage2} />
        <Route path="/scmenu" component={SCMenu} />
        <Route path="/sc1" component={SCPage1} />
        <Route path="/sc2" component={SCPage2} />
        <Route path="/simenu" component={SIMenu} />
        <Route path="/si1" component={SIPage1} />
        <Route path="/si2" component={SIPage2} />
        <Route path="/si3" component={SIPage3} />
        <Route path="/questionpage" component={QuestionComponent} />
      </UserContext.Provider>
    </BrowserRouter>
  )
}