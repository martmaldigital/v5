import React, { useState, useEffect, useCallback } from "react";
import { notification, message } from "antd";
import Image from "next/image";
import axios from "axios";
import api from "config/api";
import Facilityvisit from "./facilityvisit";
import Homevisit from "./homevisit";
import Videovisit from "./videovisit";
import { useSelector } from "react-redux";

const openNotificationWithIcon = (type, msg, desc) => {
  notification[type]({
    message: msg,
    description: desc,
  });
};


const Bannerform = (props) => {
  const [requesting, setRequesting] = useState(false);
  const [bannerButtons, setBannerButtons] = useState([
    {
      active: true,
      name: "Telemedicine",
      pos: "one",
      image: "Tele1.svg",
      image2: "Tele2.svg"
    },
    {
      active: false,
      name: "Facility Visit",
      pos: "two",
      image: "Facility1.svg",
      image2: "Facility2.svg"
    },
    {
      active: false,
      name: `Home Visit`,
      pos: "three",
      image: "home1.svg",
      image2: "home2.svg"
    },
  ]);
  const [locations, setLocations] = useState([]);
  const [coverage, setCoverage] = useState([]);
  const [specialization, setSpecialization] = useState([]);

  const { search } = useSelector((state) => ({
    search: state.searchReducer,
  }));

  // get search matrials
  const getSearchMaterials = useCallback(() => {
    axios
      .get(`${api}/api/search-criteria`)
      .then((res) => {
        setSpecialization(res.data.data.specialization);
        setLocations(res.data.data.availableLocations);
        if (search.visitType === "Home Visit") {
          getCoverageLocation();
        }
      })
      .catch((err) => {
        message.error("Get Specializations or Location: Something went wrong!");
        console.log(err);
      });
  }, [search, getCoverageLocation]);

  // get coverage location
  const getCoverageLocation = useCallback(() => {
    axios
      .get(`${api}/api/appointments/coverage-locations`)
      .then((res) => {
        setCoverage(res.data.data.locations);
      })
      .catch((err) => {
        message.error("Get Coverage Location: Something went wrong!");
      });
  }, []);

  // tab switch
  const switchBannerButtton = useCallback(
    (key) => {
      let staged = bannerButtons;
      if (key === 2) {
        getCoverageLocation();
      }
      if (requesting) {
        openNotificationWithIcon(
          "warning",
          "Requesting",
          "Kindly wait till the request is done!"
        );
      } else {
        staged.forEach((item, index) => {
          if (index === key) {
            item.active = true;
          } else {
            item.active = false;
          }
        });
        if (key === 2) {
          staged[0].pos = "three";
        }
      }
      setBannerButtons((prev) => [...staged]);
    },
    [getCoverageLocation, bannerButtons, requesting]
  );

  // update requesting
  const updateRequesting = (value) => {
    setRequesting(value);
  };

  // initial search
  const initSearchType = useCallback(() => {
    if (search.searchType === "facility") {
      switchBannerButtton(1);
    }
    if (search.searchType === "home") {
      switchBannerButtton(2);
    }
    if (search.searchType === "video") {
      switchBannerButtton(0);
    }
  }, [switchBannerButtton, search]);

  useEffect(() => {
    getSearchMaterials();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    initSearchType();
    // eslint-disable-next-line
  }, []);

  return (
    <>
    <div className="banner-form">
      <div className="top-tabs">
        {bannerButtons.map((item, index) => (
          <div
            className={`tab ${item.active ? "active" : ""}`}
            key={`tab-${item.pos}-${index}`}
            onClick={() => switchBannerButtton(index)}
          >
            <div className="img">
                {
                item.active ?
                <Image src={`/search/${item.image2}`} alt={item.name} layout="fill" />
                :
              <Image src={`/search/${item.image}`} alt={item.name} layout="fill" />
                }
            </div>
            <p className={`${item.active ? "active" : ""}`}>{item.name}</p>
          </div>
        ))}
      </div>
      <div
        className={`form-holder ${
          bannerButtons[0].active
            ? window.location.pathname !== "/search"
              ? ""
              : "smaller-big"
            : ""
        }`}
      >
        {bannerButtons[1].active && (
          <Facilityvisit
            loading={requesting}
            updateRequesting={updateRequesting}
            specialization={specialization}
            locations={locations}
            predefinedSpeciality={props.predefinedSpeciality}
          />
        )}
        {bannerButtons[2].active && (
          <Homevisit
            loading={requesting}
            updateRequesting={updateRequesting}
            specialization={specialization}
            locations={coverage}
            predefinedSpeciality={props.predefinedSpeciality}
          />
        )}
        {bannerButtons[0].active && (
          <Videovisit
            loading={requesting}
            updateRequesting={updateRequesting}
            specialization={specialization}
            locations={locations}
            predefinedSpeciality={props.predefinedSpeciality}
          />
        )}
      </div>
    </div>
  
    </>
  );
};

export default Bannerform;
