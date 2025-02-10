import { useState, useEffect } from "react";
import { Box, Paper } from "@mui/material";
import CalculatorHeader from "./CalculatorHeader";
import InputField from "./InputField";
import ResultDisplay from "./ResultDisplay";

const useLocalStorageState = (key: any, defaultValue: any) => {
  const [state, setState] = useState(
    () => localStorage.getItem(key) || defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};

const NPercentCalculator = () => {
  const [currentState, setCurrentState] = useLocalStorageState(
    "currentState",
    "1"
  );
  const [percentAmount, setPercentAmount] = useLocalStorageState(
    "percentAmount",
    "1"
  );

  const calculateTarget = () => {
    const current = parseFloat(currentState);
    const percent = parseFloat(percentAmount);
    if (isNaN(current) || isNaN(percent)) return "";
    return (current * (1 + percent / 100)).toFixed(2);
  };

  const calculateChange = () => {
    const current = parseFloat(currentState);
    const percent = parseFloat(percentAmount);
    if (isNaN(current) || isNaN(percent)) return "";
    return ((current * percent) / 100).toFixed(2);
  };

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
            target={calculateTarget()}
            change={calculateChange()}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default NPercentCalculator;
