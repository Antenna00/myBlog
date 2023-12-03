import React from "react";
import Upload from "../components/upload/Upload";
import Image from "next/image";

//TODO メール送信はnodemailerを使用
function contact(){

    return(
        <div className="mt-10">
            <div className="flex justify-center mb-10">
                <p className="text-2xl">
                    Let's connect.
                </p>
            </div>
            <div className="flex justify-center">
                <form className="w-full max-w-lg">
                        <div className="flex flex- -mwrapx-3 mb-2">
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    name
                                </label>
                                <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="your name" />
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    mail
                                </label>
                                <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="your mail" />
                            </div>
        
                        </div>
                        <div className="flex flex- -mwrapx-3 mb-2">
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Subject
                                </label>
                                <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="your subject" />
                            </div>
                        </div>
                        <div className="flex flex- -mwrapx-3 mb-2">
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Message</label>
                                <textarea id="message" rows={4} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="your message here...">
                                    
                                </textarea>
                            </div>
                        </div>
                        
                        <div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                    Let's talk
                                </button>
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default contact;
