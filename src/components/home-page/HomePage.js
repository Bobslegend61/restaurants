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
            <div className="HomePage">
                <div className="slider">
                    <Carousel {...settings}>
                        { carousel }
                    </Carousel>
                </div>
                <div className="search">
                    <div className="search-field">
                        <div className="icon-search"><i className="fas fa-search"></i></div>
                        <input type="search" placeholder="search"/>
                    </div>
                    <div className="icons-grid">
                        <div>
                            <div className="icon-div">
                                <i className={'fas fa-heart fa-2x'}></i>
                            </div>
                            <p>FAVOURITES</p>
                       </div>
                        <div>
                            <div className="icon-div">
                                <i className={'fas fa-briefcase fa-2x'}></i>
                            </div>
                            <p>OFFERS</p>
                       </div>
                        <div>
                            <div className="icon-div">
                                <i className={'fas fa-utensils fa-2x'}></i>
                            </div>
                            <p>RESERVATIONS</p>
                       </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;