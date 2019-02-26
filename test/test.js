'use strict';

const WK = require('../');

var assert = require('assert');

describe('Client', function() {

  describe('intialize', function() {

    it('empty should work', function() {
      const client = new WK.Client();
      let resultingURI = client.getWKURI();
      assert.equal(resultingURI, 'https://api.wanikani.com/v2');
      const resultingOptions = client.getOptions();
    });

    it('define wk URI', function() {
      const client = new WK.Client({}, 'test');
      const resultingURI = client.getWKURI();
      assert.equal(resultingURI, 'test');
    });

    it('define options', function() {
      const client = new WK.Client({test : 'test'});
      const resultingOptions = client.getOptions();
      assert.equal(resultingOptions.test, 'test');
    });

  });

  describe('add', function() {

    it('should add 1+1', function() {
      const client = new WK.Client();
      assert.equal(client.add(1, 1), 2);
    });

    it('should add 2+2', function() {
      const client = new WK.Client();
      assert.equal(client.add(2, 2), 4);
    });

  });

  describe('request', function() {

    it('simple request', function() {
        const client = new WK.Client();
        client.simple()
        .then(function(result){
            console.log(result);
        })
        .catch(function(err){
            console.log(err);
        });
    });

  });

});
