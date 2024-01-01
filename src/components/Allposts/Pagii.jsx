import React from "react";
import "./Pagii.css";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchingData } from "../Sclices/ListSclices";

export default function Pagii() {
  const dispatch = useDispatch();
  // calling the apiiii
  // const [allPost, setallPost] = useState([]);
  const [cpage, setcpage] = useState(1);
  const [perpage, setperpage] = useState(5);

  const [pagenumberlimit, setpagenumberlimit] = useState(5);
  const [maxpage, setmaxpage] = useState(5);
  const [minpage, setminpage] = useState(0);

  const allPost = useSelector((state) => {
    return state.showong.data;
  });
  useEffect(() => {
    dispatch(fetchingData());
  }, [dispatch]);
  console.log("allpost,,,", allPost);
  // useEffect(() => {
  //   setallPost(showingadta);
  // }, [showingadta, dispatch]);
  // console.log("this is alll oistr", allPost);
  const lastpost = cpage * perpage; // this is 1*5 we want 5
  const fpage = lastpost - perpage; //first page
  const post = allPost.slice(fpage, lastpost);
  console.log("thisiiisisisisisisisisi", allPost.slice(fpage, lastpost));
  const allPostLength = allPost.length;
  // this is for paginations ceil method is used to roound near intiger
  let pages = [];
  for (let i = 1; i <= Math.ceil(allPostLength / perpage); i++) {
    pages.push(i);

    // console.log(i);
  }

  const handelNext = () => {
    setcpage(cpage + 1);
    if (cpage + 1 > maxpage) {
      //cpage+1=6eg then greater thrn 5
      setmaxpage(maxpage + pagenumberlimit); //5+5
      setminpage(minpage + pagenumberlimit); //0+5
    }
  };
  const handelback = () => {
    setcpage(cpage - 1);
    if ((cpage - 1) % pagenumberlimit === 0) {
      setmaxpage(maxpage - pagenumberlimit);
      setminpage(minpage - pagenumberlimit);
    }
  };

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
              post.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.id}</td>
                  </tr>
                );
              })}
          </tbody>
        </tabel>
      </div>
      {/* this are buttons  forn  pages change */}
      <svg
        viewBox="0 0 64 64"
        onClick={() => setcpage(1)}
        fill="currentColor"
        height="1.5em"
        width="1.5em"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinejoin="bevel"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M32.936 48.936l-17-17 17-17"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinejoin="bevel"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M47.936 48.936l-17-17 17-17"
        />
      </svg>
      {/* <button onClick={() => setcpage(1)}>firstpage</button> */}
      {/* <button onClick={() => dispatch(fetchingData())}>setdata</button> */}
      {/* <button
        disabled={cpage == [1] ? true : false}
        onClick={() => setcpage(cpage - 1)}
      >
        back
      </button> */}
      <svg
        viewBox="0 0 64 64"
        fill="currentColor"
        height="1.5em"
        width="2em"
        disabled={cpage == [1] ? true : false}
        onClick={handelback}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinejoin="bevel"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M37 15L20 32l17 17"
        />
      </svg>
      {/* <button disabled={cpage == [1] ? true : false} onClick={handelback}>
        back
      </button> */}
      {pages.map((page, index) => {
        if (index < maxpage + 1 && index > minpage - 1) {
          // if (index <= 4) {
          return (
            <>
              <button
                key={index}
                className={cpage == page ? "active" : null}
                onClick={() => setcpage(page)}
              >
                {page}
              </button>
            </>
          );
        } else {
          return null;
        }
      })}
      <svg
        viewBox="0 0 64 64"
        fill="currentColor"
        height="1.5em"
        width="1.5em"
        disabled={cpage == [pages.length] ? true : false}
        onClick={handelNext}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinejoin="bevel"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M27 15l17 17-17 17"
        />
      </svg>
      {/* <button
        disabled={cpage == [pages.length] ? true : false}
        onClick={handelNext}
      >
        Next
      </button> */}
      {/* <button
        disabled={cpage == [pages.length] ? true : false}
        onClick={() => {
          setcpage(cpage + 1);
        }}
      >
        Next
      </button> */}
      <svg
        viewBox="0 0 64 64"
        fill="currentColor"
        height="1.5em"
        width="1.5em"
        onClick={() => setcpage(pages.length)}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinejoin="bevel"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M31 15l17 17-17 17"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinejoin="bevel"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M16 15l17 17-17 17"
        />
      </svg>
      {/* <button onClick={() => setcpage(pages.length)}>lastpage</button> */}
    </div>
  );
} // first declare the curent page and page per content and then  set last page as curnt page * perpage
// then f page as last page - perpage
// then slice all post
// pagination empty list then loop for  alldata/perpage
// push i
// map for pagesh list and map accordinflin
