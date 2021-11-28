---
sidebar_position: 7
---

# Boolean Values

To use True / False to display a component as true or false, use the `true` and `false` functions.

```jsx
function Screen({ iconShown = true }) {

  return (
    <View>
  {
    iconShown === true ? (
      <Pressable onPress={() => setShowModal(!showModal)}>
        <Icon
          name="information-outline"
          size={30}
          style={[colors.blackShadow, { fontSize: 30 }]}
        />
      </Pressable>
    ) : (
      <Icon name="menu" size={30} color="transparent" />
    );
  }
  </View>
  )

}
```
