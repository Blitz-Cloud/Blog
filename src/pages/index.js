import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <div className="dark:bg-primary dark:text-white text-center">
        <header className="h-[60vh] md:h-[95vh] p-4 m-auto sm:max-w-[50vw] flex flex-col justify-center items-center">
          <h1 className="font-Alkatra font-bold text-5xl md:text-6xl my-6 tracking-wider">
            Hi, I`m Ionut!
          </h1>
          <div className="text-xl">
            <p>
              <span className="font-semibold">Student</span> from Romania.
            </p>
            <p className="m-auto sm:max-w-[90%]">
              I'm passionate about back-end technologies and designing and
              managing linux server.
            </p>
            <p className="my-3 m-auto sm:max-w-[85%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis nisi provident expedita.
            </p>
          </div>
        </header>
      </div>
      <div className="dark:bg-[#0d2739] dark:text-white bg-slate-100 ">
        <main className="m-auto lg:max-w-[80vw] py-12 p-4 md:px-16">
          <div className="rounded-full my-3 bg-primary inline-block py-1 px-3 uppercase  text-[#f5f5f5]">
            Latest Post
          </div>
          {/* article */}
          <div>
            <h2 className="text-lg md:text-4xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p className="py-4 text-base md:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis corporis et voluptatem vitae sit soluta dicta ipsum
              neque! Magni suscipit neque quae, incidunt eveniet rerum. Possimus
              repellendus vitae ipsa perferendis.
            </p>
            <a
              className="text-base md:text-lg py-1 px-3 rounded-md dark:bg-[#feffbe] bg-[#0077B6] text-white  dark:text-black dark:fill-black fill-white tracking-wider inline-flex items-center"
              href=""
            >
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 96 960 960"
                width="24"
                className="ml-2 inline-block"
              >
                <path d="m480 896-42-43 247-247H160v-60h525L438 299l42-43 320 320-320 320Z" />
              </svg>
            </a>
          </div>
          {/* article list */}
        </main>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
