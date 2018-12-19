// Code your solution in this file!
const blockLengthInFeet = 264;

function distanceTravelledInBlocks(startingBlock, endingBlock) {
  return Math.abs(startingBlock - endingBlock);
}

function distanceFromHqInBlocks(blockAtLocation) {
  const blockAtHq = 42;
  return distanceTravelledInBlocks(blockAtHq, blockAtLocation);
}

function distanceFromHqInFeet(blockAtLocation) {
  return distanceFromHqInBlocks(blockAtLocation) * blockLengthInFeet;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  return distanceTravelledInBlocks(startingBlock, endingBlock) * blockLengthInFeet;
}

function calculatesFarePrice(startingBlock, endingBlock) {
  const distance = distanceTravelledInFeet(startingBlock, endingBlock);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return distance * 0.02;
  }
}
