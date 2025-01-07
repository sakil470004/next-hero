
export const getData=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts');
    const data=await res.json();
    return data;
}
export const getDataById=async(id)=>{
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data=await res.json();
    return data;
}