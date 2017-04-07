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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'koding-api/ComputeProviderCreateMeta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ComputeProviderCreateMeta'));
  } else {
    // Browser globals (root is window)
    if (!root.KodingApi) {
      root.KodingApi = {};
    }
    root.KodingApi.Body1 = factory(root.KodingApi.ApiClient, root.KodingApi.ComputeProviderCreateMeta);
  }
}(this, function(ApiClient, ComputeProviderCreateMeta) {
  'use strict';




  /**
   * The Body1 model module.
   * @module koding-api/Body1
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>Body1</code>.
   * @alias module:koding-api/Body1
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Body1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:koding-api/Body1} obj Optional instance to populate.
   * @return {module:koding-api/Body1} The populated <code>Body1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('provider')) {
        obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('stack')) {
        obj['stack'] = ApiClient.convertToType(data['stack'], 'String');
      }
      if (data.hasOwnProperty('credential')) {
        obj['credential'] = ApiClient.convertToType(data['credential'], 'String');
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = ComputeProviderCreateMeta.constructFromObject(data['meta']);
      }
    }
    return obj;
  }

  /**
   * @member {String} provider
   * @default 'aws'
   */
  exports.prototype['provider'] = 'aws';
  /**
   * @member {String} label
   * @default 'My new Machine'
   */
  exports.prototype['label'] = 'My new Machine';
  /**
   * @member {String} stack
   * @default 'ID_OF_TARGET_STACK'
   */
  exports.prototype['stack'] = 'ID_OF_TARGET_STACK';
  /**
   * @member {String} credential
   * @default 'ID_OF_CREDENTIAL'
   */
  exports.prototype['credential'] = 'ID_OF_CREDENTIAL';
  /**
   * @member {module:koding-api/ComputeProviderCreateMeta} meta
   */
  exports.prototype['meta'] = undefined;



  return exports;
}));


