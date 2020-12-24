import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import TitleSection from "./TitleSection";
import TabSection from "./TabSection";
import { ReactComponent as RefreshIcon } from "../../src/assets/refresh.svg";
import { refreshTitles, setInputProps } from "../stores/UserActions.js";
import Tooltip from "@material-ui/core/Tooltip";

import "./TabContent.css";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const TabContent = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInputProps(props));
  }, [props]);

  const showRefreshIcon = useSelector((state) => state.titleRefreshAll);
  const error = useSelector((state) => state.error);
  if (error) {
    return (
      <div className="error-message">
        <br />
        <br />
        Exception Occured - Cannot process the input.
        <br />
        {error}
      </div>
    );
  }

  let refreshIcon;
  if (showRefreshIcon) {
    refreshIcon = (
      <div className="refresh-icon" onClick={() => dispatch(refreshTitles())}>
        <Tooltip title="Refresh to display all titles" aria-label="refresh">
          <RefreshIcon />
        </Tooltip>
      </div>
    );
  }

  return (
    <div className="tab-content-container">
      {refreshIcon}
      <Card className="title-container">
        <TitleSection />
      </Card>
      <Card className="tab-container">
        <TabSection />
      </Card>
    </div>
  );
};
