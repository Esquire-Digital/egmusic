import Modal from "../modal";
import { useState } from "react";

export default function FeaturedVideos() {
  const [embed, setEmbed] = useState("");

  function openModal(embed) {
    setEmbed(embed);
    document.querySelector(".modal").classList.add("modal--open");
    const event = new Event("modal--open");
    document.dispatchEvent(event);
  }

  return (
    <>
      <Modal embed={embed} />
      <section
        className="grid grid-cols-1 gap-12 px-6 py-8 lg:gap-24 lg:px-24 lg:py-16 lg:grid-cols-2"
        id="live"
      >
        <div className="flex flex-col items-end justify-end">
          <div className="relative">
            <img
              loading="lazy"
              className="relative z-10 object-cover object-center w-full h-full"
              src="/images/thumb-1.png?webp"
              alt=""
            />
            <div className="absolute bottom-0 left-0 w-full h-full transform -translate-x-6 translate-y-6 bg-eg-blue"></div>
          </div>
          <button
            className="z-10 mt-12 mr-6 button primary"
            onClick={() => {
              openModal("https://vimeo.com/342333493");
            }}
          >
            watch
          </button>
        </div>
        <div className="flex flex-col items-end justify-end">
          <div className="relative">
            <img
              loading="lazy"
              className="relative z-10 object-cover object-center w-full h-full"
              src="/images/thumb-2.png?webp"
              alt=""
            />
            <div className="absolute bottom-0 left-0 w-full h-full transform -translate-x-6 translate-y-6 bg-eg-blue"></div>
          </div>
          <button
            className="z-10 mt-12 mr-6 button primary"
            onClick={() => {
              openModal("https://vimeo.com/235746460");
            }}
          >
            watch
          </button>
        </div>
      </section>
    </>
  );
}
