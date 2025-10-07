export default function Footer() {
  return (
    <footer className=" text-gray-400 py-4  w-full text-center ">
      <div className="w-full mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Bakhed store Website. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
