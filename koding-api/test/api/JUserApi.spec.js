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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KodingApi);
  }
}(this, function(expect, KodingApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KodingApi.JUserApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('JUserApi', function() {
    describe('authenticateWithOauth', function() {
      it('should call authenticateWithOauth successfully', function(done) {
        //uncomment below and update the code to test authenticateWithOauth
        //instance.authenticateWithOauth(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('changeEmail', function() {
      it('should call changeEmail successfully', function(done) {
        //uncomment below and update the code to test changeEmail
        //instance.changeEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('changePassword', function() {
      it('should call changePassword successfully', function(done) {
        //uncomment below and update the code to test changePassword
        //instance.changePassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convert', function() {
      it('should call convert successfully', function(done) {
        //uncomment below and update the code to test convert
        //instance.convert(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('emailAvailable', function() {
      it('should call emailAvailable successfully', function(done) {
        //uncomment below and update the code to test emailAvailable
        //instance.emailAvailable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchUser', function() {
      it('should call fetchUser successfully', function(done) {
        //uncomment below and update the code to test fetchUser
        //instance.fetchUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSSHKeys', function() {
      it('should call getSSHKeys successfully', function(done) {
        //uncomment below and update the code to test getSSHKeys
        //instance.getSSHKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('login', function() {
      it('should call login successfully', function(done) {
        //uncomment below and update the code to test login
        //instance.login(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logout', function() {
      it('should call logout successfully', function(done) {
        //uncomment below and update the code to test logout
        //instance.logout(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setSSHKeys', function() {
      it('should call setSSHKeys successfully', function(done) {
        //uncomment below and update the code to test setSSHKeys
        //instance.setSSHKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unregister', function() {
      it('should call unregister successfully', function(done) {
        //uncomment below and update the code to test unregister
        //instance.unregister(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usernameAvailable', function() {
      it('should call usernameAvailable successfully', function(done) {
        //uncomment below and update the code to test usernameAvailable
        //instance.usernameAvailable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('verifyByPin', function() {
      it('should call verifyByPin successfully', function(done) {
        //uncomment below and update the code to test verifyByPin
        //instance.verifyByPin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('verifyPassword', function() {
      it('should call verifyPassword successfully', function(done) {
        //uncomment below and update the code to test verifyPassword
        //instance.verifyPassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('whoami', function() {
      it('should call whoami successfully', function(done) {
        //uncomment below and update the code to test whoami
        //instance.whoami(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
