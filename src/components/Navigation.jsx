import { useState } from "react";
import PropTypes from 'prop-types';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import MenuOpenSharpIcon from '@mui/icons-material/MenuOpenSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import ExpandLessSharpIcon from '@mui/icons-material/ExpandLessSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';


const Navigation = ({ toggleSidebar, isOpen }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleDropdown = () => setShowMenu(!showMenu);
  return (
    <header>
      <nav>
        <div>
          <button onClick={toggleSidebar}>
            {isOpen ? <MenuSharpIcon /> : <MenuOpenSharpIcon />}
          </button>
          <a href={"/dashboard"}>
            <span>FortuneConnect</span>
          </a>
        </div>
        <div>
          <button onClick={toggleDropdown}>
            <span>Ruhinda Roderick</span>
            {showMenu ? <ExpandLessSharpIcon /> : <ExpandMoreSharpIcon />}
          </button>
          {showMenu && (
            <div className="flex flex-col">
              <a href="#">
                <AccountCircleSharpIcon />
                <span>Profile</span>
              </a>
              <a href="#">
                <SettingsSharpIcon />
                <span>Settings</span>
              </a>
              <a href="#">
                <LogoutSharpIcon />
                <span>Logout</span>
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
};

Navigation.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default Navigation;