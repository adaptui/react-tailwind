import React from "react";

export const OnlineDot: React.FC = () => (
  <div className="w-inherit h-inherit rounded-full bg-green-500 border-2 border-white" />
);

export const OfflineDot: React.FC = () => (
  <div className="w-inherit h-inherit rounded-full bg-yellow-500 border-2 border-white" />
);

export type StatusProps = {
  status: "online" | "offline" | "sleep";
};

export const HalfMoonDot: React.FC = () => {
  return (
    <svg
      viewBox="0 0 5 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-inherit h-inherit rounded-full bg-white border border-white"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.49638 2.62128C4.23144 2.85688 3.88243 3 3.5 3C2.67157 3 2 2.32843 2 1.5C2 1.11757 2.14312 0.768559 2.37872 0.503617C1.33062 0.566309 0.5 1.43615 0.5 2.5C0.5 3.60457 1.39543 4.5 2.5 4.5C3.56385 4.5 4.43369 3.66938 4.49638 2.62128Z"
        fill="currentColor"
      />
    </svg>
  );
};

const ComponentMap = {
  offline: <OfflineDot />,
  online: <OnlineDot />,
  sleep: <HalfMoonDot />,
};

export const Status: React.FC<StatusProps> = ({ status }) => {
  return <>{ComponentMap?.[status]}</>;
};

export default Status;
