import * as React from "react";

import { Select, SelectProps } from "../../index";

export type SelectStackProps = SelectProps & {};

export const SelectStack: React.FC<SelectStackProps> = props => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
        <Select {...props} size="sm" variant="outline">
          <option value="">Select anyone</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </Select>
        <Select {...props} size="md" variant="outline">
          <option value="">Select anyone</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </Select>
        <Select {...props} size="lg" variant="outline">
          <option value="">Select anyone</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </Select>
        <Select {...props} size="xl" variant="outline">
          <option value="">Select anyone</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </Select>
      </div>
      <div className="flex flex-col space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
        <Select {...props} size="sm" variant="subtle">
          <option value="">Select anyone</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </Select>
        <Select {...props} size="md" variant="subtle">
          <option value="">Select anyone</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </Select>
        <Select {...props} size="lg" variant="subtle">
          <option value="">Select anyone</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </Select>
        <Select {...props} size="xl" variant="subtle">
          <option value="">Select anyone</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </Select>
      </div>
      <div className="flex flex-col space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
        <Select {...props} size="sm" variant="underline">
          <option value="">Select anyone</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </Select>
        <Select {...props} size="md" variant="underline">
          <option value="">Select anyone</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </Select>
        <Select {...props} size="lg" variant="underline">
          <option value="">Select anyone</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </Select>
        <Select {...props} size="xl" variant="underline">
          <option value="">Select anyone</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </Select>
      </div>
      <div className="flex flex-col space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
        <Select {...props} size="sm" variant="ghost">
          <option value="">Select anyone</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </Select>
        <Select {...props} size="md" variant="ghost">
          <option value="">Select anyone</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </Select>
        <Select {...props} size="lg" variant="ghost">
          <option value="">Select anyone</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </Select>
        <Select {...props} size="xl" variant="ghost">
          <option value="">Select anyone</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>s
        </Select>
      </div>
    </div>
  );
};

export default SelectStack;
