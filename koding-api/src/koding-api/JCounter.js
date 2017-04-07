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
    root.KodingApi.JCounter = factory(root.KodingApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JCounter model module.
   * @module koding-api/JCounter
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>JCounter</code>.
   * @alias module:koding-api/JCounter
   * @class
   * @param namespace {String} 
   */
  var exports = function(namespace) {
    var _this = this;


    _this['namespace'] = namespace;


  };

  /**
   * Constructs a <code>JCounter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:koding-api/JCounter} obj Optional instance to populate.
   * @return {module:koding-api/JCounter} The populated <code>JCounter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('namespace')) {
        obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('current')) {
        obj['current'] = ApiClient.convertToType(data['current'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {String} namespace
   */
  exports.prototype['namespace'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Number} current
   */
  exports.prototype['current'] = undefined;



  return exports;
}));

