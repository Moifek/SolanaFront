import React from "react";
import { Button, Group } from "@mantine/core";
import useStyles from "./styles";
import ConnectWallet from "./ConnectWallet/ConnectWallet";
import ICO from "../Pages/ICO/ICO";
import Stacking from "../Pages/staking/stacking";

const Dashboard = () => {
  const [isLogged, setIsLogged] = React.useState(false);
  const classes = useStyles();

  return (
    <div className={`${classes.MainBlock} flex flex-row items-center`}>
      <div className={`${classes.LeftContainer} basis-1/4`}></div>
      <div className={`${classes.RightContainer} flex flex-col basis-1/2 align-middle`}>
          <div className={`${classes.RightBlock1} basisc 1/2`}>

          </div>
          <div className={`${classes.RightBlock2} basis 1/2 `}>

          </div>
      </div>
    </div>
  );
};

export default Dashboard;
