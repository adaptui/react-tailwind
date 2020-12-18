Avatar API RFC

### Components

- Avatar
- AvatarGroup - Stack for holding multiple avatars
- AvatarBadge (optional) maybe we can use our badge component.

### Props

- **src** string - Image URL
- **name** string - Alt for the image, will also be used for placeholder
  initials
- **size** string - Size of the Avatar
- **onError** - Function called when image failed to load
- **fallback** React.ReactNode - custom fallback element

### API

```tsx
<Avatar src="https://bit.ly/dan-abramov" size="md" name="Dan Abrahmov" />
```

When the image is loading we will show the placeholder initials

#### Usage with icon

```tsx
<Avatar><UserIcon/><Avatar/>
```

![image](https://user-images.githubusercontent.com/35374649/102585016-98edff00-412d-11eb-8c93-4f3604c40157.png)

#### fallback

If there is an error loading the avatar image, the component falls back to an
alternative in the following order:

- the provided `fallback`
- the initials which is calculated from `name` prop
- a generic avatar icon

```tsx
<Avatar
  fallback={<GenericUserIcon />}
  src="https://bit.ly/dan-abramov"
  size="md"
  name="Dan Abrahmov"
/>
```

![image](https://user-images.githubusercontent.com/35374649/102585089-bc18ae80-412d-11eb-92fa-c3f607656486.png)

### AvatarGroup

Avatar group is a stack or flex container to hold multiple avatars in a group.

### Props

- _limit_ number - Max number of avatars to show inside the group, rest of them
  will get sliced.

### API

```tsx
<AvatarGroup limit={3}>
  <Avatar name="Remy Sharp" src="..." />
  <Avatar name="Travis Howard" src="..." />
  <Avatar name="Cindy Baker" src="..." />
  <Avatar name="Agnes Walker" src="..." />
  <Avatar name="Trevor Henderson" src="..." />
</AvatarGroup>
```

![image](https://user-images.githubusercontent.com/35374649/102584951-74922280-412d-11eb-971f-f62c3cb68167.png)
