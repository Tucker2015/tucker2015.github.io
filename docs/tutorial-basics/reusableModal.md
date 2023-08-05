---
sidebar_position: 7
---

# Reusable Modal with Zustand

```jsx title="ModalBox.js"
import { Center, Modal } from "native-base";
import React from "react";
import { Text } from "react-native";
import { useStore } from "../../stores/mainStore";

const ModalBox = ({ isOpen }) => {
  const { onClose } = useStore();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content maxWidth="400px">
        <Modal.Body>
          <Center>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>A Modal</Text>
          </Center>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default ModalBox;
```

## Zustand Store

```jsx title="mainStore.js"
import create from "zustand";

export const useStore = create((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));
```

### Use in file

```jsx title="app.js"
import React from "react";
import { View, Button } from "react-native";
import { useStore } from "../stores/mainStore";
import ModalBox from "../components/Modals/NewModal";

const App = () => {
  const { isOpen, onOpen } = useStore();

  return (
    <View>
      <Button title="Open Modal" onPress={onOpen} />
      <ModalBox isOpen={isOpen} />
    </View>
  );
};

export default App;
```
