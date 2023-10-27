import { remark } from 'remark'
import html from 'remark-html'
import rehypeHighlight from 'rehype-highlight'

export default async function markdownToHtml(markdown: string) {
    const result = await remark()
        .use(html)
        .use(rehypeHighlight)
        .process(markdown)

    return result.toString()
}
