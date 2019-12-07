import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const AntTabs = withStyles({
  root: {
    alignSelf: "flex-end"
  },
  indicator: {
    backgroundColor: "#fff",
    height: "5px",
    clipPath:
      "polygon(calc(100% - 2.5px) 0, 100% calc(0% + 2.5px), 100% 100%, 0 100%, 0 calc(0% + 2.5px), calc(0% + 2.5px) 0)"
  }
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    display: "grid",
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      color: "#fff",
      opacity: 1
    },
    "&$selected": {
      color: "#fff",
      fontWeight: theme.typography.fontWeightMedium
    },
    "&:focus": {
      color: "#fff"
    }
  },
  selected: {}
}))(props => <Tab disableRipple {...props} />);

const CustomizedTabs = ({ index, MapData, changeRoute, ...rest }) => {
  return (
    <>
      <AntTabs
        value={index}
        variant="scrollable"
        aria-label="ant example"
        {...rest}
      >
        {MapData &&
          MapData.map((data, i) => (
            <AntTab
              key={data.tabName}
              label={data.tabName}
              onClick={() => changeRoute(data.tabName, i)}
              {...rest}
            />
          ))}
      </AntTabs>
    </>
  );
};

export default CustomizedTabs;
