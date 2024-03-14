"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { SmileFilled } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  InputNumber,
  Select,
  Slider,
  Switch,
  ConfigProvider,
  Flex,
  Typography,
} from "antd";
import theme from "./themeConfig";
import CardContainer from "./components/content/CardContainer";

const HomePage = () => {
  useEffect(() => {
    document.title = "Frontend Task - Home";
  }, []);

  return (
    <ConfigProvider theme={theme}>
      <div style={{ height: "100vh" }}>
        <div
          className="skewedDiv"
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
          }}
        ></div>
        <Flex
          vertical
          gap={5}
          style={{
            padding: "3vw",
          }}
        >
          <Flex align="center" justify="space-between">
            <Flex>
              <Typography
                style={{
                  color: "#0097C2",
                  fontSize: "20px",
                  margin: "10px",
                }}
              >
                Get Support
              </Typography>
            </Flex>
          </Flex>
          <CardContainer />
        </Flex>
      </div>
    </ConfigProvider>
  );
};

export default HomePage;
