import { FaGripLines } from "react-icons/fa";
import MapComponent from "./MapComponent";
import { BsFillSendFill } from "react-icons/bs";

export default function Contact() {
  return (
    <>
      <div className="px-4 sm:px-8 bg-stone-900 text-stone-50 rounded-l-xl">
        <div className="px-4 sm:px-9 py-3">
          <div className="flex">
            <h1 className="px-3 pb-4 font-bold mb-3 mt-8 text-lg sm:text-xl md:text-2xl">
              Contact
              <FaGripLines size={48} style={{ color: "gold" }} />
            </h1>
          </div>
          <form
            action=""
            class="space-y-4 p-4 bg-stone-600 rounded-md shadow-md mx-auto mb-8"
          >
            <h2 class="text-lg font-semibold text-stone-200">Contact Form</h2>
            <p class="text-sm text-stone-300 mb-4">
              Please fill out the form below and click "Send" to submit your
              information.
            </p>

            <div>
              <label
                for="name"
                class="block text-sm font-medium text-stone-200"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                class="mt-1 block w-full p-2 border  bg-stone-800  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-stone-200"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                class="mt-1 block w-full p-2 border  bg-stone-800  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                for="Message"
                class="block text-sm font-medium text-stone-200"
              >
                Message
              </label>
              <textarea
                type="text"
                row="4"
                cols="50"
                id="Message"
                className="mt-1 block w-full p-2 border border-gray-300 bg-stone-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="w-1/6 px-4 py-2 flex bg-stone-800 text-white font-semibold rounded-md shadow-sm hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2">
              <BsFillSendFill className="mr-3 mt-1" size={30} />
              <button type="submit" className="pr-6 sm:w-full">
                Send
              </button>
            </div>
          </form>

          <h2 className="px-3 pb-4 font-bold mb-3">
            Location
            <FaGripLines size={48} style={{ color: "gold" }} />
          </h2>

          <MapComponent />

          <h2 className="px-3 pb-4 font-bold mb-3">Bengaluru ,Karnataka</h2>
        </div>
      </div>
    </>
  );
}
