import React, { Component } from 'react'
import CounterDiv from './counterDiv'
import SkillsBox from './skillsbox';

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Me</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>I am a math and physics nerd turned software engineer. </p>
                                            <p>My focus is on finding creative solutions and sheparding them from inception to maintenance.
                                                I believe that it's not enough for software to work, it must also be a joy to use.
                                                With a background in customer support, I possess strong communication and leadership skills.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my skills</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <SkillsBox
                                color="1"
                                icon="icon-bulb"
                                title="Web Development"
                                desc="I have experience building websites and web applications for enterprise systems using JavaScript,Typescript,React,HTML,CSS, and C#." />
                            <SkillsBox
                                color="2"
                                icon="icon-data"
                                title="User Centered Design"
                                desc="Working with users and workflows in mind, I've crafted solutions that not only work, but are easier to work with." />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
