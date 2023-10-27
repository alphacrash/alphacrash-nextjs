'use client'

import { useEffect, useState } from 'react'
import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  const [renderOnClient, setRenderOnClient] = useState(false);

  useEffect(() => {
    setRenderOnClient(true);
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      {renderOnClient && (
        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  )
}

export default PostBody
