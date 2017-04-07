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
    root.KodingApi.JPermissionSet = factory(root.KodingApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JPermissionSet model module.
   * @module koding-api/JPermissionSet
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>JPermissionSet</code>.
   * @alias module:koding-api/JPermissionSet
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>JPermissionSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:koding-api/JPermissionSet} obj Optional instance to populate.
   * @return {module:koding-api/JPermissionSet} The populated <code>JPermissionSet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('isCustom')) {
        obj['isCustom'] = ApiClient.convertToType(data['isCustom'], 'Boolean');
      }
      if (data.hasOwnProperty('permissions')) {
        obj['permissions'] = ApiClient.convertToType(data['permissions'], [Object]);
      }
    }
    return obj;
  }

  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {Boolean} isCustom
   */
  exports.prototype['isCustom'] = undefined;
  /**
   * @member {Array.<Object>} permissions
   */
  exports.prototype['permissions'] = undefined;



  return exports;
}));

