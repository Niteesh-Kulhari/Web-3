import { useState } from "react";
import Button from "./button";
import Heading from "./heading";
import InputBar from "./inputBar";
import Navbar from "./navbar";

interface Wallet{
    publicKey: string,
    privateKey: string,
    mnemonic: string,
    path: string
}

const walletGenerator = ()=>{
    const [mnemonicWords, setMnemonicWords] = useState<string[]>(Array(12).fill(" "))
};

const [pathTypes, setPathTypes] = useState<string[]>([]);
const [wallets, setWallets] = useState<Wallet[]>([]);
const [showMnemonic, setShowMnemonic] = useState<boolean>(false);
const [mnemonicInput, setmnemonicInput] = useState<string>("");
const [visiblePrivateKey, setVisiblePrivateKey] = useState<boolean>(false);
const [visiblePublicKey, setVisiblePublicKey] = useState<boolean>(true);




export default function Home() {
    return (
        <>
        <div className="mt-5">
        <Navbar />
      </div>

      <div className="w-full mt-10">
        <Heading />
      </div>

      <div className="mt-5 flex ">
        <div className='w-4/5'>
          <InputBar
            placeHolder="Enter your secret phrase (or leave blank to generate)"
            type="text"
          />
        </div>
        
        <div className=" ml-4">
          <Button text="Add Wallet" />
        </div>
      </div>

      <div className='mt-5 text-3xl w-full'>
        {/* <ShowMnemonics/> */}
      </div>
        </>
    )
}