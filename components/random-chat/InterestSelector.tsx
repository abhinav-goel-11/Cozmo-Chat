import React, { Suspense, useEffect } from "react";
import { intersets } from "../../constants/randomChat.constants";
import InterestBadge from "./InterestBadge";
import useRandomChatContext from "../../hooks/useRandomChatContext";

type Props = {
  searching: {
    searching: boolean;
    tries: number;
  };
};

export default function InterestSelector({ searching }: Props) {
  const {
    handleInterestClick,
    selectedInterests,
  } = useRandomChatContext();


  // const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  // const handleInterestClick = (interest: interestT) => {
  //   setSelectedInterests((prev) => {
  //     if (prev.includes(interest.text)) {
  //       return prev.filter((i) => i !== interest.text);
  //     } else {
  //       return [...prev, interest?.text];
  //     }
  //   });
  // };

  return (
    <>
      <p className="text-gray font-normal text-sm">
        Choose interests to find better matches:
      </p>
      <div className="flex flex-wrap justify-center items-center self-stretch gap-3 mt-4">
        {intersets.map((interest) => (
          <InterestBadge
            key={interest.id}
            interest={interest}
            isSelected={selectedInterests.includes(interest?.text)}
            onClick={handleInterestClick}
            searching={searching}
          />
        ))}
      </div>
    </>
  );
}
