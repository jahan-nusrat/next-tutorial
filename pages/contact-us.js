import { useRouter } from 'next/router'

export default function contactUs() {
    const router=useRouter()
    console.log(router)
    return (
        <div>
            <h3>This is your {router.route} page</h3>
        </div>
    )
}
