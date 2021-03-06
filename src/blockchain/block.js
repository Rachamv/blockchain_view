import { hashBlock } from "./util/hash";
import { DIFICULTY } from '../blockchain/util/constants';

export function mineBlock(blockNumber, data){
   let nonce = 0;
   let hashedData;
   do{
       nonce++;
       hashedData = hashBlock({blockNumber, nonce, data})
   } while ( hashedData.substring(0, DIFICULTY) !== '0'.repeat( DIFICULTY))
   return{hashedData, nonce}
}   