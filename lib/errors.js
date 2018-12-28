'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on ravencore-p2p Module {0}'
};

module.exports = require('@ravendevkit/ravencore-lib').errors.extend(spec);
