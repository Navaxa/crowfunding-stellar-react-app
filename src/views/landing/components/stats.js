import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

const Stats = () => {
  return (
    <>
      <StatGroup my={20}>
        <Stat textAlign="center">
          <StatLabel>Cuentas de cuantas con NAZAs</StatLabel>
          <StatNumber>100</StatNumber>
        </Stat>

        <Stat textAlign="center">
          <StatLabel>NAZAs en circulación</StatLabel>
          <StatNumber>1238920</StatNumber>
        </Stat>

        <Stat textAlign="center">
          <StatLabel>Porcentaje de la meta</StatLabel>
          <StatNumber>15%</StatNumber>
        </Stat>
      </StatGroup>
    </>
  );
};

export default Stats;
