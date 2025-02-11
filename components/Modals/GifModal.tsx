import {
  Grid,
  SearchBar,
  SearchContext,
  SearchContextManager,
  SuggestionBar,
} from "@giphy/react-components";
import React, { useContext } from "react";
import ReactModal from "react-modal";
import ModalCloseButton from "./modalCloseButton";
import { IGif } from "@giphy/js-types";
import config from "../../config";

type GifModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  handleGifClick: (
    gif: IGif,
    ev: React.SyntheticEvent<HTMLElement, Event>
  ) => void;
};

export default function GifModal({
  isOpen,
  closeModal,
  handleGifClick,
}: GifModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Gif"
      overlayClassName={`fixed inset-0`}
      className={"fixed left-0 right-0 bottom-0"}
      ariaHideApp={false}
    >
      <SearchContextManager apiKey={config.giphyKey}>
        <GifContainer closeModal={closeModal} handleGifClick={handleGifClick} />
      </SearchContextManager>
    </ReactModal>
  );
}

type GifContainerT = {
  closeModal: () => void;
  handleGifClick: (
    gif: IGif,
    ev: React.SyntheticEvent<HTMLElement, Event>
  ) => void;
};

function GifContainer({ closeModal, handleGifClick }: GifContainerT) {
  const { fetchGifs, searchKey } = useContext(SearchContext);
  return (
    <div className="p-2 bg-slate-900 flex flex-col overflow-hidden overflow-y-scroll gap-y-2 h-[80svh] ">
      <div className="flex gap-x-2 ">
        <ModalCloseButton onClick={closeModal} className="w-fit" />
        <SearchBar placeholder="Search GIFs..." className="flex-1" />
      </div>
      <div className="">
        <SuggestionBar />
      </div>
      <Grid
        key={searchKey}
        columns={3}
        fetchGifs={fetchGifs}
        onGifClick={(gif, ev) => handleGifClick(gif, ev)}
        width={360}
        // onGifsFetchError={() => toast.error("Error in fetching GIFs")}
        className="mx-auto overflow-hidden overflow-x-auto overflow-y-auto"
        gutter={4}
        hideAttribution={true}
        noResultsMessage="No results found!!!"
      />
    </div>
  );
}
