var React = require('react');

var PropTypes = React.PropTypes;

function UserDetails (props) {
    return (
        <ul>
            {!! props.score && <li className="list-group-item"><h2>{props.score}</h2></li>}
            <li className="list-group-item"><img src={props.info.avatar_url} className="img-responsive img-circle" /></li>
            {props.info.name && <li className="list-group-item">{props.info.name}</li>}
            <li className="list-group-item"><strong>{props.info.login}</strong></li>
            {props.info.location && <li className="list-group-item">{props.info.location}</li>}
            {props.info.company &&<li className="list-group-item">{props.info.company}</li>}
            <li className="list-group-item">{props.info.following}</li>
            <li className="list-group-item">{props.info.followers}</li>
            <li className="list-group-item">{props.info.public_repos}</li>
            {props.info.blog && <li className="list-group-item">{props.info.blog}</li>}
        </ul>
    )
};

UserDetails.PropTypes = {
    score: PropTypes.number,
    info: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        blog: PropTypes.string,
        company: PropTypes.string,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired,
        location: PropTypes.string,
        login: PropTypes.string.isRequired,
        name: PropTypes.string,
        public_repos: PropTypes.number.isRequired
    })
};

module.exports = UserDetails;
