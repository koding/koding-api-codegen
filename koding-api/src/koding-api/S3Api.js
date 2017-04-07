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
    define(['ApiClient', 'koding-api/DefaultResponse', 'koding-api/UnauthorizedRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../koding-api/DefaultResponse'), require('../koding-api/UnauthorizedRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KodingApi) {
      root.KodingApi = {};
    }
    root.KodingApi.S3Api = factory(root.KodingApi.ApiClient, root.KodingApi.DefaultResponse, root.KodingApi.UnauthorizedRequest);
  }
}(this, function(ApiClient, DefaultResponse, UnauthorizedRequest) {
  'use strict';

  /**
   * S3 service.
   * @module koding-api/S3Api
   * @version 0.0.3
   */

  /**
   * Constructs a new S3Api. 
   * @alias module:koding-api/S3Api
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    
    if (typeof apiClient == 'string') {
      this.apiClient = ApiClient.instance;
      this.apiClient.authentications.Bearer.apiKey = apiClient;
    } else {
      this.apiClient = apiClient || ApiClient.instance;
    }
    



    /**
     * 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:koding-api/DefaultResponse}
     */
    this.generatePolicy = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = DefaultResponse;

      return this.apiClient.callApi(
        '/S3.generatePolicy', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
