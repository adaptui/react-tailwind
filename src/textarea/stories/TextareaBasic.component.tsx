import * as React from "react";

import { Textarea, TextareaProps } from "../../index";

export type TextareaBasicProps = TextareaProps & {};

export const TextareaBasic: React.FC<TextareaBasicProps> = props => {
  return <Textarea {...props} aria-label="Textarea Story Default Example" />;
};

export default TextareaBasic;
