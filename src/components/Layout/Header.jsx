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
        <Link href="/" className="text-blue-500 hover:text-orange-600 me-4">
          Home
        </Link>
        <Link
          href="/login"
          className="text-blue-500 hover:text-orange-600 me-4"
        >
          Login
        </Link>
        <Link
          href="/feedback"
          className="text-blue-500 hover:text-orange-600 me-4"
        >
          Feedback
        </Link>
        <Link href="/user" className="text-blue-500 hover:text-orange-600 me-4">
          User
        </Link>
      </ul>
    </div>
  );
};

export default Header;
