import { Flex, Heading, Text } from "@chakra-ui/react";
import { ContactForm } from "./ContactForm";

export function MainContactForm() {
  return (
    <Flex
      maxW="1080px"
      mx="auto"
      align="center"
      justify="center"
      mt='4rem'
      pb="4rem"
      flexDir="column"
    >
      <Flex
        maxW="1080px"
        mx="auto"
        w="60%"
        align="center"
        direction="column"
        py="4rem"
        borderTop="1px"
        textAlign="center"
      >
        <Heading fontSize="4xl" fontWeight="700" mb="1rem">
          Entre em contato com a gente
        </Heading>
        <Text fontSize="xl" fontWeight="500">
          Contate por nossas redes sociais ou envie uma mensagem
        </Text>
      </Flex>
      <ContactForm />
    </Flex>
  );
}
