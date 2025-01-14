// import Image from "next/image";
// import styles from "./page.module.css";
import Button from "./components/button/page";

export default function Home() {
  return (
    <div>
      <Button label="Click me" onClick={() => console.log("Button clicked")} />
    </div>
  );
}
