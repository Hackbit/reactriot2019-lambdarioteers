import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Navigation = ({ users }) => {
  const [isOpen, setIsOpen] = useState(false);
  let user = users.filter(user => user.id === +localStorage.getItem('id'))[0];

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavigationContainer isOpen={isOpen} onClick={toggleNav}>
        <HamburgerMenu
          isOpen={isOpen}
          strokeWidth={2}
          width={26}
          height={20}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.5}
        />
      </NavigationContainer>

      <NavLinkContainer isOpen={isOpen} onClick={toggleNav}>
        <NavLink to="/dashboard">Dashboard</NavLink>
        {user.user_type === 'Volunteer' && (
          <NavLink to="/saved-tasks">Saved Tasks</NavLink>
        )}
        <NavLink to="">Log Out</NavLink>
      </NavLinkContainer>
    </>
  );
};

const mapPropsToState = state => {
  return { users: state.userReducer.users };
};

export default connect(
  mapPropsToState,
  null
)(Navigation);

const NavigationContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;
  height: 22px;
  background: ${props => (props.isOpen ? 'none' : 'rgba(228, 214, 167, .8)')};
  display: flex;
  justify-content: center;
  padding: 12px;
  border-radius: 50%;
`;

const NavLinkContainer = styled.div`
    display: flex
    flex-direction: column;
    width: 100%;
    background: #e4d6a7;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    transform: translateY(${props => (props.isOpen ? '0' : '-200')}px);
    transition: all .4s;

    a {
        text-decoration: none;
        color: black;
        padding: 10px 0;
        // background: #e4d6a7;
        transition: all .3s;

        &:hover {
            background: #9b2915;
            color: white;
        }
    }
`;
