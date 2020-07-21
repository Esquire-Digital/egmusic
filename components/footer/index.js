import Disclaimer from "../disclaimer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { attributes } from '../../content/epk-rep.md'
import { useForm } from "react-hook-form";

export default function Footer() {

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const form = document.getElementById('form');
    const formData = new FormData(form);
    const res = document.getElementById('response');

    fetch("/", {
      method: "POST",
      body: formData
    })
      .then(() => {
        res.innerText = "Thanks for your submission.";
        res.style.display = "block";
        setTimeout(() => {
          res.style.display = "none";
          res.innerText = "";
        }, 2000);
      });
  };

  let { email } = attributes

  return (
    <>
      <footer className="relative px-6 pt-24 pb-4 bg-eg-contact lg:px-24 lg:pt-64 lg:pb-4">
        <p
          className="absolute inset-x-0 top-0 z-10 text-6xl font-normal leading-none text-center text-transparent uppercase transform -translate-y-4 opacity-25 pointer-events-none md:text-mighty md:-translate-y-16 lg:text-massive font-ant"
          style={{
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#424b54",
          }}
        >
          contact
        </p>
        <p className="font-bold text-center text-white font-mont">
          For all booking and press inquiries, please contact
          <a href={`mailto:${email}`} className="ml-2 text-eg-blue">
            {email}
          </a>
        </p>
        <form
          name="Contact Form"
          method="POST"
          data-netlify="true"
          className="gap-16 my-8 lg:grid lg:grid-rows-3 lg:gap-4 lg:my-24"
          onSubmit={handleSubmit(onSubmit)}
          id="form"
        >
          <input type="hidden" name="form-name" value="Contact" />
          <input type="hidden" name="Fax" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="flex flex-col items-start">
              <input
                type="text"
                ref={register}
                className="block w-full py-4 font-bold text-white bg-transparent border-b-2 rounded-none border-eg-outline font-mont"
                required
                name="Name"
              />
              <label
                htmlFor="Name"
                className="block mt-2 font-bold text-white font-mont"
              >
                Name *
              </label>
            </div>
            <div className="flex flex-col items-start">
              <input
                type="email"
                ref={register}
                className="block w-full py-4 font-bold text-white bg-transparent border-b-2 rounded-none border-eg-outline font-mont"
                required
                name="Email"
              />
              <label
                htmlFor="Email"
                className="block mt-2 font-bold text-white font-mont"
              >
                Email *
              </label>
            </div>
            <div className="flex flex-col items-start">
              <input
                type="tel"
                ref={register}
                className="block w-full py-4 font-bold text-white bg-transparent border-b-2 rounded-none border-eg-outline font-mont"
                name="Phone"
              />
              <label
                htmlFor="Phone"
                className="block mt-2 font-bold text-white font-mont"
              >
                Phone
              </label>
            </div>
          </div>
          <div>
            <textarea
              name="Message"
              ref={register}
              className="block w-full h-32 font-bold text-white bg-transparent border-b-2 rounded-none border-eg-outline font-mont"
              required
            ></textarea>
            <label
              htmlFor="Message"
              className="block mt-2 font-bold text-white font-mont"
              required
            >
              Message *
            </label>
          </div>
          <div className="flex justify-center h-16 mt-8 lg:justify-end lg:mt-0">
            <button className="button primary" type="submit">
              Send{" "}
              <FontAwesomeIcon className="ml-4" icon={faLongArrowAltRight} />
            </button>
          </div>
          <div className="flex justify-center h-16 mt-8 lg:justify-end lg:mt-0" id="response" style={{ display: 'none' }}>
            <p className="w-full text-center text-white"></p>
          </div>
        </form>
        <Disclaimer />
      </footer>
    </>
  );
}
