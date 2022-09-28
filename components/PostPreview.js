import { useEffect, useState } from "react";
import Link from "next/link";

function PostPreview({ title, body }) {
  const [joinedTitle, setTitle] = useState(title);
  const [truncatedBody, setBody] = useState(body);
  useEffect(() => {
    setTitle(title.split(" ").join("-"));
    console.log(joinedTitle);
    setBody(body.split("").slice(0, 25).join(""));
    console.log(truncatedBody);
  });
  return (
    <Link href="/[joinedTitle]" as={`/${joinedTitle}`}>
      <a className="postPreview">
        <h3>{title}</h3>
        <p style={{ width: "100%" }}>
          {truncatedBody}...<span className="cerc">&rarr;</span>
        </p>
      </a>
    </Link>
  );
}
export default PostPreview;
