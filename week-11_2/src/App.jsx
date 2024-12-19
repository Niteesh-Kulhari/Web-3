import {
  useAccount,
  useBalance,
  useConnect,
  useSendTransaction,
  WagmiProvider,
} from "wagmi";
import { config } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const queryClient = new QueryClient();
function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WalletConnector />
        <EthSend />
        <MyAddress />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

function MyAddress() {
  const { address } = useAccount();
  const balance = useBalance({ address });
  return (
    <div>
      {address}
      <br />
      {balance?.data?.formatted}
    </div>
  );
}

function WalletConnector() {
  const { connectors, connect } = useConnect();

  return connectors.map((connector) => (
    <button key={connector.uid} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ));
}

function EthSend() {
  const [address, setAddress] = useState("");

  const { data: hash, sendTransaction } = useSendTransaction();

  async function sendEth() {
    try {
      await sendTransaction({ to: address, value: "100000000000000000" });
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  }
  return (
    <div>
      <input
        onChange={(e) => setAddress(e.target.value)}
        type="text"
        placeholder="Address.."
      />
      <button onClick={sendEth}>Send 0.1 ETH</button>
    </div>
  );
}

export default App;
