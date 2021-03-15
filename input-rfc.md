## Input Component RFC

### Goal

Create a composable and easy to use input component with extensible API

## Input API

- HTMLInputProps (disabled, placeholder, required, readonly)
- **prefix** Input prefix content
- **suffix** Input suffix content
- **variant** Input variant `error | success | neutral`
- **size** Input size `sm | md | lg | xl`

```tsx
function PasswordInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Input
      type={show ? "text" : "password"}
      placeholder="Enter password"
      suffix={<PasswordEye isEyeOpen={show} onClick={handleClick} />}
    />
  );
}
```

```tsx
function InputWithSelect() {
  const [flag, selectFlag] = React.useState("india");
  const countryCode = { USA: 00, india: 91, russia: 256 };

  return (
    <Input
      prefix={
        <Select selected={flag} onSelect={flag => selectFlag(flag)}>
          <Option value="USA">USA</Option>
          <Option value="india">IN</Option>
          <Option value="russia">RU</Option>
        </Select>
      }
      placeholder={`(${countryCode[flag]}) Enter phone number`}
    />
  );
}
```
