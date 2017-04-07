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
    root.KodingApi.JProxyRestriction = factory(root.KodingApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JProxyRestriction model module.
   * @module koding-api/JProxyRestriction
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>JProxyRestriction</code>.
   * @alias module:koding-api/JProxyRestriction
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>JProxyRestriction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:koding-api/JProxyRestriction} obj Optional instance to populate.
   * @return {module:koding-api/JProxyRestriction} The populated <code>JProxyRestriction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('domainName')) {
        obj['domainName'] = ApiClient.convertToType(data['domainName'], 'String');
      }
      if (data.hasOwnProperty('filters')) {
        obj['filters'] = ApiClient.convertToType(data['filters'], ['String']);
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('modifiedAt')) {
        obj['modifiedAt'] = ApiClient.convertToType(data['modifiedAt'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {String} domainName
   */
  exports.prototype['domainName'] = undefined;
  /**
   * @member {Array.<String>} filters
   */
  exports.prototype['filters'] = undefined;
  /**
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * @member {Date} modifiedAt
   */
  exports.prototype['modifiedAt'] = undefined;



  return exports;
}));


