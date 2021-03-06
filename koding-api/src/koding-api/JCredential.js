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
    root.KodingApi.JCredential = factory(root.KodingApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JCredential model module.
   * @module koding-api/JCredential
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>JCredential</code>.
   * @alias module:koding-api/JCredential
   * @class
   * @param provider {String} 
   * @param title {String} 
   * @param identifier {String} 
   * @param originId {String} 
   */
  var exports = function(provider, title, identifier, originId) {
    var _this = this;


    _this['provider'] = provider;
    _this['title'] = title;
    _this['identifier'] = identifier;
    _this['originId'] = originId;




  };

  /**
   * Constructs a <code>JCredential</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:koding-api/JCredential} obj Optional instance to populate.
   * @return {module:koding-api/JCredential} The populated <code>JCredential</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('provider')) {
        obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('identifier')) {
        obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
      }
      if (data.hasOwnProperty('originId')) {
        obj['originId'] = ApiClient.convertToType(data['originId'], 'String');
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = ApiClient.convertToType(data['meta'], Object);
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], ['String']);
      }
      if (data.hasOwnProperty('verified')) {
        obj['verified'] = ApiClient.convertToType(data['verified'], 'Boolean');
      }
      if (data.hasOwnProperty('accessLevel')) {
        obj['accessLevel'] = ApiClient.convertToType(data['accessLevel'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {String} provider
   */
  exports.prototype['provider'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} identifier
   */
  exports.prototype['identifier'] = undefined;
  /**
   * @member {String} originId
   */
  exports.prototype['originId'] = undefined;
  /**
   * @member {Object} meta
   */
  exports.prototype['meta'] = undefined;
  /**
   * @member {Array.<String>} fields
   */
  exports.prototype['fields'] = undefined;
  /**
   * @member {Boolean} verified
   */
  exports.prototype['verified'] = undefined;
  /**
   * @member {String} accessLevel
   */
  exports.prototype['accessLevel'] = undefined;



  return exports;
}));


