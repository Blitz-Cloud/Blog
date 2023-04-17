import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

const NotFount = () => {
  return (
    <Layout>
      <div className="box-border flex h-[93vh] items-center justify-center  bg-slate-100 p-4 dark:bg-[#0d2739] dark:text-white">
        <div className="rounded-md bg-white/10 p-2 text-center backdrop-blur-md md:p-6 ">
          <p className="font-bold">404 ERROR</p>
          <h1 className="px-3 text-2xl sm:text-4xl md:text-6xl">
            Page not found
          </h1>
          <p className="m-1 px-3 py-1">
            We couldn't find the page you're looking for.
          </p>
          <Link
            to="/"
            className="m-1 box-border inline-block rounded-sm border px-3 py-1 text-lg font-semibold "
          >
            GO BACK HOME
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFount;

export const Head = () => <title>404</title>;
