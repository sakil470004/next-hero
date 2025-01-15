// for remove catch behavior, you can use force-dynamic
export const dynamic = 'force-dynamic';
export async function GET(){
    return Response.json({
       currentTime: new Date().toLocaleTimeString()
    })
}