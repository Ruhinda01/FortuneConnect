import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { TOP_LINKS } from "../constants";
import { BOTTOM_LINKS } from "../constants";

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`${!isOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
        <nav>
            <ul>
                {TOP_LINKS.map((link) => (
                    <li key={link.name}>
                        <NavLink to={link.link} className="flex items-center">
                          <div>
                            {link.icon}
                          </div>
                          <span>{link.name}</span>
                        </NavLink>        
                    </li>
                ))}
            </ul>
            <ul>
                {BOTTOM_LINKS.map((link) => (
                    <li key={link.name}>
                        <NavLink to={link.link} className="flex items-center">
                          <div>
                            {link.icon}
                          </div>
                          <span>{link.name}</span>
                        </NavLink>        
                    </li>
                ))}
            </ul>
        </nav>
    </aside>
  )
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default Sidebar;
