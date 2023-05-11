"use client";

import { useSelector, useDispatch } from "react-redux";
import { server } from "@/config";
import { useEffect, useState } from "react";
import { setData } from "../state";
import {
  useLoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const Map = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await fetch(`${server}/api/sampleData`);
    const data = await response.json();
    dispatch(setData(data));
  };
  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const filteredData = useSelector(
    ({ data: { data, year } }: { data: any; year: any }) =>
      data?.filter((d: any) => d.year === year)
  );

  const [libraries] = useState(["places"]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
  });

  const containerStyle = {
    width: "100%",
    height: "100vh",
  };
  const center = {
    lat: 46.1351,
    lng: -60.1831,
  };
  const [hoveredMarker, setHoveredMarker] = useState(false);
  const handleMarkerMouseOver = () => {
    setHoveredMarker(true);
  };
  const handleMarkerMouseOut = () => {
    setHoveredMarker(false);
  };
  if (!isLoaded) return <div></div>;

  return (
    <>
      <GoogleMap
        zoom={2}
        mapContainerStyle={containerStyle}
        center={{ lat: 0, lng: 0 }}
      >
        {/* {filteredData?.map((d: any, index: number) => {
          const latLng = { lat: d.lat, lng: d.long };
          return (
            <Marker
              key={index}
              position={latLng}
              onMouseOver={handleMarkerMouseOver}
              onMouseOut={handleMarkerMouseOut}
              icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
              }}
            >
              {hoveredMarker && (
                <InfoWindow onCloseClick={() => setHoveredMarker(false)}>
                  <div style={{ backgroundColor: "white", padding: 5 }}>
                    {d.assetName}
                  </div>
                </InfoWindow>
              )}
            </Marker>
          );
        })} */}
      </GoogleMap>
    </>
  );
};

export default Map;
