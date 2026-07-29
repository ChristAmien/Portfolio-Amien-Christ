import aboutImage from "../assets/christ_Amien About.png"
import { ABOUT_TEXT } from "../constants"
export const About = () => {
    return (
        <div id="apropos" className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl text-white">
                A 
                <span className="text-neutral-500" > propos</span>
            </h1>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <img
                            className="h-[280px] w-full max-w-[380px] rounded-2xl object-cover shadow-xl shadow-black/20 lg:h-[360px]"
                            src={aboutImage}
                            alt="christ amien"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="max-w-xl text-lg leading-8 tracking-tight text-white">{ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
