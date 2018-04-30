import React, { Component, Fragment } from 'react';
import "./Navbar.css";
import { AppBar, Toolbar, Typography, Button, IconButton, Dialog, Avatar, Drawer, List } from "material-ui";
import Slide from "material-ui/transitions/Slide";
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

const styles = {
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1,
        color: "#CA4121"
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        color: "#CA4121"
    },
    colorDefault: {
        backgroundColor: "#fff"
    },
    createAcc: {
        height: "100vh",
        backgroundImage: `url(${require("../../images/background_blur.jpeg")})`,
        backgroundPosition: "center center",
        backgroundSize: "cover"
    },
    folder: {
        margin: "2px",
        backgroundColor: "red",
        color: "#fff"
    },
    Ass: {
        margin: "2px",
        color: "green",
        backgroundColor: "#fff",
    }
}

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            typo: "",
            drawer: false
        }
    }

    componentWillMount() {
        let check;
        switch(this.props.location.pathname) {
            case "/":
                check = "Restaurants";
                break;
            case "/search":
                check = "Search";
                break;
            default:
                check = ""
        }
        this.setState({
            typo: check
        })
    }

    toggleDrawer = open => () => {
        this.setState({
            drawer: open
        })
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    render() {
        return (
        <div style= { styles.root }>
            <AppBar style= { styles.colorDefault } position="static">
                <Toolbar>
                    <IconButton style= { styles.menuButton } aria-label="Menu" onClick={ this.toggleDrawer(true) }>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" style= { styles.flex }>
                        { this.state.typo }
                    </Typography>
                    <div style={{ flex: 1 }}>
                    <img src={ require("../../images/logo3.jpeg") } alt="logo" style={{ height: "50%", width: "7%" }}/>
                    </div>
                    {
                        this.props.location.pathname === "/" ? (<Button onClick={this.handleClickOpen} style={{ color: "#CA4121" }}>Create</Button>) : (
                        <Fragment>
                            <Avatar style={ styles.Ass }><AssignmentIcon /></Avatar>
                            <Avatar style={ styles.folder }><PageviewIcon /></Avatar>
                        </Fragment>
                        )
                    }
                </Toolbar>
            </AppBar>
            <Dialog
                fullScreen
                open={this.state.open}
                onClose={this.handleClose}
                transition={Transition}
                >
                <AppBar style= { styles.colorDefault }>
                    <Toolbar>
                    <IconButton style= { styles.menuButton } aria-label="Close">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" style= { styles.flex }>
                        Resturants
                    </Typography>
                    <div style={{ flex: 1 }}>
                    <img src={ require("../../images/logo3.jpeg") } alt="logo" style={{ height: "50%", width: "7%" }}/>
                    </div>
                    <IconButton style= { styles.menuButton } onClick={this.handleClose} aria-label="Close">
                        <CloseIcon />
                    </IconButton>
                    </Toolbar>
                </AppBar>
                <div style= { styles.createAcc } className="Nav">
                    <div className="container">
                        <h2>CREATE ACCOUNT</h2>
                        <div className="form">
                            <form>
                                <div className="input-field">
                                    <span>
                                        <i className="fas fa-user"></i>
                                    </span>
                                    <input type="text" placeholder="name"/>
                                </div>
                                <div className="input-field">
                                    <span>
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                    <input type="text" placeholder="email"/>
                                </div>
                                <div className="input-field">
                                    <span>
                                        <i className="fas fa-key"></i>
                                    </span>
                                    <input type="text" placeholder="password"/>
                                </div>
                                <div className="input-field">
                                    <span>
                                        <i className="fas fa-key"></i>
                                    </span>
                                    <input type="text" placeholder="confirm password"/>
                                </div>
                                <input type="submit" value="Sign Up" className="btn"/>
                            </form>
                            <p>Terms & conditions</p>
                        </div>
                    </div>
                </div>
            </Dialog>
            <Drawer anchor="left" open={this.state.drawer} onClose={this.toggleDrawer(false)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer(false)}
                    onKeyDown={this.toggleDrawer(false)}
                >
                    <List style={{ width: 250, padding: "30px 20px" }}>
                        <Link to="/">Home</Link>
                        <Link to="/showcase">Showcase</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/recover">Recover Password</Link>
                        <Link to="/search">Search</Link>
                    </List>
                </div>
            </Drawer>
        </div>
        )
    }
}

export default Navbar;
