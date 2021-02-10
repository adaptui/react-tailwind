import React from "react";
import { ToastProvider as RenderlesskitToastProvider } from "@renderlesskit/react";
import { Tag } from "../tag";
import { InfoCircleIcon } from "../icons";

export const ToastProvider: React.FC = ({ children }) => {
  return (
    <RenderlesskitToastProvider
      autoDismiss={false}
      placement="bottom-center"
      toastWrapper={({ children, id, ...props }) => {
        // WIP!
        const index = +id.split("-")[1];
        const scale = `scale(${index / 30})`;

        const sortIndex = index;

        const heights = [50, 50, 50];
        // el.className = `toast toast-${sortIndex}`;
        document.body.style.setProperty("--index", "" + sortIndex);
        if (sortIndex > 1) {
          const hoverOffsetY = heights
            .slice(0, sortIndex - 1)
            .reduce((res, next) => (res += next), 0);
          document.body.style.setProperty(
            "--hover-offset-y",
            `-${hoverOffsetY}px`,
          );
        } else {
          document.body.style.removeProperty("--hover-offset-y");
        }
        document.body.style.setProperty("--index", "" + index);

        return (
          <div className={`stack-toast stack-toast-${sortIndex}`}>
            {children}
          </div>
        );
      }}
      toastTypes={{
        success: ({ hideToast, content, id }) => {
          return (
            <Tag
              className="mb-2"
              prefix={<InfoCircleIcon />}
              variant="primary"
              closable
              onClose={() => hideToast(id)}
            >
              {content}
            </Tag>
          );
        },
        error: ({ hideToast, content, id }) => {
          return (
            <Tag
              className="mb-2"
              prefix={<InfoCircleIcon />}
              variant="secondary"
              closable
              onClose={() => hideToast(id)}
            >
              {content}
            </Tag>
          );
        },
      }}
    >
      {children}
    </RenderlesskitToastProvider>
  );
};
