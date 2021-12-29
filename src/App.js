import React from "react";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import AboutusPage from "./pages/Aboutuspage";
import EducationPage from "./pages/Educationpage";
import Skillspage from "./pages/Skillspage";
import Projectspage from "./pages/Projectspage";
import Errorpage from "./pages/Errorpage";

const App = () => {
  return (
    <>
      <Switch>

        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={AboutusPage}></Route>
        <Route path="/education" component={EducationPage}></Route>
        <Route path="/skills" component={Skillspage}></Route>
        <Route path="/projects" component={Projectspage}></Route>
        <Route  component={Errorpage}></Route>

      </Switch>
    </>
  );
};

export default App;
