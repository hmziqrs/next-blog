import Container from "components/container";
import Logo from "components/logo";

export default function Header() {
  return (
    <Container>
      <div className="py-6 flex flex-row items-center">
        <Logo />
        <div className="flex flex-1" />
        <div className="flex-row">
          <div className="bg-red-900 py-2 px-4">
            <p>About</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
