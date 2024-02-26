import { ashutoshimg } from "../assets"


const About = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden ">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                        alt="ecommerce"
                        className="lg:w-1/2 w-[400px] lg:h-[400px] h-64 object-cover object-center rounded-2xl"
                        src={ashutoshimg}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest mb-5">
                            Hello Everyone , I am.....
                        </h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-5">
                            Ashutosh Kumar
                        </h1>

                        <p className="text-sm title-font text-gray-500 leading-[24px] text-justify">
                            Results-driven software engineer with a solid background in coding and design  Knowledge in Test Automation.
                            Proficient in C++, Python, and Cloud Technologies like AWS, Google Cloud, IBM Cloud with expertise in developing
                            applications, implementing algorithms, and working with databases. Quick learner with a passion for emerging technologies.
                            Strong collaborator with excellent problem-solving skills and a track record of successful project execution.
                        </p>


                    </div>
                </div>
            </div>
        </section>

    )
}

export default About
