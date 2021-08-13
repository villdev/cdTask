const formatMoney = (price) => {
  let IndianLocale = Intl.NumberFormat("en-IN");
  return IndianLocale.format(price);
};

export default formatMoney;
