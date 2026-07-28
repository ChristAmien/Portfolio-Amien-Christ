import { HERO_CONTENT } from "../constants"
import profil from "../assets/amien christ.png"

export const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 pt-32 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white">
                            Amien Christ
                        </h1>
                        <span className="bg-gradient-to-r from-white via-slate-200 to-violet-400 bg-clip-text text-4xl tracking-tight font-medium text-transparent">
                            Developpeur
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tight text-white">{HERO_CONTENT}</p> 
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={profil}
                            alt="Christ Amien"
                            className="h-64 w-64 rounded-full object-cover border-4 border-violet-500 shadow-2xl shadow-violet-500/20 lg:h-80 lg:w-80"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}