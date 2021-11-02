import * as React from "react";

import { Avatar, AvatarProps } from "../../index";

export type AvatarBasicProps = AvatarProps & {};

export const AvatarBasic: React.FC<AvatarBasicProps> = props => {
  return <Avatar {...props} />;
};

export default AvatarBasic;
