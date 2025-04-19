export default function Projects() {
  return (
    <article id="projects" className="flex flex-col w-full gap-2">
      <h2>Private projects</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col w-full gap-2 border">
          <img
            src="/images/portfolio.png"
            alt="Portfolio"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <h3 className="text-lg font-semibold">Portfolio</h3>
          <p className="text-gray-700">My personal portfolio website.</p>
          <p className="text-gray-500">Technologies: React, Tailwind CSS</p>
        </div>
        <div className="flex flex-col w-full gap-2 border">
          <img
            src="/images/portfolio.png"
            alt="Portfolio"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <h3 className="text-lg font-semibold">Portfolio</h3>
          <p className="text-gray-700">My personal portfolio website.</p>
          <p className="text-gray-500">Technologies: React, Tailwind CSS</p>
        </div>
      </section>
    </article>
  );
}
