export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center bg-slate-300 w-full p-5">
        <div>Logo</div>
        <nav className="">
          <ul className="flex flex-row">
            <li className="p-2">Buy</li>
            <li className="p-2">Sell</li>
            <li className="p-2">Rent</li>
          </ul>
        </nav>
        <div>User Space</div>
      </header>
    </>
  );
}
