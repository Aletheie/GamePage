import { Badge } from "@chakra-ui/react";

type Props = {
  score: number;
};

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge
      colorScheme={color}
      fontSize="14px"
      paddingX="5px"
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
