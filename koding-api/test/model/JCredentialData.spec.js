/**
 * Koding API
 * Koding API for integrating your application with Koding services
 *
 * OpenAPI spec version: 0.0.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KodingApi);
  }
}(this, function(expect, KodingApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KodingApi.JCredentialData();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('JCredentialData', function() {
    it('should create an instance of JCredentialData', function() {
      // uncomment below and update the code to test JCredentialData
      //var instane = new KodingApi.JCredentialData();
      //expect(instance).to.be.a(KodingApi.JCredentialData);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KodingApi.JCredentialData();
      //expect(instance).to.be();
    });

    it('should have the property identifier (base name: "identifier")', function() {
      // uncomment below and update the code to test the property identifier
      //var instane = new KodingApi.JCredentialData();
      //expect(instance).to.be();
    });

    it('should have the property meta (base name: "meta")', function() {
      // uncomment below and update the code to test the property meta
      //var instane = new KodingApi.JCredentialData();
      //expect(instance).to.be();
    });

    it('should have the property originId (base name: "originId")', function() {
      // uncomment below and update the code to test the property originId
      //var instane = new KodingApi.JCredentialData();
      //expect(instance).to.be();
    });

  });

}));
