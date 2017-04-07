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
    define(['ApiClient', 'koding-api/JProposedDomainProxy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./JProposedDomainProxy'));
  } else {
    // Browser globals (root is window)
    if (!root.KodingApi) {
      root.KodingApi = {};
    }
    root.KodingApi.JProposedDomain = factory(root.KodingApi.ApiClient, root.KodingApi.JProposedDomainProxy);
  }
}(this, function(ApiClient, JProposedDomainProxy) {
  'use strict';




  /**
   * The JProposedDomain model module.
   * @module koding-api/JProposedDomain
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>JProposedDomain</code>.
   * @alias module:koding-api/JProposedDomain
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>JProposedDomain</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:koding-api/JProposedDomain} obj Optional instance to populate.
   * @return {module:koding-api/JProposedDomain} The populated <code>JProposedDomain</code> instance.
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
      if (data.hasOwnProperty('machines')) {
        obj['machines'] = ApiClient.convertToType(data['machines'], [Object]);
      }
      if (data.hasOwnProperty('proxy')) {
        obj['proxy'] = JProposedDomainProxy.constructFromObject(data['proxy']);
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = ApiClient.convertToType(data['meta'], Object);
      }
      if (data.hasOwnProperty('group')) {
        obj['group'] = ApiClient.convertToType(data['group'], 'String');
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
   * @member {Array.<Object>} machines
   */
  exports.prototype['machines'] = undefined;
  /**
   * @member {module:koding-api/JProposedDomainProxy} proxy
   */
  exports.prototype['proxy'] = undefined;
  /**
   * @member {Object} meta
   */
  exports.prototype['meta'] = undefined;
  /**
   * @member {String} group
   */
  exports.prototype['group'] = undefined;



  return exports;
}));

