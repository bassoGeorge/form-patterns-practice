export default function FormValidator() {
  this.ruleSet = {};
}

FormValidator.prototype._ruleAddition = function(field, method, message) {
  if (!this.ruleSet[field]) this.ruleSet[field] = [];

  this.ruleSet[field].push({
    method,
    message
  });
};

FormValidator.prototype.addRule = function(field, method, message) {
  this._ruleAddition(field, method, message);
  return this;
};

function createAdder(field) {
  return function(method, message) {
    this._ruleAddition(field, method, message);
    return this;
  };
}

FormValidator.prototype.forField = function(field) {
  const adder = Object.create(this);
  adder.addRule = createAdder(field);
  return adder;
};

FormValidator.prototype.validateField = function(field, value) {
  const rules = this.ruleSet[field] || [];
  const errors = rules
    .map(({ method, message }) => {
      if (!method(value)) {
        return message;
      }
      return null;
    })
    .filter(error => error != null);

  return {
    success: !errors.length,
    errors
  };
};

FormValidator.prototype.validate = function(form, partial = false) {
  const keys = partial ? Object.keys(form) : Object.keys(this.ruleSet);
  return keys
    .map(k => ({ key: k, ...this.validateField(k, form[k] || "") }))
    .reduce(
      (acc, current) => {
        if (!current.success) {
          acc.success = false;
          acc.errors[current.key] = current.errors;
        }
        return acc;
      },
      {
        success: true,
        errors: {}
      }
    );
};
