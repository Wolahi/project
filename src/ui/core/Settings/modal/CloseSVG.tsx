import { ReactElement } from "react";

interface Props {
  id: string;
}
const CloseSVG = ({ id }: Props): ReactElement => {
  switch (id) {
    case "svgClose":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_51_2)">
            <path
              d="M12.0002 10.586L16.9502 5.63599L18.3642 7.04999L13.4142 
              12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 
              18.364L5.63623 16.95L10.5862 12L5.63623 7.04999L7.05023 5.63599L12.0002 10.586Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_51_2">
              <rect width="24" height="24" />
            </clipPath>
          </defs>
        </svg>
      );

    default:
      return <svg width={0}> </svg>;
  }
};

export default CloseSVG;
