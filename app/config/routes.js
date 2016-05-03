var React = require('react'),
    ReactRouter = require('react-router');

var Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    HashHistory = ReactRouter.hashHistory;

var Main = require('../components/main'),
    Home = require('../components/home'),
    PromptContainer = require('../containers/promptcontainer'),
    ConfirmBattleContainer = require('../containers/confirmbattlecontainer'),
    ResultsContainer = require('../containers/resultscontainer');

var routes = (
    <Router history={HashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='playerOne' header='Player One' component={PromptContainer} />
            <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
            <Route path='battle' component={ConfirmBattleContainer} />
            <Route path='results' component={ResultsContainer} />
        </Route>
    </Router>
);

module.exports = routes;
