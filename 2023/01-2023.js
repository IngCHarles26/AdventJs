function findFirstRepeated(gifts) {
  return gifts.find((el, ix) => ix !== gifts.indexOf(el)) || -1;
}