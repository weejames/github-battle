var React = require('react'),
    UIContainer = require('../components/uicontainer'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link;

var Home = React.createClass({
    render: function () {
        return (
            <UIContainer>
                <h1>GitHub Battle!</h1>
                <p className='lead'> Where developers come to die</p>
                <Link to="/playerOne">
                    <button className='btn btn-large btn-success'>Go!</button>
                </Link>
            </UIContainer>
        );
    }
});

module.exports = Home;
