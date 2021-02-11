import React, { useState, useEffect } from "react";
import {
  useToast,
  ToastProvider as RenderlesskitToastProvider,
} from "@renderlesskit/react";
import { Tag } from "../tag";
import { InfoCircleIcon } from "../icons";

const Fade: React.FC<{
  enter: string;
  leave: string;
  show?: boolean;
  onUnmount?: () => void;
}> = ({ show, children, onUnmount, enter, leave, ...props }) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    show && setRender(show);
  }, [show]);

  const animationEnd = () => {
    if (!show) setRender(false);
    onUnmount && onUnmount();
  };

  return shouldRender ? (
    <div
      style={{
        animation: show ? `${enter}` : `${leave}`,
      }}
      onAnimationEnd={animationEnd}
      {...props}
    >
      {children}
    </div>
  ) : null;
};

export const ToastProvider: React.FC = ({ children }) => {
  return (
    <RenderlesskitToastProvider
      autoDismiss={false}
      placement="bottom-right"
      toastWrapper={function Wrapper({
        children,
        id,
        index,
        isVisible,
        ...props
      }) {
        const { toasts } = useToast();
        const totalToasts = Object.values(toasts).length;

        let sortIndex = totalToasts - index;

        // Hide the toast if count is more than 3
        // stack-toast-4 has opacity 0
        if (sortIndex > 3) {
          sortIndex = 4;
        }

        let hoverOffsetY = 0;
        // TODO: Get dynamic height for each toast
        const heights = new Array(3).fill(25);
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
            {sortIndex === 1 ? (
              <Fade
                show
                key={sortIndex}
                enter="toastFadeIn 0.6s"
                leave="toastFadeOut 0.6s"
              >
                {children}
              </Fade>
            ) : (
              children
            )}
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
