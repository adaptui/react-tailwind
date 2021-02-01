Slider API RFC

### Goal

Create an accessible, easy to use but still flexible enough slider component.

Following our renderlesskit slider component:
[renderlesskit/react slider](https://github.com/timelessco/renderlesskit-react/blob/master/docs/slider.md)

### Components

- Slider - Main component
- Optional (only for flexiblity)
  - SliderTrack
  - SliderThumb
  - SliderThumbTooltip
  - SliderInput

### Props

All the basic props from :-
[useSliderState](https://github.com/timelessco/renderlesskit-react/blob/master/docs/slider.md#usesliderstate)

- **defaultValue** number | number[]
- **tooltipContent** React.ReactNode | (value: number | number[]) => JSX.Element

  Can be used to format tooltip content

- **tooltipVisible** boolean

  When tooltipVisible is true, Tooltip will show always, or tooltip will not
  show anyway, even if dragging or hovering.

- **tooltipPlacement**
- **thumbContent** React.ReactNode | (value: number | number[]) => JSX.Element

### API

```tsx
<Slider defaultValue={10} onChane={e => console.log(e)} />
```

## Multi slider

#### Two values

```tsx
<Slider defaultValue={[10, 20]} />
```

If defaultValues contains exactly two values we render this :-
![image](https://user-images.githubusercontent.com/35374649/106451419-91e83980-64ac-11eb-8324-522826f9f276.png)

#### More than two values

```tsx
<Slider defaultValue={[10, 20, 30, 40]} />
```

If defaultValues contains more than two values we render this :-

![image](https://user-images.githubusercontent.com/35374649/106451549-bd6b2400-64ac-11eb-8091-d805e8e78e57.png)

### Customization

#### Track

Customization of track can be done via the theme file

#### Thumb

To change the styles of the thumb users can use the theme file.

To change the thumb content

```tsx
<Slider thumbContent={<SomeIcon />} />
```

Showing values in thumb

```tsx
<Slider thumbContent={value => <span>{value} %</span>} />
```

#### Tooltip content

Format tooltip text

```tsx
const tooltipFormatter = value => `${value}$`;

<Slider tooltipContent={tooltipFormatter} />;
```

Rendering react elements in tooltipContent

```tsx
const tooltipFormatter = (value) => <span className="px-2">{value}</span>

<Slider tooltipContent={tooltipFormatter} />
```

### Full customization

Users can do full customization through renderprops

```tsx
<Slider>
  {state => (
    <>
      <SliderTrack />
      <SliderThumb>
        <VisuallyHidden>
          <SliderInput />
        </VisuallyHidden>
      </SliderThumb>
      <SliderThumbTooltip>Tooltip content</SliderThumbTooltip>
    </>
  )}
</Slider>
```
