import React from "react";
import { Box } from "@chakra-ui/react";
import "./Frame.css";

const Graphs = () => {
  const onLoad = () => {
    var c = this;
    window.addEventListener(
      "message",
      function ({ data, source }) {
        if (c && source === c.contentWindow && data.widget === c.src)
          c.style.height = data.height + "px";
      },
      false
    );
  };

  return (
    <Box display="flex">
      <Box
        as="iframe"
        onLoad={onLoad}
        src="https://stellar.expert/widget/testnet/asset/supply/NAZA-GAO4AOP4DLM6YF54XOWNGIXNXKCDXPIKF5KHRICA4V5EIFAHQA724S7S"
        border="none"
        overflow="hidden"
        height={600}
        maxWidth={700}
        width="100%"
        mx="auto"
        className="frame"
      />

      <Box
        as="iframe"
        onLoad={onLoad}
        src="https://stellar.expert/widget/testnet/account/balance-chart/GAO4AOP4DLM6YF54XOWNGIXNXKCDXPIKF5KHRICA4V5EIFAHQA724S7S?asset=XLM&scale=linea"
        border="none"
        overflow="hidden"
        height={600}
        maxWidth={700}
        width="100%"
        mx="auto"
        className="frame"
      />
    </Box>
  );
};

export default Graphs;
