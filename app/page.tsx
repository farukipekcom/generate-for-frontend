import Card from "./components/card";
export default function Home() {
  return (
    <main className=" pl-5 pr-5 ">
      <div className="flex gap-x-2">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_300_709)">
            <path
              d="M8.37207 13.8869C8.37207 16.9328 10.8413 19.4021 13.8872 19.4021C16.9331 19.4021 19.4024 16.9328 19.4024 13.8869C19.4024 10.841 16.9331 8.37177 13.8872 8.37177C10.8413 8.37177 8.37207 10.841 8.37207 13.8869Z"
              className="fill-primary dark:fill-green"
            />
            <path
              d="M8.37207 13.8869C8.37207 16.9328 10.8413 19.4021 13.8872 19.4021C16.9331 19.4021 19.4024 16.9328 19.4024 13.8869C19.4024 10.841 16.9331 8.37177 13.8872 8.37177C10.8413 8.37177 8.37207 10.841 8.37207 13.8869Z"
              className="fill-primary dark:fill-green"
            />
            <path
              d="M4.58203 13.8869C4.58203 8.73942 8.76789 4.58185 13.8871 4.58185C19.0346 4.58185 23.1921 8.76771 23.1921 13.8869C23.1921 19.0344 19.0063 23.192 13.8871 23.192C8.76789 23.2202 4.58203 19.0344 4.58203 13.8869ZM22.4285 13.8869C22.4285 9.19195 18.6103 5.37377 13.9154 5.37377C9.22041 5.37377 5.40223 9.19195 5.40223 13.8869C5.40223 18.5818 9.22041 22.4 13.9154 22.4C18.582 22.4283 22.4285 18.6101 22.4285 13.8869Z"
              className="fill-primary dark:fill-green"
            />
            <path
              d="M4.58203 13.8869C4.58203 8.73942 8.76789 4.58185 13.8871 4.58185C19.0346 4.58185 23.1921 8.76771 23.1921 13.8869C23.1921 19.0344 19.0063 23.192 13.8871 23.192C8.76789 23.2202 4.58203 19.0344 4.58203 13.8869ZM22.4285 13.8869C22.4285 9.19195 18.6103 5.37377 13.9154 5.37377C9.22041 5.37377 5.40223 9.19195 5.40223 13.8869C5.40223 18.5818 9.22041 22.4 13.9154 22.4C18.582 22.4283 22.4285 18.6101 22.4285 13.8869Z"
              className="fill-primary dark:fill-green"
            />
            <path
              d="M0 13.8869C3.34869e-07 6.22222 6.22222 -3.35033e-07 13.8869 0C21.5515 3.35033e-07 27.7737 6.22222 27.7737 13.8869C27.7737 21.5515 21.5515 27.7737 13.8869 27.7737C6.2505 27.7737 -3.35152e-07 21.5515 0 13.8869ZM26.9818 13.8869C26.9818 6.67475 21.099 0.791917 13.8869 0.791917C6.67475 0.791914 0.791916 6.67475 0.791916 13.8869C0.791916 21.099 6.67475 26.9818 13.8869 26.9818C21.099 26.9818 26.9818 21.1273 26.9818 13.8869Z"
              className="fill-primary dark:fill-green"
            />
            <path
              d="M0 13.8869C3.34869e-07 6.22222 6.22222 -3.35033e-07 13.8869 0C21.5515 3.35033e-07 27.7737 6.22222 27.7737 13.8869C27.7737 21.5515 21.5515 27.7737 13.8869 27.7737C6.2505 27.7737 -3.35152e-07 21.5515 0 13.8869ZM26.9818 13.8869C26.9818 6.67475 21.099 0.791917 13.8869 0.791917C6.67475 0.791914 0.791916 6.67475 0.791916 13.8869C0.791916 21.099 6.67475 26.9818 13.8869 26.9818C21.099 26.9818 26.9818 21.1273 26.9818 13.8869Z"
              className="fill-primary dark:fill-green"
            />
          </g>
          <defs>
            <clipPath id="clip0_300_709">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h1 className="relative text-2xl font-semibold tracking-tight text-primary dark:text-white">
          Generate for Frontend
          <svg
            width="126"
            height="112"
            viewBox="0 0 126 112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-[-130px] top-[12px]"
          >
            <g clip-path="url(#clip0_300_754)">
              <path
                d="M0.889501 4.22563C30.8148 2.00515 62.5405 4.91492 85.157 27.5448C97.2333 39.6282 101.593 59.6077 82.8965 67.3063C70.163 72.5495 47.4456 73.7116 40.0373 59.1461C31.8564 43.0618 70.2196 57.3047 74.0478 59.6003C91.9664 70.3446 103.534 83.8844 114.796 101.183C119.015 107.663 119.414 103.094 118.377 98.031C117.478 93.6377 116.34 88.6646 114.327 84.6697C113.714 83.4513 116.015 91.9543 116.442 93.2775C118.273 98.9519 120.167 105.576 112.405 106.427C111.158 106.564 99.4515 106.815 98.9762 105.071C98.7289 104.164 105.789 99.6852 106.621 98.8484C112.025 93.413 113.601 88.9872 112.453 81.5411"
                stroke="#539BAB"
                stroke-width="2"
                stroke-linecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_300_754">
                <rect
                  width="108.344"
                  height="122.868"
                  fill="white"
                  transform="translate(122.828) rotate(88.5514)"
                />
              </clipPath>
            </defs>
          </svg>
        </h1>
      </div>
      <h2 className="mt-20 w-[750px] text-[56px] font-semibold leading-[84px] text-primary dark:text-white">
        Efficient Code Generator Tool for Developers. Boost Your{" "}
        <span className="relative inline-block">
          Productivity
          <svg
            width="348"
            height="24"
            viewBox="0 0 348 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-[-16px] right-[-12px]"
          >
            <g clip-path="url(#clip0_300_706)">
              <path
                d="M2.38379 22.7391C7.74513 18.6212 22.3318 3.15474 31.411 13.8771C32.3623 15.0005 34.7356 21.0983 37.5961 21.2495C40.1501 21.3844 45.2648 7.78201 52.7809 5.98981C64.2086 3.26488 67.8657 10.151 71.7452 13.0396C83.5772 21.8494 79.3352 15.9415 85.4733 9.90254C91.3819 4.0895 98.9013 12.3267 102.229 14.4125C109.77 19.1395 110.686 9.45775 117.184 6.60421C123.545 3.81116 129.65 5.2678 133.383 8.11779C141.309 14.1687 142.813 15.1943 148.437 7.79515C155.467 -1.45377 162.1 10.2381 167.606 13.4171C175.728 18.1065 176.236 1.87789 185.458 2.98317C188.281 3.32163 201.524 17.5554 205.485 13.9697C213.429 6.77907 211.618 9.75336 220.122 16.1423C230.159 23.6832 235.666 6.9014 241 5.39262C246.363 3.87582 249.831 19.0214 260.423 8.66009C272.649 -3.29835 269.493 3.08672 281.883 10.2046C292.475 16.2905 293.236 -5.82656 304.374 3.19256C316.716 13.1865 321.569 9.78693 343.889 11.4333"
                stroke="#539BAB"
                stroke-width="2"
                stroke-linecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_300_706">
                <rect width="348" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        !
      </h2>
      <p className="mt-16 w-[750px] text-lg font-normal text-primary dark:text-white">
        Revolutionize coding: our tool empowers developers with efficient code
        generation. Elevate productivity and streamline your development process
        effortlessly.
      </p>
      <div className="pages mt-12 flex gap-x-6">
        <Card
          title="Meta Tag Generator"
          description="Produce the most beneficial meta tags for your webpage to enhance SEO and enrich the experience for search engine users."
          link="/meta-tags"
          id="01"
        />
        <Card
          title="Meta Tag Generator"
          description="Produce the most beneficial meta tags for your webpage to enhance SEO and enrich the experience for search engine users."
          link="/meta-tags"
          id="02"
        />
        <Card
          title="Meta Tag Generator"
          description="Produce the most beneficial meta tags for your webpage to enhance SEO and enrich the experience for search engine users."
          link="/meta-tags"
          id="03"
        />
      </div>
      {/*  */}
    </main>
  );
}
