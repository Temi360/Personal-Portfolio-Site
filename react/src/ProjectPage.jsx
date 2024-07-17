import React, { useEffect, useRef } from "react";
import "./portfolio_page.css";
import { Route, Routes, Link } from "react-router-dom";
import greyLine from "./greyLine.svg";
import windyScenePreview from "./theWindyScenePreview.svg";
import figma from "./figmaIcon.svg";
import plant from "./plant.svg";
import infoArchitecture from "./TWSInfoArchitecture.svg";
import loFiWireframeLabelAndPen from "./LoFiWireframeLabelAndPen.svg";
import loFiWireframes from "./loFiWireframes.svg"
function ProjectPage() {
  return (
    <>
      <div className="portfolioProjectTitleAndImage">
        <img
          src={windyScenePreview}
          id="biggerPortfolioImage"
          alt="The Windy Scene Project Preview Image"
        />
        <div className="projectDescription">
          <h2 className=" portfolioProjectTitle jost">The Windy Scene</h2>
          <div className="typeRoleDuration">
            <div className="projectAttributes">
              <h3 className="justMeFont projectAttributeItems typeRoleDurationItems">
                Type{" "}
              </h3>
              <p className=" jost projectAttributeItems">UI/UX</p>
            </div>
            <img className="typeRoleDurationItems" src={greyLine} />
            <div className="projectAttributes">
              <h3 className=" justMeFont projectAttributeItems typeRoleDurationItems">
                Role{" "}
              </h3>
              <p className=" jost projectAttributeItems">Designer</p>
            </div>
            <img className="typeRoleDurationItems" src={greyLine} />
            <div className="projectAttributes">
              <h3 className=" justMeFont projectAttributeItems typeRoleDurationItems">
                Duration{" "}
              </h3>
              <p className=" jost projectAttributeItems">3 months</p>
            </div>
          </div>
          <div class="stackContainer">
            <h3 class=" justMeFont stackLabel stackItems"> Stack: </h3>
            <img class="stackItems" src={figma} />
          </div>
          <div class="theProblemContainer">
            <div class=" justMeFont theProblemBox">The Problem</div>
            <p class="jost">
              There is currently no interactive user guide to the eclectic and
              historical jazz scene in one of the richest cities in the US. I
              mean, I had to do something about it. As a Chicago native, I
              valued the artistic identity of the city, and wanted to integrate
              that into the visual design and features of the application.
              That's how "The Windy Scene was born!"
            </p>
          </div>
        </div>
      </div>
      <div
        alt="sticky sidebar that navigates to contact and linkedIn"
        className="stickySidebar"
      >
        <svg
          width="90"
          height="210"
          viewBox="0 0 90 210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="sideBar">
            <g id="Group 3" filter="url(#filter0_d_313_110)">
              <path
                id="Vector 26"
                d="M58.326 166.966C56.9234 166.399 56.3663 165.016 59.2302 165.269C61.9296 165.486 61.0537 165.262 63.991 165.647C66.9283 166.032 65.9453 167.737 64.6651 167.723C63.1365 167.707 59.7287 167.533 58.326 166.966Z"
                fill="#9CAFFE"
                stroke="#9CAFFE"
                stroke-width="3"
              />
              <path
                id="Vector 27"
                d="M26.6402 164.349C25.3272 163.566 26.0358 162.373 26.869 162.558C27.5248 162.664 29.5492 163.086 32.4003 163.931C35.2514 164.775 34.2057 166.165 33.0448 165.967C31.5377 165.71 27.9531 165.132 26.6402 164.349Z"
                fill="#9CAFFE"
                stroke="#9CAFFE"
                stroke-width="3"
              />
              <path
                id="Vector 28"
                d="M63.9158 177.033L64.5418 178.315M64.9256 176.475L65.4571 177.354"
                stroke="#9CAFFE"
                stroke-width="3"
              />
              <path
                id="Vector 29"
                d="M62.7827 173.903C61.3499 175.899 60.3166 174.557 59.979 173.637L61.1331 174.196L61.2605 173.586C61.244 173.157 61.5252 172.621 62.7827 173.903Z"
                fill="#9CAFFE"
                stroke="#9CAFFE"
                stroke-width="3"
              />
              <path
                id="Vector 30"
                d="M26.8936 170.464C27.4091 172.866 28.8926 172.049 29.5698 171.341L28.2884 171.392L28.4158 170.782C28.6022 170.396 28.5587 169.792 26.8936 170.464Z"
                fill="#9CAFFE"
                stroke="#9CAFFE"
                stroke-width="3"
              />
              <g id="Vector 31">
                <path
                  d="M54.54 138.799C35.8735 132.707 21.6155 146.059 17.6074 153.165C19.1031 154.066 19.6939 154.086 20.6843 155.291C23.4913 149.269 33.5023 138.101 51.0905 141.612C68.6787 145.124 74.2813 158.16 73.9125 164.234C74.0188 163.372 76.8164 165.025 77.1435 165.878C77.5166 158.17 72.3515 141.886 54.54 138.799Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M16.3054 157.694C16.3795 156.531 17.297 153.225 17.6074 153.165M17.6074 153.165C21.6155 146.059 35.8735 132.707 54.54 138.799C72.3515 141.886 77.5166 158.17 77.1435 165.878M17.6074 153.165C19.1031 154.066 19.6939 154.086 20.6843 155.291M77.1435 165.878C76.8164 165.025 74.0188 163.372 73.9125 164.234M77.1435 165.878L76.4731 169.092M73.9125 164.234C73.5843 166.896 73.5562 167.021 73.6405 167.693L73.8659 168.74M73.9125 164.234C74.2813 158.16 68.6787 145.124 51.0905 141.612C33.5023 138.101 23.4913 149.269 20.6843 155.291M20.6843 155.291L19.8455 157.856"
                  stroke="#9CAFFE"
                  stroke-width="3"
                />
              </g>
              <path
                id="Vector 32"
                d="M14.2894 176.486C14.5669 177.44 15.5183 179.161 17.1032 178.417C17.1297 174.006 15.8393 171.625 21.1714 158.914"
                stroke="#9CAFFE"
                stroke-width="3"
              />
              <path
                id="Vector 33"
                d="M70.1706 185.748C69.4622 186.455 67.7583 187.512 66.6094 186.081C68.6473 182.171 70.7092 181.791 71.618 167.958"
                stroke="#9CAFFE"
                stroke-width="3"
              />
              <path
                id="Vector 34"
                d="M82.0305 181.003C84.5348 170.711 76.6063 169.101 73.7126 168.454C74.9613 175.715 71.7871 183.96 70.0438 187.175C71.4703 188.244 79.9857 189.407 82.0305 181.003Z"
                fill="#F5F5F5"
                stroke="#9CAFFE"
                stroke-width="3"
              />
              <path
                id="Vector 35"
                d="M6.37905 166.327C8.19823 155.892 16.1093 157.586 19.0205 158.15C14.9729 164.306 14.586 173.133 14.8985 176.777C13.1637 177.186 4.89357 174.848 6.37905 166.327Z"
                fill="#F5F5F5"
                stroke="#9CAFFE"
                stroke-width="3"
              />
              <path
                id="Vector 36"
                d="M18.5288 172.735C13.9216 160.337 35.1031 152.706 46.6711 150.78C56.801 153.318 76.8787 164.516 69.4782 178.478C63.8011 189.188 24.2878 188.233 18.5288 172.735Z"
                stroke="#9CAFFE"
                stroke-width="3"
              />
              <path
                id="Vector 37"
                d="M42.8318 173.594L45.5512 175.122L48.2941 173.966"
                stroke="#9CAFFE"
                stroke-width="3"
              />
              <path
                id="Vector 38"
                d="M42.6882 172.221C42.9531 172.773 43.1772 173.976 41.9545 174.372"
                stroke="#9CAFFE"
                stroke-width="3"
              />
              <g id="Vector 41">
                <path
                  d="M24.4296 152.863C22.5281 153.408 21.3433 158.997 20.9816 160.973L22.7075 159.665L24.5855 158.739L28.2136 156.494L29.8421 155.334L28.3422 153.101C27.7758 152.142 26.3311 152.317 24.4296 152.863Z"
                  fill="#9CAFFE"
                />
                <path
                  d="M30.7752 155.144L28.0084 150.934C27.4818 148.658 31.2833 149.716 32.3252 150.335C32.1973 149.943 32.4773 149.105 34.6203 148.888C36.7633 148.672 38.0189 149.453 38.3787 149.871L37.1634 152.571L33.1286 153.826L30.7752 155.144Z"
                  fill="#9CAFFE"
                />
                <path
                  d="M39.8064 151.163C40.2506 149.851 39.1472 148.885 38.54 148.566C39.3649 147.599 41.0482 147.773 41.7868 147.98L45.5119 150.66L40.1671 152.526C39.8618 152.618 39.3622 152.474 39.8064 151.163Z"
                  fill="#9CAFFE"
                />
                <path
                  d="M47.0772 151.332L46.2583 150.31C45.7652 149.247 47.631 148.677 49.383 147.876C51.1372 147.075 53.3846 148.319 54.4873 149.386L51.6372 151.938L47.0772 151.332Z"
                  fill="#9CAFFE"
                />
                <path
                  d="M52.3538 152.786L56.923 149.655C60.1242 150.01 60.1842 152.284 59.8141 153.377L57.693 154.843L57.1563 155.463C56.5502 156.317 54.1506 154.452 53.6752 154.161C53.3145 153.94 52.37 153.607 52.3538 152.786Z"
                  fill="#9CAFFE"
                />
                <path
                  d="M67.3162 158.159C64.6617 160.907 59.0863 159.268 59.3995 156.733C59.6388 154.795 60.5627 153.986 61.2991 153.718C64.9972 151.847 64.5115 153.897 66.4841 155.06C68.4327 155.276 67.694 157.004 67.3162 158.159C70.3025 156.826 71.3327 160.806 71.2491 162.435L70.556 168.328L67.2106 163.456L65.0973 160.576L67.3162 158.159Z"
                  fill="#9CAFFE"
                />
                <path
                  d="M14.9625 175.249L17.6849 171.77C22.6687 181.393 27.9234 184.345 44.0335 185.749C59.844 187.127 67.7744 179.95 69.6292 178.801C70.2215 179.948 71.1581 182.575 70.1661 183.904C72.0598 185.067 71.3567 187.033 70.7685 187.87C71.4772 189.271 71.8128 187.588 72.6622 190.705C73.3417 193.199 71.8264 194.14 70.9837 194.299C71.4519 194.792 72.2911 195.993 71.9022 196.858C71.4161 197.938 72.4139 198.426 69.7121 198.883C69.3988 201.418 66.7979 199.631 65.5365 198.421C65.0385 199.122 63.6637 199.877 62.1491 197.29C61.0949 198.685 60.3299 199.168 58.2294 197.612C57.0115 197.477 57.1983 198.821 54.9238 197.246C52.8933 198.836 51.5874 197.129 51.1883 196.077C51.1346 196.512 50.5722 197.067 48.7526 195.808C46.5092 197.978 44.4611 195.333 43.7175 193.738C43.6253 194.484 39.7209 195.551 38.4558 194.569C36.1709 192.797 34.8857 196.263 33.7076 195.058C33.2105 195.433 32.1877 195.833 31.0194 195.168C29.4986 196.058 28.414 195.321 28.0618 194.841C27.5867 195.355 26.4161 196.17 25.5339 195.317C25.0058 196.165 23.9221 195.516 23.4462 195.086L21.1512 196.533C20.6838 196.985 19.4379 197.552 18.1935 196.205C17.0718 197.291 16.3411 195.496 16.116 194.463C15.9778 195.582 10.8666 195.975 11.1798 193.44C9.481 192.345 10.7964 190.83 12.6325 190.719C12.1371 189.971 12.0291 189.287 14.4403 188.042C11.8511 184.731 14.2025 181.401 15.4076 180.212C14.4886 179.656 14.7279 176.672 14.9625 175.249Z"
                  fill="#9CAFFE"
                />
                <path
                  d="M61.9018 153.608C61.7359 153.605 61.5264 153.636 61.2991 153.718M67.3162 158.159C64.6617 160.907 59.0863 159.268 59.3995 156.733C59.6388 154.795 60.5627 153.986 61.2991 153.718M67.3162 158.159C67.694 157.004 68.4327 155.276 66.4841 155.06C64.5115 153.897 64.9972 151.847 61.2991 153.718M67.3162 158.159C70.3025 156.826 71.3327 160.806 71.2491 162.435L70.556 168.328L67.2106 163.456L65.0973 160.576L67.3162 158.159ZM33.8722 194.917C33.4705 195.313 32.3376 195.919 31.0194 195.168C29.4986 196.058 28.414 195.321 28.0618 194.841C27.5867 195.355 26.4161 196.17 25.5339 195.317C25.0058 196.165 23.9221 195.516 23.4462 195.086L21.1512 196.533C20.6838 196.985 19.4379 197.552 18.1935 196.205C17.0718 197.291 16.3411 195.496 16.116 194.463C15.9778 195.582 10.8666 195.975 11.1798 193.44C9.481 192.345 10.7964 190.83 12.6325 190.719C12.1371 189.971 12.0291 189.287 14.4403 188.042C11.8511 184.731 14.2025 181.401 15.4076 180.212C14.4886 179.656 14.7279 176.672 14.9625 175.249L17.6849 171.77C22.6687 181.393 27.9234 184.345 44.0335 185.749C59.844 187.127 67.7744 179.95 69.6292 178.801C70.2215 179.948 71.1581 182.575 70.1661 183.904C72.0598 185.067 71.3567 187.033 70.7685 187.87C71.4772 189.271 71.8128 187.588 72.6622 190.705C73.3417 193.199 71.8264 194.14 70.9837 194.299C71.4519 194.792 72.2911 195.993 71.9022 196.858C71.4161 197.938 72.4139 198.426 69.7121 198.883C69.3988 201.418 66.7979 199.631 65.5365 198.421C65.0385 199.122 63.6637 199.877 62.1491 197.29C61.0949 198.685 60.3299 199.168 58.2294 197.612C57.0115 197.477 57.1983 198.821 54.9238 197.246C52.8933 198.836 51.5874 197.129 51.1883 196.077C51.1346 196.512 50.5722 197.067 48.7526 195.808C46.5092 197.978 44.4611 195.333 43.7175 193.738C43.6253 194.484 39.7209 195.551 38.4558 194.569C36.1709 192.797 34.8857 196.263 33.7076 195.058M20.9816 160.973C21.3433 158.997 22.5281 153.408 24.4296 152.863C26.3311 152.317 27.7758 152.142 28.3422 153.101L29.8421 155.334L28.2136 156.494L24.5855 158.739L22.7075 159.665L20.9816 160.973ZM28.0084 150.934L30.7752 155.144L33.1286 153.826L37.1634 152.571L38.3787 149.871C38.0189 149.453 36.7633 148.672 34.6203 148.888C32.4773 149.105 32.1973 149.943 32.3252 150.335C31.2833 149.716 27.4818 148.658 28.0084 150.934ZM38.54 148.566C39.1472 148.885 40.2506 149.851 39.8064 151.163C39.3622 152.474 39.8618 152.618 40.1671 152.526L45.5119 150.66L41.7868 147.98C41.0482 147.773 39.3649 147.599 38.54 148.566ZM46.2583 150.31L47.0772 151.332L51.6372 151.938L54.4873 149.386C53.3846 148.319 51.1372 147.075 49.383 147.876C47.631 148.677 45.7652 149.247 46.2583 150.31ZM56.923 149.655L52.3538 152.786C52.37 153.607 53.3144 153.94 53.6752 154.161C54.1506 154.452 56.5502 156.317 57.1563 155.463L57.693 154.843L59.8141 153.377C60.1842 152.284 60.1242 150.01 56.923 149.655Z"
                  stroke="#9CAFFE"
                  stroke-width="3"
                />
              </g>
              <path
                id="Vector 42"
                d="M20.0479 157.744L20.8141 159.21"
                stroke="#9CAFFE"
                stroke-width="3"
              />
              <path
                id="Vector 43"
                d="M73.3105 167.857L71.4858 168.55"
                stroke="#9CAFFE"
                stroke-width="3"
              />
            </g>
            <g id="linkedin" clip-path="url(#clip0_313_110)">
              <path
                id="Vector"
                d="M62.2611 75H30.7316C29.2213 75 28 76.1924 28 77.6666V109.326C28 110.8 29.2213 112 30.7316 112H62.2611C63.7715 112 65 110.8 65 109.333V77.6666C65 76.1924 63.7715 75 62.2611 75ZM38.9771 106.529H33.485V88.8678H38.9771V106.529ZM36.2311 86.4613C34.4678 86.4613 33.0441 85.0377 33.0441 83.2816C33.0441 81.5256 34.4678 80.102 36.2311 80.102C37.9871 80.102 39.4107 81.5256 39.4107 83.2816C39.4107 85.0305 37.9871 86.4613 36.2311 86.4613ZM59.5295 106.529H54.0445V97.9443C54.0445 95.8992 54.0084 93.2615 51.19 93.2615C48.3355 93.2615 47.902 95.4945 47.902 97.7998V106.529H42.4242V88.8678H47.6852V91.2814H47.7574C48.4873 89.8939 50.2795 88.427 52.9461 88.427C58.5033 88.427 59.5295 92.0836 59.5295 96.8387V106.529Z"
                fill="#020001"
              />
            </g>
            <g id="email">
              <g id="mail">
                <path
                  id="Vector_2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M67.8379 5.73654C68.2309 6.12892 68.4517 6.66148 68.4517 7.21684L68.4517 18.3982C68.4697 22.5913 68.5054 27.9421 68.5644 35.2518C68.5689 35.8106 68.3496 36.348 67.9554 36.7442C67.5611 37.1403 67.0248 37.3623 66.4659 37.3605L65.8347 37.3584C65.7294 37.3605 65.6323 37.3605 65.567 37.3605H65.5634L65.5215 37.3601L65.3477 37.3566C58.5736 37.2221 56.0673 37.2423 50.8208 37.2845C50.1036 37.2903 49.3352 37.2965 48.4977 37.3028C44.7275 37.3309 38.9108 37.3605 30.7391 37.3605C30.4997 37.3605 29.9844 37.3429 29.4576 37.0842C29.1639 36.94 28.8111 36.6931 28.5363 36.2856C28.2601 35.8759 28.1454 35.426 28.1392 35.0108L28.0366 30.6159C28.0052 29.3903 27.9688 28.0036 27.9305 26.5426C27.7627 20.1478 27.5577 12.329 27.5646 10.3561C27.5648 10.3047 27.5649 10.2518 27.5649 10.1976C27.5658 9.52393 27.5669 8.6493 27.7896 7.88439C28.1038 6.80525 28.7879 6.04132 29.7573 5.50307C30.0643 5.33263 30.4092 5.2422 30.7604 5.24011L44.405 5.15912L44.4141 5.15908L66.3566 5.125C66.912 5.12414 67.4449 5.34415 67.8379 5.73654ZM48.4779 33.1191C49.3083 33.1129 50.0715 33.1068 50.7849 33.101C55.7623 33.0609 58.3153 33.0404 64.3639 33.1532C64.3149 26.9132 64.2843 22.1938 64.2681 18.4117C64.2519 14.6402 64.25 11.7999 64.2583 9.31194L44.4298 9.34272L44.4206 9.34275L32.1125 9.41583L48.9168 19.7212C49.6091 19.1731 50.5651 18.4294 51.6544 17.6187C53.8449 15.9887 56.696 13.9959 59.0401 12.8239C60.0735 12.3072 61.33 12.726 61.8466 13.7594C62.3633 14.7927 61.9445 16.0492 60.9111 16.5659C58.924 17.5594 56.3269 19.3566 54.1521 20.9751C53.0817 21.7716 52.143 22.5026 51.4721 23.0343C51.137 23.2999 50.8694 23.5151 50.6866 23.6632C50.5953 23.7372 50.5251 23.7944 50.4783 23.8327L50.426 23.8756L50.4134 23.8859L50.4107 23.8882C49.7216 24.4564 48.7472 24.5248 47.9858 24.0579L31.8373 14.1548L32.2138 30.289C32.2408 31.3391 32.2645 32.2819 32.2831 33.0665C32.309 33.0657 32.3351 33.0653 32.3614 33.0653L48.4779 33.1191Z"
                  fill="#020001"
                />
              </g>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_313_110"
              x="0.698242"
              y="135.749"
              width="87.3086"
              height="73.9196"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_313_110"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_313_110"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_313_110">
              <rect
                width="37"
                height="37"
                fill="white"
                transform="translate(28 75)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="leftAlignedTextContainer">
        <p class="jost">
          {" "}
          For the information architecture of the application, I opted for a
          non-linear flow, in which users can easily navigate through different
          levels of filtering for clubs (historical, contemporary, popular, etc)
          to best suit their needs.
        </p>
        <img src={plant} />
      </div>
      <svg
        class="firstDottedLine"
        width="348"
        height="454"
        viewBox="0 0 348 454"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="firstDottedLine"
          d="M246 162L246.379 160.549L246 162ZM234.515 450.287C234.397 451.107 234.966 451.867 235.786 451.985L249.148 453.906C249.968 454.024 250.729 453.455 250.847 452.635C250.964 451.815 250.395 451.054 249.575 450.937L237.697 449.229L239.405 437.351C239.523 436.531 238.954 435.771 238.134 435.653C237.314 435.535 236.554 436.104 236.436 436.924L234.515 450.287ZM3.52738 0.215159C3.32629 1.25483 3.1362 2.28623 2.95702 3.30944L5.91205 3.82692C6.08813 2.82141 6.27501 1.80742 6.47279 0.784841L3.52738 0.215159ZM2.01224 9.35122C1.7275 11.428 1.48999 13.4696 1.29899 15.4768L4.2855 15.761C4.47246 13.7962 4.70514 11.7958 4.98443 9.75874L2.01224 9.35122ZM0.857799 21.5344C0.752551 23.6466 0.701662 25.7191 0.7042 27.7528L3.7042 27.7491C3.70173 25.7679 3.7513 23.7465 3.85408 21.6837L0.857799 21.5344ZM0.879334 33.8845C0.997772 35.9697 1.17588 38.0121 1.41252 40.0127L4.39175 39.6604C4.16246 37.7218 3.98958 35.7403 3.87451 33.7143L0.879334 33.8845ZM2.34443 46.1475C2.72789 48.2005 3.17721 50.2068 3.69093 52.1678L6.59301 51.4076C6.09774 49.517 5.66399 47.5806 5.29343 45.5967L2.34443 46.1475ZM5.47519 58.0664C6.15736 60.0457 6.90982 61.9756 7.73073 63.8578L10.4806 62.6585C9.69156 60.8494 8.9679 58.9935 8.31148 57.0889L5.47519 58.0664ZM10.4341 69.4327C11.4122 71.2583 12.4593 73.0354 13.5734 74.7662L16.096 73.1423C15.0247 71.4782 14.0183 69.7701 13.0785 68.0159L10.4341 69.4327ZM17.1278 79.8385C18.3729 81.4764 19.6824 83.0696 21.054 84.62L23.301 82.6323C21.9773 81.136 20.7151 79.6002 19.5161 78.023L17.1278 79.8385ZM25.3027 89.0961C26.7587 90.5286 28.2717 91.9222 29.8395 93.2791L31.8027 91.0107C30.2814 89.694 28.8155 88.3436 27.4066 86.9575L25.3027 89.0961ZM34.631 97.1842C36.2396 98.4203 37.8969 99.6242 39.6013 100.798L41.3027 98.3269C39.6394 97.1817 38.0244 96.0084 36.459 94.8054L34.631 97.1842ZM44.7355 104.156C46.459 105.228 48.2244 106.273 50.0301 107.294L51.5063 104.682C49.7353 103.681 48.006 102.657 46.3196 101.608L44.7355 104.156ZM55.4312 110.213C57.2201 111.138 59.0441 112.042 60.902 112.927L62.1918 110.219C60.3622 109.347 58.5676 108.458 56.8093 107.548L55.4312 110.213ZM66.4854 115.484C68.3311 116.297 70.2069 117.094 72.1117 117.875L73.2497 115.099C71.3678 114.327 69.5159 113.541 67.6951 112.739L66.4854 115.484ZM77.7835 120.123C79.6784 120.849 81.5994 121.562 83.5455 122.263L84.5616 119.44C82.6338 118.746 80.7321 118.04 78.8574 117.322L77.7835 120.123ZM89.2758 124.266C91.1898 124.916 93.126 125.556 95.0837 126.186L96.003 123.331C94.0598 122.705 92.1388 122.071 90.2408 121.426L89.2758 124.266ZM100.9 128.012C102.827 128.603 104.773 129.185 106.737 129.76L107.58 126.88C105.627 126.309 103.693 125.73 101.779 125.144L100.9 128.012ZM112.613 131.444C114.549 131.987 116.501 132.525 118.469 133.057L119.252 130.161C117.293 129.631 115.35 129.096 113.424 128.555L112.613 131.444ZM124.386 134.629C126.328 135.137 128.285 135.641 130.255 136.14L130.992 133.232C129.029 132.734 127.079 132.233 125.144 131.727L124.386 134.629ZM136.19 137.626C138.14 138.108 140.102 138.587 142.076 139.063L142.78 136.147C140.811 135.671 138.854 135.194 136.909 134.713L136.19 137.626ZM148.018 140.484C149.975 140.948 151.942 141.41 153.92 141.871L154.601 138.95C152.627 138.489 150.663 138.028 148.71 137.565L148.018 140.484ZM159.866 143.25C161.827 143.701 163.797 144.153 165.776 144.605L166.443 141.68C164.466 141.228 162.498 140.777 160.539 140.326L159.866 143.25ZM171.724 145.958C173.687 146.404 175.658 146.85 177.636 147.298L178.299 144.372C176.321 143.924 174.35 143.478 172.388 143.033L171.724 145.958ZM183.585 148.643C185.548 149.088 187.519 149.534 189.495 149.982L190.159 147.057C188.182 146.608 186.211 146.162 184.247 145.717L183.585 148.643ZM195.441 151.335C197.404 151.783 199.372 152.234 201.346 152.688L202.018 149.764C200.043 149.31 198.073 148.858 196.108 148.41L195.441 151.335ZM207.281 154.06C209.244 154.516 211.212 154.976 213.183 155.44L213.87 152.519C211.896 152.055 209.926 151.594 207.961 151.137L207.281 154.06ZM219.103 156.843C221.066 157.312 223.031 157.785 225 158.264L225.708 155.348C223.735 154.869 221.766 154.395 219.801 153.925L219.103 156.843ZM230.903 159.711C232.863 160.196 234.826 160.687 236.791 161.183L237.526 158.275C235.556 157.777 233.589 157.285 231.624 156.799L230.903 159.711ZM242.675 162.686C243.656 162.939 244.638 163.195 245.621 163.451L246.379 160.549C245.394 160.291 244.409 160.035 243.425 159.781L242.675 162.686ZM245.621 163.451C246.591 163.705 247.558 163.968 248.521 164.242L249.34 161.355C248.356 161.076 247.369 160.807 246.379 160.549L245.621 163.451ZM254.262 166C256.167 166.626 258.057 167.292 259.93 167.996L260.986 165.188C259.073 164.469 257.144 163.79 255.2 163.15L254.262 166ZM265.507 170.225C267.352 171.007 269.179 171.827 270.986 172.684L272.271 169.973C270.426 169.098 268.561 168.261 266.678 167.463L265.507 170.225ZM276.359 175.371C278.131 176.305 279.882 177.275 281.609 178.281L283.119 175.688C281.355 174.661 279.567 173.67 277.757 172.717L276.359 175.371ZM286.734 181.412C288.421 182.494 290.083 183.61 291.718 184.761L293.445 182.308C291.774 181.132 290.076 179.991 288.353 178.887L286.734 181.412ZM296.548 188.321C298.134 189.545 299.692 190.803 301.219 192.094L303.156 189.803C301.594 188.483 300.002 187.197 298.38 185.946L296.548 188.321ZM305.713 196.07C307.181 197.43 308.617 198.822 310.018 200.245L312.156 198.14C310.722 196.684 309.253 195.26 307.751 193.869L305.713 196.07ZM314.126 204.618C315.461 206.107 316.76 207.627 318.02 209.177L320.348 207.284C319.056 205.696 317.727 204.14 316.361 202.616L314.126 204.618ZM321.69 213.918C322.873 215.528 324.017 217.166 325.12 218.832L327.622 217.177C326.491 215.469 325.319 213.79 324.106 212.141L321.69 213.918ZM328.3 223.911C329.317 225.629 330.29 227.374 331.219 229.145L333.876 227.751C332.923 225.934 331.924 224.145 330.883 222.384L328.3 223.911ZM333.861 234.516C334.694 236.327 335.482 238.164 336.223 240.024L339.01 238.915C338.25 237.005 337.441 235.121 336.587 233.262L333.861 234.516ZM338.289 245.643C338.926 247.525 339.515 249.431 340.055 251.359L342.944 250.55C342.389 248.571 341.784 246.614 341.131 244.682L338.289 245.643ZM341.52 257.181C341.952 259.114 342.335 261.067 342.669 263.041L345.627 262.541C345.285 260.515 344.891 258.51 344.447 256.526L341.52 257.181ZM343.511 268.972C343.739 270.945 343.917 272.936 344.045 274.946L347.039 274.757C346.908 272.695 346.725 270.652 346.491 268.628L343.511 268.972ZM344.27 280.915C344.295 282.906 344.271 284.913 344.195 286.936L347.193 287.048C347.27 284.975 347.296 282.918 347.27 280.877L344.27 280.915ZM343.827 292.889C343.657 294.866 343.439 296.857 343.171 298.861L346.144 299.259C346.419 297.208 346.642 295.17 346.816 293.146L343.827 292.889ZM342.241 304.781C341.89 306.727 341.492 308.686 341.046 310.656L343.972 311.318C344.427 309.305 344.834 307.304 345.193 305.314L342.241 304.781ZM339.593 316.496C339.077 318.4 338.515 320.314 337.909 322.238L340.77 323.14C341.389 321.178 341.961 319.225 342.488 317.281L339.593 316.496ZM335.98 327.958C335.315 329.812 334.607 331.676 333.855 333.547L336.639 334.665C337.404 332.759 338.126 330.861 338.804 328.971L335.98 327.958ZM331.504 339.113C330.704 340.917 329.864 342.727 328.983 344.545L331.683 345.853C332.578 344.006 333.433 342.164 334.246 340.329L331.504 339.113ZM326.263 349.931C325.341 351.685 324.381 353.445 323.383 355.211L325.994 356.688C327.008 354.895 327.982 353.108 328.919 351.326L326.263 349.931ZM320.346 360.399C319.312 362.108 318.241 363.823 317.134 365.543L319.655 367.167C320.778 365.424 321.864 363.686 322.913 361.952L320.346 360.399ZM313.832 370.519C312.697 372.183 311.527 373.85 310.322 375.521L312.755 377.276C313.976 375.584 315.16 373.895 316.31 372.21L313.832 370.519ZM306.782 380.307C305.577 381.897 304.34 383.491 303.07 385.087L305.417 386.955C306.702 385.34 307.953 383.729 309.173 382.12L306.782 380.307ZM299.246 389.784C297.984 391.301 296.692 392.819 295.371 394.341L297.636 396.308C298.971 394.771 300.276 393.236 301.552 391.704L299.246 389.784ZM291.317 398.912C289.991 400.376 288.638 401.843 287.256 403.312L289.441 405.367C290.836 403.885 292.202 402.404 293.541 400.925L291.317 398.912ZM283.091 407.658C281.675 409.109 280.231 410.561 278.76 412.015L280.869 414.149C282.353 412.683 283.809 411.218 285.237 409.754L283.091 407.658ZM274.496 416.159C273.055 417.537 271.588 418.915 270.097 420.295L272.134 422.497C273.638 421.106 275.115 419.717 276.568 418.328L274.496 416.159ZM265.546 424.438C264.085 425.747 262.601 427.057 261.093 428.368L263.062 430.632C264.581 429.311 266.076 427.991 267.548 426.672L265.546 424.438ZM256.511 432.295C254.961 433.605 253.387 434.915 251.79 436.227L253.693 438.545C255.301 437.225 256.886 435.906 258.447 434.587L256.511 432.295ZM247.148 439.985C245.595 441.226 244.021 442.467 242.425 443.709L244.268 446.077C245.873 444.827 247.457 443.578 249.02 442.329L247.148 439.985ZM237.574 447.435C236.755 448.057 235.93 448.678 235.1 449.299L236.898 451.701C237.733 451.076 238.563 450.451 239.387 449.826L237.574 447.435Z"
          fill="#9CAFFE"
        />
      </svg>
      <div class="infoArchitectureImage">
        <img src={infoArchitecture} />
      </div>
      <div class = "secondDottedLine">
    <svg width="293" height="231" viewBox="0 0 293 231" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector 4358" d="M51.6292 78.0355L52.3767 76.7351L51.6292 78.0355ZM273.495 230.916C272.713 231.189 271.857 230.777 271.584 229.995L267.131 217.25C266.858 216.468 267.27 215.613 268.052 215.339C268.834 215.066 269.69 215.479 269.963 216.261L273.921 227.589L285.25 223.631C286.032 223.358 286.887 223.77 287.161 224.552C287.434 225.334 287.021 226.19 286.239 226.463L273.495 230.916ZM98.9744 1.27854C98.7737 2.34087 98.5722 3.39508 98.3698 4.44121L95.4244 3.8713C95.6259 2.82957 95.8267 1.77973 96.0265 0.721722L98.9744 1.27854ZM97.1449 10.6216C96.7332 12.6497 96.3182 14.646 95.8999 16.6108L92.9656 15.9862C93.3819 14.0308 93.795 12.0438 94.2048 10.0248L97.1449 10.6216ZM94.6355 22.4113C94.1822 24.4427 93.7252 26.4387 93.2649 28.3999L90.3443 27.7144C90.802 25.7641 91.2565 23.7788 91.7076 21.7578L94.6355 22.4113ZM91.7922 34.5107C91.2976 36.509 90.7994 38.4688 90.2979 40.3908L87.3951 39.6332C87.8934 37.7238 88.3884 35.7763 88.88 33.79L91.7922 34.5107ZM88.7832 46.0436C88.2044 48.1468 87.6215 50.2017 87.0348 52.2091L84.1553 51.3674C84.7375 49.3756 85.316 47.336 85.8907 45.2477L88.7832 46.0436ZM85.263 58.0899C84.6687 60.0033 84.0708 61.8701 83.4695 63.6913L80.6207 62.7508C81.2163 60.9469 81.8088 59.097 82.398 57.2L85.263 58.0899ZM81.4103 69.7153C80.7116 71.6886 80.0089 73.6031 79.3025 75.46L76.4985 74.3935C77.1963 72.5589 77.8911 70.6662 78.5823 68.714L81.4103 69.7153ZM77.0999 81.0382C76.2738 83.0525 75.4434 84.9915 74.6092 86.8574L71.8705 85.6331C72.6913 83.7968 73.5095 81.8865 74.3243 79.8998L77.0999 81.0382ZM72.0961 92.2379C71.1293 94.2172 70.1583 96.1027 69.1841 97.8974L66.5475 96.4662C67.5002 94.7111 68.4516 92.8639 69.4005 90.9212L72.0961 92.2379ZM66.2052 103.09C65.0512 104.99 63.8936 106.769 62.734 108.432L60.2734 106.715C61.3946 105.108 62.5178 103.382 63.6411 101.533L66.2052 103.09ZM59.0624 113.306C57.6671 115.014 56.2699 116.563 54.8735 117.96L52.7516 115.839C54.072 114.518 55.4022 113.044 56.7392 111.408L59.0624 113.306ZM50.107 122.156C48.3153 123.523 46.5277 124.654 44.75 125.564L43.3828 122.894C44.989 122.072 46.626 121.038 48.2874 119.771L50.107 122.156ZM38.7481 127.829C36.5579 128.364 34.4055 128.573 32.3072 128.493L32.4212 125.496C34.2391 125.565 36.1136 125.384 38.0364 124.914L38.7481 127.829ZM25.9196 127.334C23.8779 126.664 21.9269 125.727 20.081 124.575L21.6688 122.03C23.3296 123.066 25.0631 123.895 26.8556 124.484L25.9196 127.334ZM15.0283 120.675C13.5004 119.252 12.0713 117.68 10.7514 115.996L13.112 114.145C14.3436 115.716 15.6682 117.171 17.0732 118.48L15.0283 120.675ZM7.20183 110.776C6.1375 108.968 5.18233 107.085 4.34646 105.161L7.09814 103.966C7.88639 105.781 8.78631 107.554 9.78727 109.255L7.20183 110.776ZM2.19109 99.2407C1.5844 97.1907 1.11557 95.126 0.797568 93.082L3.76191 92.6208C4.05837 94.5264 4.49701 96.4608 5.06775 98.3893L2.19109 99.2407ZM0.309812 86.7573C0.324307 84.5543 0.546463 82.4139 1.00069 80.391L3.92781 81.0482C3.52638 82.836 3.32302 84.7603 3.30975 86.777L0.309812 86.7573ZM3.34934 74.2598C4.4724 72.3322 5.92751 70.6381 7.74221 69.27L9.54817 71.6656C8.07531 72.7759 6.87931 74.1604 5.94147 75.77L3.34934 74.2598ZM13.7236 66.387C15.6524 65.8617 17.784 65.5904 20.1217 65.5963L20.1142 68.5962C18.0128 68.591 16.1518 68.8349 14.5119 69.2815L13.7236 66.387ZM26.4793 66.2157C28.403 66.5657 30.4387 67.0679 32.5899 67.7325L31.7044 70.5988C29.6552 69.9657 27.7362 69.4936 25.9424 69.1673L26.4793 66.2157ZM38.3209 69.7826C40.1577 70.5235 42.0688 71.3696 44.0561 72.3265L42.7546 75.0294C40.8216 74.0987 38.9704 73.2794 37.1987 72.5649L38.3209 69.7826ZM49.5112 75.1303C50.4509 75.6423 51.406 76.1771 52.3767 76.7351L50.8816 79.336C49.9301 78.789 48.9949 78.2654 48.0758 77.7646L49.5112 75.1303ZM52.3767 76.7351C53.2294 77.2252 54.0925 77.7051 54.9655 78.1748L53.5441 80.8167C52.6468 80.3339 51.7592 79.8405 50.8816 79.336L52.3767 76.7351ZM60.3209 80.8739C62.1044 81.7159 63.9238 82.5212 65.7765 83.292L64.6241 86.0619C62.7303 85.274 60.8681 84.4497 59.0402 83.5868L60.3209 80.8739ZM71.3889 85.4869C73.2439 86.1686 75.1279 86.8197 77.0387 87.4423L76.1093 90.2947C74.165 89.6612 72.2458 88.9979 70.3541 88.3028L71.3889 85.4869ZM82.7979 89.2114C84.708 89.7643 86.6413 90.2918 88.5957 90.7957L87.8467 93.7007C85.8653 93.1898 83.9036 92.6546 81.9638 92.0931L82.7979 89.2114ZM94.4483 92.2219C96.3955 92.6702 98.3609 93.0976 100.343 93.5058L99.7372 96.4441C97.7342 96.0315 95.7463 95.5992 93.7753 95.1455L94.4483 92.2219ZM106.256 94.6603C108.228 95.0249 110.214 95.3727 112.211 95.7052L111.718 98.6645C109.704 98.3292 107.701 97.9784 105.711 97.6103L106.256 94.6603ZM118.167 96.6479C120.155 96.9471 122.152 97.233 124.158 97.5071L123.752 100.479C121.734 100.204 119.723 99.9159 117.72 99.6145L118.167 96.6479ZM130.145 98.2889C132.143 98.5385 134.148 98.778 136.157 99.0089L135.814 101.989C133.796 101.757 131.782 101.517 129.773 101.266L130.145 98.2889ZM142.167 99.6742C144.172 99.8883 146.18 100.095 148.189 100.297L147.89 103.282C145.875 103.08 143.861 102.872 141.848 102.657L142.167 99.6742ZM154.218 100.886C156.228 101.078 158.237 101.265 160.244 101.45L159.968 104.438C157.959 104.252 155.947 104.064 153.933 103.872L154.218 100.886ZM166.288 102.001C168.302 102.183 170.307 102.364 172.312 102.545L172.041 105.533C170.041 105.352 168.03 105.171 166.018 104.989L166.288 102.001ZM178.37 103.097C180.386 103.282 182.394 103.47 184.392 103.66L184.107 106.647C182.113 106.457 180.108 106.27 178.095 106.084L178.37 103.097ZM190.457 104.254C192.476 104.457 194.484 104.665 196.479 104.881L196.157 107.863C194.17 107.649 192.169 107.441 190.156 107.239L190.457 104.254ZM202.537 105.562C204.562 105.799 206.571 106.046 208.561 106.304L208.176 109.279C206.199 109.023 204.202 108.778 202.188 108.541L202.537 105.562ZM214.597 107.128C216.627 107.421 218.637 107.727 220.622 108.05L220.141 111.011C218.175 110.692 216.183 110.388 214.168 110.097L214.597 107.128ZM226.603 109.085C228.639 109.46 230.647 109.856 232.622 110.274L232.002 113.209C230.054 112.797 228.072 112.406 226.059 112.035L226.603 109.085ZM238.541 111.618C240.562 112.11 242.544 112.631 244.485 113.182L243.666 116.068C241.763 115.528 239.817 115.017 237.831 114.532L238.541 111.618ZM250.351 114.988C252.312 115.642 254.223 116.334 256.08 117.068L254.978 119.858C253.175 119.146 251.315 118.472 249.402 117.834L250.351 114.988ZM261.766 119.528C263.664 120.428 265.495 121.382 267.252 122.396L265.753 124.995C264.071 124.024 262.312 123.107 260.481 122.239L261.766 119.528ZM272.457 125.732C274.164 126.949 275.782 128.239 277.303 129.608L275.296 131.838C273.864 130.549 272.336 129.33 270.716 128.174L272.457 125.732ZM281.682 134.089C283.037 135.673 284.281 137.346 285.405 139.113L282.874 140.723C281.827 139.078 280.668 137.519 279.403 136.039L281.682 134.089ZM288.374 144.609C289.218 146.479 289.945 148.437 290.551 150.487L287.674 151.337C287.106 149.416 286.426 147.586 285.639 145.843L288.374 144.609ZM291.946 156.589C292.271 158.548 292.498 160.58 292.625 162.689L289.63 162.868C289.51 160.859 289.294 158.932 288.986 157.081L291.946 156.589ZM292.709 168.905C292.648 170.897 292.507 172.951 292.282 175.07L289.299 174.753C289.516 172.706 289.652 170.727 289.71 168.814L292.709 168.905ZM291.445 181.102C291.108 183.086 290.704 185.123 290.231 187.214L287.305 186.552C287.766 184.511 288.16 182.528 288.488 180.599L291.445 181.102ZM288.769 193.05C288.239 194.986 287.654 196.966 287.013 198.99L284.153 198.084C284.783 196.096 285.356 194.154 285.875 192.258L288.769 193.05ZM285.087 204.728C284.427 206.593 283.722 208.494 282.972 210.431L280.174 209.347C280.915 207.436 281.609 205.563 282.259 203.727L285.087 204.728ZM280.646 216.203C279.899 217.988 279.116 219.802 278.296 221.646L275.555 220.427C276.366 218.603 277.14 216.809 277.878 215.046L280.646 216.203ZM275.723 227.27C275.275 228.223 274.818 229.183 274.351 230.151L271.649 228.849C272.111 227.889 272.564 226.938 273.008 225.994L275.723 227.27Z" fill="#9CAFFE"/>
        </svg>
  </div>
    <img class = "LoFiWireframeLabelAndPen" src = {loFiWireframeLabelAndPen}/>
    <div class = "LoFiWireframesBox">
    <img src = {loFiWireframes}/>
    </div>
    </>
  );
}

export default ProjectPage;
//                 style="color: var(--black); font-weight: 500"
