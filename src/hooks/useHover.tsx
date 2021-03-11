import React from "react";

export const useHover = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return {
    isHovered,
    hoverProps: {
      onMouseEnter: () => {
        setIsHovered(true);
      },
      onMouseLeave: () => {
        setIsHovered(false);
      },
    },
  };
};
