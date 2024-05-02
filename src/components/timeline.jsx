import React, { Component } from 'react'


const TimelineItem = ({dateRange, Title, location, desc, colorNumber}) =>
{
  const colorClass="timeline-icon color-"+colorNumber;
  return (
    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className={colorClass}>
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>{Title} at {location} <span>{dateRange}</span></h2>
                        <p>{desc}</p>
                      </div>
                    </div>
                  </article>
  );
};

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <TimelineItem
                  Title="Software Engineer"
                  location="Epic Systems"
                  dateRange="2021-present"
                  desc="Full-stack web developer for Enterprise Scheduling with an emphasis in Specialty workflows."
                  colorNumber="3"
                  />
                  <TimelineItem
                  Title="Application Support Engineerr"
                  location="Epic Systems"
                  dateRange="2019-2021"
                  desc="Designed, developed, and releaseed features across an integrated suite of applications and teams. Supported end user implemenation and maintenance of the projects I developed."
                  colorNumber="4"
                  />
                  <TimelineItem
                  Title="Technical Services Engineer"
                  location="Epic Systems"
                  dateRange="2013-2019"
                  desc="Supported multiple regional sized customers with our schedule module
                  and its integration points. Designed and implemented technical solutions
                  that improved user efficiency and satisfaction with customer end users."
                  colorNumber="4"
                  />

                  <TimelineItem
                  Title="Capstone Computer Science Certificate"
                  location="UW Madison"
                  dateRange="2016-2018"
                  desc="Coursework in  Operating Systems, Human Computer Interaction, and Database Management systems. "
                  colorNumber="5"
                  />

                  <TimelineItem
                  Title="Undergraduate"
                  location="Beloit College"
                  dateRange="2009-2013"
                  desc="B.S. in Mathematics and Physics. "
                  colorNumber="5"
                  />
                  
                  
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
