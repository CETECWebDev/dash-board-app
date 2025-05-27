export const getLocIcon = (d) => {
  
  return L.divIcon({
    className: '',
    html: `<div class="locMarker"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};