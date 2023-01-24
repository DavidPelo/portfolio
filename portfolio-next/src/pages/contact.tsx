import Layout from '../components/Layout'
export default function Contact() {
  return (
    <Layout>
      <section className="mx-auto w-full max-w-[600px]">
        <h2 className="pb-4 text-2xl">Let&apos;s work together</h2>
        <form className="m-auto max-w-[600px]">
          <div className="grid grid-cols-2 gap-2">
            <input
              className="border p-3 shadow-lg"
              type="text"
              placeholder="Name"
            />
            <input
              className="border p-3 shadow-lg"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            className="my-2 w-full border p-3 shadow-lg"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="w-full border p-3 shadow-lg"
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button className="mt-2 w-full border p-3 shadow-lg">Submit</button>
        </form>
      </section>
    </Layout>
  )
}
