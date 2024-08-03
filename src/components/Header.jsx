export default function Header({ onHandleSelect }) {
  return (
    <>
      <nav className="bg-stone-800 px-5 py-3 rounded-t-xl header">
        <div>
          <ul className="text-stone-200 font-bold">
            <li
              className="hover:text-yellow-500 cursor-pointer"
              onClick={() => onHandleSelect("about")}
            >
              About
            </li>
            <li
              className="hover:text-yellow-500 cursor-pointer"
              onClick={() => onHandleSelect("resume")}
            >
              Resume
            </li>
            <li
              className="hover:text-yellow-500 cursor-pointer"
              onClick={() => onHandleSelect("portfolio")}
            >
              Portfolio
            </li>
            <li
              className="hover:text-yellow-500 cursor-pointer"
              onClick={() => onHandleSelect("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
