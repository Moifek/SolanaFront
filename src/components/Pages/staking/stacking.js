import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import {
  ThemeIcon,
  Text,
  Image,
  Group,
  UnstyledButton,
  Button,
  Card,
  Stack,
  RingProgress,
} from "@mantine/core";

const Stacking = () => {
  const [inTOKEN, SetinTOKEN] = useState(true);
  const classes = useStyles();

  const HandlePageState = (Btn) => {
    if (Btn == 0) {
      SetinTOKEN(true);
    } else {
      SetinTOKEN(false);
    }
  };

  return (
    <div className={`${classes.MainBlock} relative`}>
      <div className={`grid`}>
        <div className="row-span-2 col-span-2 relative">
          <text className={`${classes.Title} `}>STAKING</text>
        </div>
        <div className="grid row-span-2 col-span-2 place-items-center">
          <table
            className={`${classes.Table} table-fixed border-4 border-solid-800 w-8`}
          >
            <tr>
              <td
                className={`${classes.Title} border-4 border-solid-300 w-48 h-24 `}
              >
                <center>
                  <UnstyledButton
                    className={classes.Title}
                    onClick={() => HandlePageState(0)}
                  >
                    TOKEN
                  </UnstyledButton>
                </center>
              </td>
              <td
                className={`${classes.Title} border-4 border-solid-300 w-48 h-24`}
              >
                <center>
                  <UnstyledButton
                    className={classes.Title}
                    onClick={() => HandlePageState(1)}
                  >
                    NFT
                  </UnstyledButton>
                </center>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 justify-items-center h-1/2">
        {!inTOKEN ? (
          <>
            <div style={{ width: 400, height: 750, margin: "auto" }}>
              <Card
                className={`rounded-lg`}
                style={{
                  backgroundColor: "#C4C4C4",
                  top: "10%",
                  height: "645px",
                }}
                shadow="sm"
                p="lg"
              >
                <Stack
                  align="center"
                  style={{ marginBottom: 5, marginTop: 25 }}
                >
                  <Text
                    className={classes.Text1}
                    style={{ fontSize: "20px" }}
                    weight={500}
                  >
                    Total NFT LOCKED
                  </Text>
                  <Text className={classes.MatrixTitle1} weight={1000}>
                    $$$$$$$$ TLBC
                  </Text>
                </Stack>
                <Card.Section>
                  <center>
                    <RingProgress
                      size={220}
                      label={<Text size="xs" align="center"></Text>}
                      sections={[
                        { value: 20, color: "green" },
                        { value: 80, color: "dark" },
                      ]}
                    />
                  </center>
                </Card.Section>
                <Stack
                  align="center"
                  justify="space-between"
                  spacing="sm"
                  style={{ marginBottom: 5, marginTop: 25 }}
                >
                  <Group
                    position="center"
                    style={{ marginBottom: 5, marginTop: 5 }}
                  >
                    <ThemeIcon color="green"></ThemeIcon>
                    <Text className={classes.Text1} weight={500}>
                      Total Available
                    </Text>
                  </Group>
                  <Text className={`${classes.Text1}`} size="sm">
                    5.2 $ TLBC
                  </Text>
                  <Group
                    position="center"
                    style={{ marginBottom: 5, marginTop: 5 }}
                  >
                    <ThemeIcon color="dark"></ThemeIcon>
                    <Text className={classes.Text1} weight={500}>
                      Total STAKED
                    </Text>
                  </Group>
                  <Text className={classes.Text1} size="sm">
                    30.42 $ TLBC
                  </Text>
                </Stack>
              </Card>
            </div>
            <div style={{ width: 342, height: 400, margin: "auto" }}>
              <Card
                className={`rounded-lg`}
                style={{
                  backgroundColor: "#C4C4C4",
                  width: "292px",
                  top: "250px",
                  right: "100px",
                  height: "259px",
                }}
                shadow="sm"
                p="lg"
              >
                <Card.Section>
                  <Group
                    position="left"
                    style={{ marginLeft: 50, marginBottom: 5, marginTop: 30 }}
                  >
                    <Text className={classes.Text1} weight={500}>
                      AGORA APY
                    </Text>
                    <Text
                      className={classes.Text1}
                      style={{ color: "#71B766" }}
                      weight={500}
                    >
                      $$ %
                    </Text>
                  </Group>
                </Card.Section>
                <Stack
                  align="center"
                  justify="space-between"
                  spacing="sm"
                  style={{ marginBottom: 5, marginTop: 25 }}
                >
                  <Group
                    position="center"
                    style={{ marginBottom: 5, marginTop: 5 }}
                  >
                    <Text className={classes.Text1} weight={500}>
                      IMG
                    </Text>
                  </Group>
                  <center>
                    <Button
                      radius="lg"
                      color="dark"
                      style={{ top: "10px" }}
                      variant="filled"
                      size="xl"
                      className={`${classes.ButtonSecondaryColor}`}
                    >
                      <Text style={{ color: "white" }}>STAKE</Text>{" "}
                    </Button>
                  </center>
                </Stack>
              </Card>
            </div>{" "}
          </>
        ) : (
          <>
            {" "}
            <div style={{ width: 400, height: 750, margin: "auto" }}>
              <Card
                className={`rounded-lg`}
                style={{
                  backgroundColor: "#C4C4C4",
                  top: "10%",
                  height: "645px",
                }}
                shadow="sm"
                p="lg"
              >
                <Stack
                  align="center"
                  style={{ marginBottom: 5, marginTop: 25 }}
                >
                  <Text
                    className={classes.Text1}
                    style={{ fontSize: "20px" }}
                    weight={500}
                  >
                    Total VALUE LOCKED
                  </Text>
                  <Text className={classes.MatrixTitle1} weight={1000}>
                    $$$$$$$$ AGORA
                  </Text>
                </Stack>
                <Card.Section>
                  <center>
                    <RingProgress
                      size={220}
                      label={<Text size="xs" align="center"></Text>}
                      sections={[
                        { value: 20, color: "green" },
                        { value: 80, color: "dark" },
                      ]}
                    />
                  </center>
                </Card.Section>
                <Stack
                  align="center"
                  justify="space-between"
                  spacing="sm"
                  style={{ marginBottom: 5, marginTop: 25 }}
                >
                  <Group
                    position="center"
                    style={{ marginBottom: 5, marginTop: 5 }}
                  >
                    <ThemeIcon color="green"></ThemeIcon>
                    <Text className={classes.Text1} weight={500}>
                      Total Available
                    </Text>
                  </Group>
                  <Text className={`${classes.Text1}`} size="sm">
                    5.2 $ AGORA
                  </Text>
                  <Group
                    position="center"
                    style={{ marginBottom: 5, marginTop: 5 }}
                  >
                    <ThemeIcon color="dark"></ThemeIcon>
                    <Text className={classes.Text1} weight={500}>
                      Total STAKED
                    </Text>
                  </Group>
                  <Text className={classes.Text1} size="sm">
                    30.42 $ AGORA
                  </Text>
                </Stack>
              </Card>
            </div>
            <div style={{ width: 342, height: 400, margin: "auto" }}>
              <Card
                className={`rounded-lg`}
                style={{
                  backgroundColor: "#C4C4C4",
                  width: "292px",
                  top: "250px",
                  right: "100px",
                  height: "259px",
                }}
                shadow="sm"
                p="lg"
              >
                <Card.Section>
                  <Group
                    position="left"
                    style={{ marginLeft: 50, marginBottom: 5, marginTop: 30 }}
                  >
                    <Text className={classes.Text1} weight={500}>
                      AGORA APY
                    </Text>
                    <Text
                      className={classes.Text1}
                      style={{ color: "#71B766" }}
                      weight={500}
                    >
                      $$ %
                    </Text>
                  </Group>
                </Card.Section>
                <Stack
                  align="center"
                  justify="space-between"
                  spacing="sm"
                  style={{ marginBottom: 5, marginTop: 25 }}
                >
                  <Group
                    position="center"
                    style={{ marginBottom: 5, marginTop: 5 }}
                  >
                    <Text className={classes.Text1} weight={500}>
                      Total $AGORA Available
                    </Text>
                  </Group>
                  <Text
                    className={`${classes.Text1}`}
                    style={{ color: "#443E3E" }}
                    size="sm"
                  >
                    5.2 $ AGORA
                  </Text>
                  <center>
                    <Button
                      radius="lg"
                      color="dark"
                      style={{ top: "10px" }}
                      variant="filled"
                      size="xl"
                      className={`${classes.ButtonSecondaryColor}`}
                    >
                      <Text style={{ color: "white" }}>STAKE</Text>{" "}
                    </Button>
                  </center>
                </Stack>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Stacking;
