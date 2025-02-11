import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Dots from "../../assets/svg-icon/3-dot-menu.svg";

import BottomModal from "../BottomModal";
import { toast } from "react-toastify";
import {
  randomChatActions,
  randomChatActionsEnum,
} from "../../constants/randomChat.constants";
import Image from "next/image";

type RandomChatDropdownProps = {};

const RandomChatDropdown = ({}: RandomChatDropdownProps) => {

  const [isOpen, setIsOpen] = useState(false);
  const [filteredActions, setFilteredActions] = useState([]);
  const [randomChatModal, setRandomChatModal] = useState(false);
  const [isReported, setIsReported] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const openRandomChatActions = () => {
    setRandomChatModal(true);
  };

  const closeRandomChatActions = () => {
    setRandomChatModal(false);
  };

  const handleDotsClicked = async () => {
    if (isOpen) return; //only call api when opened

    let filteredActions = [randomChatActions[randomChatActionsEnum.report]]; //initialize with report

    setFilteredActions(filteredActions);
  };

  const handleReportUser = () => {
    if (isReported) {
      toast.success("Already Reported");
    } else {
      setIsReported(true);
      toast.success("User Reported");
    }
  };

  const handleActionClick = async (type) => {
    const { value } = type;
    if (value === randomChatActionsEnum.report) {
      handleReportUser();
    }
    closeDropdown();
    closeRandomChatActions();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        closeDropdown();
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.addEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative inline-block">
        <button
          onClick={() => {
            toggleDropdown();
            handleDotsClicked();
            openRandomChatActions();
          }}
          className=" border-none cursor-pointer"
        >
          <Image
            src={Dots}
            alt="dots"
            height={20}
            width={20}
            className="action-dropBtn"
            ref={dropdownRef}
          />
        </button>

        <div
          id="myDropdown"
          className={twMerge(
            "hidden absolute top-full right-0 bg-gradient-to-b from-[#3E2627] to-[#13151F] edit-modal-border shadow-md z-10 py-2 px-5  space-y-2",
            isOpen && "sm:block"
          )}
        >
          {filteredActions.map((type) => {
            return (
              <div
                key={type?.value}
                className={twMerge("flex py-3 w-[223px] cursor-pointer")}
                onClick={() => handleActionClick(type)}
              >
                <div className="flex gap-x-3 ">
                  <img
                    src={type?.icon?.src}
                    alt="action-icon"
                    className="w-5 aspect-square"
                  />
                  <span
                    className={`mt-1 text-sm font-normal ${
                      type?.value === randomChatActionsEnum?.report &&
                      "text-[#F07878]"
                    }`}
                  >
                    {type?.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/*for mobile view*/}
      <BottomModal
        isOpen={randomChatModal}
        onRequestClose={closeRandomChatActions}
      >
        <div className="flex flex-col items-center space mt-2">
          <div className="rounded-[18px] bg-[#000000]/20 h-[5px] w-[34px] "></div>
        </div>
        <div className="mx-6 mb-6">
          {filteredActions.map((type) => {
            return (
              <button
                key={type?.value}
                className="flex py-3  w-full"
                onClick={() => handleActionClick(type)}
              >
                <div className="flex gap-x-4">
                  <img src={type?.icon?.src} alt="action-icon" />
                  <span
                    className={`mt-1 ${
                      type?.value === randomChatActionsEnum?.report &&
                      "text-[#F07878]"
                    }`}
                  >
                    {type?.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </BottomModal>
    </>
  );
};

export default RandomChatDropdown;
