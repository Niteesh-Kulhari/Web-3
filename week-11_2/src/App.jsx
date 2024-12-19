import { useConnect, WagmiProvider } from "wagmi";
import { config } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WalletConnector/>
        <EthSend />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

function WalletConnector() {
  const { connectors, connect } = useConnect();

  return connectors.map((connector) => (
    <button key={connector.uid} onClick={() => connect({connector})}>
      {connector.name}
    </button>
  ))
}

function EthSend() {

  return (
    <div>
      <input type="text" placeholder="Address.." />
      <button>Send 0.1 ETH</button>
    </div>
  );
}

export default App;
