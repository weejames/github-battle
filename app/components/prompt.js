var React = require('react'),
    UIContainer = require('../components/uicontainer');

var PropTypes = React.PropTypes;

function Prompt (props) {
    return (
        <UIContainer>
            <h1>{props.header}</h1>
            <div className="col-sm-12">
                <form onSubmit={props.onSubmitUser}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            onChange={props.onUpdateUser}
                            placeholder="GitHub username"
                            type="text"
                            value={props.username} />
                    </div>
                    <div className="form-group col-sm-4 col-sm-offset-4">
                        <button
                            className="btn btn-block btn-success"
                            type="submit">
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </UIContainer>
    )
}

Prompt.propTypes = {
    header: PropTypes.string.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
};

module.exports = Prompt;
