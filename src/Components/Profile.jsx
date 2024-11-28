import { Card } from "flowbite-react"
import pp from "../assets/pp.jpeg"
import html from "../assets/html.png"
// import php from "../assets/php.png"
import phpp from "../assets/phpp.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import css from "../assets/css.png"
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { ReactTyped } from "react-typed";


const Profile = () => {
    return (
        <div className="min-h-screen p-6 flex justify-center">
            <Card className="w-full max-w-4xl p-6 shadow-lg bg-cyan-900">
                <div className="flex justify-between flex-wrap">
                    <Card className="w-full max-w-4xl p-6 shadow-lg bg-cyan-700">
                        <div className="flex">
                            <img
                                alt="Profile Image"
                                height="96"
                                src={pp}
                                width="96"
                                className="mb-3 rounded-full shadow-lg"
                            />
                            <div className="flex flex-col items-left ml-5 mt-4">
                                <ReactTyped
                                    strings={["Igor Hasiholan Malachi Panggabean"]}
                                    typeSpeed={50}
                                    showCursor={false}
                                    className="text-white font-medium"
                                />
                                <ReactTyped
                                    strings={["Software Engineer"]}
                                    typeSpeed={50}
                                    showCursor={false}
                                    className="text-white"
                                    startDelay={2620}
                                />

                                {/* <h3 className="mb-1 text-xl font-medium text-white">Igor Hasiholan Malachi P.</h3>
                                <span className="text-sm text-white">Software Engineer</span> */}
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="column py-4 sm:text-center md:text-left flex">
                    <div className="column py-4 sm:text-center md:text-left ml-20">
                        <h5 className="text-white font-medium">Contact:</h5>
                        <h5 className="text-white"><a href="http://wa.me/6281337907306" className="flex"><FaWhatsapp className="mt-1 mr-1" />+62 813-3790-7306</a></h5>
                        <h5 className="text-white"><a href="igor.malachi.info@gmail.com" className="flex"><MdOutlineEmail className="mt-1 mr-1" />igor.malachi.info@gmail.com</a></h5>
                        <h5 className="text-white"><a href="https://github.com/Igor-olan" className="flex"><FaGithub className="mt-1 mr-1" />Igor-olan</a></h5>
                    </div>
                    <div className="column py-4 sm:text-center md:text-left ml-60">
                        <h5 className="text-white font-medium">Skill:</h5>
                        <h5 className="text-white">- Collaboration</h5>
                        <h5 className="text-white">- Problem solving</h5>
                        <h5 className="text-white">- Team work</h5>
                    </div>
                </div>
                <div className="column py-4 sm:text-center md:text-left ml-20">
                    <h5 className="text-white font-medium">About me:</h5>
                    <p className="text-white">Lulusan Pengembangan Perangkat Lunak dan Game dengan keahlian dasar</p>
                </div>
                <div className="flex flex-wrap ml-10 mr-20 justify-between">
                    <img
                        alt="Hard skill"
                        height="96"
                        src={html}
                        width="96"
                        className="mb-3 mr-3 ml-4"
                    />
                    <img
                        alt="Hard skill"
                        height="96"
                        src={phpp}
                        width="96"
                        className="mb-3 mr-3 ml-4"
                    />
                    <img
                        alt="Hard skill"
                        height="96"
                        src={js}
                        width="96"
                        className="mb-3 mr-3 ml-4"
                    />
                    <img
                        alt="Hard skill"
                        height="96"
                        src={react}
                        width="96"
                        className="mb-3 mr-3 ml-4"
                    />
                    <img
                        alt="Hard skill"
                        height="96"
                        src={css}
                        width="96"
                        className="mb-3 mr-3 ml-4"
                    />
                </div>
            </Card>
        </div>
    )
}

export default Profile