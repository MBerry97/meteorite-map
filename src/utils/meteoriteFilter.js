exports.meteoriteFilter = (meteorites, startingYear, endingYear, mass) => {
  if (startingYear && endingYear && mass) {
    const startingMass = parseInt(mass.substring(0, 3));
    const endingMass = parseInt(mass.substring(4)) || 1000000000;
    return meteorites.filter((meteorite) => {
      if (meteorite.year && meteorite.mass) {
        const onlyYear = parseInt(meteorite.year.substring(0, 4));
        const massNumber = parseInt(meteorite.mass);
        if (
          onlyYear > parseInt(startingYear) &&
          onlyYear < parseInt(endingYear) &&
          massNumber / 1000 > startingMass &&
          massNumber / 1000 < endingMass
        ) {
          return meteorite;
        }
      }
      return false;
    });
  } else {
    return meteorites;
  }
};
