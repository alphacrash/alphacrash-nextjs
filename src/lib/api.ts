import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import PostType from "@/interfaces/Post"

const postsDirectory = join(process.cwd(), "_posts")

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    type Items = {
        [key: string]: string
    }

    const items: Items = {}

    // Ensure only minimal needed data is exposed
    fields.forEach((field) => {
        if (field === "slug") {
            items[field] = realSlug
        }
        if (field === "content") {
            items[field] = content
        }
        if (typeof data[field] !== "undefined") {
            items[field] = data[field]
        }
    })

    return items
}

export function getAllPosts(fields: string[] = []): PostType[] {
    const slugs = getPostSlugs()
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        // Sort by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
        .map((post) => {
            const items: PostType = {
                slug: post.slug,
                title: post.title,
                date: post.date,
                coverImage: post.coverImage,
                excerpt: post.excerpt,
                content: post.content,
            }
            return items
        })
    return posts
}