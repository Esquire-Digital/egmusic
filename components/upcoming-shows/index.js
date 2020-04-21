import { format } from "date-fns";

export default function UpcomingShows({ shows }) {
  return (
    <>
      <section
        className="grid grid-cols-1 gap-4 px-4 my-16 lg:mb-32 md:px-12"
        id="shows"
      >
        {shows.map((show) => (
          <div
            className="flex flex-col items-center bg-black border-t-2 lg:flex-row border-eg-blue"
            key={show.id}
          >
            <div className="flex flex-col items-center p-8 border-b-2 border-gray-900 lg:border-r-2 lg:px-32 lg:py-16">
              <p className="m-0 leading-none text-white uppercase font-ant">
                {format(new Date(show.datetime), "MMMM")}
              </p>
              <p className="my-1 text-6xl leading-none text-white uppercase font-ant">
                {format(new Date(show.datetime), "dd")}
              </p>
              <p className="m-0 text-2xl leading-none text-white uppercase font-ant">
                {format(new Date(show.datetime), "Y")}
              </p>
            </div>
            <div className="flex flex-col items-center justify-between w-full px-4 py-8 lg:px-16 lg:flex-row">
              <div className="flex flex-col items-center justify-center mx-8 mb-8 text-xl font-bold leading-tight text-center text-white font-mont lg:items-start lg:mb-0">
                <p>{show.venue.name}</p>
                <div className="w-16 my-2 h-2px bg-eg-blue"></div>
                <p>
                  {show.venue.city}, {show.venue.region}
                </p>
              </div>
              <a
                className="button black"
                href={show.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                RSVP
                <img src="/images/arrow-right.png" alt="Arrow right" />
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
