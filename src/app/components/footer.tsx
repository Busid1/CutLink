export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full py-4 flex gap-3 px-5">
            <div className="bg-white px-5 py-2 rounded-lg flex justify-between w-full max-w-screen-sm mx-auto items-center">
                <a href="/" className="text-black text-xl font-medium">CutLink</a>
                <div className="flex gap-5 items-center">
                    <a className="flex" target="_blank" href="https://www.linkedin.com/in/busid-elhiani/">
                        <i className="fab fa-linkedin text-blue-700 text-2xl"></i>
                    </a>
                    <a className="flex" target="_blank" href="https://github.com/busid1">
                        <i className="fab fa-github text-black text-2xl"></i>
                    </a>
                    <a className="flex" target="_blank" href="https://busid.netlify.app/">
                        <i className="fas fa-globe text-slate-700 text-2xl"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}