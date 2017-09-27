'use strict';

exports.getRouter = function getRouter(router, controller) {
  router.route('/')
    .get(controller.index.get);
  router.route('/webgl')
    .get(controller.webgl.get);
  return router;
};
