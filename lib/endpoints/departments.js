'use strict';

/*
  The `valid-jsdoc` rule has to be ignored so that IntelliSense documentation can properly chain past the "id" methods.
  If the `@return` value is defined for these methods the documentation chain breaks
*/
/* eslint-disable valid-jsdoc */
const get = require('../request/get.js');

// Endpoints to Support:
// /departments     - get

/**
 *  Generator
 *
 * @param {object} request Previously instantiated request module
 */
const generator = function(request) {
  /**
   * Starting point for the 'departments' API paths
   */
  const departments = {
    _endpoint: ['departments'],
    _request: request,

    /**
     * GET information for all departments
     *
     * @param {object} [opts] Request options
     * @param {boolean} paginate If the system should attempt to auto-paginate the request
     *
     * @return {Promise} Promise will resolve with organization data
     */
    get
  };

  return departments;
};

module.exports = generator;
