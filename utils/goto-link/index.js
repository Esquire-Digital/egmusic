export default function gotoLink(href) {
  const el = document.getElementById(href);
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
