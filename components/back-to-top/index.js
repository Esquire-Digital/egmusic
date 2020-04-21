import { useEffect } from "react";
import { useWindowScroll } from "react-use";

export default function BackToTop() {
  const { y } = useWindowScroll();

  useEffect(() => {
    const btt = document.querySelector(".btt");
    if (y > 100) {
      btt.classList.add("btt--open");
    } else {
      btt.classList.remove("btt--open");
    }
  });

  return (
    <button
      className="btt"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <svg
        viewBox="0 0 32 32"
        className="box-content w-8 h-8 p-2 fill-current"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M8 20.695l7.997-11.39L24 20.695z" />
      </svg>
    </button>
  );
}
