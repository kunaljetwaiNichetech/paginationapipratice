import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Pagii() {
  // calling the apiiii
  const [allPost, setallPost] = useState([]);
  const [cpage, setcpage] = useState(1);
  const [perpage, setperpage] = useState(5);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => setallPost(res.data));
      // ...
    }
    fetchData();
  }, []);
  const lastpost = cpage * perpage; // this is 1*5 we want 5

  const fpage = lastpost - perpage; //first page
  const post = allPost.slice(fpage, lastpost);
  console.log("thisiiisisisisisisisisi", allPost.slice(fpage, lastpost));
  const allPostLength = allPost.length;
  // this is for paginations
  let pages = [];
  for (let i = 1; i <= Math.ceil(allPostLength / perpage); i++) {
    pages.push(i);
    // console.log(i);
  }
  return (
    <div>
      <div>
        {/* this is the tabel to show the details */}
        <tabel>
          <thead>
            <tr>
              <th>Title</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {allPost &&
              post.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.title}</td>
                    <td>{item.id}</td>
                  </tr>
                );
              })}
          </tbody>
        </tabel>
      </div>
      {/* this are buttons  forn  pages change */}

      <button onClick={() => setcpage(1)}>firstpage</button>
      <button onClick={() => setcpage(cpage + 1)}>Next</button>
      {pages.map((page, index) => {
        if (index <= 4) {
          return (
            <>
              <button key={index} onClick={() => setcpage(page)}>
                {page}
              </button>
            </>
          );
        }
      })}
      <button onClick={() => setcpage(cpage - 1)}>back</button>
      <button onClick={() => setcpage(pages.length)}>lastpage</button>
    </div>
  );
}

// first declare the curent page and page per content and then  set last page as curnt page * perpage
// then f page as last page - perpage
// then slice all post
// pagination empty list then loop for  alldata/perpage
// push i
// map for pagesh list and map accordinflingy.....
