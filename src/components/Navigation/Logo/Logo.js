import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLogo = styled.svg`
  height: 75px;
  margin-left: 100px;
  ${({ theme }) => theme.mqx.tablet} {
    margin-left: 40px;
    height: 50px;
  }
  ${({ theme }) => theme.mqx.bigPhone} {
    margin-left: 20px;
    height: 50px;
  }
  ${({ theme }) => theme.mqx.phone} {
    margin-left: 20px;
    height: 30px;
  }
`;

const Logo = () => (
  <>
    <Link to="/">
      <StyledLogo viewBox="0 0 389 117" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="logo_psycho">
          <path
            id="psycholog"
            d="M117.332 114.668C118.7 114.5 119.792 114.176 120.608 113.696V94.256C119.672 93.776 118.496 93.452 117.08 93.284L117.26 91.988H126.512C129.224 91.988 131.228 92.564 132.524 93.716C133.844 94.844 134.504 96.488 134.504 98.648C134.504 101.144 133.688 102.908 132.056 103.94C130.424 104.948 128.048 105.452 124.928 105.452H123.776V113.696C124.568 114.152 125.732 114.476 127.268 114.668L127.124 116H117.116L117.332 114.668ZM124.928 103.832C126.944 103.832 128.504 103.412 129.608 102.572C130.712 101.708 131.264 100.376 131.264 98.576C131.264 95.192 129.56 93.5 126.152 93.5C125.408 93.5 124.616 93.572 123.776 93.716V103.832H124.928ZM149.703 116.252C148.455 116.252 147.171 116.048 145.851 115.64C144.555 115.208 143.619 114.788 143.043 114.38V108.476L144.807 108.296C144.951 109.448 145.107 110.42 145.275 111.212C145.467 112.004 145.743 112.808 146.103 113.624C147.303 114.176 148.671 114.452 150.207 114.452C151.551 114.452 152.631 114.08 153.447 113.336C154.287 112.592 154.707 111.56 154.707 110.24C154.707 109.304 154.467 108.512 153.987 107.864C153.531 107.216 152.955 106.7 152.259 106.316C151.587 105.908 150.675 105.464 149.523 104.984C148.227 104.432 147.159 103.904 146.319 103.4C145.503 102.872 144.807 102.176 144.231 101.312C143.655 100.424 143.367 99.332 143.367 98.036C143.367 96.092 144.015 94.544 145.311 93.392C146.631 92.24 148.455 91.664 150.783 91.664C151.983 91.664 153.099 91.868 154.131 92.276C155.187 92.684 156.015 93.236 156.615 93.932C157.239 94.628 157.551 95.396 157.551 96.236C157.551 97.772 156.951 98.54 155.751 98.54C155.199 98.54 154.767 98.456 154.455 98.288C154.167 98.12 153.903 97.868 153.663 97.532C154.167 97.028 154.419 96.416 154.419 95.696C154.419 95.072 154.095 94.556 153.447 94.148C152.799 93.716 151.899 93.5 150.747 93.5C149.403 93.5 148.347 93.812 147.579 94.436C146.835 95.06 146.463 95.96 146.463 97.136C146.463 98 146.679 98.72 147.111 99.296C147.567 99.872 148.119 100.352 148.767 100.736C149.415 101.096 150.315 101.516 151.467 101.996C152.859 102.596 153.987 103.16 154.851 103.688C155.715 104.216 156.447 104.96 157.047 105.92C157.671 106.856 157.983 108.044 157.983 109.484C157.983 111.668 157.227 113.348 155.715 114.524C154.203 115.676 152.199 116.252 149.703 116.252ZM170.525 114.668C171.293 114.572 171.941 114.464 172.469 114.344C172.997 114.2 173.513 113.984 174.017 113.696V106.46L167.897 94.22C167.321 93.788 166.577 93.476 165.665 93.284L165.845 91.988H174.737L174.557 93.284C173.309 93.452 172.265 93.776 171.425 94.256L175.925 103.652L180.533 94.22C179.621 93.74 178.553 93.428 177.329 93.284L177.509 91.988H185.429L185.213 93.284C184.349 93.452 183.617 93.764 183.017 94.22L177.185 106.028V113.696C178.001 114.152 179.225 114.476 180.857 114.668L180.713 116H170.345L170.525 114.668ZM201.682 116.252C198.538 116.252 196.21 115.256 194.698 113.264C193.21 111.272 192.466 108.176 192.466 103.976C192.466 99.8 193.222 96.704 194.734 94.688C196.27 92.672 198.622 91.664 201.79 91.664C203.158 91.664 204.382 91.868 205.462 92.276C206.566 92.684 207.418 93.248 208.018 93.968C208.642 94.688 208.954 95.504 208.954 96.416C208.954 97.208 208.75 97.88 208.342 98.432C207.934 98.984 207.442 99.26 206.866 99.26C206.386 99.26 205.954 99.128 205.57 98.864C205.186 98.6 204.922 98.264 204.778 97.856C205.234 97.232 205.462 96.632 205.462 96.056C205.462 95.312 205.126 94.724 204.454 94.292C203.782 93.836 202.894 93.608 201.79 93.608C199.846 93.608 198.406 94.46 197.47 96.164C196.534 97.844 196.066 100.448 196.066 103.976C196.066 107.456 196.522 110.012 197.434 111.644C198.37 113.276 199.822 114.092 201.79 114.092C203.038 114.092 204.25 113.804 205.426 113.228C206.626 112.628 207.526 111.932 208.126 111.14L209.386 112.508C208.642 113.42 207.61 114.272 206.29 115.064C204.97 115.856 203.434 116.252 201.682 116.252ZM218.694 114.668C219.318 114.596 219.87 114.488 220.35 114.344C220.854 114.2 221.346 113.984 221.826 113.696V94.256C220.866 93.752 219.75 93.428 218.478 93.284L218.658 91.988H228.522L228.306 93.284C226.986 93.452 225.882 93.776 224.994 94.256V102.752H234.894V94.256C233.958 93.776 232.782 93.452 231.366 93.284L231.546 91.988H241.374L241.194 93.284C240.018 93.428 238.974 93.752 238.062 94.256V113.696C238.878 114.176 239.982 114.5 241.374 114.668L241.23 116H231.366L231.582 114.668C232.974 114.5 234.078 114.176 234.894 113.696V104.588H224.994V113.696C225.858 114.176 227.034 114.5 228.522 114.668L228.342 116H218.478L218.694 114.668ZM260.464 116.252C256.936 116.252 254.404 115.196 252.868 113.084C251.356 110.972 250.6 107.936 250.6 103.976C250.6 99.992 251.356 96.944 252.868 94.832C254.404 92.72 256.936 91.664 260.464 91.664C263.968 91.664 266.476 92.732 267.988 94.868C269.524 96.98 270.292 100.028 270.292 104.012C270.292 107.972 269.524 111.008 267.988 113.12C266.476 115.208 263.968 116.252 260.464 116.252ZM260.464 114.488C262.168 114.488 263.464 114.032 264.352 113.12C265.264 112.184 265.876 110.96 266.188 109.448C266.5 107.936 266.656 106.124 266.656 104.012C266.656 101.876 266.5 100.052 266.188 98.54C265.876 97.028 265.264 95.804 264.352 94.868C263.464 93.932 262.168 93.464 260.464 93.464C258.76 93.464 257.452 93.932 256.54 94.868C255.628 95.804 255.016 97.028 254.704 98.54C254.392 100.028 254.236 101.84 254.236 103.976C254.236 107.264 254.656 109.844 255.496 111.716C256.36 113.564 258.016 114.488 260.464 114.488ZM279.711 114.668C281.127 114.5 282.207 114.176 282.951 113.696V94.256C282.063 93.776 280.911 93.452 279.495 93.284L279.675 91.988H289.647L289.467 93.284C288.147 93.452 287.043 93.776 286.155 94.256V113.912H292.887C293.631 112.856 294.147 111.5 294.435 109.844C294.627 109.772 294.843 109.736 295.083 109.736C295.323 109.736 295.587 109.772 295.875 109.844L295.551 116H279.495L279.711 114.668ZM314.274 116.252C310.746 116.252 308.214 115.196 306.678 113.084C305.166 110.972 304.41 107.936 304.41 103.976C304.41 99.992 305.166 96.944 306.678 94.832C308.214 92.72 310.746 91.664 314.274 91.664C317.778 91.664 320.286 92.732 321.798 94.868C323.334 96.98 324.102 100.028 324.102 104.012C324.102 107.972 323.334 111.008 321.798 113.12C320.286 115.208 317.778 116.252 314.274 116.252ZM314.274 114.488C315.978 114.488 317.274 114.032 318.162 113.12C319.074 112.184 319.686 110.96 319.998 109.448C320.31 107.936 320.466 106.124 320.466 104.012C320.466 101.876 320.31 100.052 319.998 98.54C319.686 97.028 319.074 95.804 318.162 94.868C317.274 93.932 315.978 93.464 314.274 93.464C312.57 93.464 311.262 93.932 310.35 94.868C309.438 95.804 308.826 97.028 308.514 98.54C308.202 100.028 308.046 101.84 308.046 103.976C308.046 107.264 308.466 109.844 309.306 111.716C310.17 113.564 311.826 114.488 314.274 114.488ZM342.953 116.252C339.425 116.252 336.905 115.208 335.393 113.12C333.905 111.008 333.161 107.96 333.161 103.976C333.161 99.992 333.917 96.944 335.429 94.832C336.965 92.72 339.485 91.664 342.989 91.664C344.189 91.664 345.365 91.832 346.517 92.168C347.693 92.504 348.665 93.032 349.433 93.752C350.201 94.472 350.585 95.36 350.585 96.416C350.585 97.256 350.369 97.94 349.937 98.468C349.529 98.996 349.037 99.26 348.461 99.26C347.981 99.26 347.549 99.128 347.165 98.864C346.781 98.6 346.517 98.264 346.373 97.856C346.829 97.184 347.057 96.584 347.057 96.056C347.057 95.264 346.673 94.664 345.905 94.256C345.161 93.824 344.201 93.608 343.025 93.608C340.577 93.608 338.921 94.52 338.057 96.344C337.217 98.168 336.797 100.712 336.797 103.976C336.797 107.216 337.217 109.76 338.057 111.608C338.897 113.432 340.529 114.344 342.953 114.344C343.937 114.344 344.837 114.2 345.653 113.912C346.469 113.6 347.045 113.3 347.381 113.012V106.712C346.397 106.304 345.173 106.052 343.709 105.956L343.853 104.624L350.585 104.3V114.488C349.601 115.04 348.413 115.472 347.021 115.784C345.629 116.096 344.273 116.252 342.953 116.252Z"
            fill="#CCACAC"
          />
          <path
            id="k"
            d="M380.912 79.36L383.504 79.072C384.016 79.072 384.272 79.328 384.272 79.84C384.272 80.736 383.664 81.408 382.448 81.856C381.232 82.304 379.856 82.528 378.32 82.528C375.44 82.528 373.008 81.376 371.024 79.072C369.104 76.768 366.416 72.512 362.96 66.304C362.128 64.96 361.712 63.936 361.712 63.232C361.712 62.272 363.056 61.152 365.744 59.872C370.096 57.632 372.272 54.816 372.272 51.424C372.272 50.464 371.92 49.664 371.216 49.024C370.576 48.32 369.712 47.968 368.624 47.968C367.088 47.968 365.264 49.792 363.152 53.44C361.04 57.024 359.6 60.416 358.832 63.616C358.128 66.752 357.776 70.144 357.776 73.792C357.776 75.584 357.264 76.48 356.24 76.48C354.768 76.48 353.36 76.288 352.016 75.904C350.672 75.456 350 74.912 350 74.272C350 73.568 350.256 70.528 350.768 65.152C351.28 59.712 351.568 55.808 351.632 53.44C351.888 40.384 352.656 30.4 353.936 23.488C354.128 22.912 354.992 21.92 356.528 20.512C358.128 19.104 359.408 18.4 360.368 18.4C361.328 18.4 361.776 19.616 361.712 22.048C361.712 24.416 361.2 29.536 360.176 37.408C359.152 45.28 358.512 52.48 358.256 59.008C359.408 54.912 361.232 51.04 363.728 47.392C366.288 43.744 368.848 41.92 371.408 41.92C375.76 41.92 377.936 44.032 377.936 48.256C377.936 51.072 377.104 53.632 375.44 55.936C373.776 58.176 371.536 60 368.72 61.408C368.144 61.664 367.856 61.952 367.856 62.272C367.856 62.592 367.952 62.912 368.144 63.232C372.176 70.336 375.6 75.328 378.416 78.208C379.184 78.976 380.016 79.36 380.912 79.36Z"
            fill="black"
          />
          <path
            id="i"
            d="M326.208 47.624L326.4 46.184C326.4 45.032 325.728 44.456 324.384 44.456C323.104 44.456 321.856 45.32 320.64 47.048C319.424 48.712 318.816 50.088 318.816 51.176C318.816 52.264 318.88 53.128 319.008 53.768C319.136 54.408 319.264 54.952 319.392 55.4C319.584 55.784 319.872 56.264 320.256 56.84C320.64 57.416 320.928 57.832 321.12 58.088L322.176 59.432C322.624 60.072 322.944 60.488 323.136 60.68C326.464 57.928 330.432 54.856 335.04 51.464C335.296 51.272 335.584 51.176 335.904 51.176C336.544 51.176 336.864 51.528 336.864 52.232C336.864 52.936 336.576 53.48 336 53.864C331.904 56.488 328.032 59.336 324.384 62.408C325.792 64.456 326.496 66.696 326.496 69.128C326.496 71.56 325.568 73.64 323.712 75.368C321.856 77.096 319.488 77.96 316.608 77.96C313.728 77.96 312.288 76.584 312.288 73.832C312.288 71.848 314.4 68.808 318.624 64.712C318.304 64.328 317.728 63.72 316.896 62.888C316.064 61.992 315.424 61.288 314.976 60.776C314.592 60.264 314.112 59.592 313.536 58.76C312.512 57.16 312 55.432 312 53.576C312 49.8 313.216 46.76 315.648 44.456C318.08 42.088 320.672 40.904 323.424 40.904C325.152 40.904 326.496 41.384 327.456 42.344C328.416 43.24 328.896 44.168 328.896 45.128C328.896 47.304 328.384 48.392 327.36 48.392C326.592 48.392 326.208 48.136 326.208 47.624ZM320.064 66.536C317.504 69.096 316.224 71.176 316.224 72.776C316.224 74.312 317.024 75.08 318.624 75.08C319.584 75.08 320.384 74.696 321.024 73.928C322.432 72.008 322.112 69.544 320.064 66.536Z"
            fill="black"
          />
          <path
            id="s"
            d="M335.552 30.056C335.552 28.904 336.16 27.912 337.376 27.08C338.592 26.248 339.68 25.832 340.64 25.832C342.368 25.832 343.232 26.824 343.232 28.808C343.232 30.792 342.72 32.52 341.696 33.992C340.672 35.4 339.232 36.104 337.376 36.104C336.16 36.104 335.552 34.088 335.552 30.056ZM338.336 77.48C335.84 77.48 333.952 76.968 332.672 75.944C332.224 75.496 332 73.896 332 71.144C332 68.392 332.192 63.816 332.576 57.416C333.024 50.952 333.408 47.464 333.728 46.952C334.048 46.44 335.04 45.48 336.704 44.072C338.368 42.664 339.648 41.96 340.544 41.96C341.504 41.96 341.984 43.176 341.984 45.608C341.984 46.248 341.792 47.496 341.408 49.352C341.088 51.208 340.704 52.552 340.256 53.384C339.424 55.496 339.008 61.032 339.008 69.992C339.008 71.72 339.2 72.584 339.584 72.584C340.672 72.52 342.176 71.176 344.096 68.552C346.016 65.864 347.904 62.44 349.76 58.28C351.68 54.12 352.832 52.04 353.216 52.04C353.664 52.04 353.888 52.296 353.888 52.808C353.888 54.6 352.96 57.448 351.104 61.352C346.048 72.104 341.792 77.48 338.336 77.48Z"
            fill="black"
          />
          <path
            id="a"
            d="M302.976 76.48C300.48 76.48 298.592 75.968 297.312 74.944C296.864 74.496 296.64 73.376 296.64 71.584C296.64 69.728 296.704 67.264 296.832 64.192C295.168 68.352 293.504 71.456 291.84 73.504C290.24 75.488 288.16 76.48 285.6 76.48C283.04 76.48 280.8 75.296 278.88 72.928C276.96 70.496 276 66.72 276 61.6C276 56.416 277.44 51.84 280.32 47.872C283.264 43.904 287.104 41.92 291.84 41.92C293.888 41.92 296.192 43.264 298.752 45.952C299.264 45.248 300.16 44.416 301.44 43.456C302.784 42.432 303.904 41.92 304.8 41.92C305.76 41.92 306.24 43.136 306.24 45.568C306.24 46.208 306.048 47.456 305.664 49.312C305.344 51.168 304.96 52.512 304.512 53.344C303.936 54.816 303.648 60.032 303.648 68.992C303.648 70.72 303.84 71.584 304.224 71.584C305.312 71.52 306.816 70.176 308.736 67.552C310.656 64.864 312.544 61.44 314.4 57.28C316.32 53.12 317.472 51.04 317.856 51.04C318.304 51.04 318.528 51.296 318.528 51.808C318.528 53.6 317.6 56.448 315.744 60.352C310.688 71.104 306.432 76.48 302.976 76.48ZM291.264 45.76C289.472 45.76 287.552 47.104 285.504 49.792C283.52 52.416 282.528 55.52 282.528 59.104C282.528 62.688 283.04 65.632 284.064 67.936C285.152 70.24 286.56 71.392 288.288 71.392C290.4 71.392 293.504 66.112 297.6 55.552C297.664 55.04 297.728 54.176 297.792 52.96C297.92 51.68 298.016 50.72 298.08 50.08C297.504 49.056 296.48 48.096 295.008 47.2C293.6 46.24 292.352 45.76 291.264 45.76Z"
            fill="black"
          />
          <path
            id="k_2"
            d="M274.912 79.36L277.504 79.072C278.016 79.072 278.272 79.328 278.272 79.84C278.272 80.736 277.664 81.408 276.448 81.856C275.232 82.304 273.856 82.528 272.32 82.528C269.44 82.528 267.008 81.376 265.024 79.072C263.104 76.768 260.416 72.512 256.96 66.304C256.128 64.96 255.712 63.936 255.712 63.232C255.712 62.272 257.056 61.152 259.744 59.872C264.096 57.632 266.272 54.816 266.272 51.424C266.272 50.464 265.92 49.664 265.216 49.024C264.576 48.32 263.712 47.968 262.624 47.968C261.088 47.968 259.264 49.792 257.152 53.44C255.04 57.024 253.6 60.416 252.832 63.616C252.128 66.752 251.776 70.144 251.776 73.792C251.776 75.584 251.264 76.48 250.24 76.48C248.768 76.48 247.36 76.288 246.016 75.904C244.672 75.456 244 74.912 244 74.272C244 73.568 244.256 70.528 244.768 65.152C245.28 59.712 245.568 55.808 245.632 53.44C245.888 40.384 246.656 30.4 247.936 23.488C248.128 22.912 248.992 21.92 250.528 20.512C252.128 19.104 253.408 18.4 254.368 18.4C255.328 18.4 255.776 19.616 255.712 22.048C255.712 24.416 255.2 29.536 254.176 37.408C253.152 45.28 252.512 52.48 252.256 59.008C253.408 54.912 255.232 51.04 257.728 47.392C260.288 43.744 262.848 41.92 265.408 41.92C269.76 41.92 271.936 44.032 271.936 48.256C271.936 51.072 271.104 53.632 269.44 55.936C267.776 58.176 265.536 60 262.72 61.408C262.144 61.664 261.856 61.952 261.856 62.272C261.856 62.592 261.952 62.912 262.144 63.232C266.176 70.336 269.6 75.328 272.416 78.208C273.184 78.976 274.016 79.36 274.912 79.36Z"
            fill="black"
          />
          <path
            id="u"
            d="M210 67.648L210.576 56.896C210.576 50.048 210.896 46.304 211.536 45.664C212.176 45.024 213.296 44.096 214.896 42.88C216.56 41.6 217.744 40.96 218.448 40.96C219.216 40.96 219.696 41.088 219.888 41.344C220.08 41.6 220.176 42.112 220.176 42.88C220.176 45.632 219.568 48.416 218.352 51.232C217.392 57.12 216.912 61.952 216.912 65.728C216.912 69.504 217.52 71.392 218.736 71.392C220.208 71.392 221.936 70.112 223.92 67.552C225.904 64.992 227.888 61.184 229.872 56.128C230.448 49.728 230.896 46.272 231.216 45.76C231.6 45.248 232.496 44.32 233.904 42.976C235.312 41.632 236.464 40.96 237.36 40.96C238.32 40.96 238.8 42.176 238.8 44.608C238.8 45.248 238.608 46.496 238.224 48.352C237.904 50.208 237.52 51.552 237.072 52.384C236.368 54.176 236.016 59.712 236.016 68.992C236.016 70.72 236.208 71.584 236.592 71.584C237.68 71.52 239.184 70.176 241.104 67.552C243.024 64.864 244.912 61.44 246.768 57.28C248.688 53.12 249.84 51.04 250.224 51.04C250.672 51.04 250.896 51.296 250.896 51.808C250.896 53.6 249.968 56.448 248.112 60.352C243.056 71.104 238.8 76.48 235.344 76.48C232.848 76.48 230.96 75.968 229.68 74.944C229.232 74.496 229.008 73.12 229.008 70.816C229.008 68.512 229.104 65.952 229.296 63.136C227.248 67.488 225.2 70.816 223.152 73.12C221.104 75.36 218.8 76.48 216.24 76.48C213.744 76.48 212.08 75.808 211.248 74.464C210.416 73.12 210 70.848 210 67.648Z"
            fill="black"
          />
          <path
            id="L"
            d="M180.032 56.936L176.384 57.608C175.36 57.608 174.848 57.128 174.848 56.168C174.848 55.208 175.392 54.408 176.48 53.768C177.568 53.128 178.656 52.808 179.744 52.808C180.896 52.808 181.6 52.84 181.856 52.904L182.912 45.704C182.208 45.768 181.248 45.8 180.032 45.8C178.88 45.8 178.304 45.608 178.304 45.224C178.304 44.008 179.968 43.24 183.296 42.92C184.192 36.008 186.272 30.696 189.536 26.984C192.864 23.208 197.344 21.32 202.976 21.32C205.664 21.32 207.616 21.96 208.832 23.24C210.048 24.456 210.656 25.928 210.656 27.656C210.656 36.04 203.904 41.704 190.4 44.648C189.952 47.976 189.472 51.24 188.96 54.44C191.648 55.08 193.664 55.4 195.008 55.4C196.352 55.4 197.408 55.208 198.176 54.824C199.008 54.376 199.456 54.152 199.52 54.152C200.16 54.152 200.48 54.696 200.48 55.784C200.48 56.808 199.712 57.8 198.176 58.76C196.64 59.656 194.976 60.104 193.184 60.104C191.392 60.104 189.632 59.784 187.904 59.144C187.072 62.856 186.016 65.896 184.736 68.264C190.624 70.248 194.592 71.528 196.64 72.104C198.688 72.616 200.832 72.872 203.072 72.872C205.376 72.872 206.944 71.944 207.776 70.088C208.608 68.232 209.216 67.304 209.6 67.304C210.368 67.304 210.752 67.784 210.752 68.744C210.752 71.752 209.632 74.312 207.392 76.424C205.152 78.536 202.72 79.592 200.096 79.592C197.408 79.592 194.976 79.144 192.8 78.248C190.624 77.352 189.248 76.776 188.672 76.52C188.096 76.264 186.912 75.72 185.12 74.888C183.392 74.056 182.176 73.48 181.472 73.16C179.04 75.72 175.776 77 171.68 77C170.016 77 168.544 76.392 167.264 75.176C165.984 73.96 165.344 72.52 165.344 70.856C165.344 67.208 167.424 65.384 171.584 65.384C173.376 65.384 175.872 65.8 179.072 66.632C179.84 63.88 180.544 60.68 181.184 57.032L180.032 56.936ZM190.688 41.864C194.784 40.968 198.144 39.464 200.768 37.352C203.456 35.176 204.8 32.36 204.8 28.904C204.8 25.448 203.616 23.72 201.248 23.72C196.064 23.72 192.544 29.768 190.688 41.864ZM176.864 71.144C173.152 69.544 170.848 68.744 169.952 68.744C169.12 68.744 168.704 69.192 168.704 70.088C168.704 70.984 169.088 71.752 169.856 72.392C170.688 73.032 171.744 73.352 173.024 73.352C174.304 73.352 175.584 72.616 176.864 71.144Z"
            fill="black"
          />
          <path
            id="a_2"
            d="M135.976 77.48C133.48 77.48 131.592 76.968 130.312 75.944C129.864 75.496 129.64 74.376 129.64 72.584C129.64 70.728 129.704 68.264 129.832 65.192C128.168 69.352 126.504 72.456 124.84 74.504C123.24 76.488 121.16 77.48 118.6 77.48C116.04 77.48 113.8 76.296 111.88 73.928C109.96 71.496 109 67.72 109 62.6C109 57.416 110.44 52.84 113.32 48.872C116.264 44.904 120.104 42.92 124.84 42.92C126.888 42.92 129.192 44.264 131.752 46.952C132.264 46.248 133.16 45.416 134.44 44.456C135.784 43.432 136.904 42.92 137.8 42.92C138.76 42.92 139.24 44.136 139.24 46.568C139.24 47.208 139.048 48.456 138.664 50.312C138.344 52.168 137.96 53.512 137.512 54.344C136.936 55.816 136.648 61.032 136.648 69.992C136.648 71.72 136.84 72.584 137.224 72.584C138.312 72.52 139.816 71.176 141.736 68.552C143.656 65.864 145.544 62.44 147.4 58.28C149.32 54.12 150.472 52.04 150.856 52.04C151.304 52.04 151.528 52.296 151.528 52.808C151.528 54.6 150.6 57.448 148.744 61.352C143.688 72.104 139.432 77.48 135.976 77.48ZM124.264 46.76C122.472 46.76 120.552 48.104 118.504 50.792C116.52 53.416 115.528 56.52 115.528 60.104C115.528 63.688 116.04 66.632 117.064 68.936C118.152 71.24 119.56 72.392 121.288 72.392C123.4 72.392 126.504 67.112 130.6 56.552C130.664 56.04 130.728 55.176 130.792 53.96C130.92 52.68 131.016 51.72 131.08 51.08C130.504 50.056 129.48 49.096 128.008 48.2C126.6 47.24 125.352 46.76 124.264 46.76Z"
            fill="black"
          />
          <path
            id="g"
            d="M97.984 61.312C96 66.56 94.144 70.4 92.416 72.832C90.752 75.264 88.544 76.48 85.792 76.48C83.04 76.48 80.704 75.296 78.784 72.928C76.928 70.56 76 66.784 76 61.6C76 56.416 77.44 51.84 80.32 47.872C83.264 43.904 87.104 41.92 91.84 41.92C92.8 41.92 93.952 42.336 95.296 43.168C96.64 43.936 97.824 44.896 98.848 46.048C99.04 45.408 99.968 44.416 101.632 43.072C103.296 41.664 104.576 40.96 105.472 40.96C106.432 40.96 106.912 42.336 106.912 45.088C106.912 47.84 106.336 50.272 105.184 52.384C104.544 56.672 104.192 60.64 104.128 64.288C110.4 56.352 113.728 52.16 114.112 51.712C114.56 51.264 114.944 51.04 115.264 51.04C115.904 51.04 116.224 51.36 116.224 52C116.224 52.384 116.096 52.8 115.84 53.248C113.792 56.256 109.76 61.536 103.744 69.088C103.36 76.704 103.104 81.888 102.976 84.64C102.656 92.768 101.504 98.464 99.52 101.728C97.6 105.056 94.144 106.72 89.152 106.72C86.976 106.72 84.928 106.048 83.008 104.704C81.152 103.424 80.224 101.152 80.224 97.888C80.224 94.688 81.44 91.392 83.872 88C86.368 84.608 90.88 79.392 97.408 72.352L97.984 61.312ZM91.264 45.376C89.472 45.376 87.552 46.784 85.504 49.6C83.52 52.352 82.528 55.552 82.528 59.2C82.528 62.784 83.04 65.728 84.064 68.032C85.152 70.272 86.496 71.392 88.096 71.392C89.696 71.392 91.232 70.08 92.704 67.456C94.176 64.832 96.064 60.32 98.368 53.92C98.496 51.744 98.56 50.368 98.56 49.792C98.048 48.832 96.992 47.872 95.392 46.912C93.792 45.888 92.416 45.376 91.264 45.376ZM97.12 76.864C89.824 84.736 86.176 91.04 86.176 95.776C86.176 97.952 86.56 99.744 87.328 101.152C88.096 102.56 89.152 103.264 90.496 103.264C92.544 103.264 93.984 102.144 94.816 99.904C95.648 97.664 96.256 93.12 96.64 86.272L97.12 76.864Z"
            fill="black"
          />
          <path
            id="l"
            d="M68.008 76.48C66.6 76.48 65.288 76.32 64.072 76C62.92 75.616 62.216 75.264 61.96 74.944C61.32 74.176 61 70.208 61 63.04C61 55.808 61.8 46.016 63.4 33.664C64.744 23.488 67.88 18.4 72.808 18.4C73.96 18.4 74.792 19.04 75.304 20.32C75.816 21.536 76.072 22.72 76.072 23.872C76.072 32.192 73.544 41.504 68.488 51.808C68.296 57.12 68.2 61.76 68.2 65.728C68.2 69.632 68.552 71.584 69.256 71.584C70.344 71.52 71.848 70.176 73.768 67.552C75.688 64.864 77.576 61.44 79.432 57.28C81.352 53.12 82.504 51.04 82.888 51.04C83.336 51.04 83.56 51.296 83.56 51.808C83.56 53.6 82.632 56.448 80.776 60.352C75.72 71.104 71.464 76.48 68.008 76.48ZM73.672 24.736C73.672 22.688 73.416 21.664 72.904 21.664C70.984 21.664 69.576 29.632 68.68 45.568C72.008 36.8 73.672 29.856 73.672 24.736Z"
            fill="black"
          />
          <path
            id="O"
            d="M2.016 54.592C2.016 50.304 2.816 46.08 4.416 41.92C6.08 37.696 8.448 34.208 11.52 31.456C12.288 27.296 14.272 23.936 17.472 21.376C20.736 18.752 25.376 17.44 31.392 17.44C37.408 17.44 42.208 19.808 45.792 24.544C49.44 29.216 51.264 35.328 51.264 42.88C51.264 47.808 50.528 52.48 49.056 56.896C52 55.872 54.656 54.592 57.024 53.056C59.456 51.456 60.704 50.656 60.768 50.656C61.472 50.656 61.824 51.072 61.824 51.904C61.824 52.608 60.288 53.984 57.216 56.032C54.144 58.016 50.976 59.424 47.712 60.256C45.344 65.44 41.984 69.536 37.632 72.544C33.28 75.488 28 76.96 21.792 76.96C15.648 76.96 10.816 74.912 7.296 70.816C3.776 66.656 2.016 61.248 2.016 54.592ZM42.528 58.048C43.36 55.168 43.776 51.968 43.776 48.448C43.776 40.896 42.336 34.496 39.456 29.248C36.64 24 32.608 21.376 27.36 21.376C25.12 21.376 22.88 22.016 20.64 23.296C18.464 24.512 16.896 26.176 15.936 28.288C19.264 26.432 22.624 25.504 26.016 25.504C29.472 25.504 31.2 25.984 31.2 26.944C31.2 27.52 30.976 27.968 30.528 28.288C30.08 28.608 29.632 28.768 29.184 28.768C23.68 28.768 19.008 30.624 15.168 34.336C15.68 40.864 18.528 46.464 23.712 51.136C28.96 55.744 35.232 58.048 42.528 58.048ZM25.44 72.064C33.12 72.064 38.464 68.448 41.472 61.216C33.792 61.216 27.104 59.2 21.408 55.168C15.776 51.136 12.448 45.856 11.424 39.328C9.632 42.72 8.736 46.528 8.736 50.752C8.736 56.576 10.336 61.6 13.536 65.824C16.8 69.984 20.768 72.064 25.44 72.064Z"
            fill="black"
          />
        </g>
      </StyledLogo>
    </Link>
  </>
);

export default Logo;
