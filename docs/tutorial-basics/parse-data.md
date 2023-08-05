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

### Parse Date in Local Time

```jsx
const getParsedDate = (strDate) => {
  var strSplitDate = String(strDate).split(" ");
  var date = new Date(strSplitDate[0]);
  // alert(date);
  var dd = date.getDate();
  var mm = date.getMonth() + 1; //January is 0!

  var yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  date = mm + "-" + dd + "-" + yyyy;
  return date.toString();
};
```

### Then, show as:

```jsx
getParsedDate(dataSource.published);
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
