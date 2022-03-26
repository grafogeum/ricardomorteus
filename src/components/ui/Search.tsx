import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@mui/styles";
type SearchProps = {
  getQuery: (query: string) => void;
};

const useStyles = makeStyles({
  searchSection: {
    width: "95vw",
    height: "100px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBtn: {
    border: 0,
    borderRadius: 5,
    color: "#F5F5F5",
    height: 48,
    padding: "0 30px",
  },
  logo : {
    width:"10vw",
    padding: "0 30px",
    "& img": {
      width:"100%"
    }
  }
});

export const Search: React.FC<SearchProps> = ({ getQuery }) => {
  const [searchValue, setSearchValue] = useState("");
  const classes = useStyles();
  const onChange = (query: string) => {
    setSearchValue(query);
    getQuery(query);
  };

  return (
    <section className={classes.searchSection}>
      <div className={classes.logo} ><img src ="https://flyclipart.com/thumb2/rick-icon-free-space-iconset-good-stuff-no-nonsense-240823.png"/> </div>
      <TextField
        label="Search"
        className={classes.searchBtn}
        type="text"
        value={searchValue}
        onChange={(e) => onChange(e.target.value)}
        autoFocus
      />
    </section>
  );
};
