var ApiUtils = {
  getAllDiscountType: function (fn) {
    OrderToCashController.getAllDiscountType(function (result) {
      return fn(result);
    });
  }
};

module.exports = ApiUtils;
