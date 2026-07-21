// Components Import
import Layout from "../Layout";
import Map from "../components/app-components/Map";
import Hero from "../components/app-components/Hero";
import Hero1 from "../components/app-components/Hero1";
import Hero2 from "../components/app-components/Hero2";
import Navbar from "../components/app-components/Navbar";
import Error from "../components/helper-components/Error";
import Loader from "../components/helper-components/Loader";
import Forecast from "../components/app-components/Forecast";
import SearchBar from "../components/app-components/SearchBar";

// Cloud Icons Import
import Level1 from "../assets/cloud-icons/Level 1.png";
import Level2 from "../assets/cloud-icons/Level 2.png";
import Level3 from "../assets/cloud-icons/Level 3.png";
import Level4 from "../assets/cloud-icons/Level 4.png";
import Level5 from "../assets/cloud-icons/Level 5.png";
import Level6 from "../assets/cloud-icons/Level 6.png";

// Lucide Icons Import
import {
  X,
  Sun,
  Menu,
  Wind,
  House,
  Search,
  MapPin,
  WindArrowDown,
} from "lucide-react";

// Weather App Icons Import
import wind from "../assets/weather-icons/wind.png";
import rain from "../assets/weather-icons/rain.png";
import clouds from "../assets/weather-icons/clouds.png";
import humidity from "../assets/weather-icons/humidity.png";
import pressure from "../assets/weather-icons/pressure.png";
import visibility from "../assets/weather-icons/visibility.png";

// Weather App Images Import
import weather from "../assets/weather.png";
import bgImage from "../assets/bgImage.png";
import IndiaPC from "../assets/India-pc.png";
import IndiaMB from "../assets/India-mb.png";

// React Hooks Import
import { useState, createContext, useContext, useEffect } from "react";

// React Router Dom Hooks Import
import { Outlet, BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Weather OBJ for Matching Weather Icon Code With Differen Level of Cloud Images
const weatherImages = {
  "01d": Level1,
  "01n": Level1,
  "02d": Level2,
  "02n": Level2,
  "03d": Level2,
  "03n": Level2,
  "04d": Level3,
  "04n": Level3,
  "09d": Level3,
  "09n": Level3,
  "10d": Level4,
  "10n": Level4,
  "11d": Level4,
  "11n": Level4,
  "13d": Level5,
  "13n": Level5,
  "50d": Level6,
  "50n": Level6,
};

// City Object with all cities Import
import { cityobj } from "./city";

// Creating Context To Provide
const UserContext = createContext();

// Context Export
export { UserContext };

// City Object Export
export { cityobj };

// Export Weather OBJ
export { weatherImages };

// Components Export
export {
  Layout,
  Navbar,
  SearchBar,
  Hero,
  Hero1,
  Hero2,
  Forecast,
  Map,
  Loader,
  Error,
};

// Clouds Icon Export
export { Level1, Level2, Level3, Level4, Level5, Level6 };

// Lucide Icons Export
export { X, Sun, Menu, Wind, House, Search, MapPin, WindArrowDown };

// Weather App Icons Export
export { clouds, humidity, pressure, rain, visibility, wind };

// Weather App Images Export
export { weather, bgImage, IndiaMB, IndiaPC };

// React Hooks Export
export { useState, createContext, useContext, useEffect };

// React Router Dom Hooks Export
export { Outlet, BrowserRouter, Routes, Route, Link };

// Geolocation API Header Export
export const geoOption = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "7079ae9c40msh2da0fdac9243c40p15823ajsnb7c3c39f0109",
    "x-rapidapi-host": "geocoding-by-api-ninjas.p.rapidapi.com",
    "Content-Type": "application/json",
  },
};

// Weather API Header Export
export const weatherOption = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "7079ae9c40msh2da0fdac9243c40p15823ajsnb7c3c39f0109",
    "x-rapidapi-host": "open-weather13.p.rapidapi.com",
    "Content-Type": "application/json",
  },
};
