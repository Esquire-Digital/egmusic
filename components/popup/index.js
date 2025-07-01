import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Cookies from "js-cookie";
import { useEffect, useState, useRef } from "react";
import { useMedia } from "react-use";

function Input({ id, name, required, label, ...rest }) {
  return (
    <div className="flex flex-col items-start w-full gap-2">
      <input
        name={name}
        id={id}
        required={required}
        {...rest}
        className="w-full py-4 bg-transparent border-b-2 border-white"
      />
      <label htmlFor={id} className="font-bold">
        {label} {required && "*"}
      </label>
    </div>
  );
}

const COOKIE_NAME = "egmusicnyc--closed-popup";

export default function Popup() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const isDesktop = useMedia("(min-width: 1280px)", true);
  const formRef = useRef(null);

  useEffect(() => {
    if (isDesktop && Cookies.get(COOKIE_NAME) !== "true") openPopup();
  }, []);

  const openPopup = () => {
    setOpen(true);
    document.body.maxHeight = "100vh";
    document.body.style.overflowY = "hidden";
  };

  const closePopup = () => {
    setOpen(false);
    document.body.maxHeight = null;
    document.body.style.overflowY = null;
    Cookies.set(COOKIE_NAME, true);
  };

  const strokeText = {
    WebkitTextStrokeWidth: "2px",
    WebkitTextStrokeColor: "#424b54",
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    try {
      await fetch("https://egmusicnyc.us20.list-manage.com/subscribe/post", {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      closePopup();
    } catch (e) {
      setError("There was an error submitting this form. Please try again.");
      throw e;
    }
  };

  return (
    <div
      className={
        "fixed flex items-center justify-center w-full h-full" +
        (open ? "" : " pointer-events-none")
      }
      style={{ zIndex: "999999999" }}
    >
      <div
        className="absolute top-0 left-0 flex w-full h-full transition-all duration-500 ease-in-out bg-black opacity-0"
        style={{
          opacity: open === true && "50%",
        }}
        onClick={closePopup}
      ></div>
      <div
        className="relative flex flex-col items-center justify-center max-h-screen gap-12 px-4 py-24 overflow-auto text-white transition-all duration-500 ease-in-out transform scale-125 shadow-lg opacity-0 sm:overflow-visible sm:px-8 md:px-12 lg:px-24 "
        style={{
          backgroundColor: "#1a1d21",
          width: "45rem",
          opacity: open === true && "100%",
          scale: open === true && "100%",
        }}
      >
        <h2
          className="absolute top-0 hidden text-6xl text-transparent uppercase transform -translate-y-1/2 opacity-75 sm:block font-ant lg:text-mega"
          style={strokeText}
        >
          Subscribe
        </h2>
        <button
          onClick={closePopup}
          className="absolute top-0 right-0 w-12 h-12 text-3xl text-black transition-colors duration-500 ease-in-out transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full hover:bg-gray-400"
        >
          &times;
        </button>
        <p className="text-xl font-bold">
          <span className="text-eg-blue">Enter your information</span> for
          updates!
        </p>
        <form
          className="flex flex-col items-center justify-center w-full gap-8 max-w-screen"
          ref={formRef}
          // action="https://egmusicnyc.us20.list-manage.com/subscribe/post"
          onSubmit={onSubmit}
        >
          <input
            type="hidden"
            name="u"
            value="dce8fb4818d8d73805ce1f8d5"
          ></input>
          <input type="hidden" name="id" value="169eb90113"></input>
          <input type="hidden" name="orig-lang" value="1" />
          <Input
            type="text"
            name="MERGE1"
            id="MERGE1"
            label="First Name"
            required
          />
          <Input
            type="text"
            name="MERGE2"
            id="MERGE2"
            label="Last Name"
            required
          />
          <Input
            type="email"
            name="MERGE0"
            label="Email"
            id="MERGE0"
            size="25"
            autoCapitalize="off"
            autoCorrect="off"
            required
          />
          <button className="button">
            SUBSCRIBE
            <LiaLongArrowAltRightSolid className="ml-4" />
          </button>
        </form>
        {error && <p className="text-center text-red-400">{error}</p>}
      </div>
    </div>
  );
}
