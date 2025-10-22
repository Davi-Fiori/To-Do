import Container from "../components/container";
import Logo from "../assets/icons/Images/Logo.svg?react";
import Text from "../components/text";

export default function Header() {
  return (
    <Container as="header" className="mt-3 md:mt-20">
      <div className="flex items-center gap-3">
        <Logo className="h-9 md:h-12" />
        <Text className="text-3xl md:text-4xl font-bold" variant="body-md-bold">
          ToDo List
        </Text>
      </div>
    </Container>
  );
}
