import { createContext, useState } from "react";
import { interestT } from "../interfaces/webrtc.type";
type RandomChatContextT = {
  handleInterestClick: (interest: interestT) => void;
  selectedInterests: string[];
  showGif: boolean;
  gifIconClick: () => void;
  closeGifModal: () => void;
  handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  openImagePreviewModal: () => void;
  closeImagePreviewModal: () => void;
  openImagePreview: boolean;
  selectedImage: string;
  // handleGifClick: (
  //   gif: IGif,
  //   ev: React.SyntheticEvent<HTMLElement, Event>
  // ) => void;
};

export const RandomChatContext = createContext<RandomChatContextT | null>(null);

export const RandomChatContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [showGif, setShowGif] = useState(false);
  const [openImagePreview, setOpenImagePreview] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const gifIconClick = () => {
    // logEvent("chat_gif_open");
    setShowGif(true);
  };

  const closeGifModal = () => {
    // logEvent("chat_gif_close");
    setShowGif(false);
  };

  const handleInterestClick = (interest: interestT) => {
    setSelectedInterests((prev) => {
      if (prev.includes(interest.text)) {
        // logEvent("chat_interest_remove", { interest: interest.text });
        return prev.filter((i) => i !== interest.text);
      } else {
        // logEvent("chat_interest_select", { interest: interest.text });
        return [...prev, interest?.text];
      }
    });
  };

  const openImagePreviewModal = () => {
    setOpenImagePreview(true);
  };

  const closeImagePreviewModal = () => {
    setOpenImagePreview(false);
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const imageData = e.target.result as string;
      setSelectedImage(imageData);
      openImagePreviewModal();
    };

    // reader.onprogress = (e: ProgressEvent<FileReader>) => {
    //   console.log("progresss ===>", e.lengthComputable, e.loaded, e.total);
    //   if (e.lengthComputable) {
    //     const progress = (e.loaded / e.total) * 100;
    //     console.log("🥶🥶🥶", progress);
    //   }
    // };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <RandomChatContext.Provider
      value={{
        handleInterestClick,
        selectedInterests,
        showGif,
        closeGifModal,
        gifIconClick,
        handleImageSelect,
        openImagePreviewModal,
        closeImagePreviewModal,
        openImagePreview,
        selectedImage,
      }}
    >
      {children}
    </RandomChatContext.Provider>
  );
};
