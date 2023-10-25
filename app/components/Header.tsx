

export default function Header() {
    return (
        <header className="text-center text-white py-8 border-b border-[#4d4d4d] md:flex items-center justify-between">
        <img className="hover:scale-105" src="/img/logo.svg" alt="" />
  <nav>
    <a
      className="text-[white] bg-[#F9AC54] px-2 py-2 rounded border-2 border-blue-500 hover:bg-blue-600 hover:text-white"
      href="#"
    >
      Join Now
    </a>
  </nav>
</header>

        
    )
}