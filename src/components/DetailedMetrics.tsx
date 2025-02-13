import { Typography } from "@mui/material";

interface DetailedMetricsProps {
  targetList: Record<string, string>;
  changeList: Record<string, string>;
}

const MetricDisplay = ({
  label,
  target,
  change,
}: {
  label: string;
  target?: string;
  change?: string;
}) =>
  target ? (
    <Typography
      variant="body1"
      align="center"
      color="text.secondary"
      gutterBottom
    >
      {`${target} after ${label} (↑ ${change})`}
    </Typography>
  ) : null;

const DetailedMetrics = ({ targetList, changeList }: DetailedMetricsProps) => {
  const timeFrames = ["1 Week", "1 Month", "3 Months", "6 Months", "1 Year"];

  return (
    <>
      {timeFrames.map((label) => (
        <MetricDisplay
          key={label}
          label={label}
          target={targetList[label]}
          change={changeList[label]}
        />
      ))}
    </>
  );
};

export default DetailedMetrics;
