import Post from './components/Post/Post'

export default function index({posts}) {
    return (
        <div className="container">
            <ul className="row">
            {
                posts.map((post, idx)=>{
                    return(
                        <li className="col-md-3" key={idx}>
                            <Post {...post} />
                        </li>
                    ) 
                })
            }
            </ul>
        </div>
    )
}

/*-------------------------FOR STATIC SITE GENERATION---------------------------------------*/
export async function getStaticProps(){
    const res= await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts=await res.json();
    return{
        props:{ posts }
    }
}

/*-------------------------FOR SERVER SITE RENDERING---------------------------------------*/
/* export async function getServerSideProps(){
    const res= await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts=await res.json();
    return{
        props:{ posts }
    }
} */
