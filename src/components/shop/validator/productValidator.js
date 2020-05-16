export const inputNumberValidator = (rule, value) => {
  let min = rule.min;
  let max = rule.max;
  const message = "Price should  be numeric.";
  if (min !== null) min = Number(min);
  if (max !== null) max = Number(max);
  try {
    const object = Number(value);
    if (!value) return Promise.resolve();
    if (isNaN(object)) throw new Error(message);
    if (min !== null && object < min)
      throw new Error(`Price should be greater than ₹ ${min}`);
    if (max !== null && object > max)
      throw new Error(`Price should be less than ₹ ${max}`);
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};

export const inputNameValidator = (rule, value) => {
  let len = rule.len;
  const message = rule.message;
  if (len !== null) len = Number(len);
  try {
    if (value.trim().length < len) throw new Error(message);
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};
