import styled from "@emotion/styled";
import {
  ArrowRightAlt,
  Attractions,
  CarRental,
  Flight,
  Hotel,
  LocalTaxi,
  SearchOutlined,
} from "@mui/icons-material";
import { alpha, Button, InputBase, TextField, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import './Header.css'




const SearchBar = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
  },
  width: "300px",

  [ theme.breakpoints.up("sm") ]: {
    marginLeft: theme.spacing(1),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));



let initialState = {
  stays: false,
  flights: false,
  car: false,
  attractions: false,
  taxi: false,
};
const Header = () => {

  const [ value, setValue ] = useState(initialState);
  console.log(value);

  const handleClick = useCallback(
    (name) => (e) => {
      const newState = Object.assign({}, initialState);
      switch (name) {
        case "stays":
          newState.stays = true;
          break;
        case "flights":
          newState.flights = true;
          break;
        case "car":
          newState.car = true;
          break;
        case "attractions":
          newState.attractions = true;
          break;
        case "taxi":
          newState.taxi = true;
          break;
        default:
          break;
      }
      setValue(newState);
    },
    [ setValue ]
  );

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList" >
          <div>
            <Button
              endIcon={<Hotel />}
              onClick={handleClick("stays")}
              sx={{
                color: "white",
                textTransform: "none",
                width: "100px",
                border: value.stays ? "2px solid white" : "none",
                borderRadius: value.stays ? "20px" : "none",
              }}
            >
              Stays
            </Button>
          </div>
          <div>
            <Button
              endIcon={<Flight />}
              onClick={handleClick("flights")}
              sx={{
                color: "white",
                textTransform: "none",
                width: "100px",
                border: value.flights ? "2px solid white" : "none",
                borderRadius: value.flights ? "20px" : "none",
              }}
            >
              Flights
            </Button>
          </div>
          <div>
            <Button
              endIcon={<CarRental />}
              onClick={handleClick("car")}
              sx={{
                color: "white",
                textTransform: "none",
                border: value.car ? "2px solid white" : "none",
                borderRadius: value.car ? "20px" : "none",
              }}
            >
              Car rentals
            </Button>
          </div>
          <div>
            <Button
              onClick={handleClick("attractions")}
              endIcon={<Attractions />}
              sx={{
                color: "white",
                textTransform: "none",
                border: value.attractions ? "2px solid white" : "none",
                borderRadius: value.attractions ? "20px" : "none",
              }}
            >
              Attractions
            </Button>
          </div>
          <div>
            <Button
              onClick={handleClick("taxi")}
              endIcon={<LocalTaxi />}
              sx={{
                color: "white",
                textTransform: "none",
                border: value.taxi ? "2px solid white" : "none",
                borderRadius: value.taxi ? "20px" : "none",
              }}
            >
              Airport taxis
            </Button>
          </div>
        </div>
        <h1
          style={{
            fontSize: "4em"
          }}
        >
          Travel, explore, love.
        </h1>
        <p
          style={{
            margin: "20px 0px",
            maxWidth: "700px",
            lineHeight: "1.5em",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta sem
          massa, non bibendum sem facilisis eu. Integer id blandit erat. Donec
          egestas auctor faucibus. Donec ultricies enim mauris.
        </p>
        <Button
          endIcon={<ArrowRightAlt />}
          variant="outlined"
          sx={{
            color: "white",
            border: "2px solid white",

          }}
        >
          Explore now
        </Button>
        <div style={{ marginLeft: 0, marginTop: '2em' }}>
          <SearchBar>
            <SearchIconWrapper>
              <SearchOutlined />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search.."
              inputProps={{ "aria-label": "search" }}
            />
          </SearchBar>
        </div>
      </div>
    </div>
  )
};

export default Header;
