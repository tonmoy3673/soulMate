import Link from "next/link";

const Header = () => {
  return (
    <div className="flex px-12 py-10">
      <div>
        <h3>SoulMate</h3>
      </div>
      <ul className="mx-auto">
        <Link href="/" className="">
          Home
        </Link>
        <Link href="/login">Login</Link>
        <Link href="/feedback">Feedback</Link>
        <Link href="/user">User</Link>
      </ul>
    </div>
  );
};

export default Header;
