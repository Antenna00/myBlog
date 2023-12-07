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
import YoutubeBlock from "./YoutubeBlock";
import BlogImage from "./BlogImage";


//TODO Darkmode Lightmode setting if i have time.
//TODO TRのデザイン
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
          img:({ node, ...props}) => <BlogImage src={props.src} alt={props.alt} {...props}/>,
          code: CodeBlock,
          a: ({ node, ...props }) => <YoutubeBlock url={props.href ? props.href : "No href detected"} children={props.children} />
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
