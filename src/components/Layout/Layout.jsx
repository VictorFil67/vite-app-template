import { Outlet } from "react-router-dom";
import { Container } from "./Layout.Styled";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <header style={{ borderBottom: "px solid rgba(25, 26, 21, 0.1)" }}>
        <Container>
          <Header />
        </Container>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
