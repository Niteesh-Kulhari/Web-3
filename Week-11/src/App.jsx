import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

async function getter() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
}

function App() {
 

  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
  );
}

function Posts() {
  const {data, isLoading, isError} = useQuery({queryKey: ['todos'], queryFn: getter});

  if(isError){
    return(
      <div>Error loading the data</div>
    )
  }

  if(isLoading){
    return(
      <div>Loading...</div>
    )
  }

  return(
    <div>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  )

}

export default App;
