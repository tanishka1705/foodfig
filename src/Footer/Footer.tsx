import { Image, Box, Flex, Heading, HStack, Button, Text} from '@chakra-ui/react'
import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
<Box position='absolute' top='450%' height= '509px' alignSelf= 'stretch' w='100%'>
    <Image src='/images/Rectangle 47.svg' className='foot-img'></Image>

    <Flex justifyContent='center' alignItems='center' flexDirection='column'>
         <Heading as={'h2'} className='h2'>Download the app now.</Heading>
         <Heading as={'h4'} className='h4'>Available on your favorite store. Start your premium experience now</Heading>
         <HStack className='btns' spacing={5}>
            <Button id='playstore'>Playstore</Button>
            <Button id='appstore' variant="outline">App Store</Button>
         </HStack>
    </Flex>

    <Flex justifyContent={'center'} alignItems={'center'} p='26.121px 40px 28.121px 70px'>
       <Image src='/images/left.svg' id='foot-logo'></Image>
       <HStack className='img-stack' spacing={5}>
        <Image src='/images/twitter.svg'></Image>
        <Image src='/images/facebook.svg'></Image>
        <Image src='/images/instagram.svg'></Image>
       </HStack>
       <Text id='cpyrght'>Copywright 2020 Bella Onojie.com</Text>
    </Flex>
</Box>
  )
}
