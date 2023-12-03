"use client";

import React from "react";

//TODO onsubmit時のhandler 
const onSubmit = () => {
    // ここからお願いします
};

//TODO メール送信はnodemailerを使用
function contact() {
  return (
    //TODO flex1 でxl >画像追加。
    <div className="mt-14 flex flex-col">
      <p className="text-3xl text-center flex justify-center font-bold">
        Let's connect<p className="text-red-400">.</p>
      </p>

      <div className="flex justify-center mt-7">
        <form
          className="flex flex-col w-full max-w-lg gap-8"
          onSubmit={onSubmit}
        >
          <div className="flex justify-between sm:flex-col gap-5">
            <div className="w-full flex-1">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                name
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="w-full flex-1">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                mail
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Mail"
                required
              />
            </div>
          </div>

          <div className="w-full">
            <label className="block uppercase tracking-wide text-xs font-bold mb-2">
              Subject
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Subject"
              required
            />
          </div>

          <div className="w-full">
            <label className="block uppercase tracking-wide text-xs font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Message"
              required
            ></textarea>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default contact;
