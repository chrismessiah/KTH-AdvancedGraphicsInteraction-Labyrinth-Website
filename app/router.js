'use strict';

exports.getRouter = function getRouter(router, controller) {
  router.route('/')
    .get(controller.controller1.subController.bar);
  router.route('/login/')
    .get(controller.controller1.login);
  router.route('/signup/')
    .get(controller.controller1.signup);
  router.route('/blogpost/:id')
    .get(controller.controller2.getBlogpost);
  router.route('/user/:id')
    .get(controller.controller2.getUser);
  return router;
};
