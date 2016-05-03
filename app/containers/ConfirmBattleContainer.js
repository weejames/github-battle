var React = require('react'),
    ConfirmBattle = require('../components/confirmbattle'),
    githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            isLoading: true,
            playerInfo: []
        }
    },
    componentDidMount: function () {
        var query = this.props.location.query;
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
            .then(function (players) {
                this.setState({
                    isLoading: false,
                    playerInfo: [players[0], players[1]]
                });
            }.bind(this));
    },
    handleInitiateBattle: function () {
        this.context.router.push({
            pathname: '/results',
            state:  {
                playerInfo: this.state.playerInfo
            }
        });
    },
    render: function () {
        return(
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playerInfo={this.state.playerInfo}
                onInitiateBattle={this.handleInitiateBattle} />
        );
    }
});

module.exports = ConfirmBattleContainer;
