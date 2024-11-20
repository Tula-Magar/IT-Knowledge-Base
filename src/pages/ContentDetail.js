import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import contentData from "../Data/contentDataList";

function ContentDetail({ searchTerm }) {
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const [isMarkdown, setIsMarkdown] = useState(true);
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);
  const leftPanelRef = useRef(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        if (id.startsWith("js")) {
          const component = await import(
            `../content/justReact/${id.replace("js-", "")}`
          );
          setContent(() => component.default);
          setIsMarkdown(false);
        } else {
          const markdown = await import(`../content/markDown/${id}.md`);
          const response = await fetch(markdown.default);
          const text = await response.text();
          setContent(text);
          setIsMarkdown(true);
        }
      } catch (error) {
        console.error("Error loading content:", error);
        setContent("# Content not found");
        setIsMarkdown(true);
      }
    };

    loadContent();
  }, [id]);

  const filteredContent =
    isMarkdown && searchTerm
      ? content && content.toLowerCase().includes(searchTerm.toLowerCase())
        ? content
        : "# No matching content found"
      : content;

  const handleClickOutside = (event) => {
    if (leftPanelRef.current && !leftPanelRef.current.contains(event.target)) {
      setIsLeftPanelOpen(false);
    }
  };

  useEffect(() => {
    if (isLeftPanelOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLeftPanelOpen]);

  const toggleLeftPanel = (event) => {
    event.stopPropagation();
    setIsLeftPanelOpen((prev) => !prev);
  };

  const relatedContent = contentData.filter(
    (item) =>
      item.id !== id &&
      typeof content === "string" &&
      item.title.includes(content.split(" ")[0])
  );

  return (
    <div className="three-panel-layout">
      <div
        className={`hamburger-menu ${isLeftPanelOpen ? "close" : ""}`}
        onClick={toggleLeftPanel}
      >
        {isLeftPanelOpen ? "✖" : "☰"}
      </div>

      <div
        ref={leftPanelRef}
        className={`panel panel-left ${isLeftPanelOpen ? "open" : ""}`}
      >
        <h2>Categories</h2>
        <ul>
          {contentData.map((item) => (
            <li key={item.id}>
              <Link
                to={`/content/${item.id}`}
                onClick={() => setIsLeftPanelOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="main-content-container">
        <div className="panel panel-center">
          <h2>Main Content</h2>
          <div className="content-display">
            {isMarkdown ? (
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={dark}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {filteredContent}
              </ReactMarkdown>
            ) : (
              content && React.createElement(content)
            )}
          </div>
        </div>

        <div className="panel panel-right">
          <h2>Related Content</h2>
          {relatedContent.map((item) => (
            <p key={item.id}>
              <Link to={`/content/${item.id}`}>{item.title}</Link>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContentDetail;
