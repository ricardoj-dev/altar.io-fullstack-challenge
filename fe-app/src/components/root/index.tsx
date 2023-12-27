import Container from "@/components/layout/Container";

import { Outlet } from "react-router-dom";

function Root() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default Root;
