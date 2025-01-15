export async function GET(request,{params}) {
    const id=await params.id;
    const comment=comments.find(comment=>comment.id==id );
    if(!comment){
        return Response.json({
            message: "Comment not found"
        });
    }
    return Response.json({
        message: "Comment found successfully",
        comment
    });
}
export async function PATCH(request,{params}){
    const {id}=await params;
    const body=await request.json();
    const commentIndex= comments.findIndex( comment=> comment.id==id);

    if(commentIndex==-1){
        return Response.json({
            message: "Comment not found"
        });
    }
    comments[commentIndex].text=body.text;
    return Response.json({
        message: "Comment updated successfully",
        comments
    });
}
export async function DELETE(request,{params}){
    const {id}=await params;
    const commentIndex= comments.findIndex( comment=> comment.id==id);

    if(commentIndex==-1){
        return Response.json({
            message: "Comment not found"
        });
    }
    comments.splice(commentIndex,1);
    return Response.json({
        message: "Comment deleted successfully",
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