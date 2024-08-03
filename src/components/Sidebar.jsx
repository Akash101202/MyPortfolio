import profileImg from "../assets/Akku1.jpg";
import FloatingCard from "./FloatingCard";
import { FaGripLines } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <div className="px-8 mt-5 bg-stone-900 text-stone-50 rounded-xl h-screen fixed w-64 sidebar">
      <div>
        <FloatingCard>
          <img src={profileImg} alt="" className="w-50" />
        </FloatingCard>
        <h2 className="text-stone-300 font-bold">
          P.Akash
          <FaGripLines size={48} style={{ color: "gold" }} />
        </h2>
      </div>

      <div>
        <ul>
          <li className="border-b-2 border-t-2">
            <MdAttachEmail size={20} style={{ color: "gold" }}>
              <h4>Email</h4>
            </MdAttachEmail>

            <p className="text-stone-400">p.akash1012@gmail.com</p>
          </li>
          <li className="border-b-2 border-t-2">
            <FaPhoneAlt size={20} style={{ color: "gold" }} />

            <p className="text-stone-400">9834987996</p>
          </li>
          <li className="border-b-2 border-t-2">
            <FaLinkedin size={20} style={{ color: "gold" }} />

            <p className="text-stone-400">www.linkedin.com/in/p-akash02</p>
          </li>
          <li className="border-b-2 border-t-2">
            <FaLocationDot size={20} style={{ color: "gold" }} />

            <p className="text-stone-400">Bengaluru ,Karnataka</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
