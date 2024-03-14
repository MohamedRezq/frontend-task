import React from "react";
import { Button, Col, Flex, FloatButton, Row, Typography } from "antd";
import cards from "@/public/json/cards.json";
import Image from "next/image";
import {
  LoginOutlined,
  PlusCircleFilled,
  PlusOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const CardContainer = () => {
  return (
    <Row
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      style={{
        backgroundColor: "transparent",
        width: "100%",
        rowGap: "20px",
      }}
    >
      {cards.map((card, index) => (
        <Col key={`card-${card.title}`} xs={24} sm={12} md={6}>
          <Flex
            vertical
            style={{
              backgroundColor: "white",
              border: "solid 1px #E7E7E7",
              borderRadius: "15px",
              position: "relative",
              padding: "3px",
              height: "100%",
            }}
          >
            <Flex
              align="center"
              justify="center"
              style={{
                padding: "30px",
                height: "100%",
              }}
            >
              <Image
                width={75}
                height={100}
                style={{
                  width: "auto",
                  height: "75%",
                }}
                src={card.image}
                alt={card.title}
              />
            </Flex>
            <Flex
              vertical
              gap={4}
              style={{
                paddingTop: "25px",
                paddingBottom: "25px",
                paddingLeft: "15px",
                borderRadius: "15px",
                backgroundColor: card.contentBgColor ?? "white",
              }}
            >
              <Flex style={{ marginBottom: "30px" }} vertical gap={1}>
                <Typography style={{ color: "white", fontSize: "20px" }}>
                  {card.title}
                </Typography>
                <Typography style={{ color: "white", fontSize: "18px" }}>
                  {card.subTitle}
                </Typography>
              </Flex>
              <Flex
                style={{ width: "100%" }}
                justify="space-between"
                align="center"
              >
                <Typography style={{ color: "white", fontSize: "20px" }}>
                  {card.dtsuCount} DTSU*
                </Typography>
                <Flex gap={20}>
                  <Button
                    style={{
                      right: 4,
                      borderRadius: "9999px",
                      backgroundColor: "rgba(0,0,0,.24)",
                      color: "white",
                    }}
                    icon={<LoginOutlined />}
                    type="primary"
                  />
                  <Button
                    icon={<PlusOutlined />}
                    type="default"
                    style={{
                      right: 14,
                      borderRadius: "9999px",
                      backgroundColor: "rgba(0,0,0,.24)",
                      color: "white",
                    }}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Col>
      ))}
    </Row>
  );
};

export default CardContainer;
