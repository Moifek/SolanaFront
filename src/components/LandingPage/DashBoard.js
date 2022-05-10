import React from "react";
import { Button, Group, Text } from "@mantine/core";
import useStyles from "./styles";
import ConnectWallet from "./ConnectWallet/ConnectWallet";
import ICO from "../Pages/ICO/ICO";
import Stacking from "../Pages/staking/stacking";

const Dashboard = () => {
  const [isLogged, setIsLogged] = React.useState(false);
  const classes = useStyles();

  return (
    <div className={`${classes.MainBlock} relative`}>
      <div className={`grid grid-cols-2 grid-rows-2 gap-16`}>
        <div className="row-span-2 col-span-2 relative">
          <Text className={`${classes.Title} `}>DASHBOARD</Text>
        </div>
        <div className="grid row-span-2 col-span-2 place-items-center">
          
        </div>
      </div>
      <div className="grid justify-items-center h-1/2">
        <Button
          radius="lg"
          color="dark"
          variant="filled"
          size="xl"
          className={`${classes.ComingSoon} top-1/2`}
        >
          COMING SOON{" "}
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
