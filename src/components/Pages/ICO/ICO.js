import React, { useEffect } from "react";
import useStyles from "./styles";
import { Space, Button, Progress } from "@mantine/core";

const ICO = () => {
  const RoundNum = "1";
  const Progress1 = 30;
  const Progress2 = 60;
  const Progress3 = 10;
  const classes = useStyles();

  return (
    <div className={`${classes.MainBlock} grid place-items-center h-screen `}>
      <div className={`${classes.Title} grid grid-cols-1 gap-16`}>
        <Progress
          mt="xl"
          size="xl"
          sections={[
            { value: 30, color: "#F6EFE2" },
            { value: 60, color: "#00000040" },
            { value: 10, color: "#00000080" },
          ]}
        />
        <text className={`${classes.Title} `}>INITIAL COIN OFFERING</text>
        <text className={`${classes.Title}`}>{`ROUND ${RoundNum}`}</text>
      </div>
      <div
        className={`${classes.MainFunction} grid place-items-center grid-cols-1 align-middle rounded-lg`}
      >
        <div
          className={`${classes.Container} grid place-items-center grid-cols-1 gap-4 content-evenly `}
        >
          <div style={{ display: "flex" }} className={classes.FirstLine}>
            <text className={`${classes.MenuText} self-start`}>TOTAL LEFT</text>
            <Space w="xl" />
            <text className={`${classes.MenuText} self-start`}>$$$ $AGORA</text>
          </div>
          <div style={{ display: "flex" }} className={classes.SecondLine}>
            <text className={`${classes.Price} absolute top-3 right-10`}>
              Price $$$ USD
            </text>
            <Space h="md" />

            <div
              style={{ width: "100%" }}
              className={
                "grid place-items-center grid-cols-1 gap-4 content-evenly"
              }
            >
              <Progress
                mt="xl"
                size="xl"
                sections={[
                  { value: Progress1, color: "#F6EFE2" },
                  { value: Progress2, color: "#00000040" },
                  { value: Progress3, color: "#00000080" },
                ]}
              />
              <Button
                radius="lg"
                color="dark"
                variant="filled"
                size="xl"
                className={`${classes.ButtonSecondaryColor} selft-center absolute inset-x-50 bottom-0 h-16`}
              >
                BUY
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ICO;
