export default function NavBar() {
    return (
        <nav>
            <div className="max-w-screen-lg flex flex-wrap items-center justify-center mx-auto p-4">
                <a href="/" className="inline-block relative text-3xl font-medium">
                    CutLink
                    <span className="absolute right-0 bottom-0 w-10 border-b-2 border-blue-500"></span>
                </a>
            </div>
        </nav>

    )
}