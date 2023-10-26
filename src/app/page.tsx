import Container from "@/components/Container";
import HeroPost from "@/components/HeroPost";
import Intro from "@/components/Intro";
import Layout from "@/components/Layout";
import MoreStories from "@/components/MoreStories";
import PostType from "@/interfaces/Post";
import { getAllPosts } from "@/lib/api";
import Head from "next/head";

function Home() {
  const allPosts: PostType[] = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ]);
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)


  return <>
    <Layout>
      <Head>alphacrash</Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  </>
}

export default Home;