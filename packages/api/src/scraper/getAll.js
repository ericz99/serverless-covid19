const cheerio = require('cheerio');
const request = require('../utils/request');

/**
 * @description get all cases
 */
module.exports = async () => {
  try {
    const opts = {
      url: 'https://www.worldometers.info/coronavirus/',
      method: 'GET',
    };

    // # get response
    const resp = await request(opts);
    const $ = cheerio.load(resp.data);

    // # store parsed result
    const result = {};

    $('.maincounter-number').each((i, elem) => {
      // # grab the numbers
      const number = $(elem).text().trim();
      // # 0 == cases | 1 == death | 2 == recovered
      if (i == 0) {
        result.cases = number;
      } else if (i == 1) {
        result.deaths = number;
      } else {
        result.recovered = number;
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
