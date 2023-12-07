import React, { useState, useEffect } from "react";
import copy from "copy-to-clipboard"; // Use clipboard-copy instead of copy-to-clipboard
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = (props) => {
    const { children, className } = props;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timeoutId = setTimeout(() => {
        setCopied(false);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [copied]);


  const handleCopyClick = () => {
    copy(children);

    setCopied(true);
  };

  const isBlockCode = className && className.startsWith("language-");

  if (!isBlockCode) {
    return <code>{children}</code>;
  }

  return (
    <div>
      {isBlockCode && (
        <div>
          <button
            className={`copy-button ${copied ? "copied" : ""} border-2 border-blue-200 py-1 px-3 hover:bg-blue-200`}
            onClick={handleCopyClick}
          >
            {copied ? "Copied!" : "Copy"}
          </button>

          <SyntaxHighlighter
            PreTag="div"
            children={String(children).replace(/\n$/, "")}
            language={
              isBlockCode ? className.replace("language-", "") : undefined
            }
            style={isBlockCode ? duotoneDark : undefined}
          />
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
