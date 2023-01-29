import React from "react";

const ContactUs = () => {
  return (
    <div className="container my-24 px-6 mx-auto">

      <section className="mb-32 text-gray-800">
        <div className="flex flex-wrap">
          <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
            <h2 className="text-3xl font-bold mb-6">Contact us</h2>
            <p className="text-gray-500 mb-6">
              <span className="text-4xl font-semibold">Ashlesha Astronomy Club</span>
            </p>
            <p className="text-gray-500 mb-2">Visvesvaraya National Institute of Technology, Nagpur, Maharastra</p>
            <p className="text-gray-500 mb-2">aac.vnit.co.in</p>
          </div>
          <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
            <form>
              <div className="form-group mb-6">
                <input type="text" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                  placeholder="Name" />
              </div>
              <div className="form-group mb-6">
                <input type="email" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                  placeholder="Email address" />
              </div>
              <div className="form-group mb-6">
                <textarea className="
              htmlForm-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
              </div>
              <div className="form-group htmlForm-check text-center mb-6">

              </div>
              <button type="submit"
                className
                ="w-full
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out">
                    Send
                    </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ContactUs;