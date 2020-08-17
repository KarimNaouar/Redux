import {STEP} from './types'
  
    export const step = (num) => {
      return{ 
            type: STEP,
            payload: num 
        };
    };
