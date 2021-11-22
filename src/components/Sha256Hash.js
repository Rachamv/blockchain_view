import { Box, Container, Heading,} from '@chakra-ui/layout';
import {Textarea} from '@chakra-ui/react';
import {Text} from '@chakra-ui/react';
import {Input} from '@chakra-ui/react';
import {Button} from '@chakra-ui/react';
import React from 'react'

function Sha256Hash() {
    return (
        <>
       <Heading mb='10'>SHA256 Hash</Heading>
       <Container>
           <Box bg='green.100'padding='6' borderRadius='mb'>
           <Text>Data:</Text>
           <Textarea bg='white' mb='2'/>
           <Text>SHA256:</Text>
           <input bg='white' mb='6'/>
           <Button colorScheme='blue'>Calculate SHA256</Button>
           </Box>
       </Container>     
        </>
    )
}

export default Sha256Hash;
