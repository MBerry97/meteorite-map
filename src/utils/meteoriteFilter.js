exports.meteoriteFilter = (meteorites, startingYear, endingYear, mass) => {
  if (startingYear && endingYear && mass) {
    const startingMass = parseInt(mass.substring(0, 3));
    const endingMass = parseInt(mass.substring(4)) || 1000000000;
    if (!meteorites.length) return [];
    return meteorites.filter((meteorite) => {
      const onlyYear = parseInt(meteorite.year.substring(0, 4));
      const massNumber = parseInt(meteorite.mass);
      if (
        onlyYear > startingYear &&
        onlyYear < endingYear &&
        massNumber / 1000 > startingMass &&
        massNumber / 1000 < endingMass
      ) {
        return meteorite;
      }
    });
  } else {
    return meteorites;
  }
};
