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
      <NavigationContainer isOpen={isOpen}>
        <HamburgerMenu
          isOpen={isOpen}
          strokeWidth={2}
          width={26}
          height={20}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.5}
          menuClicked={toggleNav}
        />
      </NavigationContainer>
      <WidgetWrapper>
        <div id="hackbit-vote-widget"></div>
      </WidgetWrapper>
      <NavLinkContainer isOpen={isOpen} onClick={toggleNav}>
        {!user && <NavLink to="/">Home</NavLink>}
        {!user && <NavLink to="/register">Register</NavLink>}
        {user && <NavLink to="/dashboard">Dashboard</NavLink>}
        {user && user.user_type === 'Volunteer' && (
          <NavLink to="/saved-tasks">Saved Tasks</NavLink>
        )}
        {user && (
          <NavLink to="/" onClick={() => localStorage.removeItem('id')}>
            Log Out
          </NavLink>
        )}
      </NavLinkContainer>
    </>
  );
};

const mapPropsToState = state => {
  console.log(state);
  return { users: state.userReducer.users };
};

export default connect(
  mapPropsToState,
  null
)(Navigation);

const NavigationContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 5px;
  z-index: 2;
  height: 22px;
  background: ${props => (props.isOpen ? 'none' : 'rgba(228, 214, 167, .8)')};
  display: flex;
  justify-content: center;
  padding: 12px;
  border-radius: 50%;
`;

const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #e4d6a7;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  transform: translateY(${props => (props.isOpen ? '0' : '-200')}px);
  transition: all 0.4s;

  a {
    text-decoration: none;
    color: black;
    padding: 5px 0;
    // background: #e4d6a7;
    transition: all 0.3s;

    &:hover {
      background: #9b2915;
      color: white;
    }
  }
`;

const WidgetWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  //padding-left: 50px;
  background-color: #443737;
`;
