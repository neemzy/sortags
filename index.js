/**
 * @param {String[]} tags
 *
 * @return {String[]}
 */
function sortags(tags) {
  return tags.sort((a, b) => {
    const [stableA, preA] = a.split("-");
    const [stableB, preB] = b.split("-");
    const [majorA, minorA, patchA] = stableA.split(".");
    const [majorB, minorB, patchB] = stableB.split(".");

    if (majorA !== majorB || minorA !== minorB || patchA !== patchB) {
      return [majorA - majorB, minorA - minorB, patchA - patchB].reduce((found, diff) => found || diff || 0, 0);
    }

    if (!preB || preA < preB) {
      return -1;
    }

    if (!preA || preA > preB) {
      return 1;
    }

    return 0;
  });
}

module.exports = sortags;
