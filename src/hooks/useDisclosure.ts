import { useState } from "react";

interface DisclosureState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useDisclosure = (): DisclosureState => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = (): void => {
    setIsOpen(true);
  };

  const onClose = (): void => {
    setIsOpen(false);
  };

  return {
    isOpen,
    onOpen,
    onClose,
  };
};

export default useDisclosure;