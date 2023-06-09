const Revirew = require('../models/reviewModel');
// const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.setTourUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};
exports.getAllReviews = factory.getAll(Revirew);
exports.createReview = factory.createOne(Revirew);
exports.updateReview = factory.updateOne(Revirew);
exports.deleteReview = factory.deleteOne(Revirew);
exports.getReview = factory.getOne(Revirew);
