export function validPhone(value) {
  if (!value) {
    return 'Vui lòng nhập số điện thoại';
  }
  if (value.length < 10) {
    return 'Số điện thoạị chưa chính xác';
  }
  const isnum = /^\d+$/.test(value);
  if (!isnum) {
    return 'Số điện thoạị chưa chính xác';
  }
}
