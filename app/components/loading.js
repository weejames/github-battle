var React = require('react');

var PropTypes = React.PropTypes;

var styles = {
    container: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        fontSize: '55px'
    },
    content: {
        textAlign: 'center',
        position: 'absolute',
        width: '100%',
        marginTop: '30px',
    }
};

var Loading = React.createClass({
    propTypes: {
        speed: PropTypes.number,
        text: PropTypes.string
    },
    getDefaultProps: function () {
        return {
            text: 'Loading...',
            speed: 100
        }
    },
    getInitialState: function () {
        this.defaultText = this.props.text;
        return {
            text: this.defaultText
        }
    },
    componentDidMount: function () {
        var stopper = this.defaultText + '...';
        this.interval = setInterval( function () {
            if (this.state.text === stopper) {
                this.setState({
                    text: this.defaultText
                });
            } else {
                this.setState({
                    text: this.state.text + '.'
                });
            }
        }.bind(this), this.props.speed);
    },
    componentWillUnmount: function () {
        clearInterval(this.interval);
    },
    render : function () {
        return (
            <div styles={styles.container}>
                <p styles={styles.content}>{this.state.text}</p>
            </div>
        )
    }
});

module.exports = Loading;
