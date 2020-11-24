import Link from 'next/link';
import styles from './Post.module.scss';

export default function Post({id,title}) {
    return (
        <>
        <img src={"/images/post/"+id+".png"} className="img-fluid" />
            <p className={styles.paraHeading}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                    <a className={styles.anchor}>{id}/ {title}</a>
                </Link>
            </p>
        </>
    )
}
