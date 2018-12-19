// Code your solution in this file!
function distanceFromHqInBlocks(streetBlockAtLocation) {
  const blockAtHq = 42;
  return Math.abs(blockAtHq - streetBlockAtLocation);
}

function distanceFromHqInFeet(streetBlockAtLocation) {
  const blockLengthInFeet = 264;
  return distanceFromHqInBlocks(streetBlockAtLocation) * blockLengthInFeet;
}

function distanceTravelledInFeet() {

}

function calculatesFarePrice() {

}
