export async function GET(){
    return Response.json(comments,{
        headers:{
            "Set-Cookie": "theme=dark"
        }
    })
}
export async function POST(request){
    const body=await request.json();
    comments.push({
        id: comments.length+1,
        text: body.text,
        author:"user"+ comments.length + 1 
    });
    return Response.json({
        message: "Comment added successfully",
        comments
    });
}
const comments=[
    {
        id: 1,
        text: "This is the first comment",
        author: "User1"
    },
    {
        id: 2,
        text: "This is the second comment",
        author: "User2"
    },
    {
        id: 3,
        text: "This is the third comment",
        author: "User3"
    }
]