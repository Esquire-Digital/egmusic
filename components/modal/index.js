import ReactPlayer from "react-player";
import { useState } from "react";
import { useEffectOnce } from "react-use";

export default function Modal({ embed }) {
  const [playing, setPlaying] = useState(false);

  useEffectOnce(() => {
    document.addEventListener("modal--open", () => {
      setPlaying(true);
    });
  });

  function closeModal() {
    setPlaying(false);
    document.querySelector(".modal").classList.remove("modal--open");
  }

  return (
    <aside className="modal" style={{ paddingTop: "56.25%" }}>
      <div className="fixed inset-0 z-10 bg-black opacity-50"></div>
      <button
        className="fixed top-0 right-0 z-30 px-4 py-6 mt-2 mr-2 text-4xl font-bold text-white absolte font-mont"
        style={{ lineHeight: 0 }}
        onClick={() => {
          closeModal();
        }}
      >
        &times;
      </button>
      <ReactPlayer
        className="fixed inset-0 z-20 m-auto pointer-events-none"
        url={embed}
        playing={playing}
        playsinline={true}
        width="100%"
        height="100%"
      />
    </aside>
  );
}
