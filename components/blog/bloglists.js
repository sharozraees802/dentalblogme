import React from 'react'
import Link from 'next/link';
export default function Bloglists({ blog, category }) {
  let filter = blog.filter((item) => item.category === category);
  return (
    <ul style={{ listStyleType: "none" }}>
      {filter.map((listofblog) => {
        return (
          <Link
            href="result/[_id]"
            as={`result/${listofblog._id}`}
            key={listofblog._id}
          >
            <a>
              <li style={{ fontSize: "18px", padding: "5px" }}>
                {listofblog.title}
              </li>
            </a>
          </Link>
        );
      })}
    </ul>
  );
}
