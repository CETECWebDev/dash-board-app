export const getBlinkingIcon = (isActive, isSelected) => {
  const baseClass = isActive ? 'blinking-circle-active' : 'blinking-circle-deactive';
  const fullClass = isSelected ? `${baseClass} selected-marker` : baseClass;

  return L.divIcon({
    className: '',
    html: `<div class="${fullClass}"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};
