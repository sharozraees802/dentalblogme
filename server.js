const express = require("express");
const morgan = require("morgan");
// const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const next = require("next");
const mongoose = require("mongoose");
const multer = require("multer");
require("dotenv").config();
// bring routes
const blogRoutes = require("./routes/blog");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const tagRoutes = require("./routes/tag");
const formRoutes = require("./routes/form");
const sendinblue = require("./api/sendinblue");
const blog = require("./models/blog");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  mongoose
    .connect(process.env.DATABASE_CLOUD, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected"))
    .catch((err) => {
      console.log(err);
    });

  //server
  const server = express();

  // middlewares
  server.use(
    "/static/images",
    express.static(path.join(__dirname, "images"), {
      maxAge: dev ? "0" : "365d",
    })
  );
  server.use(
    "/static/videos",
    express.static(path.join(__dirname, "videos"), {
      maxAge: dev ? "0" : "365d",
    })
  );

  server.use(
    "/static/css",
    express.static(path.join(__dirname, "css"), {
      maxAge: dev ? "0" : "365d",
    })
  );
  server.use(
    "/uploads",
    express.static(path.join(__dirname, "uploads"), {
      maxAge: dev ? "0" : "365d",
    })
  );

  // middlewares
  server.use(morgan("dev"));
  server.use(express.json());
  server.use(cookieParser());
  server.use("/uploads", express.static("uploads"));
  // cors
  if (process.env.NODE_ENV === "development") {
    server.use(cors({ origin: `${process.env.CLIENT_URL}` }));
    //server.use(cors({ origin: "http://localhost:8000" }));
  }
  // routes middleware
  server.use("/api", blogRoutes);
  server.use("/api", authRoutes);
  server.use("/api", userRoutes);
  server.use("/api", categoryRoutes);
  server.use("/api", tagRoutes);
  server.use("/api", formRoutes);
  server.use(express.json()).post("/api/email", (req, res) => {
    const { msg = "" } = req.body;
    let sendSmtpEmail = {
      to: [
        {
          email: "tiagohisun@gmail.com",
        },
      ],
      params: {
        name: "Malith",
        subject: "Someone sent you a link",
        text: msg,
      },
    };
    sendinblue(sendSmtpEmail);
    res.send("success");
  });

  const DIR = "./uploads/";

  const Storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, DIR);
    },
    filename: function (req, file, cb) {
      const fileName = file.originalname
        .toLocaleLowerCase()
        .split(" ")
        .join("-");
      cb(null, fileName);
    },
  });
  const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  const upload = multer({
    storage: Storage,
    limits: {
      fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
  });
  require("./models/product");
  const Product = mongoose.model("Product");
  server.get("/getproduct", async function (req, res) {
    await Product.find({})
      .then((product) => res.json(product))
      .catch((e) => console.log(e));
  });

  server.delete("/deleteproduct/:_id", async function (req, res) {
    try {
      const id = req.params._id;
      const product = await Product.findByIdAndRemove({ _id: id });
      res.send(product);
    } catch (error) {
      res.send(error);
    }
  });

  server.get("/getproduct/:_id", async function (req, res) {
    await Product.find({ _id: id })
      .then((product) => res.json(product))
      .catch((e) => console.log(e));
  });

  server.get(`/getproductcategory/:cate`, async function (req, res) {
    let cate = req.params.cate;

    await Product.find({
      $or: [{ category: cate }, { model: cate }, { brand: cate }],
    })
      .then((product) => res.json(product))
      .catch((e) => console.log(e));
  });

  server.get("/getrecentdata", async function (req, res) {
    try {
      const product = await Product.find({}).sort({ _id: -1 }).limit(4);
      res.send(product);
    } catch (error) {
      console.log(error);
    }
  });

  server.get(`/getcategory`, async function (req, res) {
    try {
      const product = await Product.find({});
      res.send(product);
    } catch (error) {
      console.log(error);
    }
  });

  server.post("/addproduct", upload.any(), async function (req, res) {
    try {
      const url = req.protocol + "://" + req.get("host");
      const product = new Product();
      product.year = req.body.year;
      product.model = req.body.model;
      product.category = req.body.category;
      product.brand = req.body.brand;
      product.location = req.body.location;
      product.description = req.body.description;
      product.seller = req.body.seller;
      product.price = req.body.price;
      for (let i = 0; i < req.files.length; i++) {
        product.productImage[i] = url + "/uploads/" + req.files[i].filename;
      }

      await product.save();
      res.send(product);
    } catch (error) {
      console.log(error);
    }
  });

  require("./models/blog");
  const Blog = mongoose.model("Blog");

  server.get(`/getblog`, async function (req, res) {
    await Blog.find({})
      .then((blog) => res.send(blog))
      .catch((e) => console.log(e));
  });
  server.delete("/deleteblog/:_id", async function (req, res) {
    try {
      const _id = req.params._id;
      const blog = await Blog.findByIdAndRemove(_id);
      res.send(blog);
    } catch (error) {
      res.send(error);
    }
  });

  server.get(`/getblog/search/:title`, async function (req, res) {
    let title = req.params.title;
    await Blog.find({
      title: { $regex: new RegExp("^" + title.toLowerCase(), "i") },
    })
      .then((blog) => res.send(blog))
      .catch((e) => console.log(e));
  });
  server.get(`/getblog/:_id`, async function (req, res) {
    let id = await req.params._id;
    await Blog.find({ _id: id })
      .then((blog) => res.send(blog))
      .catch((e) => console.log(e));
  });

  server.post("/addblog", upload.any(), async function (req, res) {
    try {
      const url = req.protocol + "://" + req.get("host");
      const blog = new Blog();
      blog.title = req.body.title;
      blog.slug = Math.random(102) * 100000000;
      blog.body = req.body.body;
      blog.excerpt = req.body.excerpt;
      blog.category = req.body.category;
      blog.postedBy = req.body.postedBy;
      blog.tags = req.body.tags;
      blog.photo = url + "/uploads/" + req.files[0].filename;
      await blog.save();
      res.send(blog);
    } catch (error) {
      console.log(error);
    }
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });
  // port
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`> Read on http://localhost:${PORT}`);
  });
});
