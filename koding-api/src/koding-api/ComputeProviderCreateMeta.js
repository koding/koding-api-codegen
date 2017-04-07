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
    root.KodingApi.ComputeProviderCreateMeta = factory(root.KodingApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ComputeProviderCreateMeta model module.
   * @module koding-api/ComputeProviderCreateMeta
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>ComputeProviderCreateMeta</code>.
   * @alias module:koding-api/ComputeProviderCreateMeta
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ComputeProviderCreateMeta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:koding-api/ComputeProviderCreateMeta} obj Optional instance to populate.
   * @return {module:koding-api/ComputeProviderCreateMeta} The populated <code>ComputeProviderCreateMeta</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('instance_type')) {
        obj['instance_type'] = ApiClient.convertToType(data['instance_type'], 'String');
      }
      if (data.hasOwnProperty('region')) {
        obj['region'] = ApiClient.convertToType(data['region'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('storage_size')) {
        obj['storage_size'] = ApiClient.convertToType(data['storage_size'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} instance_type
   * @default 't2.micro'
   */
  exports.prototype['instance_type'] = 't2.micro';
  /**
   * @member {String} region
   * @default 'us-east-1'
   */
  exports.prototype['region'] = 'us-east-1';
  /**
   * @member {String} image
   * @default 'ami-XXXX'
   */
  exports.prototype['image'] = 'ami-XXXX';
  /**
   * @member {Number} storage_size
   */
  exports.prototype['storage_size'] = undefined;



  return exports;
}));


