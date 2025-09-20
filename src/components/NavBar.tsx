export default function NavBar() {
    return (
        <nav>
            <div className="max-w-4xl flex flex-wrap items-center justify-center mx-auto p-4">
                <a href="/" className="inline-block relative text-3xl font-extrabold">
                    CutLink
                    <span className="absolute right-0 bottom-0 w-14 border-b-4 border-blue-600"></span>
                </a>
            </div>
        </nav>

    )
}