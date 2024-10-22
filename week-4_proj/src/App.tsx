
import { useEffect, useState } from 'react';
import './App.css'
import Hero from './components/hero/hero'
import Modal from './components/modal';
import NavBar from './components/navbar/navbar'
import WalletAdapter from './components/wallet-adapter/wallet-adapter'
import 'react-toastify/dist/ReactToastify.css';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

function App() {
  const[isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true)
  }, [])

  const onClose = () => {
    setIsModalOpen(false);
  }

  return (
    <ConnectionProvider endpoint={'https://solana-devnet.g.alchemy.com/v2/HskLOZv0h-JuaQ5YiWtxzC4lX0sOwF_W'}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
              <div className='flex flex-col gap-4 h-screen w-full dark:bg-black bg-slate-100'>
                {/* <ModeToggle/> */}
                <Modal isOpen={isModalOpen} onClose={onClose}/>
                <NavBar/>
                <Hero/>
                <WalletAdapter/>
                
              </div>
          </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
