'use strict';

exports.getRouter = function getRouter(router, controller) {
  router.route('/')
    .get(controller.index.get);
  return router;
};
