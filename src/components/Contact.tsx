export default function Contact() {
  return (
    <article id="contact">
      <h2>Contact</h2>
      <section className="flex flex-col w-full gap-2">
        <p className="text-sm font-semibold text-gray-500">
          If you want to get in touch, the best way is to reach out via email:{" "}
          <a
            href="mailto:hello@jankamon.dev"
            className=" text-gray-300 hover:text-gray-100"
          >
            hello@jankamon.dev
          </a>
        </p>
      </section>
    </article>
  );
}
