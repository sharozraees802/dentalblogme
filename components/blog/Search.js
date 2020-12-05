import Link from "next/link";
import renderHTML from "react-render-html";
import { useState, useEffect } from "react";
import { listSearch } from "../../actions/blog";
import { BsSearch } from "react-icons/bs";
import server from "../../config/index";

const Search = ({ setTerm, term, setSearch }) => {
  // const  = async (saerchterm) => {
  //   const resp = await fetch(`${server}/getblog/search/${saerchterm}`)
  //   const result = await resp.json()
  //   console.log(result)
  // }
  const onsubmit = (e) => {
    e.preventDefault();
    setSearch(term);
  };

  return (
    <form onSubmit={onsubmit}>
      <div className="row">
        <div className="col-md-12">
          <div style={{ display: "flex", marginTop: "10px" }}>
            <input
              type="text"
              value={term}
              style={{
                width: "250px",
                height: "35px",
                backgroundColor: "#f8f8f8",
                border: "1px solid #dadada",
              }}
              placeholder="Search blogs"
              onChange={(e) => setTerm(e.target.value)}
            />
            <button
              style={{
                width: "50px",
                height: "35px",
                position: "relative",
                backgroundColor: "#f8f8f8",
                border: "1px solid #dadada",
                borderRadius: "2px",
              }}
              type="submit"
            >
              <BsSearch
                color="gray"
                size={16}
                style={{ position: "absolute", top: "25%", left: "30%" }}
              />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Search;
