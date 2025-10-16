// src/utils/toastUtils.js
import { toast } from "react-toastify";
import debounce from "lodash.debounce";

// limit how often ANY toast can appear
const showToastOnce = debounce((fn, message, options = {}) => {
  fn(message, options);
}, 100); // 3 seconds

export const showSuccessToast = (message, options) =>
  showToastOnce(toast.success, message, options);

export const showErrorToast = (message, options) =>
  showToastOnce(toast.error, message, options);