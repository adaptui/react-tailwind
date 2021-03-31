/**
 * A Custom Toast Which User Might Write
 */
import React from "react";
import { cx, ConfigurableToastOptions } from "@renderlesskit/react";

import { InfoCircleIcon } from "../../icons";
import { Toast, useToastHandlers } from "../index";

type CustomToastProps = {
  title: string;
  toast?: Toast;
  showAlertContent?: boolean;
};

const CustomToast: React.FC<CustomToastProps> = ({
  title,
  showAlertContent,
}) => {
  return (
    <div className="lib:flex lib:shadow-lg lib:bg-gray-800 lib:py-2 lib:px-3 lib:text-white lib:rounded-md lib:w-full">
      <div
        className={cx(
          "lib:flex w-full lib:justify-between lib:transition-opacity",
          showAlertContent ? "lib:opacity-100" : "lib:opacity-0",
        )}
      >
        <div className="lib:flex lib:flex-col lib:text-sm lib:flex-wrap">
          <div className="lib:font-medium">{title}</div>
        </div>
        <div className="lib:inline-flex lib:box-content lib:flex-shrink-0 lib:mr-2 lib:w-4 lib:h-4 lib:py-0.5">
          <InfoCircleIcon />
        </div>
      </div>
    </div>
  );
};

export const useCustomToast = () => {
  const { showToast } = useToastHandlers();

  return React.useCallback(
    (
      alertDetails: CustomToastProps,
      options?: ConfigurableToastOptions<Toast>,
    ) => {
      const toastId = showToast(
        props => <CustomToast {...props} {...alertDetails} />,
        options,
      );

      return toastId;
    },
    [showToast],
  );
};
