const getBlinkingIcon = (isActive, isSelected) => {
  const baseClass = isActive ? 'blinking-circle-active' : 'blinking-circle-deactive';

  const selectedClass = isSelected
    ? `selected-marker ${isActive ? 'active' : 'inactive'}`
    : '';

  const fullClass = `${baseClass} ${selectedClass}`.trim();

  return L.divIcon({
    className: '',
    html: `<div class="${fullClass}"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};

export default getBlinkingIcon