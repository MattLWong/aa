import React from 'react';
import {
  Route
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SearchContainer from './search/search_container';
import BenchFormContainer from './bench_form/bench_form_container';

const App = () => (
  <div>
    <h1>Bench BnB</h1>
    <GreetingContainer/>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <ProtectedRoute path="/benches/new" component={BenchFormContainer} />
    <Route exact path='/' component={SearchContainer} />
  </div>
)

export default App;
