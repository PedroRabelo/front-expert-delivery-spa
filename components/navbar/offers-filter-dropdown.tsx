import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { IconArrowTopDown, IconDiscount } from "../icon-family";

export function OffersFilterDropdown() {
  const [offerModeSelected, setOfferModeSelected] = useState("");
  const offerDefault = "Na região";
  const offerOptions = [
    {
      title: "Na região",
    },
    {
      title: "Da semana",
    },
  ];

  const saveOffer = (offerMode: string) => {
    setOfferModeSelected(offerMode);
  };

  useEffect(() => {
    const update = () => {
      setOfferModeSelected(offerDefault);
    };

    update();
  }, []);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex justify-center items-center w-full">
          <IconDiscount size={24} color="#facd5d" />
          {offerModeSelected}
          <div>
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
        <Menu.Items className="absolute right-0 w-56 mt-2 bg-gray-100 shadow-md rounded-xl overflow-hidden">
          {offerOptions.map((offer, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <button
                  onClick={() => saveOffer(offer.title)}
                  className={`${
                    active && "bg-gray-200 text-gray-600"
                  } py-2 px-4`}
                >
                  {offer.title}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
