import { python, react2 } from "../assets"



const Certifications = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center flex-col">
                <h1 className="text-3xl font-semibold title-font text-gray-900 mb-3">
                    Achievements
                </h1>
                <div className="lg:w-2/3 mx-auto">

                    <div className="flex flex-wrap -mx-2">
                        <div className="px-2 w-1/2">
                            <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                                    src={python}
                                />
                                <div className="text-center relative z-10 w-full">
                                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                                        Oracle Cloud Infrastructure 2023 Certified Foundations Associate
                                    </h2>

                                    <a className="mt-3 text-purple-500 inline-flex items-center">
                                        Learn More
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="px-2 w-1/2">
                            <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                                    src={react2}
                                />
                                <div className="text-center relative z-10 w-full">
                                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">

                                    </h2>
                                    <p className="leading-relaxed">
                                        Skateboard +1 mustache fixie paleo lumbersexual.
                                    </p>
                                    <a className="mt-3 text-purple-500 inline-flex items-center">
                                        Learn More
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Certifications
