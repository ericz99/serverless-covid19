const cheerio = require('cheerio');
const request = require('../utils/request');

/**
 * @description get by country
 * @param {string} country
 */
module.exports = async (input) => {
  try {
    const opts = {
      url: 'https://www.worldometers.info/coronavirus/',
      method: 'GET',
    };

    // # get response
    const resp = await request(opts);
    const $ = cheerio.load(resp.data);

    // # store parsed result
    let result = {};

    // # parse the actual data we need
    const countriesTable = $('table#main_table_countries_today');
    const countriesTableCells = countriesTable
      .children('tbody')
      .first()
      .children('tr:not(.row_continent)');

    // # go through every column in the table
    countriesTableCells.each((i, elem) => {
      const tds = $(elem).find('td');

      // # get only by country
      if ($(tds[1]).text().toLowerCase() === input.toLowerCase()) {
        // # get all columns
        const country = $(tds[1]).text() || 0;
        const totalCases = $(tds[2]).text() || 0;
        const newCases = $(tds[3]).text() || 0;
        const newDeaths = $(tds[4]).text() || 0;
        const totalRecovered = $(tds[5]).text() || 0;
        const activeCases = $(tds[6]).text() || 0;
        const critical = $(tds[7]).text() || 0;
        const casesPerOneMillion = $(tds[8]).text() || 0;
        const deathsPerOneMillion = $(tds[9]).text() || 0;
        const totalTests = $(tds[10]).text() || 0;
        const testsPerOneMillion = $(tds[11]).text() || 0;

        // # set into result
        result = {
          country,
          totalCases,
          newCases,
          newDeaths,
          totalRecovered,
          activeCases,
          critical,
          casesPerOneMillion,
          deathsPerOneMillion,
          totalTests,
          testsPerOneMillion,
        };
      }
    });

    // # return back parsed result
    return result;
  } catch (e) {
    if (e) {
      throw new Error(e, 'Error Occured');
    }
  }
};
