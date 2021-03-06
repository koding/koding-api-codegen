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
    root.KodingApi.JCredentialData = factory(root.KodingApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JCredentialData model module.
   * @module koding-api/JCredentialData
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>JCredentialData</code>.
   * @alias module:koding-api/JCredentialData
   * @class
   * @param meta {Object} 
   * @param originId {String} 
   */
  var exports = function(meta, originId) {
    var _this = this;



    _this['meta'] = meta;
    _this['originId'] = originId;
  };

  /**
   * Constructs a <code>JCredentialData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:koding-api/JCredentialData} obj Optional instance to populate.
   * @return {module:koding-api/JCredentialData} The populated <code>JCredentialData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('identifier')) {
        obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = ApiClient.convertToType(data['meta'], Object);
      }
      if (data.hasOwnProperty('originId')) {
        obj['originId'] = ApiClient.convertToType(data['originId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {String} identifier
   */
  exports.prototype['identifier'] = undefined;
  /**
   * @member {Object} meta
   */
  exports.prototype['meta'] = undefined;
  /**
   * @member {String} originId
   */
  exports.prototype['originId'] = undefined;



  return exports;
}));


