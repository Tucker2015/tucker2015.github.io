---
sidebar_position: 7
---

# Reusable Modal

1. Install React Modal from GitHub :

https://github.com/reactjs/react-modal

```bash
yarn add react-modal
```

### Usage

```jsx title="app.js"
import React from "react";
import ModalView from "./Modal";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <ModalView
        modalIsOpen={modalIsOpen}
        modalIsClose={() => setModalIsOpen(false)}
      />
    </div>
  );
};
```

```jsx title="Modal.js"
import React from "react";
import Modal from "react-modal";

const ModalView = ({ modalIsOpen, modalIsClose }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={modalIsClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>I am Modal</div>
    </Modal>
  );
};
export default ModalView;
```
