import * as React from "react";

import { SlotIcon, Tag, TagProps } from "../../index";

export type TagStackProps = TagProps & {};

export const TagStack: React.FC<TagStackProps> = props => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Tag size="sm" themeColor="base" variant="solid" {...props}>
              Location
            </Tag>
            <Tag size="sm" themeColor="base" variant="subtle" {...props}>
              Location
            </Tag>
            <Tag size="sm" themeColor="base" variant="outline" {...props}>
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag size="md" themeColor="base" variant="solid" {...props}>
              Location
            </Tag>
            <Tag size="md" themeColor="base" variant="subtle" {...props}>
              Location
            </Tag>
            <Tag size="md" themeColor="base" variant="outline" {...props}>
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag size="lg" themeColor="base" variant="solid" {...props}>
              Location
            </Tag>
            <Tag size="lg" themeColor="base" variant="subtle" {...props}>
              Location
            </Tag>
            <Tag size="lg" themeColor="base" variant="outline" {...props}>
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag size="xl" themeColor="base" variant="solid" {...props}>
              Location
            </Tag>
            <Tag size="xl" themeColor="base" variant="subtle" {...props}>
              Location
            </Tag>
            <Tag size="xl" themeColor="base" variant="outline" {...props}>
              Location
            </Tag>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Tag size="sm" themeColor="primary" variant="solid" {...props}>
              Location
            </Tag>
            <Tag size="sm" themeColor="primary" variant="subtle" {...props}>
              Location
            </Tag>
            <Tag size="sm" themeColor="primary" variant="outline" {...props}>
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag size="md" themeColor="primary" variant="solid" {...props}>
              Location
            </Tag>
            <Tag size="md" themeColor="primary" variant="subtle" {...props}>
              Location
            </Tag>
            <Tag size="md" themeColor="primary" variant="outline" {...props}>
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag size="lg" themeColor="primary" variant="solid" {...props}>
              Location
            </Tag>
            <Tag size="lg" themeColor="primary" variant="subtle" {...props}>
              Location
            </Tag>
            <Tag size="lg" themeColor="primary" variant="outline" {...props}>
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag size="xl" themeColor="primary" variant="solid" {...props}>
              Location
            </Tag>
            <Tag size="xl" themeColor="primary" variant="subtle" {...props}>
              Location
            </Tag>
            <Tag size="xl" themeColor="primary" variant="outline" {...props}>
              Location
            </Tag>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Tag
              size="sm"
              themeColor="base"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="sm"
              themeColor="base"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="sm"
              themeColor="base"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag
              size="md"
              themeColor="base"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="md"
              themeColor="base"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="md"
              themeColor="base"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag
              size="lg"
              themeColor="base"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="lg"
              themeColor="base"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="lg"
              themeColor="base"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag
              size="xl"
              themeColor="base"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="xl"
              themeColor="base"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="xl"
              themeColor="base"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Tag
              size="sm"
              themeColor="primary"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="sm"
              themeColor="primary"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="sm"
              themeColor="primary"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag
              size="md"
              themeColor="primary"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="md"
              themeColor="primary"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="md"
              themeColor="primary"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag
              size="lg"
              themeColor="primary"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="lg"
              themeColor="primary"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="lg"
              themeColor="primary"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag
              size="xl"
              themeColor="primary"
              variant="solid"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="xl"
              themeColor="primary"
              variant="subtle"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="xl"
              themeColor="primary"
              variant="outline"
              prefix={<SlotIcon />}
              {...props}
            >
              Location
            </Tag>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Tag
              size="sm"
              themeColor="base"
              variant="solid"
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="sm"
              themeColor="base"
              variant="subtle"
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="sm"
              themeColor="base"
              variant="outline"
              closable={true}
              {...props}
            >
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag
              size="md"
              themeColor="base"
              variant="solid"
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="md"
              themeColor="base"
              variant="subtle"
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="md"
              themeColor="base"
              variant="outline"
              closable={true}
              {...props}
            >
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag
              size="lg"
              themeColor="base"
              variant="solid"
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="lg"
              themeColor="base"
              variant="subtle"
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="lg"
              themeColor="base"
              variant="outline"
              closable={true}
              {...props}
            >
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag
              size="xl"
              themeColor="base"
              variant="solid"
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="xl"
              themeColor="base"
              variant="subtle"
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="xl"
              themeColor="base"
              variant="outline"
              closable={true}
              {...props}
            >
              Location
            </Tag>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Tag
              size="sm"
              themeColor="primary"
              variant="solid"
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="sm"
              themeColor="primary"
              variant="subtle"
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="sm"
              themeColor="primary"
              variant="outline"
              closable={true}
              {...props}
            >
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag
              size="md"
              themeColor="primary"
              variant="solid"
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="md"
              themeColor="primary"
              variant="subtle"
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="md"
              themeColor="primary"
              variant="outline"
              closable={true}
              {...props}
            >
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag
              size="lg"
              themeColor="primary"
              variant="solid"
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="lg"
              themeColor="primary"
              variant="subtle"
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="lg"
              themeColor="primary"
              variant="outline"
              closable={true}
              {...props}
            >
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag
              size="xl"
              themeColor="primary"
              variant="solid"
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="xl"
              themeColor="primary"
              variant="subtle"
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="xl"
              themeColor="primary"
              variant="outline"
              closable={true}
              {...props}
            >
              Location
            </Tag>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Tag
              size="sm"
              themeColor="base"
              variant="solid"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="sm"
              themeColor="base"
              variant="subtle"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="sm"
              themeColor="base"
              variant="outline"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag
              size="md"
              themeColor="base"
              variant="solid"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="md"
              themeColor="base"
              variant="subtle"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="md"
              themeColor="base"
              variant="outline"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag
              size="lg"
              themeColor="base"
              variant="solid"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="lg"
              themeColor="base"
              variant="subtle"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="lg"
              themeColor="base"
              variant="outline"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag
              size="xl"
              themeColor="base"
              variant="solid"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="xl"
              themeColor="base"
              variant="subtle"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="xl"
              themeColor="base"
              variant="outline"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="space-x-2">
            <Tag
              size="sm"
              themeColor="primary"
              variant="solid"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="sm"
              themeColor="primary"
              variant="subtle"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="sm"
              themeColor="primary"
              variant="outline"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag
              size="md"
              themeColor="primary"
              variant="solid"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="md"
              themeColor="primary"
              variant="subtle"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="md"
              themeColor="primary"
              variant="outline"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag
              size="lg"
              themeColor="primary"
              variant="solid"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="lg"
              themeColor="primary"
              variant="subtle"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="lg"
              themeColor="primary"
              variant="outline"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
          </div>
          <div className="space-x-2">
            <Tag
              size="xl"
              themeColor="primary"
              variant="solid"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
            <Tag
              size="xl"
              themeColor="primary"
              variant="subtle"
              prefix={<SlotIcon />}
              closable={true}
              {...props}
            >
              Location
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagStack;
