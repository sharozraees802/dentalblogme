import React from "react";
import axios from "axios";
// import ReactQuill from 'react-quill';
import server from "../config/index";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});
export default class Createblog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      excerpt: "",
      category: "",
      writtenby: "",
      photo: null,
      message: "",
      tags: [],
      data: [],
      theme: "snow",
    };
  }
  // state = {

  // }

  componentDidMount() {
    axios.get(`${server}/getblog`).then((res) => {
      if (res.length < -1) {
        return;
      }
      const { data } = res;
      this.setState({ data: data });
    });
  }
  quillChange = (value) => {
    this.setState({ body: value });
  };
  handleThemeChange = () => {
    this.setState({ theme: "snow" });
  };
  onInputchange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onFileChange = (e) => {
    this.setState({
      [e.target.name]: e.target.files[0],
    });
  };
  handleCategoryChange = (e) => {
    this.setState({ category: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    var regex = /(<([^>]+)>)/gi;
    const body = this.state.body.replace(regex, " ");
    const fn = new FormData();
    fn.append("title", this.state.title);
    fn.append("body", body);
    fn.append("excerpt", this.state.excerpt);
    fn.append("postedBy", this.state.writtenby);
    fn.append("photo", this.state.photo);
    fn.append("category", this.state.category);
    fn.append("tags", this.state.tags);
    axios
      .post(`localhost:8000/addblog`, fn)
      .then((res) => {
        this.setState({
          message: "Success",
          title: "",
          body: "",
          excerpt: "",
          writtenby: "",
          photo: "",
          category: "",
          tags: "",
        });
      })
      .catch((err) => {
        this.setState({
          message: "Failed",
        });
      });
  };
  render() {
    const categorylist = this.state.data.map((item) => item.category);
    const categorylistItem = [...new Set(categorylist)];

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Add Blog</h1>
            <p>{this.state.message}</p>
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  className="form-control"
                  onChange={this.onInputchange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Body</label>
                <ReactQuill
                  modules={Createblog.modules}
                  formats={Createblog.formats}
                  theme={this.state.theme}
                  value={this.state.body}
                  onChange={this.quillChange}
                />

                {/* <textarea rows="5" cols="5"  name="body" value={this.state.body} className="form-control" onChange={this.onInputchange} required /> */}
              </div>
              <div className="form-group">
                <label>Excerpt</label>
                <input
                  type="text"
                  name="excerpt"
                  value={this.state.excerpt}
                  className="form-control"
                  onChange={this.onInputchange}
                  required
                />
              </div>
              <p>Category List</p>
              <div className="input-group mb-3">
                <select
                  className="custom-select"
                  id="inputGroupSelect01"
                  onChange={this.handleCategoryChange}
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
                  name="category"
                  value={this.state.category}
                  className="form-control"
                  onChange={this.onInputchange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Written By</label>
                <input
                  type="text"
                  name="writtenby"
                  value={this.state.writtenby}
                  className="form-control"
                  onChange={this.onInputchange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Tags</label>
                <input
                  type="text"
                  name="tags"
                  value={this.state.tags}
                  className="form-control"
                  onChange={this.onInputchange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Photo</label>
                <input
                  type="file"
                  name="photo"
                  className="form-control"
                  onChange={this.onFileChange}
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
