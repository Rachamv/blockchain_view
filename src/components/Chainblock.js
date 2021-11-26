import { Grid } from '@chakra-ui/layout';
import React from 'react';
import { useImmer } from 'use-immer';
import BlockchainBlock from './BlockchainBlock';
import { Heading } from '@chakra-ui/layout';
function Chainblock() {
    const [chain, setChain] = useImmer([{
        blockNumber: 0,
        nonce:2,
        data: {test: 'my test data'},
        previousHash:'111',
        hash:'0000',
       },
       {
        blockNumber: 1,
        nonce:2,
        data: {},
        previousHash:'123',
        hash:'123', 
      },
    ]);
    function updateChainValue(blockNumber, fieldName, fieldValue) {
        setChain(draft => {draft[blockNumber][fieldName]= fieldValue
        })
        
    }
    function getBlockchainBlock() {
       return chain.map((block) => <BlockchainBlock {...block}updateChainValue={updateChainValue} />);
    }
    return (
        <>
           <Heading mb='10' mt='10'>Blockchain</Heading>
            <Grid maxW='100%' overflowX='scroll' templateColumns='repeat(5, 1fr)'>
             {getBlockchainBlock()} 
            </Grid>
        </>
    );
}

export default Chainblock;
