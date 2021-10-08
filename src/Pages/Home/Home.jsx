import React, { Component } from "react";
import Couple from "../Couple/Couple";
import Event from "../Event/Event";
import Gallery from "../Gallery/Gallery";
import Reservation from "../Reservation/Reservation";
import Wish from "../Wish/Wish";
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderHome = () => {
    return (
      <div className="home">
        <div className="text">
          <div className="name">Lisna <br/> &amp; <br/> Hilmi</div>
          <div className="date">Minggu, 5 Desember 2021</div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="section">
        <div id="section-home">{this.renderHome()}</div>
        <div id="section-couple">
          <Couple />
        </div>

        <div id="section-event">
          <Event />
        </div>

        <div id="section-gallery">
          <Gallery/>
        </div>

        <div id="section-reservation">
          <Reservation/>
        </div>

        <div id="section-reservation">
          <Wish/>
        </div>
      </div>
    );
  }
}

export default Home;