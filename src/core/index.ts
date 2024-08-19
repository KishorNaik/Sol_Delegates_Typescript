import 'reflect-metadata';
import { NODE_ENV } from './config/env';
import { actionDelegateDemo, funcDelegateDemo, predicateDelegateDemo } from './modules/delegatesDemo';
console.log(`Node Env : ${NODE_ENV}`);
console.log(`Directory : ${__dirname}`);

actionDelegateDemo((msg:string)=> console.log(msg));

const result = funcDelegateDemo("Hello", (msg:string)=> {
    const concatStr:string=`${msg}, my name is Kishor`;
    return concatStr;
});
console.log(result);

const isEven=predicateDelegateDemo(2,(num:number)=> num%2===0);
console.log(isEven);