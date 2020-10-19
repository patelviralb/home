import React from 'react';
import './work-experience-style.scss';
import { Infosys, QuickBase } from './svg/company-name-svg';
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
            <h4>Quick Base</h4>
            <div className="vp-work-experience-duration">
              June 2020 - Present 2019
            </div>
            <blockquote>
              <ul>
                <li className="text-justify">
                  Working on enhancing the timeline report (Gantt Chart) for the
                  platform
                </li>
                <li className="text-justify">
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
            <h4 className="mt-5">Senior Software Engineer</h4>
            <img
              src={prolifics_logo}
              alt={'Prolifics'}
              style={{ width: '150px', backgroundColor: '#4297d2' }}
              className="p-2"
            />
            <h4>Prolifics</h4>
            <div className="vp-work-experience-duration">
              November 2018 - August 2019
            </div>
            <blockquote>
              <ul>
                <li className="text-justify">
                  Consulted for Health Insurance Company for creating claim
                  processing infrastructures
                </li>
                <li className="text-justify">
                  Created a unique solution to track Medicare claims using
                  ITX/IBM WTX and MySQL
                </li>
                <li className="text-justify">
                  Worked on JSON, XML, CSV and ANSI X12 files
                </li>
              </ul>
            </blockquote>
          </div>
        </div>

        <div className="vp-work-experience-item">
          <div className="vp-work-experience-item-bullet" />
          <div className="vp-work-experience-content">
            <h4 className="mt-5">Technology Analyst</h4>
            <Infosys />
            <h4>Infosys Limited</h4>
            <div className="vp-work-experience-duration">
              April 2018 - November 2018
            </div>
            <blockquote>
              <ul>
                <li className="text-justify">
                  Consulted for Health Insurance Company for creating claim
                  processing infrastructures
                </li>
                <li className="text-justify">
                  Created a unique solution to track Medicare claims using
                  ITX/IBM WTX and MySQL
                </li>
                <li className="text-justify">
                  Worked on JSON, XML, CSV and ANSI X12 files
                </li>
              </ul>
            </blockquote>
          </div>
        </div>

        <div className="vp-work-experience-item">
          <div className="vp-work-experience-item-bullet" />
          <div className="vp-work-experience-content">
            <h4 className="mt-5">Senior Software Engineer</h4>
            <Infosys />
            <h4>Infosys Limited</h4>
            <div className="vp-work-experience-duration">
              October 2016 - March 2018
            </div>
            <blockquote>
              <ul>
                <li className="text-justify">
                  Performed requirement gathering and effort estimations for
                  file processing and transformation (to and from ANSI X12, CSV,
                  Fixed length, XML) using IBM WTX/ITX based on requirement
                  complexities
                </li>
                <li className="text-justify">
                  Implemented a multi-file format project requirement using IBM
                  WTX and shell scripting, which resulted in new business
                  acquisition for the client resulting in a 30% increase in
                  billing for the company from the client for the full project
                  design and implementation
                </li>
                <li className="text-justify">
                  Provided release support while production deployment and
                  production check out
                </li>
              </ul>
            </blockquote>
          </div>
        </div>

        <div className="vp-work-experience-item">
          <div className="vp-work-experience-item-bullet" />
          <div className="vp-work-experience-content">
            <h4 className="mt-5">Software Engineer</h4>
            <Infosys />
            <h4>Infosys Limited</h4>
            <div className="vp-work-experience-duration">
              November 2014 - September 2016
            </div>
            <blockquote>
              <ul>
                <li className="text-justify">
                  Developed custom validations for healthcare batch transactions
                  like 834, 835, 837, etc. and real-time transactions like 270,
                  271, 276, 277, 278, etc. using C and Shell Scripting along
                  with custom maps development for various vendors using IBM WTX
                  to convert ANSI X12, CSV files to Fixed Length files and vice
                  versa
                </li>
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
