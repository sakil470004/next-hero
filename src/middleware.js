import { NextResponse } from "next/server"

export const middleware=(request)=>{
    const user=false;
   
//    if(request.nextUrl.pathname.startsWith('/dashboard')){
//     // return NextResponse.next()// it don't do anything just pass the request
//     return NextResponse.redirect(new URL('/', request.url))// it redirect to the home page
//    }
    // const cookies=request.cookies.get('token');// get the cookies from the request
    //? make sure see console.log(cookies) to see the cookies before mynul use it
    if (!user){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()
}
// we can either use the matcher or the middleware function to redirect the page to the home page or we can use both of them combined
export const config ={
    // matcher:'/dashboard'
    matcher : ['/dashboard','/services']
}