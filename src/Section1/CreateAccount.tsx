import { Flex, HStack, Image, Text, VStack} from '@chakra-ui/react'
import React from 'react'
import "./CreateAccount.css";
import { data } from '../utils/data';

export default function CreateAccount() {
  return (
   <Flex justifyContent='center' alignItems='center' width='100%' position='absolute' top='160%' flexDirection='column'>
     {data.map((item, index)=>(
      
      <HStack key={index} flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'} spacing={10}>
        <Image src={item.image}></Image>
     
        <VStack alignItems='flex-start'>
            <Text id='create'>{item.heading}</Text>
            <Text id='login'>{item.title}</Text>
            <Text id='desc'>{item.desc}</Text>
        </VStack>

      </HStack>
  

     ))}

   </Flex>
  )
}
