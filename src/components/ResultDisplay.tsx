import { Typography } from "@mui/material";

interface ResultDisplayProps {
  target: string;
  change: string;
}

const ResultDisplay = ({ target, change }: ResultDisplayProps) => (
  <>
    <Typography variant="h3" fontWeight="600" color="#FF4D00" align="center">
      {target}
    </Typography>
    <Typography
      variant="h6"
      fontWeight="500"
      align="center"
      color="text.secondary"
      gutterBottom
    >
      (Increased by {change})
    </Typography>
  </>
);

export default ResultDisplay;
