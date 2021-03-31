import React from "react";

import {
  QuickBaseSvg,
  KhouryImage,
  NortheasternImage,
  ProlificsImage,
  CompanyLogoAnchor,
  InfosysSvg,
} from "../styles/work-experience";
import KhouryCollege from "./khoury_college.png";
import Northeastern from "./northeastern_university.png";
import ProlificsNameImage from "./prolifics_web_white.png";

export const QuickBase = () => (
  <CompanyLogoAnchor
    href="https://www.quickbase.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <QuickBaseSvg className="Header__logo-img" viewBox="0 0 265.56 72.25">
      <path
        className="A"
        d="M91.03 71.48a1.76 1.76 0 0 1-1.38.8H72.1c-.5 0-.7-.36-.47-.8L90.1 38.85a1.89 1.89 0 0 0 0-1.61l-18.46-34a.5.5 0 0 1 .48-.81H89.7a1.71 1.71 0 0 1 1.36.81l18.46 34a1.86 1.86 0 0 1 0 1.61zm-29.93-9.4c6.54-6.94 11.1-15.2 11.1-26 0-19.936-16.144-36.1-36.07-36.1S.05 16.144.05 36.07c0 19.3 15.1 35.88 34.3 36.17h32.38a.51.51 0 0 0 .4-.75zm-25-6.94c-10.493 0-19-8.507-19-19s8.507-19 19-19 19 8.507 19 19-8.507 19-19 19zm67 13.7a3.25 3.25 0 0 1 .27-1.32 3.33 3.33 0 0 1 .73-1.05 3.49 3.49 0 0 1 1.08-.73 3.48 3.48 0 0 1 2.64 0 3.49 3.49 0 0 1 1.08.73 3.33 3.33 0 0 1 .73 1.07 3.25 3.25 0 0 1 .27 1.32 3.2 3.2 0 0 1-.27 1.31 3.33 3.33 0 0 1-1.81 1.78 3.48 3.48 0 0 1-2.64 0 3.33 3.33 0 0 1-1.81-1.78 3.2 3.2 0 0 1-.27-1.33zm.54 0a2.74 2.74 0 0 0 .22 1.1 2.9 2.9 0 0 0 .61.92 3 3 0 0 0 .91.62 3 3 0 0 0 2.24 0 2.87 2.87 0 0 0 1.52-1.54 2.74 2.74 0 0 0 .22-1.1 2.8 2.8 0 0 0-.22-1.12 2.83 2.83 0 0 0-1.52-1.52 3 3 0 0 0-2.24 0 3 3 0 0 0-.91.61 2.85 2.85 0 0 0-.61.91 2.8 2.8 0 0 0-.22 1.12zm3.68 1.86l-.82-1.47h-.54v1.47h-.86v-3.8h1.64a2.31 2.31 0 0 1 .52.06 1.44 1.44 0 0 1 .46.19 1 1 0 0 1 .33.36 1.16 1.16 0 0 1 .13.58.92.92 0 0 1-.22.64 1.22 1.22 0 0 1-.54.37l1 1.6zm-.65-2.13a.62.62 0 0 0 .43-.1.45.45 0 0 0 .17-.36.36.36 0 0 0-.2-.34.78.78 0 0 0-.35-.11h-.7v.94zm78.93-43.55a10.38 10.38 0 0 1-2.48 3.64 11.36 11.36 0 0 1-3.91 2.36 15.61 15.61 0 0 1-10.16 0 11 11 0 0 1-3.84-2.36 10.23 10.23 0 0 1-2.42-3.64 12.46 12.46 0 0 1-.85-4.71V2.48h6.87v17.26a8 8 0 0 0 .3 2.22 5.61 5.61 0 0 0 .93 1.88 4.35 4.35 0 0 0 1.66 1.31 6.55 6.55 0 0 0 5 0 4.49 4.49 0 0 0 1.68-1.31 5.26 5.26 0 0 0 .93-1.88 8.88 8.88 0 0 0 .28-2.22V2.48h6.9V20.3a12.27 12.27 0 0 1-.9 4.73zm8.5 6.08V2.48h6.95v28.6zm35.34-.5a15.31 15.31 0 0 1-6.43 1.27 16.69 16.69 0 0 1-6.12-1.09 14.11 14.11 0 0 1-8.1-7.88 16.67 16.67 0 0 1 0-12.37 13.81 13.81 0 0 1 3.29-4.75 14.63 14.63 0 0 1 4.93-3 17.68 17.68 0 0 1 12.06 0 11.38 11.38 0 0 1 4.75 3.14l-4.7 4.7a5.74 5.74 0 0 0-2.54-2 8.46 8.46 0 0 0-3.23-.64 8.26 8.26 0 0 0-3.34.66 8 8 0 0 0-2.61 1.84 8.45 8.45 0 0 0-1.69 2.77 9.64 9.64 0 0 0-.61 3.5 9.91 9.91 0 0 0 .61 3.55 8.13 8.13 0 0 0 1.68 2.77 7.42 7.42 0 0 0 2.56 1.8 8.19 8.19 0 0 0 3.27.65 7.59 7.59 0 0 0 3.6-.81 7 7 0 0 0 2.47-2.1l4.8 4.52a13.62 13.62 0 0 1-4.65 3.48zm27.1.5l-10.62-13.17h-.1V31.1h-6.73V2.48h6.74v11.64h.13l10.2-11.64h8.65l-12.33 13.2 13.06 15.44zM155.78 16.3a15 15 0 0 0-14.645-15.19c-8.22-.193-15.065 6.275-15.335 14.492s6.106 15.13 14.32 15.498v.06H154l-2.66-4.5c2.02-1.25 4.43-5.9 4.43-10.34zm-15 8.3a8.41 8.41 0 1 1 8.12-8.4c.02 4.64-2.25 8.4-8.1 8.4zM129.7 42.9h8.53a16.12 16.12 0 0 1 3.28.35 8.7 8.7 0 0 1 3 1.17 6.51 6.51 0 0 1 2.15 2.24 7 7 0 0 1 .83 3.56 6 6 0 0 1-1.39 3.94 6.52 6.52 0 0 1-3.69 2.2v.1a7.58 7.58 0 0 1 4.61 2.16 6.73 6.73 0 0 1 1.84 5A7 7 0 0 1 146 69.4a10.22 10.22 0 0 1-3.35 1.6 16.05 16.05 0 0 1-4.44.56h-8.47zm2.9 12.57h5.86a9.8 9.8 0 0 0 2.13-.24 6 6 0 0 0 2-.83 4.39 4.39 0 0 0 1.43-1.56 4.81 4.81 0 0 0 .55-2.38 4.6 4.6 0 0 0-.55-2.32 4.34 4.34 0 0 0-1.48-1.56 6.27 6.27 0 0 0-2.18-.87 12.57 12.57 0 0 0-2.66-.26h-5.1zm0 13.58h5.42a14.7 14.7 0 0 0 3-.3 7.83 7.83 0 0 0 2.51-1 5.14 5.14 0 0 0 1.71-1.73 5.53 5.53 0 0 0-1.27-6.79 9.13 9.13 0 0 0-5.44-1.4h-5.93zm22 2.43h-3.2l12.36-28.6h2.83l12.3 28.6h-3.24l-3.15-7.5h-14.8zm4.2-10.18h12.6l-6.3-15.2zm39.16-13.82a6.94 6.94 0 0 0-2.38-2.08 7.26 7.26 0 0 0-3.52-.79 7.71 7.71 0 0 0-2.14.32 6.35 6.35 0 0 0-2 1 5.32 5.32 0 0 0-1.44 1.68 5 5 0 0 0-.54 2.38 4.43 4.43 0 0 0 .52 2.27 4.88 4.88 0 0 0 1.39 1.51 8.06 8.06 0 0 0 2 1q1.1.4 2.3.8l3 1a11 11 0 0 1 2.72 1.48 7.11 7.11 0 0 1 2 2.3 7.31 7.31 0 0 1 .77 3.54 7.85 7.85 0 0 1-.82 3.69 7.64 7.64 0 0 1-2.12 2.57 9.09 9.09 0 0 1-3 1.5 12.27 12.27 0 0 1-3.38.48 13.28 13.28 0 0 1-2.58-.26 11.87 11.87 0 0 1-2.47-.79 9.94 9.94 0 0 1-2.18-1.33 9.81 9.81 0 0 1-1.78-1.86l2.5-1.86a7.71 7.71 0 0 0 2.6 2.57 7.44 7.44 0 0 0 3.94 1 7.67 7.67 0 0 0 2.23-.35 6.38 6.38 0 0 0 2-1.05 5.84 5.84 0 0 0 1.49-1.74 4.74 4.74 0 0 0 .59-2.4 4.83 4.83 0 0 0-.59-2.49 5.19 5.19 0 0 0-1.55-1.65 9.11 9.11 0 0 0-2.23-1.11l-2.62-.9-2.8-1a9.42 9.42 0 0 1-2.47-1.48 6.82 6.82 0 0 1-1.75-2.24 8.17 8.17 0 0 1 .16-6.83 7.47 7.47 0 0 1 2.16-2.47 9.24 9.24 0 0 1 2.95-1.41 11.86 11.86 0 0 1 3.19-.45 11.09 11.09 0 0 1 5 1 8.54 8.54 0 0 1 3.11 2.45zm12.84 21.46h15.3v2.54h-18.2V42.9h17.74v2.57H210.8v9.82h13.86v2.58H210.8z"
      ></path>
    </QuickBaseSvg>
  </CompanyLogoAnchor>
);

export const KhouryCollegeOfComputerSciences = () => (
  <CompanyLogoAnchor
    href="https://www.khoury.northeastern.edu/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <KhouryImage
      src={KhouryCollege}
      alt="Khoury College of Computer Sciences"
    />
  </CompanyLogoAnchor>
);

export const NortheasternUniversity = () => (
  <CompanyLogoAnchor
    href="https://www.northeastern.edu/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <NortheasternImage
      src={Northeastern}
      alt="Northeastern University"
    />
  </CompanyLogoAnchor>
);

export const Prolifics = () => (
  <CompanyLogoAnchor
    href="https://prolifics.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <ProlificsImage src={ProlificsNameImage} alt="Prolifics" />
  </CompanyLogoAnchor>
);

export const Infosys = () => (
  <CompanyLogoAnchor
    href="https://www.infosys.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <InfosysSvg
      x="0px"
      y="0px"
      viewBox="0 309.9 595.3 224"
      enable-background="new 0 309.9 595.3 224"
    >
      <path
        id="logo"
        fill="#fff"
        d="M577.1,347.4c9.7,0,18.2-8,18.2-18.2c0-9.7-8-18.2-18.2-18.2c-9.7,0-18.2,8-18.2,18.2
	C559.4,339.4,567.4,347.4,577.1,347.4L577.1,347.4z M562.1,329.3c0-8.4,7.1-15.5,15.5-15.5c8.4,0,15.5,7.1,15.5,15.5
	c0,8.4-7.1,15.5-15.5,15.5C568.7,344.8,562.1,337.7,562.1,329.3L562.1,329.3z M570.5,338.6h3.5v-8h4l3.1,7.5h4l-3.5-8.4
	c1.3-0.4,3.1-1.3,3.1-4.9c0-5.3-4-6.2-7.5-6.2h-6.2v19.9H570.5z M574,322.6h4c2.2,0,3.1,0.9,3.1,2.7s-1.3,2.7-3.1,2.7h-4V322.6
	L574,322.6z M0,337.2L0,337.2V316h21.3v21.3l0,0v134.2v0.4v20.8H0v-21.3V471V337.2L0,337.2z M216.6,428.5
	c0.4,32.3,20.4,58,44.7,57.6c24.4-0.4,43.4-27,43-58.9c-0.4-32.3-20.4-58-44.7-57.6C235.2,370,216.1,396.1,216.6,428.5L216.6,428.5z
	 M392.9,389.5c0.4,1.3-0.9-1.8-0.9-1.8L392.9,389.5L392.9,389.5z M407.5,522.8c0.9-1.8,2.2-4,4-7.5L407.5,522.8L407.5,522.8z
	 M408.8,378.4c0.4,0.9,0.4,1.3,0.9,2.2l7.1,17.7L408.8,378.4L408.8,378.4z M319.3,467c13.3,12,24.8,18.2,40.3,18.2
	c15.5,0,29.2-7.5,29.2-22.1c0-12.4-10.6-19.5-30.1-27.5c-16.4-7.1-28.3-12-35-22.1c0.9,4.4,1.3,8.9,1.3,13.7
	c0,39.4-28.8,71.3-64.2,71.3s-64.2-31.9-64.2-71.3c0-23.9,10.6-44.7,26.6-58h-43.4v102.3v0.4v21.3h-19v-20.4c0-0.4,0-0.9,0-0.9
	V369.1h-16.8v-12.8h17.3c2.2-26.1,18.2-40.7,40.7-40.7c14.6,0,22.6,1.3,27,3.5v17.7c0,1.3,0,2.2,0,2.2h-0.9
	c-7.1-6.6-13.7-11.1-29.7-11.1c-12.8,0-21.3,10.2-18.2,28.3h72.2c3.1-0.4,6.2-0.9,9.3-0.9c25.7,0,47.8,16.8,58,41.2
	c0-1.3,0-2.7,0-4.4c0-25.2,24.8-36.3,50-36.3c0.9,0,1.8,0,2.7,0c8.9,0,21.7,2.7,29.7,4.9l7.1,17.3l8,19.9l21.3,53.1l2.7,8.4l2.7-8.4
	l27.5-67.8c4.9-18.6,25.2-26.6,46.9-26.6c11.1,0,19,1.3,28.8,4.9V382c-12-8.9-20.4-13.7-34.1-13.7c-12,0-26.1,5.3-26.1,23
	c-0.4,13.3,7.5,15.5,31,27c19,8.4,36.8,17.3,36.8,38.5c0,35.4-35,41.6-51.8,41.6c-15.1,0-29.2-3.5-36.8-10.2v-23.5l1.3,0.9
	c13.7,12.8,26.1,19.5,41.6,19.5s29.2-7.5,29.2-22.1c0-12.4-10.6-19.5-30.1-27.5c-18.6-8-30.6-13.3-35.4-26.6
	c-7.5,18.2-42.5,103.6-50.9,121.8h-18.6l4.4-8.4l4-7.5v-0.4c4.9-9.3,11.5-23.9,17.7-38.1l-36.3-87.7c-0.4-0.4-0.9-1.8-2.2-4.4
	c-2.7-6.2-5.3-12.4-13.3-15.1c-4-1.3-8.9-2.2-13.7-2.2c-12,0-27,5.3-27,23c-0.4,13.3,8.4,15.5,31.9,27c19,8.4,36.8,17.3,36.8,38.5
	c0,35.4-35,41.6-51.8,41.6c-13.3,0-26.1-3.1-34.1-8L319.3,467L319.3,467z M61.1,357.6l0.4,15.5v0.9l0,0c0.4-0.4,0.4-1.3,0.9-1.8
	c8-8.4,17.7-16.8,41.2-16.8c22.6,0,36.8,19,37.6,31V471v0.4v21.3h-19v-25.2v-72.2c0-15.1-13.3-25.7-29.2-25.7
	c-13.3,0-30.6,12-31,24.4v77.5v0.4v20.8H42.5v-21.3v-96.1v-17.7h3.5h10.6L61.1,357.6L61.1,357.6z"
      ></path>
    </InfosysSvg>
  </CompanyLogoAnchor>
);