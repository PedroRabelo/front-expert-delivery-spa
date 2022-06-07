import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { IconArrowTopDown, IconTargetLocation } from "../icon-family";

export function LocationsFilterDropdown() {
  const [locationSelected, setLocationSelected] = useState("");
  const locationDefault = "Selecione uma localidade";

  const locationsOptions = [
    {
      title: "São Francisco, California",
    },
    {
      title: "Los Angeles, California",
    },
    {
      title: "San Diego, California",
    },
  ];

  const saveLocation = (location: string) => {
    setLocationSelected(location);
  };

  useEffect(() => {
    const updateLocation = () => {
      setLocationSelected(locationDefault);
    };

    updateLocation();
  }, []);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex justify-center items-center w-full">
          <IconTargetLocation size={24} color="#503e9d" />
          {locationSelected}
          <div className="flex">
            <IconArrowTopDown size={16} color="#000000" />
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 w-72 mt-2 bg-gray-100 shadow-md rounded-xl overflow-hidden">
          {locationsOptions.map((location, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <button
                  onClick={() => saveLocation(location.title)}
                  className={`${
                    active && "bg-gray-200 text-gray-600"
                  } py-2 px-4`}
                >
                  {location.title}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
