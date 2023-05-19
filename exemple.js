const arrayToFrench = (items) => {
  if (items.length < 1) {
    return "Mon tableau est vide.";
  }
  if (items.length == 1) {
    return "Mon tableau contient " + items[0] + ".";
  }
  let lastElement = items.splice(-1, 1);
  let sentence =
    "Mon tableau contient " + items.join(", ") + " et " + lastElement + ".";
  return sentence;
};
exports.arrayToFrench = arrayToFrench;

// console.log(arrayToFrench(fruits));
