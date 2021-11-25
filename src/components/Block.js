import { Box, Container, Heading,} from '@chakra-ui/layout';
import {Textarea, Button, Text, Input,} from '@chakra-ui/react';
import React, {useState, useEffect} from 'react'
import { mineBlock } from '../blockchain/block';
import {  DIFICULTY } from '../blockchain/util/constants';
import { hashBlock} from '../blockchain/util/hash';

function Block() {
    const [blockNumber, setBlockNumber] = useState(1);
    const [nonce, setNonce] = useState(0);
    const [data, setData] = useState('');
    const [sha256, setSha256] = useState();
    const [isValid, setIsValid] = useState ('false');
    useEffect(() => {
        const hashedData = hashBlock({blockNumber, nonce, data});
        const checkIsValid =
         hashedData.substring(0,  DIFICULTY) === '0'.repeat( DIFICULTY);
        setIsValid (checkIsValid);
        setSha256 (hashedData);
    }, [blockNumber, nonce, data]);
    function handleMine() {
        const { hashedData, nonce } = mineBlock({blockNumber, data});
        setNonce(nonce);
        setSha256(hashedData);
    }
    return (
        <Container maxW='80%' mt="6">
        <Heading mb='10'>Block</Heading>
        <Box bg={ isValid ? 'green.200' : 'red.200'} padding='6' borderRadius='mb'>
          <Text>Block Number:</Text>
          <Input bg='white' mb='6' value={blockNumber} onChange={(e) => {setBlockNumber(Number(e.target.value)); }} />
          <Text>nonce:</Text>
          <Input bg='white' mb='6' value={nonce} onChange={(e) => {setNonce(Number(e.target.value));}} />
          <Text>Data:</Text>
          <Textarea bg='white' mb='2'onChange={(e) => {setData(e.target.value);}}/>
          <Text>Hash:</Text>
          <Input bg='white' mb='6' value={sha256}/>
          <Button colorScheme='blue' onClick={handleMine}>Mine</Button>
        </Box>
    </Container>  
    );
}

export default Block ;