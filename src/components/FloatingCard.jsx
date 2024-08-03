export default function FloatingCard({ children }) {
  return (
    <div className="relative w-full  mx-auto">
      <div className="bg-stone-600 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 hover:rotate-2 p-6 mr-4">
        {children}
      </div>
    </div>
  );
}
