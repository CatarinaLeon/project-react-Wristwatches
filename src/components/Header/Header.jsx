import { NavLink } from "react-router-dom";
import Container from "../../common/Container/Container";
import ListNav from "../../common/ListNav/ListNav";
import { navConfig } from "../../data/navigation.js";
import s from "./Header.module.css";

export default function Header() {
  return (
    <header className={s.header}>
      <Container className={s.headerContainer}>
        <NavLink to="/" className={s.headerLogo}>
          Times
        </NavLink>
        <ListNav items={navConfig} className={s.headerList}></ListNav>
      </Container>
    </header>
  );
}
