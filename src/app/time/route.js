// for remove catch behavior, you can use force-dynamic
// export const dynamic = 'force-dynamic';
export const dynamic = 'force-static';
export async function GET(){
    return Response.json({
       currentTime: new Date().toLocaleTimeString()
    })
}
// export async function GET(){
//     return Response.json({})
// }