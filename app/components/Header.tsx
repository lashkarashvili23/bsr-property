"use client";

import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { logout } from "../logout/actions";

// Define the User type
interface User {
  email: string;
}

const Header: FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/getUser");
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("An error occurred while fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <header className="flex justify-between items-center bg-slate-600 text-white w-4/5 p-5">
        <Link href="/">Logo</Link>
        <nav className="pl-80">
          <ul className="flex flex-row">
            <li className="p-2">Buy</li>
            <li className="p-2">Sell</li>
            <li className="p-2">Rent</li>
          </ul>
        </nav>
        <div className="w-96">
          {user ? (
            <div className="flex justify-end">
              <Link href="/private">
                <h2 className="pr-4 ">
                  Welcome,
                  <br /> {user.email}
                </h2>
              </Link>
              <form action={logout}>
                <button
                  type="submit"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Logout
                </button>
              </form>
            </div>
          ) : (
            <div className="flex justify-end">
              <Link href="/login">
                <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                  Log in
                </button>
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
