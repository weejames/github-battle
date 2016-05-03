var React = require('react'),
    Results = require('../components/results'),
    githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            isLoading: true,
            scores: []
        };
    },
    componentDidMount: function () {
        githubHelpers.battle(this.props.location.state.playerInfo)
            .then( function (scores) {
                this.setState({
                    isLoading: false,
                    scores: scores
                })
            }.bind(this));
    },
    render: function () {
        return(
            <Results
                isLoading={this.state.isLoading}
                playerInfo={this.props.location.state.playerInfo}
                scores={this.state.scores} />
        );
    }
});

module.exports = ResultsContainer;
