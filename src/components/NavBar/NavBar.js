import React, { useEffect, useMemo } from "react";
import {
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Toolbar,
  Box,
  IconButton,
} from "@material-ui/core";
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
import {
  Link
} from 'react-router-dom';
import { Button } from '@mantine/core';
import NeonLight from "../../images/NeonLight.png";
import logoFull from "../../images/Logo_Full_Blanc-02-02-02-300x300.png";
import useStyles from "./styles";


const pages = ["DASHBOARD", "STAKING", "ICO"];
const urls = ["/", "/Stacking", "/ICO"];

const Navbar = () => {
  
    const classes = useStyles();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const ConnectWallet = (event) => {
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
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  return (
<Container maxWidth="xl">
<Toolbar disableGutters>
  <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
    <IconButton
      size="medium"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleOpenNavMenu}
      color="inherit"
    ></IconButton>
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={Boolean(anchorElNav)}
      sx={{
        display: { xs: "block", md: "none" },
      }}
    >
      <MenuItem>
        <img
          className={classes.image}
          src={logoFull}
          alt="Agora_Logo"
          height="50"
        />
      </MenuItem>
      {pages.map((page) => (
        <MenuItem key={page}>
          <Typography>{page}</Typography>
        </MenuItem>
      ))}
    </Menu>
  </Box>
  <MenuItem disableGutters={true}>
  <img
          className='w-60'
          src={logoFull}
          alt="Agora_Logo"
        />
      </MenuItem>
      <div className={`${classes.MenuItems} content-center grid gap-4 grid-cols-4 `}>
      {pages.map((page, index) => (
      <Button
        key={page}
        component={Link}
        variant="link"
        to={urls[index]}
        sx={{  color: "white", display: "block"}}
        className="hover:bg-gray-700"
      >
        <p className={`${classes.MenuText}`}>{page}</p>
      </Button>
    ))}
    <Tooltip title="Connect Wallet">
    <center><Button onClick={ConnectWallet} radius="xl" color="dark" variant="filled" size="xl" className={`${classes.ConnectWalletButton}`}>CONNECT WALLET </Button></center>

    </Tooltip>
      </div>
</Toolbar>
<Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
              <img
                      className={classes.neonLine}
                      src={NeonLight}
                      alt="memories"
                    />
              </Box>
</Container>
);
    };

export default Navbar;