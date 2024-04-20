import fetch from "node-fetch";

export async function getShows() {
  const future =
    "https://rest.bandsintown.com/artists/Emily%20Gabriele/events/?app_id=js_www.artists.bandsintown.com&date=upcoming";
  const past =
    "https://rest.bandsintown.com/artists/Emily%20Gabriele/events/?app_id=js_www.artists.bandsintown.com&date=past";
  const url = future;
  const res = await fetch(url);

  let shows = await res.json();
  shows = shows.length > 0 ? shows.slice(0, 9) : [];
  return shows;
}
