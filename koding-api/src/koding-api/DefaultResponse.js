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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KodingApi) {
      root.KodingApi = {};
    }
    root.KodingApi.DefaultResponse = factory(root.KodingApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DefaultResponse model module.
   * @module koding-api/DefaultResponse
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>DefaultResponse</code>.
   * @alias module:koding-api/DefaultResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DefaultResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:koding-api/DefaultResponse} obj Optional instance to populate.
   * @return {module:koding-api/DefaultResponse} The populated <code>DefaultResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ok')) {
        obj['ok'] = ApiClient.convertToType(data['ok'], 'Boolean');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], Object);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], Object);
      }
    }
    return obj;
  }

  /**
   * If the request processed by endpoint
   * @member {Boolean} ok
   */
  exports.prototype['ok'] = undefined;
  /**
   * Error description
   * @member {Object} error
   */
  exports.prototype['error'] = undefined;
  /**
   * Result of the operation
   * @member {Object} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));

