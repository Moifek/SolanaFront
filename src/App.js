import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  getLedgerWallet,
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletExtensionWallet,
  getSolletWallet,
  getTorusWallet,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

import { getPosts } from "./actions/posts";


import Dashboard from "./components/LandingPage/DashBoard";
import NavBarCustom from "./components/NavBar/NavBar.js";
import Stacking from "./components/Pages/staking/stacking.js";
import ICO from "./components/Pages/ICO/ICO.js";
import useStyles from "./styles";


const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
    // Only the wallets you configure here will be compiled into your application
    const wallets = useMemo(() => [
      getPhantomWallet(),
      getSlopeWallet(),
      getSolflareWallet(),
      getTorusWallet({
          options: { clientId: 'Get a client ID @ https://developer.tor.us' }
      }),
      getLedgerWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ], [network]);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);


  return (
    <>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
         <NavBarCustom />
          <Dashboard />
          </WalletProvider>
        </ConnectionProvider>
        <Routes>
            <Route path='/' element={Dashboard} />
            <Route path='/Stacking' element={Stacking} />
            <Route path='/ICO' element={ICO} />
          </Routes>
    </>
    
  );
};

export default App;
