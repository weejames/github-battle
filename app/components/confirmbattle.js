var React = require('react'),
    ReactRouter = require('react-router'),
    styles = require('../styles'),
    Loading = require('../components/loading'),
    UIContainer = require('../components/uicontainer'),
    UserDetailsWrapper = require('../components/userdetailswrapper'),
    UserDetails = require('../components/userdetails');

var PropTypes = React.PropTypes,
    Link = ReactRouter.Link;

function ConfirmBattle (props) {
    return props.isLoading === true
        ? <Loading text="Waiting" speed={1000} />
    : <UIContainer>
        <h1>Confirm Players</h1>
        <div className="col-sm-8 col-sm-offset-2">
            <UserDetailsWrapper title="Player 1">
                <UserDetails score={0} info={props.playerInfo[0]} />
            </UserDetailsWrapper>
            <UserDetailsWrapper title="Player 2">
                <UserDetails score={0} info={props.playerInfo[1]} />
            </UserDetailsWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
            <div className='col-sm-12' style={styles.space}>
                <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
            </div>
            <div className='col-sm-12' style={styles.space}>
                <Link to='/playerOne'>
                    <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
                </Link>
            </div>
        </div>
    </UIContainer>;
};

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playerInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;
