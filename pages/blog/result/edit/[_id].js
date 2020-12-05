import React, { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import server from "../../../../config/index";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});
export default function Createblog({ blog }) {
  const router = useRouter();
  const [title, setTitle] = useState(blog[0].title);
  const [body, setBody] = useState(blog[0].body);
  const [excerpt, setExcerpt] = useState(blog[0].excerpt);
  const [category, setCategory] = useState(blog[0].category);
  const [writtenby, setWrittenby] = useState(blog[0].postedBy);
  const [photo, setPhoto] = useState("");
  const [tags, setTags] = useState(blog[0].tags[0]);
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState("snow");
  useEffect(() => {
    axios.get(`${server}/getblog`).then((res) => {
      if (res.length < -1) {
        return;
      }
      const { data } = res;
      setData(data);
    });
  }, []);

  const quillChange = (value) => {
    setBody(value);
  };
  const handleThemeChange = () => {
    setTheme("snow");
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .delete(`${server}/deleteblog/${blog[0]._id}`, {
        _id: blog[0]._id,
      })
      .then((res) => {
        console.log(res);
        //     var regex = /(<([^>]+)>)/ig
        // const body = body.replace(regex, " ");
        const fn = new FormData();
        fn.append("title", title);
        fn.append("body", body);
        fn.append("excerpt", excerpt);
        fn.append("postedBy", writtenby);
        fn.append("photo", photo);
        fn.append("category", category);
        fn.append("tags", tags);
        axios
          .post(`${server}/addblog`, fn)
          .then((res) => {
            console.log(res);
            setMessage("Update Successfully...");
          })
          .catch((err) => {
            console.log(err);
            setMessage("Something Wrong...");
          });
      })
      .catch((err) => {
        console.log(err);
        setMessage("Something Wrong...");
      });
  };
  console.log(blog);
  const deleteblog = (e) => {
    e.preventDefault();
    axios
      .delete(`${server}/deleteblog/${blog[0]._id}`, {
        _id: blog[0]._id,
      })
      .then((res) => {
        console.log(res);
        setBody("");
        setTitle("");
        setExcerpt("");
        setWrittenby("");
        setTags("");
        setCategory("");
        setMessage("Delete Successfully...");
      })
      .catch((err) => {
        console.log(err);
        setMessage("Something wrong...");
      });
  };
  const categorylist = data.map((item) => item.category);
  const categorylistItem = [...new Set(categorylist)];
  const readonly = false;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <span onClick={() => router.push("/blog")}>
              <a>&#8592;Back</a>
            </span>
            <h1>Edit Blog</h1>
            <button onClick={deleteblog} className="btn btn-primary">
              Delete
            </button>
          </div>
          <p>{message}</p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={title}
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Body</label>
              <ReactQuill
                modules={Createblog.modules}
                formats={Createblog.formats}
                theme={theme}
                value={body}
                onChange={quillChange}
                readOnly={readonly}
              />

              {/* <textarea rows="5" cols="5"  name="body" value={body} className="form-control" onChange={this.onInputchange} required /> */}
            </div>
            <div className="form-group">
              <label>Excerpt</label>
              <input
                type="text"
                name="excerpt"
                value={excerpt}
                className="form-control"
                onChange={(e) => setExcerpt(e.target.value)}
                required
              />
            </div>
            <p>Category List</p>
            <div className="input-group mb-3">
              <select
                className="custom-select"
                id="inputGroupSelect01"
                onChange={handleCategoryChange}
              >
                {categorylistItem.map((item) => {
                  return <option key={item}>{item}</option>;
                })}
              </select>
            </div>
            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                disabled
                name="category"
                value={category}
                className="form-control"
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Written By</label>
              <input
                type="text"
                name="writtenby"
                value={writtenby}
                className="form-control"
                onChange={(e) => setWrittenby(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Tags</label>
              <input
                type="text"
                name="tags"
                value={tags}
                className="form-control"
                onChange={(e) => setTags(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Photo</label>
              <input
                type="file"
                name="photo"
                className="form-control"
                onChange={(e) => setPhoto(e.target.files[0])}
                required
              />
            </div>
            <input type="submit" className="btn btn-primary" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

Createblog.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Createblog.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export async function getServerSideProps({ query }) {
  const { _id } = query;
  const res = await fetch(`${server}/getblog/${_id}`);
  const blog = await res.json();
  return {
    props: {
      blog,
    },
  };
}
