const { meteoriteFilter } = require('../utils/meteoriteFilter');

describe('meteoriteFilter', () => {
  it('returns original array if no additional arguments provided', () => {
    const array = [1, 2, 3];
    expect(meteoriteFilter(array)).toBe(array);
  });
  it('returns an empty array when passed an empty array', () => {
    expect(meteoriteFilter([], 500, 2500, '100-150')).toEqual([]);
  });
  it('returns an empty array when one item input does not fulfil filter', () => {
    const meteoriteArray = [
      {
        fall: 'Found',
        geolocation: { latitude: '44.86667', longitude: '95.41667' },
        id: '389',
        mass: '582000',
        name: 'Adzhi-Bogdo (iron)',
        nametype: 'Valid',
        recclass: 'Iron, IAB complex',
        reclat: '44.866670',
        reclong: '95.416670',
        year: '1952-01-01T00:00:00.000',
      },
    ];
    expect(meteoriteFilter(meteoriteArray, 2000, 2001, '500+')).toEqual([]);
  });
  it('returns same array when one item input does fulfil filter', () => {
    const meteoriteArray = [
      {
        fall: 'Found',
        geolocation: { latitude: '44.86667', longitude: '95.41667' },
        id: '389',
        mass: '582000',
        name: 'Adzhi-Bogdo (iron)',
        nametype: 'Valid',
        recclass: 'Iron, IAB complex',
        reclat: '44.866670',
        reclong: '95.416670',
        year: '1952-01-01T00:00:00.000',
      },
    ];
    const meteoriteCopy = [
      {
        fall: 'Found',
        geolocation: { latitude: '44.86667', longitude: '95.41667' },
        id: '389',
        mass: '582000',
        name: 'Adzhi-Bogdo (iron)',
        nametype: 'Valid',
        recclass: 'Iron, IAB complex',
        reclat: '44.866670',
        reclong: '95.416670',
        year: '1952-01-01T00:00:00.000',
      },
    ];
    expect(meteoriteFilter(meteoriteArray, 1950, 1960, '500+')).toEqual(
      meteoriteCopy
    );
  });
  it('returns a new array', () => {
    const meteoriteArray = [
      {
        fall: 'Found',
        geolocation: { latitude: '44.86667', longitude: '95.41667' },
        id: '389',
        mass: '582000',
        name: 'Adzhi-Bogdo (iron)',
        nametype: 'Valid',
        recclass: 'Iron, IAB complex',
        reclat: '44.866670',
        reclong: '95.416670',
        year: '1952-01-01T00:00:00.000',
      },
    ];
    expect(meteoriteFilter(meteoriteArray, 1500, 2500, '500+')).not.toBe(
      meteoriteArray
    );
  });
  it('does not mutate original array', () => {
    const meteoriteArray = [
      {
        fall: 'Found',
        geolocation: { latitude: '44.86667', longitude: '95.41667' },
        id: '389',
        mass: '582000',
        name: 'Adzhi-Bogdo (iron)',
        nametype: 'Valid',
        recclass: 'Iron, IAB complex',
        reclat: '44.866670',
        reclong: '95.416670',
        year: '1952-01-01T00:00:00.000',
      },
    ];
    meteoriteFilter(meteoriteArray);
    const control = [
      {
        fall: 'Found',
        geolocation: { latitude: '44.86667', longitude: '95.41667' },
        id: '389',
        mass: '582000',
        name: 'Adzhi-Bogdo (iron)',
        nametype: 'Valid',
        recclass: 'Iron, IAB complex',
        reclat: '44.866670',
        reclong: '95.416670',
        year: '1952-01-01T00:00:00.000',
      },
    ];
    expect(meteoriteArray).toEqual(control);
  });
  it('returns filtered array when input array has length greater than 1', () => {
    const meteoriteArray = [
      {
        fall: 'Found',
        geolocation: { latitude: '44.86667', longitude: '95.41667' },
        id: '389',
        mass: '582000',
        name: 'Adzhi-Bogdo (iron)',
        nametype: 'Valid',
        recclass: 'Iron, IAB complex',
        reclat: '44.866670',
        reclong: '95.416670',
        year: '1952-01-01T00:00:00.000',
      },
      {
        fall: 'Found',
        geolocation: { latitude: '44.86667', longitude: '95.41667' },
        id: '389',
        mass: '582000',
        name: 'Shouldnt be filtered',
        nametype: 'Valid',
        recclass: 'Iron, IAB complex',
        reclat: '44.866670',
        reclong: '95.416670',
        year: '1901-01-01T00:00:00.000',
      },
      {
        fall: 'Found',
        geolocation: { latitude: '44.86667', longitude: '95.41667' },
        id: '389',
        mass: '582000',
        name: 'Adzhi-Bogdo (iron)',
        nametype: 'Valid',
        recclass: 'Iron, IAB complex',
        reclat: '44.866670',
        reclong: '95.416670',
        year: '1959-01-01T00:00:00.000',
      },
      {
        fall: 'Found',
        geolocation: { latitude: '44.86667', longitude: '95.41667' },
        id: '389',
        mass: '582000',
        name: 'Adzhi-Bogdo (iron)',
        nametype: 'Valid',
        recclass: 'Iron, IAB complex',
        reclat: '44.866670',
        reclong: '95.416670',
        year: '1955-01-01T00:00:00.000',
      },
      {
        fall: 'Found',
        geolocation: { latitude: '44.86667', longitude: '95.41667' },
        id: '389',
        mass: '100000',
        name: 'Shouldnt be filtered',
        nametype: 'Valid',
        recclass: 'Iron, IAB complex',
        reclat: '44.866670',
        reclong: '95.416670',
        year: '1952-01-01T00:00:00.000',
      },
      {
        fall: 'Found',
        geolocation: { latitude: '44.86667', longitude: '95.41667' },
        id: '389',
        mass: '700000',
        name: 'Adzhi-Bogdo (iron)',
        nametype: 'Valid',
        recclass: 'Iron, IAB complex',
        reclat: '44.866670',
        reclong: '95.416670',
        year: '1952-01-01T00:00:00.000',
      },
    ];
    const expected = [
      {
        fall: 'Found',
        geolocation: { latitude: '44.86667', longitude: '95.41667' },
        id: '389',
        mass: '582000',
        name: 'Adzhi-Bogdo (iron)',
        nametype: 'Valid',
        recclass: 'Iron, IAB complex',
        reclat: '44.866670',
        reclong: '95.416670',
        year: '1952-01-01T00:00:00.000',
      },
      {
        fall: 'Found',
        geolocation: { latitude: '44.86667', longitude: '95.41667' },
        id: '389',
        mass: '582000',
        name: 'Adzhi-Bogdo (iron)',
        nametype: 'Valid',
        recclass: 'Iron, IAB complex',
        reclat: '44.866670',
        reclong: '95.416670',
        year: '1959-01-01T00:00:00.000',
      },
      {
        fall: 'Found',
        geolocation: { latitude: '44.86667', longitude: '95.41667' },
        id: '389',
        mass: '582000',
        name: 'Adzhi-Bogdo (iron)',
        nametype: 'Valid',
        recclass: 'Iron, IAB complex',
        reclat: '44.866670',
        reclong: '95.416670',
        year: '1955-01-01T00:00:00.000',
      },
      {
        fall: 'Found',
        geolocation: { latitude: '44.86667', longitude: '95.41667' },
        id: '389',
        mass: '700000',
        name: 'Adzhi-Bogdo (iron)',
        nametype: 'Valid',
        recclass: 'Iron, IAB complex',
        reclat: '44.866670',
        reclong: '95.416670',
        year: '1952-01-01T00:00:00.000',
      },
    ];
    expect(meteoriteFilter(meteoriteArray, 1950, 1960, '500+')).toEqual(
      expected
    );
  });
});
