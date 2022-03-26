import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";

type RadioPanelProps = {
  getSelectedRadioBtn: (query: string) => void;
};

export const RadioPanel: React.FC<RadioPanelProps> = ({
  getSelectedRadioBtn,
}) => {
  const [selectedRadioBtn, setSelectedRadioBtn] = useState("Any");

  const isRadioSelected = (value: string): boolean =>
    selectedRadioBtn === value;

  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const option = e.target.value;
    setSelectedRadioBtn(option);
    getSelectedRadioBtn(option);
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        fontSize: "1.3rem",
      }}
    >
      <Typography variant="h6" color="textSecondary" component="h2">
        {"Character status"}
      </Typography>
      <Typography variant="body1" color="textSecondary" component="h4">
        {"Any"}
      </Typography>
      <input
        type="radio"
        value="Any"
        checked={isRadioSelected("Any")}
        onChange={handleRadioClick}
      />
      <Typography variant="body1" color="textSecondary" component="h4">
        {"Alive"}
      </Typography>
      <input
        type="radio"
        value="Alive"
        checked={isRadioSelected("Alive")}
        onChange={handleRadioClick}
      />
      <Typography variant="body1" color="textSecondary" component="h4">
        {"Dead"}
      </Typography>
      <input
        type="radio"
        value="Dead"
        checked={isRadioSelected("Dead")}
        onChange={handleRadioClick}
      />
      <br />
      <br />
      <br />
    </div>
  );
};
