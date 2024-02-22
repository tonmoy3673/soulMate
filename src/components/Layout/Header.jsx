import Link from "next/link";

const Header = () => {
  return (
    <div>
      <ul>
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/feedback">Feedback</Link>
        <Link href="/user">User</Link>
      </ul>
    </div>
  );
};

export default Header;
