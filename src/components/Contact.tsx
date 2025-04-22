export default function Contact() {
  return (
    <article id="contact">
      <h2>Contact</h2>
      <section className="flex flex-col w-full gap-2">
        <p className="text-sm font-semibold text-gray-500">
          The best way to reach me is by email at{" "}
          <a
            href="mailto:hello@jankamon.dev"
            className="text-gray-300 hover:text-gray-100"
          >
            hello@jankamon.dev
          </a>{" "}
          or through{" "}
          <a
            href="https://www.linkedin.com/in/jan-kamon/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-100"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </article>
  );
}
