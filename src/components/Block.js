import { Box, Container, Heading,} from '@chakra-ui/layout';
import {Textarea, Button, Text, Input,} from '@chakra-ui/react';
import React, {useState, useEffect} from 'react'
import { DIFFICULTY } from '../blockchain/util/constants';
import { hashBlock, sha256Hash } from '../blockchain/util/hash';

function Block() {
    const [blockNumber, setBlockNumber] = useState(1);
    const [nonce, setNonce] = useState(0);
    const [data, setData] = useState('');
    const [sha256, setSha256] = useState();
    const [isValid, setIsValid] = useState (false);
    useEffect(() => {
        const hashedData = hashBlock({blockNumber, nonce, data});
        const checkIsValid=
          hasdedData.substring(0, DIFFICULTY) === '0'.repeat(DIFFICULTY);
        setIsValid(checkIsValid);
        
        setSha256 (hashedData);
    }, [blockNumber, nonce, data]);

    return (
        <Container maxW='80%' mt="6">
        <Heading mb='10'>SHA256 Hash</Heading>
        <Box bg={isValid? 'green.100': 'red.100'} padding='6' borderRadius='mb'>
          <Text>Block Number:</Text>
          <Input bg='white' mb='6' value={blockNumber} onChange={(e) => {setBlockNumber(e.target.value);}} />
          <Text>nonce:</Text>
          <Input bg='white' mb='6' value={nonce} onChange={(e) => {setNonce(e.target.value);}} />
          <Text>Data:</Text>
          <Textarea bg='white' mb='2'onChange={(e) => {setData(e.target.value);}}/>
          <Text>Hash:</Text>
          <Input bg='white' mb='6' value={sha256}/>
          <Button colorScheme='blue'>Mine</Button>
        </Box>
    </Container>  
    );
}

export default Block;
