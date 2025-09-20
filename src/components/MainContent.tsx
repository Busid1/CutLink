import InputCard from "./InputCard";

export default function MainContent() {
    return (
        <div className="max-md:mt-10 mt-32">
            <div className="flex flex-col justify-center items-center mb-5">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
                    Short your URLs quickly and free with
                    <span className="text-black ml-2 underline decoration-blue-600">CutLink</span>
                </h1>
            </div>
            <InputCard/>
        </div>
    )
}