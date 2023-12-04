"use client";

import React, { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import CodeBlock from "./CodeBlock";
import './styles.css'


//TODO Darkmode Lightmode setting if i have time.
function PostView() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(`/IMAGETEST.md`)
      .then((m) => {
        return m.text();
      })
      .then((md) => {
        setMarkdown(md);
      });
  }, []);

  return (
    <div className="markdown">
      <ReactMarkdown
        skipHtml={false}
        components={{
          code: CodeBlock,
        }
        }

        remarkPlugins={[
          remarkGfm,
          remarkBreaks,
          remarkRehype,
          rehypeSlug,
          rehypeRaw,
        ]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default PostView;
