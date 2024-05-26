"use client";

interface BolidSpecsProps {
  animate: string;
  acceleration: string;
  power: string;
  mass: string;
}
const BolidSpecs: React.FC<BolidSpecsProps> = ({
  animate,
  acceleration,
  power,
  mass,
}) => {
  return (
    <div className="">
      <div
        className={`${animate} relative w-[100vw] flex items-center justify-center bg-neutral-700 transition duration-200 ease-out px-8`}
      >
        <div className="absolute hidden md:block bg-neutral-800 z-0 w-64 h-46 inset-0"></div>
        <div className="bg-neutral-800 z-10 hidden md:flex justify-between items-center pr-8">
          <h1
            className={`text-white py-12 text-right font-akiraExpanded text-3xl font-extrabold leading-tight`}
          >
            Specyfikacja <br /> Bolidu
          </h1>
          <svg
            className="w-16 h-8 lg:w-36 lg:h-36"
            viewBox="0 0 89 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.2096 2.07734C24.715 0.612594 27.1229 0.645578 28.5876 2.15101L44.8595 18.8749L28.5876 35.5988C27.1229 37.1043 24.715 37.1373 23.2096 35.6725C21.7042 34.2078 21.6712 31.7999 23.1359 30.2945L34.2469 18.8749L23.1359 7.45534C21.6712 5.9499 21.7042 3.54209 23.2096 2.07734Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M45.2682 2.07734C46.7736 0.612594 49.1814 0.645578 50.6462 2.15101L66.9181 18.8749L50.6462 35.5988C49.1814 37.1043 46.7736 37.1373 45.2682 35.6725C43.7628 34.2078 43.7298 31.7999 45.1945 30.2945L56.3055 18.8749L45.1945 7.45534C43.7298 5.9499 43.7628 3.54209 45.2682 2.07734Z"
              stroke="white"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="mx-8 my-4 flex gap-8 md:gap-20 justify-between md:pl-12">
          <div className="flex justify-center items-center gap-4">
            <svg
              className="w-10 h-10 md:w-20 md:h-20"
              viewBox="0 0 74 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37 0C16.5977 0 0 16.3727 0 36.4943C0 56.6159 16.5977 73 37 73C57.4023 73 74 56.6273 74 36.5038C74 16.3803 57.4023 0 37 0ZM37 69.9642C18.2823 69.9642 3.05596 54.9496 3.05596 36.4943C3.05596 18.0391 18.2823 3.02638 37 3.02638C55.7177 3.02638 70.944 18.041 70.944 36.4943C70.944 54.9477 55.7177 69.9642 37 69.9642ZM61.3674 50.3684C61.1643 50.7139 60.8312 50.9657 60.4412 51.0689C60.0511 51.172 59.6356 51.1181 59.2856 50.9188L55.4656 48.7417C55.1143 48.541 54.8579 48.2104 54.7528 47.8225C54.6476 47.4346 54.7024 47.0213 54.905 46.6734C55.1077 46.3255 55.4415 46.0715 55.8332 45.9674C56.2249 45.8633 56.6423 45.9175 56.9936 46.1182L59.4594 47.5198C60.9501 44.5524 61.8212 41.3178 62.0206 38.0094H59.1901C58.7848 38.0094 58.3962 37.85 58.1096 37.5662C57.8231 37.2824 57.6621 36.8975 57.6621 36.4962C57.6621 36.0949 57.8231 35.71 58.1096 35.4262C58.3962 35.1425 58.7848 34.983 59.1901 34.983H62.0206C61.8183 31.6692 60.9371 28.4309 59.4307 25.4651L56.9726 26.8648C56.7406 26.9982 56.4769 27.0681 56.2086 27.0672C55.8715 27.068 55.5436 26.9585 55.2759 26.7556C55.0083 26.5527 54.8159 26.2678 54.7287 25.9453C54.6415 25.6229 54.6644 25.2809 54.7939 24.9727C54.9234 24.6645 55.1522 24.4073 55.4446 24.2413L57.8894 22.851C56.0259 20.0859 53.6232 17.7174 50.8225 15.8847L49.4148 18.302C49.2034 18.6314 48.8716 18.8671 48.4889 18.96C48.1061 19.0528 47.7019 18.9956 47.3607 18.8003C47.0195 18.605 46.7677 18.2867 46.6579 17.9118C46.5481 17.537 46.5887 17.1347 46.7714 16.7888L48.1829 14.3772C45.1715 12.889 41.8874 12.0191 38.528 11.8199V14.6117C38.528 15.0131 38.367 15.3979 38.0804 15.6817C37.7939 15.9655 37.4052 16.1249 37 16.1249C36.5948 16.1249 36.2061 15.9655 35.9196 15.6817C35.633 15.3979 35.472 15.0131 35.472 14.6117V11.8199C32.1122 12.0177 28.8274 12.8863 25.8152 14.3734L27.2267 16.7888C27.34 16.961 27.4168 17.1542 27.4523 17.3567C27.4878 17.5592 27.4812 17.7667 27.4331 17.9666C27.3849 18.1665 27.2961 18.3546 27.1721 18.5195C27.0481 18.6843 26.8915 18.8223 26.7119 18.9253C26.5322 19.0282 26.3333 19.0938 26.1272 19.118C25.9212 19.1423 25.7122 19.1247 25.5132 19.0664C25.3142 19.0081 25.1293 18.9102 24.9698 18.7788C24.8102 18.6474 24.6793 18.4852 24.5852 18.302L23.1699 15.8847C20.3696 17.7172 17.967 20.085 16.103 22.8491L18.5478 24.2413C18.7217 24.3406 18.8742 24.473 18.9965 24.6307C19.1188 24.7884 19.2085 24.9684 19.2606 25.1605C19.3126 25.3525 19.326 25.5529 19.2999 25.75C19.2737 25.9472 19.2087 26.1374 19.1083 26.3096C19.008 26.4819 18.8744 26.6329 18.7151 26.754C18.5559 26.8751 18.3741 26.964 18.1801 27.0156C17.9862 27.0671 17.7839 27.0803 17.5848 27.0545C17.3857 27.0286 17.1937 26.9641 17.0198 26.8648L14.5597 25.4651C13.0569 28.431 12.179 31.6686 11.9794 34.9811H14.8176C15.2228 34.9811 15.6115 35.1406 15.898 35.4243C16.1846 35.7081 16.3456 36.093 16.3456 36.4943C16.3456 36.8956 16.1846 37.2805 15.898 37.5643C15.6115 37.8481 15.2228 38.0075 14.8176 38.0075H11.9794C12.1847 41.3207 13.0636 44.5588 14.5635 47.5274L17.0274 46.1258C17.2014 46.0264 17.3934 45.962 17.5925 45.9361C17.7916 45.9102 17.9938 45.9234 18.1878 45.975C18.3817 46.0265 18.5635 46.1154 18.7228 46.2365C18.882 46.3577 19.0156 46.5087 19.116 46.6809C19.2163 46.8532 19.2814 47.0433 19.3075 47.2405C19.3336 47.4377 19.3203 47.638 19.2682 47.8301C19.2162 48.0221 19.1264 48.2022 19.0041 48.3599C18.8818 48.5176 18.7293 48.6499 18.5554 48.7493L14.7354 50.9264C14.3856 51.125 13.9706 51.1787 13.581 51.0755C13.1913 50.9724 12.8587 50.721 12.6555 50.3759C10.2021 46.183 8.90396 41.4254 8.89093 36.5794C8.89093 36.553 8.89093 36.5284 8.89093 36.5019C8.89093 36.4754 8.89093 36.4565 8.89093 36.4338C8.88746 31.6391 10.1497 26.9267 12.5523 22.764C12.5739 22.7154 12.5981 22.6681 12.6249 22.6222C12.6553 22.5702 12.6891 22.5203 12.7262 22.4727C15.1719 18.3756 18.6314 14.9632 22.7783 12.5576C22.8241 12.5232 22.872 12.4917 22.9216 12.463C22.9711 12.4351 23.0222 12.4099 23.0744 12.3873C27.2946 10.0067 32.0667 8.75207 36.9236 8.74623H37.0611C41.918 8.75207 46.6901 10.0067 50.9103 12.3873C50.9626 12.4099 51.0136 12.4351 51.0631 12.463C51.1128 12.4917 51.1606 12.5232 51.2064 12.5576C55.3538 14.9626 58.8135 18.3752 61.2586 22.4727C61.2956 22.5203 61.3294 22.5702 61.3598 22.6222C61.3865 22.6695 61.4114 22.7167 61.4324 22.764C63.8445 26.9216 65.1172 31.6313 65.1244 36.4262C65.1244 36.4489 65.1244 36.4716 65.1244 36.4962C65.1244 36.5208 65.1244 36.5454 65.1244 36.5719C65.1112 41.4164 63.8137 46.1726 61.3617 50.3646L61.3674 50.3684ZM42.9687 36.4905C42.9643 35.585 42.7498 34.6926 42.3418 33.8822C41.9338 33.0718 41.3431 32.3651 40.6155 31.8167C39.8878 31.2683 39.0427 30.8929 38.1452 30.7194C37.2478 30.5459 36.322 30.579 35.4396 30.8161L30.1757 21.824C30.0801 21.6431 29.9487 21.4833 29.7892 21.3541C29.6296 21.2249 29.4454 21.129 29.2475 21.0721C29.0496 21.0152 28.8421 20.9986 28.6375 21.0232C28.4329 21.0478 28.2355 21.1132 28.0571 21.2153C27.8787 21.3174 27.723 21.4542 27.5993 21.6175C27.4757 21.7808 27.3867 21.9671 27.3376 22.1654C27.2886 22.3636 27.2806 22.5696 27.314 22.771C27.3475 22.9723 27.4217 23.1649 27.5323 23.3371L32.7981 32.3274C31.9631 33.1493 31.3936 34.1985 31.1621 35.3417C30.9306 36.4848 31.0474 37.6703 31.4978 38.7476C31.9481 39.8248 32.7116 40.7452 33.6913 41.3917C34.671 42.0383 35.8227 42.3818 37 42.3787C37.5257 42.3783 38.049 42.3096 38.5566 42.1745L39.5651 43.8995C39.7765 44.2289 40.1083 44.4646 40.4911 44.5574C40.8738 44.6503 41.278 44.5931 41.6192 44.3978C41.9604 44.2025 42.2122 43.8841 42.3221 43.5093C42.4319 43.1345 42.3912 42.7321 42.2085 42.3863L41.2019 40.6632C41.7597 40.1174 42.2029 39.4677 42.5062 38.7516C42.8094 38.0355 42.9666 37.2671 42.9687 36.4905ZM34.1007 36.4905C34.1025 35.9886 34.2374 35.4959 34.4917 35.0617C34.7461 34.6276 35.1112 34.2671 35.5503 34.0165C36.1011 33.7043 36.7405 33.5808 37.3694 33.665C37.9983 33.7493 38.5816 34.0366 39.0288 34.4825C39.4761 34.9283 39.7624 35.5078 39.8433 36.1312C39.9242 36.7545 39.7953 37.3869 39.4765 37.9303C39.1577 38.4737 38.6667 38.8978 38.0798 39.1369C37.4929 39.3759 36.8428 39.4166 36.2301 39.2526C35.6175 39.0886 35.0766 38.729 34.6913 38.2297C34.3059 37.7303 34.0977 37.119 34.0988 36.4905H34.1007ZM45.868 52.4736H28.132C27.7268 52.4736 27.3381 52.633 27.0516 52.9168C26.765 53.2006 26.604 53.5855 26.604 53.9868V62.7311C26.604 63.1325 26.765 63.5173 27.0516 63.8011C27.3381 64.0849 27.7268 64.2443 28.132 64.2443H45.868C46.2733 64.2443 46.6619 64.0849 46.9484 63.8011C47.235 63.5173 47.396 63.1325 47.396 62.7311V53.9868C47.396 53.5855 47.235 53.2006 46.9484 52.9168C46.6619 52.633 46.2733 52.4736 45.868 52.4736ZM44.34 61.2179H29.66V55.5H44.34V61.2179Z"
                fill="white"
              />
            </svg>
            <div className="flex flex-col justify-center max-w-52">
              <h1
                className={`text-white font-akiraExpanded text-md md:text-3xl font-extrabold leading-tight`}
              >
                {acceleration}
              </h1>
              <h2
                className={`hidden md:block text-customRed font-akiraExpanded text-2xl font-extrabold leading-tight`}
              >
                PRZYŚPIESZENIE 0-100 KM/H
              </h2>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <svg
              className="w-14 h-14 md:w-24 md:h-20"
              viewBox="0 0 88 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M86.5764 20.0354L86.4302 19.8893L67.8572 1.31619C66.2484 -0.438731 63.4698 -0.438731 61.7149 1.31619L59.6674 3.36366C59.3749 3.65621 59.2287 3.94858 59.2287 4.38731C59.2287 4.82604 59.3749 5.11859 59.6674 5.41096L60.6911 6.43461L58.7866 8.33915L57.7662 7.31207C57.1812 6.72716 56.3038 6.72716 55.7187 7.31207C55.1336 7.89699 55.1338 8.77445 55.7187 9.35954L56.7391 10.3866L54.549 12.577L52.5016 10.5295C52.209 10.237 51.9166 10.0908 51.4779 10.0908C51.1854 10.0908 50.7466 10.237 50.6004 10.5295L25.739 35.391C25.154 35.976 25.154 36.8534 25.739 37.4385L27.2013 38.9009C29.2488 40.9484 32.4661 40.9484 34.5136 38.9009L37.5847 35.8298C38.7545 35.9215 39.8954 36.1539 40.9907 36.5093L17.8418 59.5213C15.6481 58.79 13.6007 58.79 11.6996 59.3751L8.62844 56.4501C8.04352 55.8652 7.16606 55.8652 6.58097 56.4501L0.438731 62.5924C0.146187 62.8849 0 63.1773 0 63.616C0 64.0548 0.146187 64.3473 0.292545 64.4935L3.36366 67.5646C1.75492 72.2445 3.07112 77.5092 6.58097 81.0191C10.237 84.6751 15.5018 85.8451 20.1816 84.2364L23.2528 87.1613C23.5453 87.4539 23.984 87.6001 24.2764 87.6001C24.5688 87.6001 25.0077 87.4539 25.3001 87.1613L31.4423 81.1653C31.7348 80.8727 31.881 80.5804 31.881 80.1416C31.881 79.7029 31.7348 79.4104 31.4423 79.118L28.3712 76.0469C29.1024 73.9994 28.9561 72.0983 28.225 69.9046L51.2786 46.7137C51.6741 47.8646 51.9436 49.0681 52.0627 50.3079L48.9915 53.379C46.9441 55.4265 46.9441 58.6438 48.9915 60.6913L50.4539 62.1536C50.7465 62.4462 51.0388 62.5924 51.4776 62.5924C51.9163 62.5924 52.355 62.4462 52.355 62.1536L77.2169 37.2922C77.8018 36.7072 77.8018 35.8298 77.2169 35.2447L75.1694 33.1972L77.2935 31.0731L78.3867 32.1736C78.6793 32.4661 78.9716 32.6123 79.4104 32.6123C79.8491 32.6123 80.1416 32.4661 80.434 32.1736C81.0189 31.5886 81.0189 30.7112 80.434 30.1261L79.3408 29.0257L81.3115 27.055L82.3351 28.0786C82.92 28.6635 83.7975 28.6635 84.3826 28.0786L86.4301 26.0312L86.5762 25.885C87.8926 24.2764 87.8926 21.644 86.5764 20.0354ZM25.5928 68.5883C25.154 69.027 25.0079 69.6119 25.3002 70.197C26.3239 72.9756 26.0315 74.5843 25.4464 75.9005C25.1539 76.4854 25.3002 77.0705 25.739 77.5092L28.3713 80.1416L24.2766 84.0902L21.498 81.604C21.2055 81.3115 20.7667 81.1653 20.4744 81.1653C20.3282 81.1653 20.1818 81.1653 20.0356 81.3115C16.087 82.9202 11.6997 82.0427 8.7748 79.1178C5.84986 76.1929 4.9724 71.6594 6.58114 67.857C6.87368 67.2721 6.72733 66.687 6.2886 66.2482L3.65621 63.616L7.75098 59.5213L10.3834 62.1536C10.8221 62.5924 11.407 62.7386 11.9921 62.4462C13.3083 61.8613 14.917 61.4225 17.6956 62.5924C18.2805 62.8849 18.8656 62.7386 19.3043 62.2998L43.9304 37.8195C46.4915 39.2906 48.6433 41.4735 50.1002 44.081L25.5928 68.5883ZM51.4779 59.0825L51.0392 58.6438C50.1617 57.7663 50.1617 56.304 51.0392 55.4265L54.549 51.9166C54.8416 51.6241 54.9878 51.1854 54.9878 50.7466C54.8393 48.3352 54.2102 46.0183 53.2022 43.8952C53.1771 43.7909 53.1393 43.6858 53.0867 43.5806C52.2154 41.8382 51.0652 40.2209 49.7115 38.7945C49.6104 38.687 49.5081 38.5806 49.4047 38.4754C49.3761 38.4464 49.348 38.4167 49.3192 38.388C47.7926 36.8536 46.0227 35.5694 44.0894 34.6152C44.0832 34.6119 44.0771 34.6089 44.0709 34.6058C41.8839 33.5294 39.4886 32.8752 37 32.7585C36.7074 32.7585 36.2687 32.9047 35.9763 33.1972L32.4665 36.7071C31.589 37.5845 30.1266 37.5845 29.2491 36.7071L28.8104 36.2683L51.4779 13.6007L53.5252 15.648L53.5254 15.6481L72.2445 34.221L74.2919 36.2685L51.4779 59.0825ZM73.1951 31.2231L56.5965 14.6245L58.7802 12.4408L75.3255 29.0929L73.1951 31.2231ZM60.8277 10.3931L62.8849 8.33589L79.4835 24.9345L77.3728 27.0452L60.8277 10.3931ZM84.5289 23.984L83.6515 24.8615L82.6278 23.8378C82.4866 23.6966 82.3281 23.5902 82.161 23.5172L63.9086 5.26477L63.9084 5.2646L62.8848 4.24095L63.9084 3.21731C64.4933 2.63239 65.3708 2.63239 65.9559 3.21731L84.5288 21.7902C84.9677 22.3753 84.9677 23.3989 84.5289 23.984Z"
                fill="white"
              />
              <path
                d="M42.2645 43.5808L28.3713 57.474C27.7864 58.0589 27.7864 58.9364 28.3713 59.5215C28.6639 59.814 28.9562 59.9602 29.395 59.9602C29.6875 59.9602 30.1262 59.814 30.4186 59.5215L44.3118 45.6282C44.8967 45.0433 44.8967 44.1659 44.3118 43.5808C43.7269 42.9959 42.8494 42.9959 42.2645 43.5808Z"
                fill="white"
              />
              <path
                d="M10.8226 66.833C9.36018 68.1491 8.62891 70.0503 8.62891 71.9515C8.62891 73.8528 9.50637 75.7539 10.8226 77.0701C12.1388 78.5325 14.0399 79.2638 15.9412 79.2638C17.8423 79.2638 19.7435 78.3863 21.2059 77.0701C22.6683 75.7539 23.3996 73.8528 23.3996 71.9515C23.3996 70.0503 22.5221 68.1491 21.2059 66.833C18.281 64.0544 13.6013 64.0544 10.8226 66.833ZM19.0123 75.0227C17.4035 76.6314 14.4788 76.6314 12.87 75.0227C11.9926 74.2914 11.5538 73.1216 11.5538 71.9515C11.5538 70.7815 11.9926 69.7579 12.87 68.8804C13.7475 68.003 14.7711 67.5642 15.9412 67.5642C17.1112 67.5642 18.1348 67.8568 19.0123 68.8804C19.8897 69.6117 20.3285 70.7815 20.3285 71.9515C20.3285 73.1216 19.8897 74.1452 19.0123 75.0227Z"
                fill="white"
              />
              <path
                d="M55.5723 26.1777C52.355 26.1777 49.7227 28.8101 49.7227 32.0274C49.7227 35.2447 52.355 37.8771 55.5723 37.8771C58.7897 37.8771 61.422 35.2447 61.422 32.0274C61.4222 28.8101 58.7898 26.1777 55.5723 26.1777ZM55.5723 34.9524C53.9636 34.9524 52.6474 33.6362 52.6474 32.0274C52.6474 30.4187 53.9636 29.1025 55.5723 29.1025C57.1811 29.1025 58.4973 30.4187 58.4973 32.0274C58.4973 33.6362 57.1811 34.9524 55.5723 34.9524Z"
                fill="white"
              />
            </svg>
            <div className="flex flex-col justify-center max-w-52">
              <h1
                className={`text-white font-akiraExpanded text-md md:text-3xl font-extrabold leading-tight`}
              >
                {power}
              </h1>
              <h2
                className={`hidden min-w-fit md:block text-customRed font-akiraExpanded text-2xl font-extrabold leading-tight`}
              >
                MOC SILNIKÓW
              </h2>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <svg
              className="w-12 h-12 md:w-20 md:h-20"
              viewBox="0 0 76 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M74.9725 73.3894L64.0943 40.7548C63.8721 40.0883 63.1304 39.7172 62.4637 39.9394C61.7974 40.1616 61.4265 40.9033 61.6485 41.57L72.5265 74.2046C72.9599 75.5043 72.7489 76.8869 71.9478 77.9983C71.1469 79.1096 69.9019 79.7471 68.532 79.7471H6.79625C5.42631 79.7471 4.1813 79.1097 3.3804 77.9985C2.5795 76.8873 2.36838 75.5043 2.80171 74.2048L18.3845 27.4565C18.9585 25.7345 20.5638 24.5774 22.3792 24.5774H52.9496C54.7649 24.5774 56.3701 25.7345 56.9443 27.4565L59.8671 36.2253C60.0922 36.9008 60.8217 37.2656 61.4977 37.0407C62.173 36.8155 62.538 36.0856 62.3129 35.4101L59.3901 26.6413C58.4644 23.8646 55.876 21.9991 52.9494 21.9991H41.703V18.1773C44.9488 16.6536 47.2029 13.3552 47.2029 9.53861C47.2029 4.27897 42.9239 0 37.6641 0C32.4043 0 28.1254 4.27897 28.1254 9.53877C28.1254 13.3553 30.3793 16.6538 33.6252 18.1774V21.9993H22.3788C19.4521 21.9993 16.8639 23.8648 15.9383 26.6413L0.355598 73.3894C-0.342718 75.4847 -0.0026447 77.7139 1.28867 79.5058C2.5803 81.2974 4.58746 82.3251 6.79625 82.3251H68.5323C70.741 82.3251 72.7483 81.2974 74.0397 79.5058C75.3309 77.7141 75.671 75.4847 74.9725 73.3894ZM39.1251 21.9991H36.2033V18.9655C36.6798 19.039 37.1674 19.0774 37.6643 19.0774C38.161 19.0774 38.6488 19.0391 39.1252 18.9655V21.9991H39.1251ZM30.7035 9.53877C30.7035 5.70053 33.826 2.57813 37.6641 2.57813C41.5022 2.57813 44.6248 5.70069 44.6248 9.53877C44.6248 13.3769 41.5022 16.4994 37.6641 16.4994C33.8262 16.4994 30.7035 13.3769 30.7035 9.53877Z"
                fill="white"
              />
              <path
                d="M37.6638 4.125C34.6786 4.125 32.25 6.55375 32.25 9.53884C32.25 12.5239 34.6787 14.9527 37.6638 14.9527C40.6489 14.9527 43.0777 12.5241 43.0777 9.53884C43.0777 6.55359 40.6491 4.125 37.6638 4.125ZM37.6638 12.3747C36.1001 12.3747 34.828 11.1025 34.828 9.53884C34.828 7.97514 36.1001 6.70313 37.6638 6.70313C39.2275 6.70313 40.4997 7.9753 40.4997 9.539C40.4997 11.1027 39.2275 12.3747 37.6638 12.3747Z"
                fill="white"
              />
              <path
                d="M37.6642 30.249C25.5813 30.249 15.751 40.0792 15.751 52.1623C15.751 64.2454 25.5813 74.0755 37.6642 74.0755C49.7472 74.0755 59.5775 64.2454 59.5775 52.1623C59.5775 40.0792 49.7474 30.249 37.6642 30.249ZM37.6642 71.4976C27.0027 71.4976 18.3289 62.8239 18.3289 52.1623C18.3289 41.5007 27.0027 32.8271 37.6642 32.8271C48.3257 32.8271 56.9995 41.5009 56.9995 52.1623C56.9995 62.8237 48.3257 71.4976 37.6642 71.4976Z"
                fill="white"
              />
              <path
                d="M35.7399 58.0465L28.6786 52.1621L35.7401 46.2776C36.2869 45.8217 36.3609 45.0089 35.9051 44.4621C35.4491 43.9151 34.6363 43.8413 34.0896 44.2971L27.9541 49.4098V45.2871C27.9541 44.5753 27.377 43.998 26.665 43.998C25.9531 43.998 25.376 44.5751 25.376 45.2871V59.0365C25.376 59.7483 25.9531 60.3256 26.665 60.3256C27.377 60.3256 27.9541 59.7485 27.9541 59.0365V54.9138L34.0896 60.0268C34.6732 60.5131 35.5758 60.3778 35.9927 59.7435C36.348 59.2036 36.2365 58.4602 35.7399 58.0465Z"
                fill="white"
              />
              <path
                d="M48.6636 50.8732H44.5388C43.8269 50.8732 43.2498 51.4502 43.2498 52.1622C43.2498 52.8742 43.8267 53.4513 44.5388 53.4513H47.3747V57.6621C47.3747 57.7095 47.336 57.7479 47.2889 57.7479H41.789C41.7417 57.7479 41.7031 57.7095 41.7031 57.6621V46.6625C41.7031 46.6151 41.7417 46.5767 41.789 46.5767H48.6638C49.3758 46.5767 49.9528 45.9996 49.9528 45.2876C49.9528 44.5756 49.3759 43.9985 48.6638 43.9985H41.789C40.32 43.9985 39.125 45.1935 39.125 46.6625V57.6621C39.125 59.1311 40.32 60.3261 41.789 60.3261H47.2889C48.7578 60.3261 49.9528 59.1311 49.9528 57.6621V52.1622C49.9527 51.4502 49.3758 50.8732 48.6636 50.8732Z"
                fill="white"
              />
            </svg>
            <div className="flex flex-col justify-center max-w-52">
              <h1
                className={`text-white font-akiraExpanded text-md md:text-3xl font-extrabold leading-tight`}
              >
                {mass}
              </h1>
              <h2
                className={`hidden md:block text-customRed font-akiraExpanded text-2xl font-extrabold leading-tight`}
              >
                MASA POJAZDU
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BolidSpecs;
