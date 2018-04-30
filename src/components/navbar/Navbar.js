import React, { Component } from 'react';
import "./Navbar.css";
import { AppBar, Toolbar, Typography, Button, IconButton, Dialog } from "material-ui";
import Slide from "material-ui/transitions/Slide";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from "@material-ui/icons/Close";

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
    }
}

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class Navbar extends Component {
    state = {
        open: false
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
            <AppBar style= { styles.colorDefault }>
                <Toolbar>
                    <IconButton style= { styles.menuButton } aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" style= { styles.flex }>
                        Resturants
                    </Typography>
                    <div style={{ flex: 1 }}>
                    <img src={ require("../../images/logo3.jpeg") } alt="logo" style={{ height: "50%", width: "7%" }}/>
                    </div>
                    <Button onClick={this.handleClickOpen} style={{ color: "#CA4121" }}>Create</Button>
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
        </div>
        )
    }
}

export default Navbar;
