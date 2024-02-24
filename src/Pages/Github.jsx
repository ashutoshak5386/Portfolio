import { useEffect, useState } from "react"

const Github = () => {

    const [data, SetData] = useState([]);

    useEffect(() => {
        const data = fetch("https://api.github.com/users/ashutoshak5386").then((res) => (res.json())).then((data) => {
            console.log(data)

            SetData(data)
        })
    }, [])

    return (
        <>
            <div className="flex items-center justify-center flex-col">
                <h1 className="text-4xl font-semibold mb-5 bg-slate-400 text-white px-6 py-3 rounded-xl shadow-xl shadow-slate-500">My Github profile in a glance!</h1>
                <section className="text-gray-600 body-font w-3/5 bg-slate-200 shadow-slate-600 shadow-xl rounded-2xl">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                            <div className="w-full sm:p-4 px-4 mb-6">
                                <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
                                    {data.name}
                                </h1>
                                <div className="leading-relaxed">
                                    {data.bio}
                                </div>
                            </div>
                            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                <h2 className="title-font font-medium text-3xl text-gray-900">{data.followers}</h2>
                                <p className="leading-relaxed">Followers</p>
                            </div>
                            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                <h2 className="title-font font-medium text-3xl text-gray-900">{data.following}</h2>
                                <p className="leading-relaxed">Followings</p>
                            </div>
                            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                <h2 className="title-font font-medium text-3xl text-gray-900">{data.public_repos}</h2>
                                <p className="leading-relaxed">Public Repositories</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 sm:w-1/3 w-1/4 h-64 rounded-lg overflow-hidden mt-6 sm:mt-0">
                            <img
                                className="object-cover object-center w-full h-full"
                                src={data.avatar_url
                                }
                                alt="stats"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>

    )
}

export default Github
