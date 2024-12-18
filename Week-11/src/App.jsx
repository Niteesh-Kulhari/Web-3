import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { createPublicClient, http }from "viem"
import { mainnet } from "viem/chains"
// import {
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
//   useQueryClient,
// } from "@tanstack/react-query";
// const queryClient = new QueryClient();

// async function getter() {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   return res.data;
// }

function App() {
 

//   return (
//     <QueryClientProvider client={queryClient}>
//       <Posts /> 
//     </QueryClientProvider>
//   );
// }

// function Posts() {
//   const {data, isLoading, isError} = useQuery({queryKey: ['todos'], queryFn: getter});

//   if(isError){
//     return(
//       <div>Error loading the data</div>
//     )
//   }

//   if(isLoading){
//     return(
//       <div>Loading...</div>
//     )
//   }

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})

async function getBalance() {
  const res = await client.getBalance({address: "0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f"})
  console.log(res)
}
  return(
    <div>
      {/* {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))} */}

        <button onClick={getBalance}>Get Balance</button>
    </div>
  )

}

export default App;
