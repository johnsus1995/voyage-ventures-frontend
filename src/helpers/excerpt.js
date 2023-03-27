export const excerpt = (str, count) => {
    if (str.length > count) {
      str = str.substring(100, count) + " ...";
    }
    return str;
  };