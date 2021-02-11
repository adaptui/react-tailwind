import React from "react";
import {
  ToastProvider as RenderlesskitToastProvider,
  useToast,
} from "@renderlesskit/react";
import { Tag } from "../tag";
import { InfoCircleIcon } from "../icons";

export const ToastProvider: React.FC = ({ children }) => {
  return (
    <RenderlesskitToastProvider
      autoDismiss={false}
      placement="bottom-center"
      toastWrapper={function Wrapper({ children, id, index, ...props }) {
        const { toasts } = useToast();
        const totalToasts = Object.values(toasts).length;

        let sortIndex = totalToasts - index;
        if (sortIndex > 3) {
          sortIndex = 4;
        }

        let hoverOffsetY = 0;
        const heights = [25, 25, 25];
        if (sortIndex > 1) {
          hoverOffsetY = heights
            .slice(0, sortIndex - 1)
            .reduce((res, next) => (res += next), 0);
        }

        return (
          <div
            className={`stack-toast stack-toast-${sortIndex}`}
            style={
              {
                "--index": sortIndex,
                ...(sortIndex > 1
                  ? { "--hover-offset-y": `-${hoverOffsetY}px` }
                  : {}),
              } as React.CSSProperties
            }
          >
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
