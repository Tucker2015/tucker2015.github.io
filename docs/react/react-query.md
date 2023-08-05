---
sidebar_position: 7
---

# Get Data with React-Query

## Install

```bash
yarn add @tanstack/react-query
```

## Usage

### 1. In App.tsx file

```tsx title="App.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>React Query</h1>
      </div>
    </QueryClientProvider>
  );
}
```

### 2. Get Data from API

```tsx title="getData.ts"
export async function getData(url: string) {
  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
}
```

### 3. In Home.tsx file

```tsx title="Home.tsx"
import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/getData";

export const Home = () => {
  const {
    isLoading,
    isFetching,
    data: elements,
  } = useQuery({
    queryKey: ["elements"],
    queryFn: () => getData("https://aztec-api.ktinternet.net/api/elements"),
  });

  return (
    <div>
      <h1>Home</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {elements.map((element: any) => (
            <div key={element.id}>
              <h2>{element.name}</h2>
              <p>{element.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
```
