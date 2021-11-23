import { Box, Container, Heading,} from '@chakra-ui/layout';
import {Textarea, Button, Text, Input,} from '@chakra-ui/react';
import React, {useState, useEffect} from 'react'
import { sha256Hash } from '../blockchain/util/hash';

function Sha256Hash() {
    const [data, setData] = useState('');
    const [sha256, setSha256] = useState();
    useEffect(() => {
        const hashedData = sha256Hash(data);
        setSha256 (hashedData);
    }, [data]);

    function updateData(e) {
        const formData = e.target.value;
        setData(formData);
    }
    return (
       <Container maxW='80%' mt="6">
           <Heading mb='10'>SHA256 Hash</Heading>
           <Box bg='green.100'padding='6' borderRadius='mb'>
           <Text>Data:</Text>
           <Textarea bg='white' mb='2'onChange={updateData}/>
           <Text>SHA256:</Text>
           <Input bg='white' mb='6' value={sha256}/>
           <Button colorScheme='blue'>Calculate SHA256</Button>
           </Box>
       </Container>    
    );
}

export default Sha256Hash;
