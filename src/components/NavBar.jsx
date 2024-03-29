
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSearch } from "../store/search";

const navigation = [
  { name: "All", path: "", current: true },
  { name: "Latest", path: "latest", current: false },
  { name: "Top Pick", path: "top_picks", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [search, setSearch] = React.useState("");
  const [warning, setWarning] = React.useState(false);
  const setKeyword = useSearch((state) => state.setKeyword);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (search.split("").length < 3 && search !== "") {
      setWarning(true);
    } else {
      setWarning(false);
    }
  }, [search]);

  const handleSearch = (e) => {
    if (warning) {
      return;
    }

    if (e.key === 'Enter') {
      setKeyword(e.target.value);
      navigate(`books/search/${e.target.value}`);
      setSearch('');
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
                  <div className="search-box">
                    <input
                      type="search"
                      className="relative m-0 block w-[250px] min-w-0 flex-auto rounded border border-solid border-neutral-600 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                      placeholder="Search by Title or Author"
                      aria-label="Search"
                      aria-describedby="button-addon2"
                      value={search}
                      onKeyDown={handleSearch}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                    {warning && (
                      <p className="absolute -bottom-8 right-6 text-red-500 text-sm">
                        Enter 3 or more characters
                      </p>
                    )}

                    <input type="submit" hidden />
                  </div>

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
    </>
  );
}
