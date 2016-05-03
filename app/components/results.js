var React = require('react'),
    styles = require('../styles'),
    UIContainer = require('../components/uicontainer'),
    UserDetailsWrapper = require('../components/userdetailswrapper'),
    UserDetails = require('../components/userdetails'),
    Link = require('react-router').Link,
    Loading = require('../components/loading');

var PropTypes = React.PropTypes;

function StartOverButton (props) {
    return (
        <UIContainer>
            <div className='col-sm-12' style={styles.space}>
                <Link to='/playerOne'>
                    <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
                </Link>
            </div>
        </UIContainer>
    );
}

function Results (props) {
    if (props.isLoading === true) {
        return (<Loading text="Prepare for battle" />);
    } else if (props.scores[0] === props.scores[1]) {
        return (
            <UIContainer>
                <h1>Its a tie!</h1>
                <StartOverButton />
            </UIContainer>
        );
    } else {
        var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1,
            losingIndex = winningIndex === 0 ? 1 : 0;

        return (
            <UIContainer>
                <h1>Results</h1>
                <div className="col-sm-8 col-sm-offset-2">
                    <UserDetailsWrapper title="Winner">
                        <UserDetails score={props.scores[winningIndex]} info={props.playerInfo[winningIndex]} />
                    </UserDetailsWrapper>
                    <UserDetailsWrapper title="Loser">
                        <UserDetails score={props.scores[losingIndex]} info={props.playerInfo[losingIndex]} />
                    </UserDetailsWrapper>
                </div>
                <StartOverButton />
            </UIContainer>
        );
    }
};

Results.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    playerInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
};

module.exports = Results;
