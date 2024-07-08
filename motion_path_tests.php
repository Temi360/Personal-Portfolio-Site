<?php
?>
<html>
  <head>
    <title>Motion Path Tests</title>
    <link rel="stylesheet" href="motion_path_tests.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js"></script>
    <!-- MotionPathPlugin -->
    <script src="JS/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Draggable.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/MotionPathPlugin.min.js"></script>
    <script src="JS/motion_path_test.js"></script>
  </head>
  <body>
    <div id = "container">
      <svg
      
        width="200"
        height="200"
        viewBox="0 0 150 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
          <path
            id="path"
            d="M59.6715 41.4185C69 46.5 93.5 46.5 106 41.4185"
            stroke="black"
          />
            <g class = "handOnMouse" id="handOnMouse">
              <g id="mouse">
                <g id="Vector 215">
                  <path
                    d="M60.1285 33.9181C60.1212 34.222 59.0931 35.3939 55.9772 33.5657C53.8742 32.3317 53.538 31.1806 54.0098 30.6242C54.2856 30.2989 54.8377 30.1768 55.4743 30.3603C60.0789 31.5648 60.3395 33.1627 60.1285 33.9181Z"
                    fill="#F5F5F5"
                  />
                  <path
                    d="M54.0098 30.6242C54.2856 30.2989 54.8377 30.1768 55.4743 30.3603C60.0789 31.5648 60.3395 33.1627 60.1285 33.9181C60.1212 34.222 59.0931 35.3939 55.9772 33.5657C53.8742 32.3317 53.538 31.1806 54.0098 30.6242ZM54.0098 30.6242C53.4191 30.1591 51.9355 29.3218 50.7263 29.6932"
                    stroke="#F5F5F5"
                    stroke-width="0.5"
                  />
                </g>
                <g id="Vector">
                  <path
                    d="M56.8789 32.7148C58.7644 33.5051 59.6092 33.8281 56.9822 32.3407C55.0484 31.2459 54.8295 31.8559 56.8789 32.7148Z"
                    fill="#F14D08"
                  />
                  <path
                    d="M58.1914 38.0681C49.6733 39.4234 40.6814 34.4658 35.9888 30.8921C34.8793 30.0472 33.8482 28.9196 33.781 27.5267C33.5348 22.4237 46.0185 26.3025 49.8835 26.3945C54.1739 26.4966 70.2572 36.1484 58.1914 38.0681Z"
                    fill="#F14D08"
                  />
                  <path
                    d="M34.5764 25.6968C28.9472 31.3898 41.7032 37.1372 49.836 39.3974C50.6017 39.6101 51.3896 39.7089 52.1843 39.7005C56.3707 39.6565 63.0342 39.1771 62.5336 36.5247C61.9619 33.4957 60.3108 32.1441 60.1833 31.8618M56.8789 32.7148C58.7644 33.5051 59.6092 33.8281 56.9822 32.3407C55.0484 31.2459 54.8295 31.8559 56.8789 32.7148ZM35.9888 30.8921C40.6814 34.4658 49.6733 39.4234 58.1914 38.0681C70.2572 36.1484 54.1739 26.4966 49.8835 26.3945C46.0185 26.3025 33.5348 22.4237 33.781 27.5267C33.8482 28.9196 34.8793 30.0472 35.9888 30.8921Z"
                    stroke="#020001"
                    stroke-width="2"
                  />
                </g>
              </g>
              <g id="hand">
                <path
                  d="M48.7641 26.4599L53.0878 25.6432C57.4423 24.8208 58.3924 19.0078 54.5265 16.8417C26.213 0.719845 10.9575 10.6289 4.30176 22.0903C3.32894 23.7655 2.61518 25.9246 3.88151 27.3906C4.60738 28.2309 5.65809 28.8123 6.68656 29.1899C8.09861 29.7082 9.58458 30.038 10.9588 30.6497L17.8599 33.7212C21.227 35.2199 25.0279 35.4264 28.5376 34.3015L37.4871 31.4331L41.193 31.1752C44.3424 30.956 47.1784 29.1898 48.7641 26.4599Z"
                  fill="#C28F73"
                />
                <path
                  d="M48.7641 26.4599L53.0878 25.6432C57.4423 24.8208 58.3924 19.0078 54.5265 16.8417V16.8417C26.213 0.719845 10.9575 10.6289 4.30176 22.0903C3.32894 23.7655 2.61518 25.9246 3.88151 27.3906C4.60738 28.2309 5.65809 28.8123 6.68656 29.1899C8.09861 29.7082 9.58458 30.038 10.9588 30.6497L17.8599 33.7212C21.227 35.2199 25.0279 35.4264 28.5376 34.3015L37.4871 31.4331M48.7641 26.4599L40.1137 21.3204M48.7641 26.4599V26.4599C47.1784 29.1898 44.3424 30.956 41.193 31.1752L37.4871 31.4331M37.4871 31.4331L29.6376 25.8075"
                  stroke="#9A6053"
                  stroke-width="3"
                />
              </g>
            </g>
      </svg>
    </div>
  </body>
</html>
