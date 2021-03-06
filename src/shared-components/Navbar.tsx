import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Fixed,
  Label,
  Toolbar,
} from 'rebass';

interface NavbarProps {
  user?: any;
  handleLogin: (options?: RedirectLoginOptions) => Promise<void>;
  handleLogout: (options?: LogoutOptions) => void;
}

const activeStyle = {
  color: '#111',
};

const Navbar = ({
  user,
  handleLogin,
  handleLogout,
}: NavbarProps) => (
    <Fixed top={0} left={0} right={0} z={1}>
      <Toolbar bg="white">
        <NavLink to="/" exact activeStyle={activeStyle}>
          <Label mx={3} style={{ cursor: 'pointer' }}>
            Home
        </Label>
        </NavLink>
        {
          user &&
          <NavLink to="/books" activeStyle={activeStyle}>
            <Label mx={3} style={{ cursor: 'pointer' }}>
              Books
          </Label>
          </NavLink>
        }
        {
          user === undefined ?
            <Button ml="auto" bg="green" onClick={handleLogin} style={{ cursor: 'pointer' }}>
              Login
            </Button> :
            <Button ml="auto" bg="red" onClick={handleLogout} style={{ cursor: 'pointer' }}>
              Logout
            </Button>
        }
      </Toolbar>
    </Fixed>
  );

export default Navbar;
