import { login, signup } from "./actions";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex flex-col items-center pt-48">
      <h1 className="mb-6 text-2xl">Authorization</h1>
      <form className="flex flex-col w-1/5">
        <label htmlFor="email" className="mb-2">
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="mb-4 p-2 border rounded"
          required
        />
        <label htmlFor="password" className="mb-2">
          Password:
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="mb-4 p-2 border rounded"
          required
        />
        <div className="flex justify-between">
          <button
            formAction={login}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Log in
          </button>
          <button
            formAction={signup}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Sign up
          </button>
        </div>
      </form>
      <Link href="/" className="pt-8">
        <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          Go to Home page
        </button>
      </Link>
    </div>
  );
}
