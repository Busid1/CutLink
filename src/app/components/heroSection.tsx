import HeroText from "./heroText";
import Input from "./input";

export default function HeroSection() {
    return (
        <section className="max-md:mt-10 mt-32 px-5 flex flex-wrap justify-center items-center">
            <div>
                <HeroText />
                <Input />
            </div>
        </section>
    )
}