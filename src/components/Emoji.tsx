import { Text } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 2) return null;

  const emoji = ["😵", "🥲", "❤️", "😮‍💨"];

  return (
    <>
      <Text mt={1}>{emoji[rating - 2]}</Text>
    </>
  );
};

export default Emoji;
