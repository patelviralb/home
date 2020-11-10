import styled from "styled-components";

export const Proficiency = styled.span`
  font-weight: bold;
  font-size: small;
  color: #666666;
`;

export const CenterAlignedContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CompanyHeading = styled.h5`
  font-family: "Roboto", "Helvetica", "Arial", "sans-serif";
  font-weight: bold;
  text-justify: inter-word;
  color: rgba(0, 0, 0, 0.54);
  align-self: center;
`;

export const DetailsIcon = styled.i`
  transform: rotate(0deg);
  transition: all 0.4s ease-out;
  transform: ${(props) => (props.details === "HIDE" ? `rotate(180deg)` : "")};
`;

export const QuickBaseSvg = styled.svg`
  fill: #74489d;
  align-self: center;
`;

export const KhouryImage = styled.img`
  width: 200px;
`;

export const ProlificsImage = styled.img`
  background: #4297d2;
  width: 200px;
  padding: 0.5rem;
`;

export const CompanyLogoAnchor = styled.a`
  outline: 0;
`;

export const InfosysSvg = styled.svg`
  background: #0070b7;
  align-self: center;
  width: 100px;
  height: 100px;
  padding: 0.5rem;
`;

export const UnorderedList = styled.ul`
  border-left: 10px solid #303f9f;
`;
