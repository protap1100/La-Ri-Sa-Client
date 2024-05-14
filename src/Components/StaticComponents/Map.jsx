import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  return (
    <div className="font-Cave">
      <div className="text-center my-10">
        <h1 className="text-4xl font-extrabold font-Cave">La Ri Sa Destination</h1>
        <h1 className="font-3xl font-bold">Here is our location</h1>
      </div>
      <MapContainer
        className="h-[600px] lg:w-1/2 w-3/4 md:w-2/3 mx-auto"
        center={[23.8479, 90.2577]}
        zoom={12}
      >
        {/* add google map tile url  */}
        <TileLayer
          attribution="Google Maps"
          url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        />
        <Marker position={[23.8479, 90.2577]}>
          <Popup>My Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
