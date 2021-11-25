import { Grid } from '@chakra-ui/layout';
import React from 'react';
import { useImmer } from 'use-immer';
import BlockchainBlock from './BlockchainBlock';

function Blockchain() {
    const [chain, setChain] = useImmer([{
        blockNumber: 0,
        nonce:0
        data:{},
        previousHash:'',
        hash:''
    }]);
    return (
        <Grid maxW='100%' overflowX='scroll' templateColumns='repeat(5, 1fr)' gap={6}>
            <BlockchainBlock />
            <BlockchainBlock />
            <BlockchainBlock />
            <BlockchainBlock />
            <BlockchainBlock />  
        </Grid>
    );
}

export default Blockchain;
