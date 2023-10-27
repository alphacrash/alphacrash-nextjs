import Container from "@/components/Container"
import PrismRunner from "@/components/PrismRunner"
import Layout from "@/components/Layout"
import PostBody from "@/components/PostBody"
import PostHeader from "@/components/PostHeader"
import PostType from "@/interfaces/Post"
import { getPostBySlug } from "@/lib/api"
import { SITE_NAME } from "@/lib/constants"
import markdownToHtml from "@/lib/markdownToHtml"
import Head from "next/head"
import Link from 'next/link'

type Props = {
    post: PostType
    morePosts: PostType[]
    preview?: boolean
}

const BackIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 mr-2"
    >
        <path d="M19 12H6M12 5l-7 7 7 7" />
    </svg>
)

const Page = async ({ params }: { params: { slug: string } }) => {
    const post = getPostBySlug(params.slug, [
        "title",
        "date",
        "slug",
        "content",
        "coverImage",
    ])
    const content = await markdownToHtml(post.content || "")
    const title = `${post.title} | ${SITE_NAME}`

    return (
        <>
            <Layout>
                <Container>
                    <Link href="/" className="text-blue-500 hover:text-blue-700 flex items-center">
                        <BackIcon /> back to home
                    </Link>
                    <article className="mb-32">
                        <Head>
                            <title>{title}</title>
                        </Head>
                        <PostHeader
                            title={post.title}
                            coverImage={post.coverImage}
                            date={post.date}
                        />
                        <PostBody content={content} />
                    </article>
                </Container>
            </Layout>
            <PrismRunner />
        </>
    )
}

export default Page