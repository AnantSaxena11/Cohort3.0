
import { atom, selector } from 'recoil';
export const counter = atom({
  key: 'counter',  // unique ID
  default: 0,      // default value
});


export const evenSelector = selector({
    key : "isEvenSelector",
    get : function ({get}){
        const currentCount = get(counter);
        const isEven = (currentCount%2 == 0);
        return isEven;
    }
})
