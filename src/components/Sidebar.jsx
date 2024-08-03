import profileImg from "../assets/Akku1.jpg";
import FloatingCard from "./FloatingCard";
import { FaGripLines } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt, FaLinkedin, FaLocationDot } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="px-4 md:px-8 mt-5 bg-stone-900 text-stone-50 rounded-xl h-screen fixed w-64 sidebar">
      <div className="flex flex-col items-center">
        <FloatingCard>
          <img
            src={profileImg}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full"
          />
        </FloatingCard>
        <h2 className="text-stone-300 font-bold text-lg mt-4">
          P.Akash
          <FaGripLines
            size={32}
            style={{ color: "gold" }}
            className="inline ml-2"
          />
        </h2>
      </div>

      <div className="mt-6">
        <ul className="space-y-4">
          <li className="flex items-center border-b-2 border-t-2 py-2">
            <MdAttachEmail
              size={24}
              style={{ color: "gold" }}
              className="mr-3"
            />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-stone-400">p.akash1012@gmail.com</p>
            </div>
          </li>
          <li className="flex items-center border-b-2 border-t-2 py-2">
            <FaPhoneAlt size={24} style={{ color: "gold" }} className="mr-3" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-stone-400">9834987996</p>
            </div>
          </li>
          <li className="flex items-center border-b-2 border-t-2 py-2">
            <FaLinkedin size={24} style={{ color: "gold" }} className="mr-3" />
            <div>
              <h4 className="font-semibold">LinkedIn</h4>
              <p className="text-stone-400">www.linkedin.com/in/p-akash02</p>
            </div>
          </li>
          <li className="flex items-center border-b-2 border-t-2 py-2">
            <FaLocationDot
              size={24}
              style={{ color: "gold" }}
              className="mr-3"
            />
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-stone-400">Bengaluru, Karnataka</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
