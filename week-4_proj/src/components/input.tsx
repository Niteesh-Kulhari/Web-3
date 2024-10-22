import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export function InputWithButton() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [amount, setAmount] = useState<number>(0);
  

  const notify = () => {
    toast.success("Airdropped SOL", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };

  const errorNotify = (message: string) => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };

  async function sendAirDrop() {
    
    if (!wallet.publicKey) {
      errorNotify("Wallet not connected");
      return;
    }
    
    console.log(await connection.getBalance(wallet.publicKey))
    //console.log(wallet.publicKey)
    try {
      const lamports = amount * 1e9;
      await connection.requestAirdrop(wallet.publicKey, lamports);
      notify();
    } catch (error) {
      errorNotify("Airdrop Failed, please try again");
      console.error("Airdrop error:", error);
    }
  }

  return (
    <div className="flex w-full max-w-sm items-center gap-5">
      <Input
        onChange={(e) => setAmount(Number(e.target.value))}
        type="number"
        placeholder="Amount in SOL"
      />
      <Button onClick={sendAirDrop} type="submit">
        Airdrop
      </Button>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
        theme="dark"
      />
    </div>
  );
}
