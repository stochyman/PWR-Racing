import Container from "@/app/components/Container";
import Title from "@/app/components/Title";
import Image from "next/image";
import Text from "@/app/components/Text";

interface DepartmentElementProps {
  department: string;
  index: number;
  lightMode?: boolean;
}

const DepartmentElement: React.FC<DepartmentElementProps> = ({
  department,
  index,
  lightMode,
}) => {
  const bgColor = lightMode
    ? index % 2 === 0
      ? "bg-neutral-300"
      : "bg-white"
    : index % 2 === 0
    ? "bg-black"
    : "bg-neutral-700";

  const textColor = lightMode ? "black" : "white";

  return (
    <div id={department} className={bgColor}>
      <Container paddingType={index % 2 === 0 ? "l" : "r"}>
        <div
          className={`${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          } flex flex-col md:flex-row w-full justify-between gap-8 md:gap-20 my-8 md:my-0`}
        >
          <div className="flex flex-col md:w-5/12 md:py-20">
            <div className="uppercase mb-4">
              <Title color={textColor} size="big">
                {department}
              </Title>
            </div>
            <Text color={textColor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              gravida placerat purus eu congue. Donec a nulla id augue
              condimentum gravida. Nunc sollicitudin vulputate mi vitae blandit.
              Integer iaculis laoreet pulvinar. Nunc id porttitor velit. Aenean
              lectus elit, porta ut feugiat id, venenatis et dolor. Etiam
              aliquam at felis et consectetur. Cras venenatis sapien nunc, et
              malesuada orci pellentesque non. Vivamus congue metus eu lacus
              mollis, ut mollis ligula volutpat. Pellentesque sollicitudin at
              justo vel consectetur.
            </Text>
            <div className="flex flex-col gap-4 mt-10">
              <Text color={textColor} bold>
                W naszym dziale zajmiesz się:
              </Text>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3">
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5093 0L19 4.2804V15.5014L7.4907 19.1634L0 14.883V3.66205L11.5093 0ZM11.344 11.5226L8.55 12.4117V16.8324L16.3134 14.3616L11.344 11.5226ZM6.64999 13.0163L2.74077 14.2603L6.64999 16.4946V13.0163ZM17.1 6.13088L11.875 7.79341V10.7311L17.1 13.7168V6.13088ZM1.89997 5.99368V13.531L6.64999 12.0196V8.708L1.89997 5.99368ZM10.925 8.09565L8.55 8.85134V11.4151L10.925 10.6594V8.09565ZM10.925 2.17851L3.29923 4.60498L7.70925 7.12501L10.925 6.10181V2.17851ZM11.875 2.39694V5.79953L15.699 4.5828L11.875 2.39694Z"
                      fill="#D41E3E"
                    />
                  </svg>
                  <Text color={textColor}>
                    Projektowaniem elementów w oprogramowaniu Siemens NX
                  </Text>
                </div>
                <div className="flex gap-3">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.6378 2.83347C19.3513 4.49886 19.0113 6.48681 17.612 7.84116C16.0713 9.3323 13.7427 9.56559 11.9327 8.57701L10.6242 9.96016L11.5578 10.8674L12.1158 10.3274C12.4007 10.0509 12.8634 10.0509 13.1483 10.3274L17.673 14.7511C17.9586 15.0269 17.9586 15.4747 17.673 15.7505L15.6078 17.7493C15.3229 18.0257 14.8601 18.0257 14.5752 17.7493L10.0506 13.3255C9.76491 13.0497 9.76491 12.6019 10.0506 12.3261L10.5602 11.8329L9.67043 10.9696L3.41318 17.5858C2.84258 18.1381 1.91787 18.1381 1.34801 17.5858L0.831721 17.0861C0.261122 16.5339 0.261122 15.6389 0.831721 15.0874L7.96012 9.30927L3.22571 4.71486L1.7304 4.71414L0 2.02129L1.39265 0.67127L4.23821 2.35682L4.2568 3.77381L9.04627 8.42725L10.4397 7.29827C9.07751 5.50112 9.21961 2.96955 10.8979 1.3452C12.2906 -0.00266191 14.3334 -0.337468 16.0497 0.340064L12.9817 3.26836L15.5639 5.76752L18.6378 2.83347ZM2.54426 15.7923C2.25934 15.5165 1.79735 15.5165 1.51168 15.7923C1.22601 16.0687 1.22601 16.5159 1.51168 16.7924C1.79735 17.0681 2.25934 17.0681 2.54426 16.7924C2.82993 16.5152 2.82993 16.068 2.54426 15.7923Z"
                      fill="#D41E3E"
                    />
                  </svg>
                  <Text color={textColor}>
                    Lorem ipsum dolor sit amet consectetur.
                  </Text>
                </div>
                <div className="flex gap-3">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 8.13749V9.8625C18.9946 10.0204 18.9334 10.1719 18.826 10.2927C18.7187 10.4135 18.5715 10.4966 18.4083 10.5285L16.9139 10.7729C16.8663 10.7809 16.8179 10.7834 16.7698 10.7801C16.5946 11.4229 16.3248 12.0391 15.9682 12.6105C16.0054 12.64 16.0385 12.6738 16.0668 12.7112L16.9404 13.8851C17.0326 14.0171 17.075 14.1747 17.0608 14.3323C17.0465 14.4899 16.9765 14.6384 16.8621 14.7536L15.5725 15.9755C15.4508 16.0835 15.2943 16.1494 15.1282 16.1627C14.9621 16.1759 14.7961 16.1357 14.6571 16.0486L13.4181 15.222C13.3781 15.1954 13.342 15.164 13.3106 15.1286C12.7013 15.4692 12.0441 15.7262 11.3585 15.8917C11.3715 15.961 11.3715 16.0319 11.3585 16.1013L11.1284 17.3627C11.0901 17.5387 10.9903 17.6974 10.8451 17.813C10.6999 17.9287 10.5177 17.9945 10.3281 18H8.67188C8.48227 17.9945 8.30015 17.9287 8.15493 17.813C8.00971 17.6974 7.90988 17.5387 7.87157 17.3627L7.64147 16.1013C7.62833 16.032 7.62833 15.961 7.64147 15.8917C6.95592 15.7262 6.29865 15.4692 5.68938 15.1286C5.65792 15.1636 5.62179 15.1946 5.58191 15.2208L4.34289 16.0486C4.20363 16.1359 4.03732 16.1761 3.87094 16.1626C3.70456 16.1491 3.54787 16.0828 3.42627 15.9743L2.13668 14.7524C2.02303 14.6372 1.95362 14.4892 1.93963 14.332C1.92564 14.1749 1.96788 14.0179 2.05956 13.8863L2.93319 12.7124C2.96097 12.6747 2.99368 12.6404 3.03054 12.6105C2.67441 12.039 2.40499 11.4228 2.23024 10.7801C2.18206 10.7833 2.13366 10.7809 2.08611 10.7729L0.591695 10.5285C0.428356 10.4968 0.28109 10.4138 0.173716 10.2929C0.0663417 10.1721 0.00513694 10.0204 0 9.8625V8.13749C0.00513694 7.97959 0.0663417 7.82793 0.173716 7.70707C0.28109 7.5862 0.428356 7.50319 0.591695 7.47145L2.08611 7.22707C2.13367 7.21912 2.18212 7.2171 2.23024 7.22108C2.40517 6.57842 2.67457 5.96225 3.03054 5.39066C2.99379 5.36064 2.96109 5.32644 2.93319 5.28883L2.05956 4.11487C1.96778 3.98309 1.92549 3.82588 1.93948 3.66856C1.95347 3.51123 2.02293 3.36294 2.13668 3.24757L3.42627 2.02569C3.54798 1.91744 3.70465 1.85123 3.87097 1.83775C4.03729 1.82427 4.20355 1.86432 4.34289 1.95142L5.58191 2.77918C5.62187 2.80577 5.658 2.83718 5.68938 2.87262C6.29252 2.5348 6.94285 2.27912 7.62124 2.11314C7.61698 2.06755 7.61911 2.02163 7.62756 1.97657L7.88548 0.560628C7.91898 0.405865 8.00659 0.266332 8.13416 0.164595C8.26172 0.0628586 8.42177 0.00486722 8.58844 0H10.4116C10.5782 0.00486722 10.7383 0.0628586 10.8658 0.164595C10.9934 0.266332 11.081 0.405865 11.1145 0.560628L11.3724 1.97657C11.3807 2.02165 11.3828 2.06755 11.3788 2.11314C12.0571 2.2792 12.7074 2.53487 13.3106 2.87262C13.342 2.83718 13.3781 2.80577 13.4181 2.77918L14.6571 1.95142C14.7963 1.86441 14.9623 1.82442 15.1284 1.83789C15.2945 1.85137 15.451 1.91754 15.5725 2.02569L16.8621 3.24757C16.9762 3.3627 17.046 3.51093 17.0603 3.66832C17.0745 3.8257 17.0323 3.98303 16.9404 4.11487L16.0668 5.28883C16.0385 5.3265 16.0054 5.36071 15.9682 5.39066C16.3248 5.96212 16.5946 6.57831 16.7698 7.22108C16.8179 7.21706 16.8663 7.21908 16.9139 7.22707L18.4083 7.47145C18.5715 7.50338 18.7187 7.58645 18.826 7.70728C18.9334 7.8281 18.9946 7.97965 19 8.13749ZM12.7354 9C12.7351 8.39381 12.5452 7.80129 12.1896 7.29736C11.834 6.79342 11.3287 6.4007 10.7375 6.16883C10.1464 5.93696 9.49598 5.87635 8.8685 5.99467C8.24102 6.11299 7.66465 6.40493 7.21226 6.83357C6.75986 7.26222 6.45175 7.80832 6.32687 8.40286C6.20199 8.99739 6.26595 9.61366 6.51067 10.1738C6.75539 10.7338 7.16988 11.2126 7.70174 11.5496C8.2336 11.8865 8.85895 12.0664 9.49874 12.0667C9.92382 12.0668 10.3448 11.9876 10.7375 11.8336C11.1303 11.6795 11.4872 11.4536 11.7877 11.1688C12.0883 10.884 12.3267 10.5459 12.4893 10.1738C12.6519 9.80162 12.7355 9.40277 12.7354 9Z"
                      fill="#D41E3E"
                    />
                  </svg>
                  <Text color={textColor}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Text>
                </div>
                <div className="flex gap-3">
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.80645 0V5.29286H15.0993V17.9957H0.279297V0H9.80645ZM7.69036 12.7029H3.45501V13.7625H7.69036V12.7029ZM10.865 10.5857H3.45501V11.6443H10.865V10.5857ZM9.80645 8.46857H3.45501V9.52714H9.80645V8.46857ZM11.9236 6.35143H3.45501V7.41H11.9236V6.35143ZM7.69036 4.23535H3.45501V5.29392H7.69036V4.23535Z"
                      fill="#D41E3E"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.3268 3.23922C14.6115 3.52291 14.8127 3.86377 14.9418 4.23427H10.8652V0.157715C11.2357 0.286862 11.5766 0.489042 11.8614 0.772747L14.3268 3.23922Z"
                      fill="#D41E3E"
                    />
                  </svg>
                  <Text color={textColor}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil, minus.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="relative md:w-[40rem] h-[20rem] md:h-auto">
            <Image
              src={`/images/departments/${department}.png`}
              alt="bolid"
              layout="fill"
              objectFit="cover"
              objectPosition="center 20%"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DepartmentElement;
