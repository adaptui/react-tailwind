import * as React from "react";

import { Select, SelectProps } from "../../index";

export type SelectBasicProps = SelectProps & {};

export const SelectBasic: React.FC<SelectBasicProps> = props => {
  return (
    <Select {...props}>
      <option value="">Select anyone</option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </Select>
  );
};

export default SelectBasic;
