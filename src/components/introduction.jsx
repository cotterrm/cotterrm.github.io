import React, { Component } from 'react'

const ListItem = ({ icon, header, link, buttonText }) => {
  return (
    <li style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/images/img_bg.jpg)' }}>
      <div className="overlay" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
            <div className="slider-text-inner js-fullheight">
              <div className="desc">
                {header}
                <p><a className="btn btn-primary btn-learn" href={link} target="_blank" rel="noopener noreferrer">{buttonText}<i className={icon} /></a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <ListItem header={<h1>Hi!<br /> I'm Rick</h1>}
                link="https://drive.google.com/file/d/1e17WMed7wiTtVfDvzt64k5nshRKklZw0/view?usp=sharing"
                icon="icon-download4"
                buttonText="View CV" />

              <ListItem header={<h1>I build<br /> things.</h1>}
                link="https://github.com/cotterrm"
                icon="icon-briefcase3"
                buttonText="View Projects"
              />
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
