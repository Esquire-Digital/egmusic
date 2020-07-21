import Modal from "../modal";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { attributes } from '../../content/featured.md';

export default function FeaturedVideos() {
  let { videos } = attributes;
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
        {videos.slice(0, 2).map((vid, k) => (
          <div key={k} className="flex flex-col items-end justify-end">
            <div className="relative">
              <LazyLoadImage
                className="relative z-10 object-cover object-center w-full h-full"
                src={vid.thumbnail}
                alt={vid.thumbAlt}
              />
              {/* <img
              className="relative z-10 object-cover object-center w-full h-full"
              src={require("../../public/media/thumb-2.png")}
              alt=""
            /> */}
              <div className="absolute bottom-0 left-0 w-full h-full transform -translate-x-6 translate-y-6 bg-eg-blue"></div>
            </div>
            <button
              className="z-10 mt-12 mr-6 button primary"
              onClick={() => {
                openModal(vid.video);
              }}
            >
              watch
          </button>
          </div>

        ))}
      </section>
    </>
  );
}
