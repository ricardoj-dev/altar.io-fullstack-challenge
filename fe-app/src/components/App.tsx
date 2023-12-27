import Container from "@/components/layout/Container";
import Header from "@/components/generator-page/header/index.tsx";
import Grid from "@/components/generator-page/grid/index.tsx";
import Footer from "@/components/generator-page/footer/index.tsx";

function App() {
  return (
    <Container>
      <Header />
      <Grid />
      <Footer />
    </Container>
  );
}

export default App;
