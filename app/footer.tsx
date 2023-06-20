import Container from "components/container";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-black py-12">
      <Container>
        <p className="text-xl">Copyright {year}</p>
      </Container>
    </div>
  );
}
