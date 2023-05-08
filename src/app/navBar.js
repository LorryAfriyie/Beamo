import Link from "next/link";

export default function Nav() {
  return (
    <nav className="navigation-bar">
      <ul>
        <li>
          <Link href={"#"}>
            <h2>Beamo</h2>
          </Link>
        </li>
        <div className="page-link">
          <li>
            <Link href={"#"}>Home</Link>
          </li>
          <li>
            <Link href={"#"}>About</Link>
          </li>
          <li>
            <Link href={"#"}>Services</Link>
          </li>
          <li>
            <Link href={"#"}>Contact</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
