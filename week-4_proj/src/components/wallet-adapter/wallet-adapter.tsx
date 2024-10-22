import {
    WalletDisconnectButton,
    WalletMultiButton,
  } from "@solana/wallet-adapter-react-ui";
import { InputWithButton } from "../input";

export default function WalletAdapter () {

    return <div className="flex flex-col items-center justify-center gap-4 ">
        
                    <div className="flex gap-4">
                        <WalletMultiButton />
                        <WalletDisconnectButton />
                    </div>
                    <div  className='flex justify-center mt-4' >
                        <InputWithButton />
                    </div>
                    
    </div>
} 