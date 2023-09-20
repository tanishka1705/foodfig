import { Flex, HStack, Image, Spacer, Text } from "@chakra-ui/react"
import './Nav.css';

function Nav(){
   return(
    <Flex p='26.121px 40px 28.121px 70px'
    justifyContent='center'
    alignItems='center'
    h='115px'
    gap='504px'
    >
    
    <Image src="/images/left.svg" id="logo"></Image>
    <Spacer></Spacer>
    <HStack gap='94px'>
        <Text id="home">Home</Text>
        <Text className="txt">Product</Text>
        <Text className="txt">Faq</Text>
        <Text className="txt">Contact</Text>
    </HStack>
    </Flex>
   )
}
export default Nav