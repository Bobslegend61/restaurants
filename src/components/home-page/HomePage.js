import React, { Component } from 'react';
import axios from "axios";
import "./HomePage.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            corausel: [],
            apiKey: "8777107-3896f9600dd63ea6c8fd2c9a6"
        }
    }

    componentWillMount() {
        axios.get(`https://pixabay.com/api/?key=${this.state.apiKey}&q=restaurant+food&image_type=photo&per_page=10`).then(res => {
            this.setState({
                corausel: res.data.hits
            });
            console.log(res);
        }).catch(err => console.error(err))
    }

    render() {
        let settings = {
            autoPlay: true,
            showStatus: false,
            showThumbs: false,
            infiniteLoop: true,
            showArrows: false
        };
        let carousel;
        if(this.state.corausel.length > 0) {
            carousel = this.state.corausel.map((img, i) => {
                return (
                    <div key={img.id}>
                        <img src={img.largeImageURL} alt={img.id} />
                        <div className="legend">{img.user}</div>
                    </div>
                )
            })
        }else {
            carousel = null;
        }
        return (
            <div>
                <div className="slider">
                    <Carousel {...settings}>
                        { carousel }
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default HomePage;