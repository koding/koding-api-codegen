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
    root.KodingApi.JDomainAlias = factory(root.KodingApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JDomainAlias model module.
   * @module koding-api/JDomainAlias
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>JDomainAlias</code>.
   * @alias module:koding-api/JDomainAlias
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>JDomainAlias</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:koding-api/JDomainAlias} obj Optional instance to populate.
   * @return {module:koding-api/JDomainAlias} The populated <code>JDomainAlias</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('domain')) {
        obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
      }
      if (data.hasOwnProperty('machineId')) {
        obj['machineId'] = ApiClient.convertToType(data['machineId'], 'String');
      }
      if (data.hasOwnProperty('originId')) {
        obj['originId'] = ApiClient.convertToType(data['originId'], 'String');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {String} domain
   */
  exports.prototype['domain'] = undefined;
  /**
   * @member {String} machineId
   */
  exports.prototype['machineId'] = undefined;
  /**
   * @member {String} originId
   */
  exports.prototype['originId'] = undefined;
  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;



  return exports;
}));

