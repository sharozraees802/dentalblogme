import React from 'react';
import { GoMail } from 'react-icons/go';
import { FaRegClock } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { APP_NAME } from '../../config';
import { signout, isAuth } from '../../actions/auth';
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
  DropdownItem
} from 'reactstrap';
import Search from './../blog/Search';

const Uheader = (props) => {
  
  return (
    
    <React.Fragment>
      <Navbar style={{ fontSize: '13px', lineHeight:'15px', backgroundColor:'#001f24'}} expand="md">
        <Link href="/">
          <NavLink style={{marginLeft:'20px', color:'white'}}>News &  Media</NavLink>
        </Link>
        
        <NavbarToggler  />
        <Collapse navbar>
          <Nav className="ml-auto" navbar style={{marginRight:'80px'}}>
            <Nav >
            <NavItem>
                  <Link href="/signin">
                    <NavLink  style={{color:'white'}}><GoMail style={{margin:'0 6'}}/> contato@dental04.com</NavLink>
                  </Link>
                </NavItem>
            
                <NavItem>
                  <Link href="#">
                    <NavLink style={{ color:'white'}}><FaRegClock style={{margin:'0 6 1'}} /> Mon-Sat: 09h-18h</NavLink>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link href="/signin">
                    <NavLink  style={{color:'white', marginRight:'40px'}}><MdLanguage style={{margin:'0 10 3'}}/>EN</NavLink>
                  </Link>
                </NavItem>
            </Nav>
            
            {!isAuth() && (
              <Nav >
                <NavItem>
                  <Link href="/signin">
                    <NavLink  style={{color:'white', cursor: 'pointer'}}>Sign In</NavLink>
                  </Link>
                </NavItem>
            
                <NavItem>
                  <Link href="/signup">
                    <NavLink style={{color:'white', cursor: 'pointer', marginLeft:'20px'}}>Sign Up</NavLink>
                  </Link>
                </NavItem>
              </Nav>
            )}

            {isAuth() && isAuth().role === 0 && (
              <NavItem>
                <Link href="/user">
                  <NavLink style={{color:'gold'}}>{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && isAuth().role === 1 && (
              <NavItem>
                <Link href="/admin">
                  <NavLink style={{color:'gold', cursor: 'pointer'}}>{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && (
              <NavItem>
                <NavLink style={{color:'gray', cursor: 'pointer', marginLeft:'20px' }} onClick={() => signout(() => Router.replace(`/signin`))}>
                  Signout
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
       
      </Navbar>
      
    </React.Fragment>
  );
};

export default Uheader;