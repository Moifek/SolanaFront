import React from "react";
import { Button, MantineProvider } from "@mantine/core";
import { Wallet } from "tabler-icons-react";
import useStyles from "./styles";

const ConnectWallet = () => {
  const classes = useStyles();

  return (
    <div>
      <center>
        <Button
          leftIcon={<Wallet />}
          radius="xl"
          variant="filled"
          color="yellow"
          size="xl"
          className={`${classes.ConnectWalletButton}`}
        >
        PLEASE CONNECT YOUR WALLET FIRST
        </Button>
      </center>
    </div>
  );
};

export default ConnectWallet;
