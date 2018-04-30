import React from "react";
import "./Search.css";

const search = ["ALL", "BUILDINGS", "EMPIRE", "FREE WIFI", "HANDSHAKE", "BASEBALL", "SPORT SCREENING", "TAKEOUT", "OUTDOOR"];
const icons = ["binoculars", "building", "empire", "wifi", "handshake", "baseball-ball", "football-ball", "fighter-jet", "rocket"];


const SearchPage = () => {
    return (
        <div className="Search">
            <div className="search-field">
                <div className="search">
                    <i className="fas fa-search fa-2x"></i>
                </div>
                <input type="search" placeholder="All:"/>
                <div className="times">
                    <i className="fas fa-times fa-2x"></i>
                </div>
            </div>
            <div className="icons">
                <h4>SELECT FILTERS BELOW TO REFINE SEARCH</h4>
                <div className="icons-grid">
                   { search.map((what, i) => (
                       <div>
                            <div key={ i } className="icon-div">
                                <i className={'fas fa-'+icons[i]+' fa-2x'}></i>
                            </div>
                            <p>{ what }</p>
                       </div>
                   )) }
                </div>
            </div>
        </div>
    );
}

export default SearchPage;