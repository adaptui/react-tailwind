## Input Component RFC

### Goal

Create a composable and easy to use input component with extensible API

## Input API

- **variant** Input variant `error | success | neutral`
- **size** Input size `sm | md | lg | xl`

### Elements

- InputGroup

- InputPrefix - Element placed absolutely inside the Input

- InputSuffix - Element placed absolutely inside the Input

- InputPrefixAddon - Right Border Collapsed

- InputSuffixAddon - Left Border Collapsed

- Input - HTMLInputProps (disabled, placeholder, required, readonly)

#### [Input with trailing icon](https://tailwindui.com/components/application-ui/forms/input-groups#component-474bd025b849b44eb3c46df09a496b7a)

```tsx
function PasswordInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup>
      <Input type={show ? "text" : "password"} placeholder="Enter password" />
      <InputSuffix>
        <PasswordEye isEyeOpen={show} onClick={handleClick} />
      </InputSuffix>
    </InputGroup>
  );
}
```

#### [Input with inline leading dropdown](https://tailwindui.com/components/application-ui/forms/input-groups#component-6e671f3ae1aaf020c3dfe26d7aaf7b3d)

```tsx
function PasswordInput() {
  const [flag, selectFlag] = React.useState("india");
  const countryCode = { USA: 00, india: 91, russia: 256 };

  return (
    <InputGroup>
      <InputPrefix>
        <Select selected={flag} onSelect={flag => selectFlag(flag)}>
          <Option value="USA">USA</Option>
          <Option value="india">IN</Option>
          <Option value="russia">RU</Option>
        </Select>
      </InputPrefix>
      <Input type={show ? "text" : "password"} placeholder="Enter password" />
    </InputGroup>
  );
}
```

#### [Input with add-on](https://tailwindui.com/components/application-ui/forms/input-groups#component-1ef4d534fa0cbcb38331bafa5c352ff8)

```tsx
function InputGroup() {
  return (
    <InputGroup>
      <InputPrefixAddon>https://</InputPrefixAddon>
      <Input type="text" placeholder="https://www.example.com" />
      <InputSuffixAddon>.com</InputSuffixAddon>
    </InputGroup>
  );
}
```

#### [Input with leading icon and trailing button](https://tailwindui.com/components/application-ui/forms/input-groups#component-a8d111fef35bfae4c800af505ea0d276)

```tsx
function InputGroup() {
  return (
    <InputGroup>
      <InputPrefix>
        <ProfileIcon />
      </InputPrefix>
      <Input type="text" placeholder="John Doe" />
      <InputSuffixAddon>
        <Button>Sort</Button>
      </InputSuffixAddon>
    </InputGroup>
  );
}
```
