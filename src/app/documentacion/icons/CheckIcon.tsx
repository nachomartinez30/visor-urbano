import { SVGProps } from "./svg.interface";

const CheckIcon = ({ fill }: SVGProps) => {
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
            id="Rectangle_6995"
            data-name="Rectangle 6995"
            width={28}
            height={28}
            fill="none"
          />
        </clipPath>
      </defs>
      <g id="Group_6021" data-name="Group 6021" transform="translate(0 0)">
        <g
          id="Group_6020"
          data-name="Group 6020"
          transform="translate(0 0)"
          clipPath="url(#clip-path)"
        >
          <path
            id="Path_14318"
            data-name="Path 14318"
            d="M16.43,28.059A11.629,11.629,0,1,1,25.519,9.175a.741.741,0,1,1-1.158.925,10.1,10.1,0,1,0,1.754,3.3.741.741,0,1,1,1.414-.443,11.637,11.637,0,0,1-11.1,15.106"
            transform="translate(-2.43 -2.43)"
            fill={fill}
          />
          <path
            id="Path_14319"
            data-name="Path 14319"
            d="M21.876,25.4a.737.737,0,0,1-.527-.221l-4.233-4.295a.741.741,0,0,1,1.055-1.04l3.752,3.806,11.042-9.311a.741.741,0,0,1,.955,1.133L22.354,25.223a.739.739,0,0,1-.478.174"
            transform="translate(-8.555 -7.168)"
            fill={fill}
          />
        </g>
      </g>
    </svg>
  );
};

export default CheckIcon;
