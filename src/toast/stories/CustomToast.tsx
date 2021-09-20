/**
 * A Custom Toast Which User Might Write
 */
import { useCallback } from "react";
import { ConfigurableToastOptions } from "@renderlesskit/react";

import { tcm } from "../../utils";
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
    <div className="flex w-full px-3 py-2 text-white bg-gray-800 rounded-md shadow-lg">
      <div
        className={tcm(
          "flex w-full justify-between transition-opacity",
          showAlertContent ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="flex flex-col flex-wrap text-sm">
          <div className="font-medium">{title}</div>
        </div>
        <div className="inline-flex box-content flex-shrink-0 mr-2 w-4 h-4 py-0.5">
          <InfoCircleIcon />
        </div>
      </div>
    </div>
  );
};

export const useCustomToast = () => {
  const { showToast } = useToastHandlers();

  return useCallback(
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
