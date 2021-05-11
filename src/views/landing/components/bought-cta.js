import React, { useState } from "react";
import api from '../../../api';
import { UnlockIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  Button,
  Heading,
  useToast,
  InputGroup,
  NumberInput,
  InputRightAddon,
  InputLeftElement,
  NumberInputField,
  InputRightElement,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const BoughtCTA = () => {

  const toast = useToast();
  const [toBuy, setBuy] = useState(100);
  const [address, setAddress] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (address.length !== 56) {
        toast({
            title: "Cuenta no válida",
            description: "Asegurate de que la cuenta sea correcta",
            status: "warning",
            duration: 5000,
            isClosable: true,
          });
      return;
    }

    try{
        await api.loadAccount(address);
    } catch(error) {
        toast({
            title: "Cuenta no válida",
            description: "Esta cuenta no esta activa",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
          return;
    }
  };

  return (
    <>
      <Heading mt="20" textAlign="center" as="h2" size="2xl">
        Conquistando en mundo Crypto
      </Heading>
      <Heading mt="2" textAlign="center" as="h3" size="lg">
        compra NAZA
      </Heading>
      <Box onSubmit={handleSubmit} as="form" mx="auto" maxWidth="500" px="10">
        <InputGroup mt="10">
          <NumberInput width="100%" defaultValue="100">
            <NumberInputField onChange={({ target: { value } }) => setBuy(value)} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <InputRightAddon>NAZAs</InputRightAddon>
        </InputGroup>
        <InputGroup mt="5">
          <InputLeftElement children={<UnlockIcon color="gray.300" />} />
          <Input
            onChange={({ target: { value } }) => setAddress(value)}
            placeholder="Tu dirección de Stellar"
          />
        </InputGroup>
        <Button
          type="submit"
          mt="3"
          width="100%"
          color="white"
          colorScheme="teal"
        >
          Comprar
        </Button>
      </Box>
    </>
  );
};

export default BoughtCTA;
