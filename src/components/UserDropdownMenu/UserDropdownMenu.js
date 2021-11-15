import React, { useState } from "react";
import { Dropdown} from "react-bootstrap";
import UserAvatar from "../../assects/image/user-avatar.png";
import style from "./dropMenu.module.scss";
import { FaUser, FaWrench, FaLock } from "react-icons/fa";
import { useSelector } from "react-redux";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        style={{paddingRight: '0px', paddingTop: '0px'}}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className="list-unstyled"
         style={{marginBottom: '0'}}>
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

export const Menu = ({handleDelete}) => {

  const state = useSelector(state => state.userRedusers.user)

  return (
      <Dropdown className={style.dropdowns}>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className={style.dropdown}>
          {<img src={UserAvatar} className={style.userAvatar} />}
        </Dropdown.Toggle>

        <Dropdown.Menu
          as={CustomMenu}
          className={style.dropMenu}
          style={{ paddingRight: "10px" }}
        >
          <div className={style.dropdown_header}>
            <strong>{state.email}</strong>
            <br />
            {state.email}
          </div>
          <Dropdown.Item eventKey="1" className={style.dropdown_item}>
            <FaUser className={style.menuIcon}/>
            Мой аккаунт
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" className={style.dropdown_item}>
            <FaWrench className={style.menuIcon}/>
            Настройка
          </Dropdown.Item>
          <Dropdown.Item eventKey="3" onClick={handleDelete} className={style.dropdown_item}>
            <FaLock className={style.menuIcon} />
            Выйти
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
  );
};