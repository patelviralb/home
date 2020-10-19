import React from 'react';
import './work-experience-style.scss';
import { QuickBase, Infosys } from './svg/company-name-svg';
import prolifics_logo from './image/prolifics_web_white.png';

const WorkExperience = () => {
  return (
    <section className="vp-work-experience-bar">
      <div className="container-fluid">
        <div className="vp-work-experience-item">
          <div className="vp-work-experience-item-bullet" />
          <div className="vp-work-experience-content">
            <h4 className="mt-5">Software Engineer Co-op</h4>
            <QuickBase />
            <div className="vp-work-experience-duration">
              June 2020 - Present 2019
            </div>
            <blockquote>
              <ul>
                <li>
                  Working on enhancing the timeline report (Gantt Chart) for the
                  platform
                </li>
                <li>
                  The frontend code is designed using React, Redux which uses
                  backend API which is written in C++
                </li>
              </ul>
            </blockquote>
          </div>
        </div>

        <div className="vp-work-experience-item">
          <div className="vp-work-experience-item-bullet" />
          <div className="vp-work-experience-content">
            <h2 className="mt-5">Senior Software Engineer</h2>
            <h3>Prolifics</h3>
            <img
              src={prolifics_logo}
              alt={'Prolifics'}
              style={{ width: '150px', backgroundColor: '#4297d2' }}
              className="p-2"
            />
            <div className="vp-work-experience-duration">
              November 2018 - August 2019
            </div>
            <blockquote>
              <ul>
                <li>
                  Consulted for Health Insurance Company for creating claim
                  processing infrastructures
                </li>
                <li>
                  Created a unique solution to track Medicare claims using
                  ITX/IBM WTX and MySQL
                </li>
                <li>Worked on JSON, XML, CSV and ANSI X12 files</li>
              </ul>
            </blockquote>
          </div>
        </div>

        <div className="vp-work-experience-item">
          <div className="vp-work-experience-item-bullet" />
          <div className="vp-work-experience-content">
            <h2 className="mt-5">Technology Analyst</h2>
            <h3>Infosys Limited</h3>
            {/*<div style={{ backgroundColor: '#007cc3' }} className="p-2">*/}
            <Infosys />
            {/*</div>*/}
            <div className="vp-work-experience-duration">
              April 2018 - November 2018
            </div>
            <blockquote>
              <ul>
                <li>
                  Consulted for Health Insurance Company for creating claim
                  processing infrastructures
                </li>
                <li>
                  Created a unique solution to track Medicare claims using
                  ITX/IBM WTX and MySQL
                </li>
                <li>Worked on JSON, XML, CSV and ANSI X12 files</li>
              </ul>
            </blockquote>
          </div>
        </div>
        {/*<div className="timeline-item">
            <div className="timeline-img"></div>

            <div className="timeline-content js--fadeInLeft">
              <h2>Title</h2>
              <div className="date">1 MAY 2016</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                ipsa ratione omnis alias cupiditate saepe atque totam aperiam
                sed nulla voluptatem recusandae dolor, nostrum excepturi amet in
                dolores. Alias, ullam.
              </p>
              <a className="bnt-more" href="javascript:void(0)">
                More
              </a>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-img"></div>

            <div className="timeline-content timeline-card js--fadeInRight">
              <div className="timeline-img-header">
                <h2>Card Title</h2>
              </div>
              <div className="date">25 MAY 2016</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                ipsa ratione omnis alias cupiditate saepe atque totam aperiam
                sed nulla voluptatem recusandae dolor, nostrum excepturi amet in
                dolores. Alias, ullam.
              </p>
              <a className="bnt-more" href="javascript:void(0)">
                More
              </a>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-img"></div>

            <div className="timeline-content js--fadeInLeft">
              <div className="date">3 JUN 2016</div>
              <h2>Quote</h2>
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                explicabo debitis omnis dolor iste fugit totam quasi inventore!
              </blockquote>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-img"></div>

            <div className="timeline-content js--fadeInRight">
              <h2>Title</h2>
              <div className="date">22 JUN 2016</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                ipsa ratione omnis alias cupiditate saepe atque totam aperiam
                sed nulla voluptatem recusandae dolor, nostrum excepturi amet in
                dolores. Alias, ullam.
              </p>
              <a className="bnt-more" href="javascript:void(0)">
                More
              </a>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-img"></div>

            <div className="timeline-content timeline-card js--fadeInLeft">
              <div className="timeline-img-header">
                <h2>Card Title</h2>
              </div>
              <div className="date">10 JULY 2016</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                ipsa ratione omnis alias cupiditate saepe atque totam aperiam
                sed nulla voluptatem recusandae dolor, nostrum excepturi amet in
                dolores. Alias, ullam.
              </p>
              <a className="bnt-more" href="javascript:void(0)">
                More
              </a>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-img"></div>

            <div className="timeline-content timeline-card js--fadeInRight">
              <div className="timeline-img-header">
                <h2>Card Title</h2>
              </div>
              <div className="date">30 JULY 2016</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                ipsa ratione omnis alias cupiditate saepe atque totam aperiam
                sed nulla voluptatem recusandae dolor, nostrum excepturi amet in
                dolores. Alias, ullam.
              </p>
              <a className="bnt-more" href="javascript:void(0)">
                More
              </a>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-img"></div>

            <div className="timeline-content js--fadeInLeft">
              <div className="date">5 AUG 2016</div>
              <h2>Quote</h2>
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                explicabo debitis omnis dolor iste fugit totam quasi inventore!
              </blockquote>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-img"></div>

            <div className="timeline-content timeline-card js--fadeInRight">
              <div className="timeline-img-header">
                <h2>Card Title</h2>
              </div>
              <div className="date">19 AUG 2016</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                ipsa ratione omnis alias cupiditate saepe atque totam aperiam
                sed nulla voluptatem recusandae dolor, nostrum excepturi amet in
                dolores. Alias, ullam.
              </p>
              <a className="bnt-more" href="javascript:void(0)">
                More
              </a>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-img"></div>

            <div className="timeline-content js--fadeInLeft">
              <div className="date">1 SEP 2016</div>
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                ipsa ratione omnis alias cupiditate saepe atque totam aperiam
                sed nulla voluptatem recusandae dolor, nostrum excepturi amet in
                dolores. Alias, ullam.
              </p>
              <a className="bnt-more" href="javascript:void(0)">
                More
              </a>
            </div>
          </div>*/}
      </div>
    </section>
  );
};

export default WorkExperience;
