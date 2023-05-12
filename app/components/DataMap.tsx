"use client";

import { useSelector } from "react-redux";
import { useState } from "react";
import {
  useLoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { groupLocationsByLatLong } from "@/helpers";
import { DataList } from "@/types";

const DataMap = ({ data }: { data: DataList[] }) => {
  const { year } = useSelector((state: any) => state.data);

  const filteredData = data?.filter((d: any) => d.year === year);
  const locations = filteredData ? groupLocationsByLatLong(filteredData) : [];

  const [libraries] = useState(["places"]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
  });

  const containerStyle = {
    width: "100%",
    height: "100vh",
  };
  const center = { lat: locations?.[0]?.lat, lng: locations?.[0]?.long };

  const [hoveredMarker, setHoveredMarker] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const handleMarkerMouseOver = (index: number) => {
    setHoveredMarker(true);
    setSelectedMarker(index);
  };
  const handleMarkerMouseOut = (index: number) => {
    setHoveredMarker(false);
    setSelectedMarker(index);
  };
  if (!isLoaded) return <div></div>;

  return (
    <GoogleMap zoom={4} mapContainerStyle={containerStyle} center={center}>
      {locations?.map((d: any, index: number) => {
        const latLng = { lat: d.lat, lng: d.long };
        const shouldShowInfoWindow = selectedMarker === index && hoveredMarker;

        return (
          <Marker
            key={index}
            position={latLng}
            onMouseOver={() => handleMarkerMouseOver(index)}
            onMouseOut={() => handleMarkerMouseOut(index)}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            }}
          >
            {shouldShowInfoWindow && (
              <InfoWindow onCloseClick={() => setHoveredMarker(false)}>
                <div style={{ backgroundColor: "white" }}>
                  {d.assetNames.join(", ")}
                </div>
              </InfoWindow>
            )}
          </Marker>
        );
      })}
    </GoogleMap>
  );
};

export default DataMap;
