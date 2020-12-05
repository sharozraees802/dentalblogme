import React, { useState, useEffect } from "react";
import axios from "axios";
import server from "../config/index";

const AddProduct = () => {
  const [year, SetYear] = useState("");
  const [model, setMode] = useState("");
  const [category, setCatgory] = useState("");
  const [brand, setBrand] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [seller, setSeller] = useState("");
  const [image, setImage] = useState([]);
  const [price, setPrice] = useState(0);
  const [dropdowndata, setDropdata] = useState([]);
  const [success, setSuccess] = useState("");

  //uniqui category
  const uniqCat = dropdowndata.map((item) => item.category);
  let uniq = [...new Set(uniqCat)];
  //uniqui brand
  const uniqBr = dropdowndata.map((item) => item.brand);
  let uniqB = [...new Set(uniqBr)];

  //uniqui model
  const uniqMd = dropdowndata.map((item) => item.model);
  let uniqM = [...new Set(uniqMd)];
  const fileChanges = (e) => {
    setImage(e.target.files);
  };

  const changeBrand = (e) => {
    setBrand(e.target.value);
  };
  const changeCategory = (e) => {
    setCatgory(e.target.value);
  };
  const changeModel = (e) => {
    setMode(e.target.value);
  };
  const HandleSaveData = (e) => {
    e.preventDefault();
    const fn = new FormData();
    fn.append("model", model);
    fn.append("year", year);
    fn.append("category", category);
    fn.append("brand", brand);
    fn.append("description", description);
    fn.append("location", location);
    fn.append("seller", seller);
    fn.append("price", price);
    for (let i = 0; i < image.length; i++) {
      fn.append("productImage", image[i]);
    }
    axios
      .post(`localhost:8000/addproduct`, fn)
      .then((res) => {
        console.log(res);
        setBrand("");
        setPrice("");
        setSeller("");
        setLocation("");
        setDescription("");
        setCatgory("");
        SetYear("");
        setMode("");
        setImage("");

        setSuccess("Successfully Added");
      })
      .catch((err) => {
        setSuccess("Failed...");
      });
  };
  useEffect(() => {
    fetch("localhost:8000/getproduct")
      .then((res) => res.json())
      .then((result) => {
        setDropdata(result);
      });
  }, []);
  return (
    <div className="container">
      <h1>Add Product</h1>
      {success}
      <div className="row">
        <div className="col-md-6">
          <form
            className="form"
            onSubmit={HandleSaveData}
            encType="multipart/form-data"
          >
            <div className="form-group">
              <label>Model</label>
              <input
                type="text"
                value={model}
                className="form-control"
                onChange={(e) => setMode(e.target.value)}
                placeholder="Model"
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                value={category}
                className="form-control"
                onChange={(e) => setCatgory(e.target.value)}
                placeholder="Category"
              />
            </div>
            <div className="form-group">
              <label>Brand</label>
              <input
                type="text"
                value={brand}
                className="form-control"
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Brand"
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                value={location}
                className="form-control"
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                value={description}
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </div>
            <div className="form-group">
              <label>Seller</label>
              <input
                type="text"
                value={seller}
                className="form-control"
                onChange={(e) => setSeller(e.target.value)}
                placeholder="Seller"
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                value={price}
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />
            </div>
            <div className="form-group">
              <label>Year</label>
              <input
                type="text"
                value={year}
                className="form-control"
                onChange={(e) => SetYear(e.target.value)}
                placeholder="Year"
              />
            </div>
            <h5>Upload Image</h5>
            <span>Min=1 Max=5</span>
            <div>
              <input
                type="file"
                name="image"
                onChange={fileChanges}
                required
                multiple
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <h5>Category</h5>
          <div className="input-group mb-3">
            <select
              className="custom-select"
              id="inputGroupSelect01"
              onChange={changeCategory}
            >
              <option selected>Choose...</option>
              {uniq.map((item) => {
                return <option key={item}>{item}</option>;
              })}
            </select>
          </div>
          <h5>Brand</h5>
          <div className="input-group mb-3">
            <select
              className="custom-select"
              id="inputGroupSelect01"
              onChange={changeBrand}
            >
              <option selected>Choose...</option>
              {uniqB.map((item) => {
                return <option key={item}>{item}</option>;
              })}
            </select>
          </div>
          <h5>Model</h5>
          <div className="input-group mb-3">
            <select
              className="custom-select"
              id="inputGroupSelect01"
              onChange={changeModel}
            >
              <option selected>Choose...</option>
              {uniqM.map((item) => {
                return <option key={item}>{item}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;
