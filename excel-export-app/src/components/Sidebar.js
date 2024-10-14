import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import styled from "styled-components";

const Nav = styled.div`
background: #15171c;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`
const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 1rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
color : #fff;
text-decoration : none;
`
const SideBarNav = styled.nav`
background: #15171c;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
z-index: 10;
`
const SideBarWrap = styled.div`
width: 100%;
overflow : auto;
`

const Sidebar = () => {
    const [ sidebar, setSidebar] = useState(true);
    const showSideBar = () => setSidebar(!sidebar);

  return (
    <>
        <IconContext.Provider value={{ color : '#fff'}}>
            <Nav>
                <NavIcon to="#">
                    {/* <FaIcons.FaBars onClick={showSideBar}/> */}
                    SideBar
                </NavIcon>
                <h1 style={{textAlign : 'center', marginLeft : '200px', color : '#fff'}}>Navbar</h1>
            </Nav>

            <SideBarNav sidebar={sidebar}>
                <SideBarWrap>
                    <NavIcon to="#">
                        {/* <AiIcons.AiOutlineClose onClick={showSideBar}/> */}
                        SideBar
                    </NavIcon>
                    {SidebarData?.map((item, index) => {
                        return (
                            <SubMenu item={item} key={index}/>
                        )
                    })}
                </SideBarWrap>
            </SideBarNav>
        </IconContext.Provider>
    </>
  )
}

export default Sidebar