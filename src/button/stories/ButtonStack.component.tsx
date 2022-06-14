import * as React from "react";

import { Button, ButtonProps, SlotIcon } from "../../index";

export type ButtonStackProps = ButtonProps & {};

export const ButtonStack: React.FC<ButtonStackProps> = props => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button size="sm" themeColor="base" variant="solid" {...props}>
              Continue
            </Button>
            <Button size="sm" themeColor="base" variant="subtle" {...props}>
              Continue
            </Button>
            <Button size="sm" themeColor="base" variant="outline" {...props}>
              Continue
            </Button>
            <Button size="sm" themeColor="base" variant="ghost" {...props}>
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button size="md" themeColor="base" variant="solid" {...props}>
              Continue
            </Button>
            <Button size="md" themeColor="base" variant="subtle" {...props}>
              Continue
            </Button>
            <Button size="md" themeColor="base" variant="outline" {...props}>
              Continue
            </Button>
            <Button size="md" themeColor="base" variant="ghost" {...props}>
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button size="lg" themeColor="base" variant="solid" {...props}>
              Continue
            </Button>
            <Button size="lg" themeColor="base" variant="subtle" {...props}>
              Continue
            </Button>
            <Button size="lg" themeColor="base" variant="outline" {...props}>
              Continue
            </Button>
            <Button size="lg" themeColor="base" variant="ghost" {...props}>
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button size="xl" themeColor="base" variant="solid" {...props}>
              Continue
            </Button>
            <Button size="xl" themeColor="base" variant="subtle" {...props}>
              Continue
            </Button>
            <Button size="xl" themeColor="base" variant="outline" {...props}>
              Continue
            </Button>
            <Button size="xl" themeColor="base" variant="ghost" {...props}>
              Continue
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button size="sm" themeColor="primary" variant="solid" {...props}>
              Continue
            </Button>
            <Button size="sm" themeColor="primary" variant="subtle" {...props}>
              Continue
            </Button>
            <Button size="sm" themeColor="primary" variant="outline" {...props}>
              Continue
            </Button>
            <Button size="sm" themeColor="primary" variant="ghost" {...props}>
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button size="md" themeColor="primary" variant="solid" {...props}>
              Continue
            </Button>
            <Button size="md" themeColor="primary" variant="subtle" {...props}>
              Continue
            </Button>
            <Button size="md" themeColor="primary" variant="outline" {...props}>
              Continue
            </Button>
            <Button size="md" themeColor="primary" variant="ghost" {...props}>
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button size="lg" themeColor="primary" variant="solid" {...props}>
              Continue
            </Button>
            <Button size="lg" themeColor="primary" variant="subtle" {...props}>
              Continue
            </Button>
            <Button size="lg" themeColor="primary" variant="outline" {...props}>
              Continue
            </Button>
            <Button size="lg" themeColor="primary" variant="ghost" {...props}>
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button size="xl" themeColor="primary" variant="solid" {...props}>
              Continue
            </Button>
            <Button size="xl" themeColor="primary" variant="subtle" {...props}>
              Continue
            </Button>
            <Button size="xl" themeColor="primary" variant="outline" {...props}>
              Continue
            </Button>
            <Button size="xl" themeColor="primary" variant="ghost" {...props}>
              Continue
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button size="sm" themeColor="secondary" variant="solid" {...props}>
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="secondary"
              variant="subtle"
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="secondary"
              variant="outline"
              {...props}
            >
              Continue
            </Button>
            <Button size="sm" themeColor="secondary" variant="ghost" {...props}>
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button size="md" themeColor="secondary" variant="solid" {...props}>
              Continue
            </Button>
            <Button
              size="md"
              themeColor="secondary"
              variant="subtle"
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="secondary"
              variant="outline"
              {...props}
            >
              Continue
            </Button>
            <Button size="md" themeColor="secondary" variant="ghost" {...props}>
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button size="lg" themeColor="secondary" variant="solid" {...props}>
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="secondary"
              variant="subtle"
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="secondary"
              variant="outline"
              {...props}
            >
              Continue
            </Button>
            <Button size="lg" themeColor="secondary" variant="ghost" {...props}>
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button size="xl" themeColor="secondary" variant="solid" {...props}>
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="secondary"
              variant="subtle"
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="secondary"
              variant="outline"
              {...props}
            >
              Continue
            </Button>
            <Button size="xl" themeColor="secondary" variant="ghost" {...props}>
              Continue
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button size="sm" themeColor="success" variant="solid" {...props}>
              Continue
            </Button>
            <Button size="sm" themeColor="success" variant="subtle" {...props}>
              Continue
            </Button>
            <Button size="sm" themeColor="success" variant="outline" {...props}>
              Continue
            </Button>
            <Button size="sm" themeColor="success" variant="ghost" {...props}>
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button size="md" themeColor="success" variant="solid" {...props}>
              Continue
            </Button>
            <Button size="md" themeColor="success" variant="subtle" {...props}>
              Continue
            </Button>
            <Button size="md" themeColor="success" variant="outline" {...props}>
              Continue
            </Button>
            <Button size="md" themeColor="success" variant="ghost" {...props}>
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button size="lg" themeColor="success" variant="solid" {...props}>
              Continue
            </Button>
            <Button size="lg" themeColor="success" variant="subtle" {...props}>
              Continue
            </Button>
            <Button size="lg" themeColor="success" variant="outline" {...props}>
              Continue
            </Button>
            <Button size="lg" themeColor="success" variant="ghost" {...props}>
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button size="xl" themeColor="success" variant="solid" {...props}>
              Continue
            </Button>
            <Button size="xl" themeColor="success" variant="subtle" {...props}>
              Continue
            </Button>
            <Button size="xl" themeColor="success" variant="outline" {...props}>
              Continue
            </Button>
            <Button size="xl" themeColor="success" variant="ghost" {...props}>
              Continue
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button size="sm" themeColor="danger" variant="solid" {...props}>
              Continue
            </Button>
            <Button size="sm" themeColor="danger" variant="subtle" {...props}>
              Continue
            </Button>
            <Button size="sm" themeColor="danger" variant="outline" {...props}>
              Continue
            </Button>
            <Button size="sm" themeColor="danger" variant="ghost" {...props}>
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button size="md" themeColor="danger" variant="solid" {...props}>
              Continue
            </Button>
            <Button size="md" themeColor="danger" variant="subtle" {...props}>
              Continue
            </Button>
            <Button size="md" themeColor="danger" variant="outline" {...props}>
              Continue
            </Button>
            <Button size="md" themeColor="danger" variant="ghost" {...props}>
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button size="lg" themeColor="danger" variant="solid" {...props}>
              Continue
            </Button>
            <Button size="lg" themeColor="danger" variant="subtle" {...props}>
              Continue
            </Button>
            <Button size="lg" themeColor="danger" variant="outline" {...props}>
              Continue
            </Button>
            <Button size="lg" themeColor="danger" variant="ghost" {...props}>
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button size="xl" themeColor="danger" variant="solid" {...props}>
              Continue
            </Button>
            <Button size="xl" themeColor="danger" variant="subtle" {...props}>
              Continue
            </Button>
            <Button size="xl" themeColor="danger" variant="outline" {...props}>
              Continue
            </Button>
            <Button size="xl" themeColor="danger" variant="ghost" {...props}>
              Continue
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button
              size="sm"
              themeColor="base"
              variant="solid"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="base"
              variant="subtle"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="base"
              variant="outline"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="base"
              variant="ghost"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="md"
              themeColor="base"
              variant="solid"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="base"
              variant="subtle"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="base"
              variant="outline"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="base"
              variant="ghost"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="lg"
              themeColor="base"
              variant="solid"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="base"
              variant="subtle"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="base"
              variant="outline"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="base"
              variant="ghost"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="xl"
              themeColor="base"
              variant="solid"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="base"
              variant="subtle"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="base"
              variant="outline"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="base"
              variant="ghost"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button
              size="sm"
              themeColor="primary"
              variant="solid"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="primary"
              variant="subtle"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="primary"
              variant="outline"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="primary"
              variant="ghost"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="md"
              themeColor="primary"
              variant="solid"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="primary"
              variant="subtle"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="primary"
              variant="outline"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="primary"
              variant="ghost"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="lg"
              themeColor="primary"
              variant="solid"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="primary"
              variant="subtle"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="primary"
              variant="outline"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="primary"
              variant="ghost"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="xl"
              themeColor="primary"
              variant="solid"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="primary"
              variant="subtle"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="primary"
              variant="outline"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="primary"
              variant="ghost"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button
              size="sm"
              themeColor="secondary"
              variant="solid"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="secondary"
              variant="subtle"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="secondary"
              variant="outline"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="secondary"
              variant="ghost"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="md"
              themeColor="secondary"
              variant="solid"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="secondary"
              variant="subtle"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="secondary"
              variant="outline"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="secondary"
              variant="ghost"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="lg"
              themeColor="secondary"
              variant="solid"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="secondary"
              variant="subtle"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="secondary"
              variant="outline"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="secondary"
              variant="ghost"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="xl"
              themeColor="secondary"
              variant="solid"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="secondary"
              variant="subtle"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="secondary"
              variant="outline"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="secondary"
              variant="ghost"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button
              size="sm"
              themeColor="success"
              variant="solid"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="success"
              variant="subtle"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="success"
              variant="outline"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="success"
              variant="ghost"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="md"
              themeColor="success"
              variant="solid"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="success"
              variant="subtle"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="success"
              variant="outline"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="success"
              variant="ghost"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="lg"
              themeColor="success"
              variant="solid"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="success"
              variant="subtle"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="success"
              variant="outline"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="success"
              variant="ghost"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="xl"
              themeColor="success"
              variant="solid"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="success"
              variant="subtle"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="success"
              variant="outline"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="success"
              variant="ghost"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button
              size="sm"
              themeColor="danger"
              variant="solid"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="danger"
              variant="subtle"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="danger"
              variant="outline"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="danger"
              variant="ghost"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="md"
              themeColor="danger"
              variant="solid"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="danger"
              variant="subtle"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="danger"
              variant="outline"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="danger"
              variant="ghost"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="lg"
              themeColor="danger"
              variant="solid"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="danger"
              variant="subtle"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="danger"
              variant="outline"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="danger"
              variant="ghost"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="xl"
              themeColor="danger"
              variant="solid"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="danger"
              variant="subtle"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="danger"
              variant="outline"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="danger"
              variant="ghost"
              iconOnly={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button
              size="sm"
              themeColor="base"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="base"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="base"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="base"
              variant="ghost"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="md"
              themeColor="base"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="base"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="base"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="base"
              variant="ghost"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="lg"
              themeColor="base"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="base"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="base"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="base"
              variant="ghost"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="xl"
              themeColor="base"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="base"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="base"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="base"
              variant="ghost"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button
              size="sm"
              themeColor="primary"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="primary"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="primary"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="primary"
              variant="ghost"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="md"
              themeColor="primary"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="primary"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="primary"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="primary"
              variant="ghost"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="lg"
              themeColor="primary"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="primary"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="primary"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="primary"
              variant="ghost"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="xl"
              themeColor="primary"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="primary"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="primary"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="primary"
              variant="ghost"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button
              size="sm"
              themeColor="secondary"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="secondary"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="secondary"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="secondary"
              variant="ghost"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="md"
              themeColor="secondary"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="secondary"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="secondary"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="secondary"
              variant="ghost"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="lg"
              themeColor="secondary"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="secondary"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="secondary"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="secondary"
              variant="ghost"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="xl"
              themeColor="secondary"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="secondary"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="secondary"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="secondary"
              variant="ghost"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button
              size="sm"
              themeColor="success"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="success"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="success"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="success"
              variant="ghost"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="md"
              themeColor="success"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="success"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="success"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="success"
              variant="ghost"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="lg"
              themeColor="success"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="success"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="success"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="success"
              variant="ghost"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="xl"
              themeColor="success"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="success"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="success"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="success"
              variant="ghost"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button
              size="sm"
              themeColor="danger"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="danger"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="danger"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="danger"
              variant="ghost"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="md"
              themeColor="danger"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="danger"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="danger"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="danger"
              variant="ghost"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="lg"
              themeColor="danger"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="danger"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="danger"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="danger"
              variant="ghost"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="xl"
              themeColor="danger"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="danger"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="danger"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="danger"
              variant="ghost"
              prefix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button
              size="sm"
              themeColor="base"
              variant="solid"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="base"
              variant="subtle"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="base"
              variant="outline"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="base"
              variant="ghost"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="md"
              themeColor="base"
              variant="solid"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="base"
              variant="subtle"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="base"
              variant="outline"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="base"
              variant="ghost"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="lg"
              themeColor="base"
              variant="solid"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="base"
              variant="subtle"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="base"
              variant="outline"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="base"
              variant="ghost"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="xl"
              themeColor="base"
              variant="solid"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="base"
              variant="subtle"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="base"
              variant="outline"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="base"
              variant="ghost"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button
              size="sm"
              themeColor="primary"
              variant="solid"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="primary"
              variant="subtle"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="primary"
              variant="outline"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="primary"
              variant="ghost"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="md"
              themeColor="primary"
              variant="solid"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="primary"
              variant="subtle"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="primary"
              variant="outline"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="primary"
              variant="ghost"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="lg"
              themeColor="primary"
              variant="solid"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="primary"
              variant="subtle"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="primary"
              variant="outline"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="primary"
              variant="ghost"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="xl"
              themeColor="primary"
              variant="solid"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="primary"
              variant="subtle"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="primary"
              variant="outline"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="primary"
              variant="ghost"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button
              size="sm"
              themeColor="secondary"
              variant="solid"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="secondary"
              variant="subtle"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="secondary"
              variant="outline"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="secondary"
              variant="ghost"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="md"
              themeColor="secondary"
              variant="solid"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="secondary"
              variant="subtle"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="secondary"
              variant="outline"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="secondary"
              variant="ghost"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="lg"
              themeColor="secondary"
              variant="solid"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="secondary"
              variant="subtle"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="secondary"
              variant="outline"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="secondary"
              variant="ghost"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="xl"
              themeColor="secondary"
              variant="solid"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="secondary"
              variant="subtle"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="secondary"
              variant="outline"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="secondary"
              variant="ghost"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button
              size="sm"
              themeColor="success"
              variant="solid"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="success"
              variant="subtle"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="success"
              variant="outline"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="success"
              variant="ghost"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="md"
              themeColor="success"
              variant="solid"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="success"
              variant="subtle"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="success"
              variant="outline"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="success"
              variant="ghost"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="lg"
              themeColor="success"
              variant="solid"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="success"
              variant="subtle"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="success"
              variant="outline"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="success"
              variant="ghost"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="xl"
              themeColor="success"
              variant="solid"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="success"
              variant="subtle"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="success"
              variant="outline"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="success"
              variant="ghost"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button
              size="sm"
              themeColor="danger"
              variant="solid"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="danger"
              variant="subtle"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="danger"
              variant="outline"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="danger"
              variant="ghost"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="md"
              themeColor="danger"
              variant="solid"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="danger"
              variant="subtle"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="danger"
              variant="outline"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="danger"
              variant="ghost"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="lg"
              themeColor="danger"
              variant="solid"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="danger"
              variant="subtle"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="danger"
              variant="outline"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="danger"
              variant="ghost"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="xl"
              themeColor="danger"
              variant="solid"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="danger"
              variant="subtle"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="danger"
              variant="outline"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="danger"
              variant="ghost"
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button
              size="sm"
              themeColor="base"
              variant="solid"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="base"
              variant="subtle"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="base"
              variant="outline"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="base"
              variant="ghost"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="md"
              themeColor="base"
              variant="solid"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="base"
              variant="subtle"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="base"
              variant="outline"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="base"
              variant="ghost"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="lg"
              themeColor="base"
              variant="solid"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="base"
              variant="subtle"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="base"
              variant="outline"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="base"
              variant="ghost"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="xl"
              themeColor="base"
              variant="solid"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="base"
              variant="subtle"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="base"
              variant="outline"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="base"
              variant="ghost"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button
              size="sm"
              themeColor="primary"
              variant="solid"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="primary"
              variant="subtle"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="primary"
              variant="outline"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="primary"
              variant="ghost"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="md"
              themeColor="primary"
              variant="solid"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="primary"
              variant="subtle"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="primary"
              variant="outline"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="primary"
              variant="ghost"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="lg"
              themeColor="primary"
              variant="solid"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="primary"
              variant="subtle"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="primary"
              variant="outline"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="primary"
              variant="ghost"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="xl"
              themeColor="primary"
              variant="solid"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="primary"
              variant="subtle"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="primary"
              variant="outline"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="primary"
              variant="ghost"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button
              size="sm"
              themeColor="secondary"
              variant="solid"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="secondary"
              variant="subtle"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="secondary"
              variant="outline"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="secondary"
              variant="ghost"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="md"
              themeColor="secondary"
              variant="solid"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="secondary"
              variant="subtle"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="secondary"
              variant="outline"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="secondary"
              variant="ghost"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="lg"
              themeColor="secondary"
              variant="solid"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="secondary"
              variant="subtle"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="secondary"
              variant="outline"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="secondary"
              variant="ghost"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="xl"
              themeColor="secondary"
              variant="solid"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="secondary"
              variant="subtle"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="secondary"
              variant="outline"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="secondary"
              variant="ghost"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button
              size="sm"
              themeColor="success"
              variant="solid"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="success"
              variant="subtle"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="success"
              variant="outline"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="success"
              variant="ghost"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="md"
              themeColor="success"
              variant="solid"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="success"
              variant="subtle"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="success"
              variant="outline"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="success"
              variant="ghost"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="lg"
              themeColor="success"
              variant="solid"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="success"
              variant="subtle"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="success"
              variant="outline"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="success"
              variant="ghost"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="xl"
              themeColor="success"
              variant="solid"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="success"
              variant="subtle"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="success"
              variant="outline"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="success"
              variant="ghost"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Button
              size="sm"
              themeColor="danger"
              variant="solid"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="danger"
              variant="subtle"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="danger"
              variant="outline"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="sm"
              themeColor="danger"
              variant="ghost"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="md"
              themeColor="danger"
              variant="solid"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="danger"
              variant="subtle"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="danger"
              variant="outline"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="md"
              themeColor="danger"
              variant="ghost"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="lg"
              themeColor="danger"
              variant="solid"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="danger"
              variant="subtle"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="danger"
              variant="outline"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="lg"
              themeColor="danger"
              variant="ghost"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
          <div className="space-x-2">
            <Button
              size="xl"
              themeColor="danger"
              variant="solid"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="danger"
              variant="subtle"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="danger"
              variant="outline"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
            <Button
              size="xl"
              themeColor="danger"
              variant="ghost"
              prefix={<SlotIcon />}
              suffix={<SlotIcon />}
              {...props}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonStack;
