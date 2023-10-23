export default function Header() {
    return (
        <header className="text-center text-white py-8 border-b border-[#4d4d4d] md:flex itens-center justify-between">
            <h4>FITCLUB</h4>
            <div className="basis-1/2">
                <img src="/workspaces/prova1/app/img/Header.png" alt=" img" />
            </div>

            <nav>
                <a className="hover:text-[#00e77f]" href="#">
                    Home &nbsp;
                </a>
                <a className="hover:text-[#00e77f]" href="#join now">
                    Cursos &nbsp;
                </a>
                
            </nav>
        </header>
    )
}