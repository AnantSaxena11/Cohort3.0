import { useEffect ,useRef} from "react";
// in react the return gets cslled first then the use effect is called 
export const usePrev = (value) =>{
    const ref = useRef(); // 

    useEffect(()=>{
        ref.current = value; // 0 
    },[value]);

    return ref.current; // return undefined
}