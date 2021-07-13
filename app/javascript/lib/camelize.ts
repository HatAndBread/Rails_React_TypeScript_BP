const toCamel = (s: any) => {
  return s.replace(/([-_][a-z])/gi, ($1: any) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
};

const toSnake = (s: any) => {
  return s
    .replace(/[\w]([A-Z])/g, function (m) {
      return m[0] + "_" + m[1];
    })
    .toLowerCase();
};

const isArray = function (a: any) {
  return Array.isArray(a);
};

const isObject = function (o: any) {
  return o === Object(o) && !isArray(o) && typeof o !== "function";
};

export const camelize = function (o: any) {
  if (isObject(o)) {
    const n: any = {};

    Object.keys(o).forEach((k) => {
      n[toCamel(k)] = camelize(o[k]);
    });

    return n;
  } else if (isArray(o)) {
    return o.map((i: any) => {
      return camelize(i);
    });
  }

  return o;
};

export const snakeize = function (o: any) {
  if (isObject(o)) {
    const n: any = {};

    Object.keys(o).forEach((k) => {
      n[toSnake(k)] = snakeize(o[k]);
    });

    return n;
  } else if (isArray(o)) {
    return o.map((i: any) => {
      return snakeize(i);
    });
  }

  return o;
};
