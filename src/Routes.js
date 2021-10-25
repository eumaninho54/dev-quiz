import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Game from './pages/Game'

import Home from './pages/Home'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    

    return(
            <Switch>

                <Route exact path="/dev-quiz">
                    <Home/>
                </Route>

                <Route exact path='/dev-quiz/game'>
                    <Game/>
                </Route>

            </Switch>
    )
}