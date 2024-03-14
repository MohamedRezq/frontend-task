import { Flex } from "antd";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Flex
      style={{
        backgroundColor: "white",
        padding: "10px",
      }}
      align="center"
      justify="center"
    >
      Got questions? Take a look at our <Link href="">FAQs</Link>, talk to us on
      Twitter @company or send an email to team@company.com
    </Flex>
  );
};

export default Footer;
