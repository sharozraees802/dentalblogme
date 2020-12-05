import { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import Search from "./blog/Search";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getSearchData() {
      const resp = await fetch(
        `http://localhost:8000/getblog/search/${search}`
      );
      const result = await resp.json();
      setData(result);
    }
    getSearchData();
  }, [search, term]);

  console.log(data);
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Nav
            className="navbar navbar-expand-lg"
            style={{ height: "90px", lineHeight: "90px" }}
          >
            <Navbar className="navbar navbar-expand-lg" expand="md">
              <Link href="/">
                <NavLink className="navbar-brand" style={{ fontSize: "40px" }}>
                  <img
                    src="/static/images/logo/logo.png"
                    style={{ cursor: "pointer" }}
                  />
                </NavLink>
              </Link>

              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav
                  className="navbar navbar-expand-lg"
                  style={{ marginLeft: "40%" }}
                  navbar
                >
                  <>
                    <NavItem>
                      <Link href="/">
                        <NavLink style={{ cursor: "pointer" }}>Home</NavLink>
                      </Link>
                    </NavItem>
                  </>

                  <>
                    <NavItem style={{ marginLeft: "5%" }}>
                      <Link href="/about">
                        <NavLink style={{ cursor: "pointer" }}>About</NavLink>
                      </Link>
                    </NavItem>
                  </>

                  <>
                    <NavItem style={{ marginLeft: "5%" }}>
                      <Link href="/classified">
                        <NavLink style={{ cursor: "pointer" }}>
                          Classifieds
                        </NavLink>
                      </Link>
                    </NavItem>
                  </>

                  <>
                    <NavItem style={{ marginLeft: "5%" }}>
                      <Link href="/blog">
                        <NavLink style={{ cursor: "pointer" }}>Blog</NavLink>
                      </Link>
                    </NavItem>
                  </>

                  <>
                    <NavItem style={{ marginLeft: "5%", cursor: "pointer" }}>
                      <Link href="/services ">
                        <NavLink>Solutions </NavLink>
                      </Link>
                    </NavItem>
                  </>

                  <>
                    <NavItem>
                      <Link href="/contact">
                        <NavLink
                          style={{ marginLeft: "5%", cursor: "pointer" }}
                        >
                          Contact
                        </NavLink>
                      </Link>
                    </NavItem>
                  </>
                </Nav>
              </Collapse>
              <div
                style={{
                  marginTop: "35px",
                  marginLeft: "340px",
                  height: "90px",
                  lineHeight: "90px",
                }}
              >
                <Search setTerm={setTerm} term={term} setSearch={setSearch} />
              </div>
            </Navbar>
          </Nav>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="container">
            <div>
              {data.map((item) => {
                return (
                  <Link
                    key={item._id}
                    href="blog/result/[_id]"
                    as={`blog/result/${item._id}`}
                  >
                    <div
                      style={{
                        marginBottom: "5px",
                        color: "gray",
                        fontSize: "16px",
                      }}
                    >
                      {item.title}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
