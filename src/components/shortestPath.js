export const getShortestPath = (start, locations) => {
  const visited = new Set();
  const path = [start];
  let current = start;

  while (locations.length) {
    let nearestLocation = null;
    let nearestDistance = Infinity;
    let nearestIndex = -1;

    for (let i = 0; i < locations.length; i++) {
      const location = locations[i];
      const distance = getDistance(current, [location.lat, location.lon]);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestLocation = [location.lat, location.lon];
        nearestIndex = i;
      }
    }

    if (nearestLocation) {
      path.push(nearestLocation);
      current = nearestLocation;
      locations.splice(nearestIndex, 1);
    }
  }

  return path;
};

const getDistance = ([lat1, lon1], [lat2, lon2]) => {
  const R = 6371; // km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};
