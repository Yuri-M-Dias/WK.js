'use strict';

/**
 * Base Client for sending requests to the WaniKani API
 */
class Client {
    /**
     * Construct the client
     */
    constructor(options, baseURI) {
        this.options = options || {};
        this.baseURI = baseURI || process.env.WK_URI || 'https://api.wanikani.com/v2/';
    }

    getOptions() {
        return this.options;
    }

    getWKURI() {
        return this.WK_URI;
    }

    add(x, y) {
        return x + y;
    }

}

exports.Client = Client;
