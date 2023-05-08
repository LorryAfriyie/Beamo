import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return <main className={styles.main}>{Page()}</main>;
}

function Page() {
  return (
    <main id="page">
      <div className={"page-content"}>
        <div className="container">
          <h1>Hello</h1>
        </div>
      </div>
    </main>
  );
}