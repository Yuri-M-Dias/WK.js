'use strict';

var rp = require('request-promise-native');

/**
 * Base Client for sending requests to the WaniKani API
 */
class Client {
  /**
   * Construct the client
   */
  constructor(options, baseURI) {
    this.options = options || {};
    this.baseURI =
        baseURI || process.env.WK_URI || 'https://api.wanikani.com/v2';
  }

  getOptions() { return this.options; }

  getWKURI() { return this.baseURI; }

  add(x, y) { return x + y; }

  async simple() {
    var options = {
      uri : `${this.baseURI}/level_progressions`,
      headers : {
        'User-Agent' : 'Request-Promise',
        'Wanikani-Revision': 20170710,
        'Authorization' : `Bearer `
      }
    };
    return(rp(options));
  }

}

exports.Client = Client;
