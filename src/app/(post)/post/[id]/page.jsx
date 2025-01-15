import { getDataById } from '@/services/postApi';

export async function generateMetadata({ params }) {
    // read route params
    const id = (await params).id
    let postData = await getDataById(id);
    return {
        title: postData.title,
        description: postData.body,
    }
}

async function CurrentPost({ params }) {
    const { id } = await params
    const postData = await getDataById(id);
    return (
        <div>
            <h1>Post Details </h1>
            <div className='border border-1 border-blue-100 p-12 '>
                <h3 className='font-bold underline text-xl'>{postData.title}</h3>
                <p>{postData.body}</p>
            </div>
        </div>
    )
}

export default CurrentPost
export async function generateStaticParams() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
   
    return posts.map((post) => ({
      id: post.id.toString(),
    }))
  }