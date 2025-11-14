import qs from 'query-string'

type urlQueryParams ={
    params: string,
    key:string,
    value:string
}
type removeUrlQueryParams ={
    params: string,
    keysToRemove: string[]
}
export const formUrlQuery= ({params,key,value}:urlQueryParams)=>{

    const queryString = qs.parse(params)

    queryString[key]=value

    return  qs.stringifyUrl({
        url:window.location.pathname,
        query:queryString
    })
}
export const removeKeyFormUrlQuery= ({params,keysToRemove}:removeUrlQueryParams)=>{

    const queryString = qs.parse(params)

    keysToRemove.forEach(key=>{
        delete queryString[key]
    })

    return  qs.stringifyUrl({
        url:window.location.pathname,
        query:queryString
    },{skipNull:true})
}



