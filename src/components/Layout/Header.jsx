import Link from "next/link";

const Header = () => {
  return (
    <div className="flex px-12 py-10">
      <Link href="/">
        <h3 className="text-blue-500 hover:text-orange-600 text-2xl font-semibold">
          SoulMate
        </h3>
      </Link>
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
