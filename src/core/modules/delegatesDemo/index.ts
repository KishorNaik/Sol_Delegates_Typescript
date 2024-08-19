import { Action, Func, Predicate } from "../../shared/utils/delegates";

export const actionDelegateDemo=(params:Action<[string]>):void =>{
    params("Hello World");
}

export const funcDelegateDemo=(value:string, params:Func<[string],string>): string =>{
    
    const concatStr:string = `${value} ${params("World")}`;
    
    return concatStr;
}

export const predicateDelegateDemo=(value:number,params:Predicate<number>): boolean =>{
    return params(value);
}