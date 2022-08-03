import { GET_ID,CLEAR_ID,GET_PIC } from "./Type"


export const getState=(id,e)=>{
    return{
        type:GET_ID,
        info:id,
        email:e
    }
}

export const ClearState=(clrstr)=>{
    return{
        type:CLEAR_ID,
        payload:clrstr
    }
}

export const getPic=(url)=>{
    return{
        type:GET_PIC,
        uri:url
    }
}