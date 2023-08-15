import Image from "next/image";
import Navbar from "./navbar";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-primary min-w-[280px] w-[280px] h-screen p-6 pt-8 flex flex-col border-r border-solid border-border">
      <Link href="/">
        <Image src="/logo.svg" height={36} width={246} alt="Generate for Frontend" priority={true} />
      </Link>
      <Navbar />
      <Link href="https://www.buymeacoffee.com/farukipekcom" target="_blank">
        <Image src="/buymeacoffee.svg" height={46} width={165} alt="Buy me a coffee" className="mx-auto" />
      </Link>
    </header>
  );
}
