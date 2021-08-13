const composeNearestArray = (distanceString) => {
  const distances = distanceString.split(",");
  return distances.map((dist) => dist.trim().split(" from "));
};

export default composeNearestArray;
