import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <div className="navbar">
        <p>
          <NavLink to="/">Home</NavLink>
        </p>
        <p>
          <NavLink to="/About">About</NavLink>
        </p>
        <p>
          <NavLink to="/Contact">Contact</NavLink>
        </p>
      </div>
    </>
  );
};
