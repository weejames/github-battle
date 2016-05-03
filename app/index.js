var userData = {
    name: 'James',
    username: 'weejames',
    avatar: 'https://avatars2.githubusercontent.com/u/210489?v=3&s=460'
}

var React = require('react'),
    ReactDOM = require('react-dom'),
    Routes = require('./config/routes');

var app = document.getElementById('app');

var ProfilePic = React.createClass({
    render: function () {
        return (
            <img src={this.props.avatar} style={{width:'250px', height: '250px'}} />
        );
    }
});

var Link = React.createClass({
    changeUrl: function () {
        window.location.replace(this.props.href);
    },
    render: function () {
        return (
            <span style={{color: 'blue'}} onClick={this.changeUrl}>{this.props.children}</span>
        );
    }
});

var ProfileLink = React.createClass({
    render: function () {
        return (
            <div>
                <Link href={'https://github.com/' + this.props.username}>
                    {this.props.username}
                </Link>
            </div>
        );
    }
});

var ProfileName = React.createClass({
    render: function () {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
});

var Avatar = React.createClass({
    render: function () {
        return (
            <div>
                <ProfilePic avatar={this.props.user.avatar} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.user.username} />
            </div>
        );
    }
});

ReactDOM.render(
    Routes,
    app
);