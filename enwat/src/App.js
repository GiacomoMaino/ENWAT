import React, { useState, Suspense } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import routes from "./routes";
import "semantic-ui-css/semantic.min.css";
import { GlobalProvider } from "./context/Provider";
import UserLeaveConfirmation from "./components/UserLeaveConfirmation";
import isAuthenticated from './utils/isAuthenticated'
import "./App.css";
import "./night.css"

const RenderRoute = (route) => {
  const history = useHistory();

  document.title = route.title || "TrulyContacts";
  
  if (route.needsAuth &&  !isAuthenticated()) {
    history.push("/auth/login");
  }

  return (<div>
    <Route
      exact
      path={route.location.pathname}
      render={(props) => <route.component {...props} />}
    ></Route>
  </div>);
};

function App() {
  const [confirmOpen, setConfirmOpen] = useState(true);

  const changeBackground = () => {
    var hour = new Date().getHours()
    var color = ""
    if((0 <= hour && hour < 6) || (21 <= hour && hour <=24)){
      color = "night"
    }
    else if(10 <= hour && hour < 17){
      color = "day"
    }
    else if(6<= hour && hour < 10){
      color = "sunrise"
    }
    else{
      color = "sunset"
    }
  
    document.body.className = color
  
  }

  return (
    <GlobalProvider>
      {
        changeBackground()
      }
      <Router
        getUserConfirmation={(message, callback) => {
          return UserLeaveConfirmation(
            message,
            callback,
            confirmOpen,
            setConfirmOpen
          );
        }}
      >
        <Suspense fallback={<p>Loading</p>}>
          <Switch>
            {routes.map((route, index) => {
              return(
              <RenderRoute {...route} key={index} />
            )})}
          </Switch>
        </Suspense>
      </Router>
    </GlobalProvider>
  );
}

export default App;
