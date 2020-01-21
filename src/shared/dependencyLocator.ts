const registry: { [key: string]: Function } = {};


export const get = (key: string) => registry[key];

export const set = (key: string, value: Function) => {
  if (Object.prototype.hasOwnProperty.call(registry, key)) {
    return;
  }

  registry[key] = value;
};

export const forceSet = (key: string, value: Function) => {
  registry[key] = value;
};
