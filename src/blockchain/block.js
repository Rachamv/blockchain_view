import { hashBlock } from "./util/hash";
import { DIFFICULTY } from '../blockchain/util/constants';

export function mineBlock(blockNumber, data){
   let nonce = 0;
   let hashedData;
   do{
       nonce++;
       hashedData = hashBlock({blockNumber, nonce, data})
   } while ( hashedData.substring(0, DIFFICULTY) !== '0'.repeat(DIFFICULTY))
   return{hashedData, nonce}
}   