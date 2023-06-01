const target = {
  "8-1-1": "8-1",
  "8-2-2": "8-2",
  "7-1-1": "7-1",
  "7-2-2": "7-2",
  "6-1-1": "6-1",
  "6-2-2": "6-2",
};

const keys = Object.keys(target);
const v8 = {};
const v7 = {};
const v6 = {};

for (const key in target) {
  switch (key[0]) {
    case "8":
      v8[key] = target[key];
      break;
    case "7":
      v7[key] = target[key];
      break;
    case "6":
      v6[key] = target[key];
      break;
  }
}

console.log(v8, v7, v6);
