import { Box, Paper } from "@mui/material";
import CalculatorHeader from "./CalculatorHeader";
import InputField from "./InputField";
import ResultDisplay from "./ResultDisplay";
import DetailedMetrics from "./DetailedMetrics";
import useLocalStorageState from "../hooks/useLocalStorage";
import useCalculatedMetrics from "../hooks/useCalculatedMetrics";

const NPercentCalculator = () => {
  const [currentState, setCurrentState] = useLocalStorageState(
    "currentState",
    "1"
  );
  const [percentAmount, setPercentAmount] = useLocalStorageState(
    "percentAmount",
    "1"
  );
  const { targetList, changeList } = useCalculatedMetrics(
    currentState,
    percentAmount
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: 1,
        height: "100vh",
        justifyContent: "center",
        backgroundImage: "url(background.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Paper elevation={12} sx={{ p: 4, width: "100%", maxWidth: 400, m: 3 }}>
        <CalculatorHeader />
        <Box sx={{ mt: 4 }}>
          <InputField
            label="Current State"
            value={currentState}
            onChange={(e) => setCurrentState(e.target.value)}
          />
          <InputField
            label="Percentage Amount"
            value={percentAmount}
            onChange={(e) => setPercentAmount(e.target.value)}
          />
          <ResultDisplay
            target={targetList["1 Day"]}
            change={changeList["1 Day"]}
          />
          <DetailedMetrics targetList={targetList} changeList={changeList} />
        </Box>
      </Paper>
    </Box>
  );
};

export default NPercentCalculator;
