const Contact = () => {
  return (
    <div className="order-1 box md:order-2 ">
      {/* <motion.ol
        class="relative border-gray-200 border-s dark:border-gray-700"
        initial={{ opacity: 0, scale: 2, x: 500 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1 }}
      > */}
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
              Contact Me
            </h1>
            <form
              class="space-y-4 md:space-y-6"
              action="/addhero"
              method="post"
              enctype="multipart/form-data"
            >
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@mail.com"
                />
              </div>
              <div>
                <label
                  for="phonenom"
                  class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  name="ponenom"
                  id="ponenom"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+62 "
                />
              </div>
              <div>
                <label
                  for="sub"
                  class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="sub"
                  id="sub"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Subject ..."
                />
              </div>
              <div>
                <label
                  for="message"
                  class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="message"
                  name="description"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Description ..."
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full px-4 py-2 mt-2 text-sm text-center text-white transition-all border border-transparent rounded-md shadow-md bg-sky-400 hover:shadow-lg focus:shadow-none active:bg-sky-500 hover:bg-sky-500 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* </motion.ol> */}
    </div>
  );
};
export default Contact;
