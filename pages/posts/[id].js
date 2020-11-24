import {useRouter} from 'next/router';

/*-------------------------FOR STATIC SITE GENERATION---------------------------------------*/
/* export default function Post({id}) {
    const postData= posts.find(post=>{
        return post.id === parseInt(id)
    })
    return (
        <div>
            <h2>{postData.title}</h2>
            <p>{postData.body}</p>
            <h5>I am id: {id}</h5>
        </div>
    )
} */

/* Post.getInitialProps= async ({query})=>{
    const {id} = query;
    console.log('Query', query);
    return {id}
} */

/*-------------------------FOR SERVER SITE RENDERING---------------------------------------*/
export default function Post({postData}) {
    const router = useRouter()
    if(router.isFallback){
        return <div>Loading...</div>
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <img src={"/images/post/" + postData.id + ".png"} />
                    <h2>{postData.title}</h2>
                    <p>{postData.body}</p>
                </div>
            </div>
            
        </div>
    )
}

export async function getStaticPaths() {
    const paths=["/posts/1", "/posts/2"]
    return {paths, fallback:true}
}

export async function getStaticProps({query, params}) {
    const {id} = query || params;
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const postData=await res.json();
    return{
        props:{ postData }
    }
}

/* export async function getServerSideProps({query}){
    const {id} = query;
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const postData=await res.json();
    return{
        props:{ postData }
    }
} */