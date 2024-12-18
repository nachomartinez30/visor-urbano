import { SVGProps } from "./svg.interface";

const VideoIcon = ({ fill }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={28}
      height={28}
      viewBox="0 0 28 28"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_6996"
            data-name="Rectangle 6996"
            width={28}
            height={28}
            fill="none"
          />
        </clipPath>
      </defs>
      <g id="Group_6023" data-name="Group 6023" transform="translate(0 0)">
        <g
          id="Group_6022"
          data-name="Group 6022"
          transform="translate(0 0)"
          clipPath="url(#clip-path)"
        >
          <path
            id="Path_14320"
            data-name="Path 14320"
            d="M25.455,28.128H7.406a2.607,2.607,0,0,1-2.6-2.6V13.047a2.607,2.607,0,0,1,2.6-2.6h18.05a2.607,2.607,0,0,1,2.6,2.6V25.524a2.607,2.607,0,0,1-2.6,2.6m-18.05-16.2a1.124,1.124,0,0,0-1.122,1.122V25.524a1.124,1.124,0,0,0,1.122,1.123h18.05a1.124,1.124,0,0,0,1.122-1.123V13.047a1.124,1.124,0,0,0-1.122-1.122Z"
            transform="translate(-2.43 -5.285)"
            fill={fill}
          />
          <path
            id="Path_14321"
            data-name="Path 14321"
            d="M20.6,28.229a.74.74,0,0,1-.741-.741v-8.01a.741.741,0,0,1,1.055-.671l8.539,4a.74.74,0,0,1,0,1.341l-8.539,4.005a.739.739,0,0,1-.315.07m.741-7.585v5.679l6.054-2.839Z"
            transform="translate(-10.05 -9.483)"
            fill={fill}
          />
        </g>
      </g>
    </svg>
  );
};

export default VideoIcon;
