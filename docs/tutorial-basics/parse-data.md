---
sidebar_position: 7
---

# Parsing Data from API

### Parse Date

```jsx
var mydate = new Date(item.publishedAt);
  {...}
subTitle={mydate.toDateString()}

```

### Split Content

```jsx
var contentSplit = [item.content.split('[')[0]]
  {...}
{contentSplit}

```

### This goes under

```jsx
  renderItem={({ item }) => {
                    var mydate = new Date(item.publishedAt);
                    var contentSplit = [item.content.split('[')[0]]

                }}
```

constant.
