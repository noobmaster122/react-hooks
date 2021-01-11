export const CurrencyHasher = (x) => {
  // hard coded AF
  switch (x) {
    case "btc":
      // btc
      return "بتس";
      break;
    case "eth":
      //
      return "ثوم";
      break;
    case "usdt":
      // usdt
      return "يو.س.د.ت";
      break;
    case "monero":
      // monero
      return "مونيرو";
      break;
    case "paysera":
      return "باي سير";
      break;
    case "payonner":
      return "فوفل بلاي";
      break;
    case "cartegoogle":
      // btc
      return "فوفل بلاي";
      break;
    case "paypal":
      // btc
      return "بلاي٠بال";
      break;
    case "cashu":
      // btc
      return "عاش٠يو";
      break;
    case "ukashh":
      // btc
      return "عوكاش";
      break;
    case "perfectmoney":
      // btc
      return "المال المثالي";
      break;
    case "cartepsn":
      // btc
      return "بلايستايشان";
      break;
    case "freefire":
      // btc
      return "خري خاير";
      break;
    case "pubg":
      // btc
      return "فابجي";
      break;
    default:
      return x;
  }
};
