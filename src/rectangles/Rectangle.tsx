import { Box, Image, Flex, Divider, Text } from "@chakra-ui/react";
import "./Rectangle.css";

function Rectangle(){
    return(
    <Flex direction="column" alignItems="center" justifyContent="center">
       <Box className="img-box">
        <Image src="/images/Rectangle.svg" id="rec-img"></Image>
        <Image src="/images/Rectangle2.svg" id="rec2-img"></Image>
       </Box>
       <Divider w='884px' h='3px' position={'relative'} borderStyle={'solid'} borderWidth='3px 0 0 0' top='430px'/>
       <Text className="htaw">How the app works</Text>

    </Flex> 
    )
}
export default Rectangle;