import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SearchResult from "../pages/SearchResult";
import TextInput from "./TextInput";
import React from "react";
import { Link } from "react-router-dom";

const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books";
const navigation = [
  { name: "All", path: "all", current: false },
  { name: "Latest", path: "latest", current: false },
  { name: "Top Pick", path: "top_picks", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [status, setStatus] = React.useState();

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${ENDPOINT}?search=${searchTerm}`);
      const data = await response.json();

      if (response.ok) {
        setSearchResults(data.data);
        setStatus("success");
      } else {
        setStatus("error");
        console.error(data.message || "Error fetching search results");
      }
    } catch (error) {
      setStatus("error");
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <>
      <Disclosure as="nav" className="bg-white-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-[50px] w-auto"
                      src="src\assets\logo.png"
                      alt="Your Company"
                    />
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="hidden sm:ml-6 sm:block pr-5">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <div
                          key={item.name}
                          path={item.path}
                          className={classNames(
                            item.current
                              ? "text-[#1D1D1D]"
                              : "text-[#757575] hover:text-black",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <Link to={item.path}>{item.name}</Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  <form className="search-box" onSubmit={handleSearch}>
                    <TextInput
                      type="search"
                      className="relative m-0 block w-[250px] min-w-0 flex-auto rounded border border-solid border-neutral-600 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                      placeholder="Search by Title or Author"
                      aria-label="Search"
                      aria-describedby="button-addon2"
                      value={searchTerm}
                      onChange={(event) => {
                        setSearchTerm(event.target.value);
                      }}
                    />
                    <input type="submit" hidden />
                  </form>
                  <div className="border-gray-500  ">
                    <button className="block rounded-md px-3 py-[0.25rem] ml-2 border-solid border border-[#8170F2]">
                      Edit List
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <main>
        <div className="search-results">
          {searchResults.length > 0 ? (
            searchResults.map((result, index) => (
              <SearchResult key={index} data={result} />
            ))
          ) : status === "success" ? (
            <p>No search results found</p>
          ) : status === "error" ? (
            <p></p>
          ) : (
            <p></p>
          )}
        </div>
      </main>
    </>
  );
}
