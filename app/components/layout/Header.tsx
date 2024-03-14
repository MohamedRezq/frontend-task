import { Badge, Button, Flex } from "antd";
import Typography from "antd/es/typography/Typography";
import React, { useContext } from "react";
import { Avatar, Divider, Tooltip } from "antd";
import {
  AntDesignOutlined,
  DatabaseOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import user1 from "@/public/img/user-1.png";
import user2 from "@/public/img/user-2.png";
import user3 from "@/public/img/user-3.png";
import user4 from "@/public/img/user-4.png";
import Image from "next/image";
import CartContext from "@/app/context/cart";

const Header = () => {
  const cartCount = useContext(CartContext);
  return (
    <Flex
      style={{
        height: "70px",
        backgroundColor: "white",
        width: "100%",
      }}
      component="header"
      justify="space-around"
      align="center"
    >
      <Flex vertical>
        <Typography
          style={{
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: "19.36px",
            color: "#00244D",
          }}
        >
          Welcome to My Company!
        </Typography>
        <Typography
          style={{ fontSize: "16px", fontWeight: 400, lineHeight: "29.05px" }}
        >
          You have started your{" "}
          <span style={{ color: "#00244D" }}>30 day trial</span>
        </Typography>
      </Flex>
      <Avatar.Group
        maxCount={5}
        maxStyle={{
          color: "#7C838A",
          backgroundColor: "#E6E6E6",
          fontSize: "16px",
        }}
      >
        {[user1, user2, user3, user4].map((userAvatar, index) => (
          <Image
            width={42}
            height={43}
            src={userAvatar}
            alt={`user-${index}`}
            key={`user-${index}`}
            style={{
              borderRadius: "5px",
            }}
          />
        ))}
        <div
          style={{
            width: "42px",
            height: "43px",
            borderRadius: "9999px",
          }}
        ></div>
        {[0, 1, 2].map((_, i) => (
          // Temp component for avatar group count to be +3
          <Tooltip key={`temp=${i}`} title="Ant User" placement="top"></Tooltip>
        ))}
      </Avatar.Group>
      <Flex vertical>
        <Typography
          style={{
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: "24.2px",
            color: "#637182",
          }}
          color="#637182"
        >
          Our architects are here to help
        </Typography>
        <Typography
          style={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "19.36px",
            color: "#0097C2",
          }}
        >
          Book a free session
        </Typography>
      </Flex>
      <Flex gap={30}>
        <Badge count={cartCount} showZero>
          <Button
            style={{
              right: 4,
              borderRadius: "9999px",
              backgroundColor: "#E1ECF9",
              color: "#4A6585",
            }}
            icon={<ShoppingCartOutlined />}
            type="primary"
          />
        </Badge>
        <Badge>
          <Button
            icon={<DatabaseOutlined />}
            type="default"
            style={{
              right: 14,
              borderRadius: "9999px",
              backgroundColor: "#E1ECF9",
              color: "#4A6585",
            }}
          />
        </Badge>
      </Flex>
    </Flex>
  );
};

export default Header;
