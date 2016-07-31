'use strict';

describe('Service: searchBox', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var searchBox;
  beforeEach(inject(function (_searchBox_) {
    searchBox = _searchBox_;
  }));

  it('should do something', function () {
    expect(!!searchBox).toBe(true);
  });

});
