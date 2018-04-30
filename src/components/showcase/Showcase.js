import React, { Component, Fragment } from 'react';
import "./Showcase.css"
import axios from "axios";
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Button from 'material-ui/Button';

class ShowcasePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            apiKey: "8777107-3896f9600dd63ea6c8fd2c9a6"
        }
    }

    componentWillMount() {
        axios.get(`https://pixabay.com/api/?key=${this.state.apiKey}&q=restaurant+inside&image_type=photo&per_page=20`).then(res => {
            this.setState({
                restaurants: res.data.hits
            });
            console.log(res);
        }).catch(err => console.error(err))
    }

    render() {
        let imageListContent
        if(this.state.restaurants) {
            imageListContent = (
                <Fragment>
                    <div className="grid">
                        <button><strong>A - z</strong></button>
                        <button>Featured</button>
                        <button>Rating</button>
                    </div>
                    <GridList cols={2} cellHeight={400}>
                        { this.state.restaurants.map((img, i) => (
                            <GridListTile key={i}>
                                <img src={img.largeImageURL} alt={img.id} />
                                <GridListTileBar
                                    title={img.tags}
                                    subtitle={<span>{img.views} views</span>}
                                    actionIcon={
                                        <Button style={{backgroundColor: "#fff", borderRadius: "50px", fontSize: "10px", marginRight: "5px", minHeight: "3px", color: "#D24A2A"}}>
                                            following
                                        </Button>
                                    }
                                />
                            </GridListTile>
                        )) }
                    </GridList>
                </Fragment>
            );
        }else {
            imageListContent = null;
        }
        return (
        <div className="Showcase">
            { imageListContent }
        </div>
        )
    }
}

export default ShowcasePage;
