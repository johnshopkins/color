var o = Object.defineProperty;
var i = (e, r, a) => r in e ? o(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a;
var t = (e, r, a) => (i(e, typeof r != "symbol" ? r + "" : r, a), a);
const n = (e) => (e = e / 255, e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4), c = (e) => {
  const r = n(e[0]), a = n(e[1]), b = n(e[2]);
  return 0.2126 * r + 0.7152 * a + 0.0722 * b;
}, u = (e, r) => {
  const a = c(e) + 0.05, b = c(r) + 0.05;
  return parseFloat((a / b).toFixed(2));
}, G = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  contrast: u,
  luminance: c
}, Symbol.toStringTag, { value: "Module" })), x = [
  {
    id: 1,
    name: "Heritage Blue",
    slug: "heritage-blue",
    type: "primary",
    pms: "288 C",
    cmyk: [
      100,
      80,
      6,
      32
    ],
    rgb: [
      0,
      45,
      114
    ],
    hex: "002d72",
    grade: 80,
    luminance: 3.09,
    contrast: {
      "double-black": 1.62,
      sable: 1.14,
      white: 12.98
    }
  },
  {
    id: 2,
    name: "Spirit Blue",
    slug: "spirit-blue",
    type: "primary",
    pms: "284 C",
    cmyk: [
      56,
      18,
      0,
      0
    ],
    rgb: [
      104,
      172,
      229
    ],
    hex: "68ace5",
    grade: 30,
    luminance: 38.11,
    contrast: {
      "double-black": 8.62,
      sable: 6.05,
      white: 2.44
    }
  },
  {
    id: 3,
    name: "Secondary Orange",
    slug: "secondary-orange",
    type: "secondary",
    pms: "1375 C",
    cmyk: [
      0,
      45,
      94,
      0
    ],
    rgb: [
      255,
      158,
      27
    ],
    hex: "ff9e1b",
    grade: 30,
    luminance: 45.79,
    contrast: {
      "double-black": 10.16,
      sable: 7.13,
      white: 2.07
    }
  },
  {
    id: 4,
    name: "Secondary Green",
    slug: "secondary-green",
    type: "secondary",
    pms: "3278 C",
    cmyk: [
      99,
      0,
      69,
      0
    ],
    rgb: [
      0,
      135,
      103
    ],
    hex: "008767",
    grade: 50,
    luminance: 18.31,
    contrast: {
      "double-black": 4.66,
      sable: 3.27,
      white: 4.51
    }
  },
  {
    id: 5,
    name: "Secondary Blue",
    slug: "secondary-blue",
    type: "secondary",
    pms: "285 C",
    cmyk: [
      90,
      48,
      0,
      0
    ],
    rgb: [
      0,
      119,
      216
    ],
    hex: "0077d8",
    grade: 50,
    luminance: 18.15,
    contrast: {
      "double-black": 4.63,
      sable: 3.25,
      white: 4.54
    }
  },
  {
    id: 6,
    name: "Secondary Yellow",
    slug: "secondary-yellow",
    type: "secondary",
    pms: "7406 C",
    cmyk: [
      0,
      20,
      100,
      2
    ],
    rgb: [
      241,
      196,
      0
    ],
    hex: "f1c400",
    grade: 30,
    luminance: 58.18,
    contrast: {
      "double-black": 12.64,
      sable: 8.86,
      white: 1.66
    }
  },
  {
    id: 7,
    name: "Tertiary Tan",
    slug: "tertiary-tan",
    type: "tertiary",
    pms: "7407 C",
    cmyk: [
      6,
      36,
      79,
      12
    ],
    rgb: [
      203,
      160,
      82
    ],
    hex: "cba052",
    grade: 30,
    luminance: 38.45,
    contrast: {
      "double-black": 8.69,
      sable: 6.1,
      white: 2.42
    }
  },
  {
    id: 8,
    name: "Tertiary Orange",
    slug: "tertiary-orange",
    type: "tertiary",
    pms: "1505 C",
    cmyk: [
      0,
      56,
      90,
      0
    ],
    rgb: [
      245,
      102,
      0
    ],
    hex: "f56600",
    grade: 40,
    luminance: 28.92,
    contrast: {
      "double-black": 6.78,
      sable: 4.76,
      white: 3.1
    }
  },
  {
    id: 9,
    name: "Tertiary Brown",
    slug: "tertiary-brown",
    type: "tertiary",
    pms: "7586 C",
    cmyk: [
      0,
      69,
      89,
      41
    ],
    rgb: [
      150,
      79,
      46
    ],
    hex: "964f2e",
    grade: 60,
    luminance: 12.27,
    contrast: {
      "double-black": 3.45,
      sable: 2.42,
      white: 6.08
    }
  },
  {
    id: 10,
    name: "Tertiary Dark Brown",
    slug: "tertiary-dark-brown",
    type: "tertiary",
    pms: "4625 C",
    cmyk: [
      30,
      72,
      74,
      80
    ],
    rgb: [
      79,
      44,
      29
    ],
    hex: "4f2c1d",
    grade: 80,
    luminance: 3.55,
    contrast: {
      "double-black": 1.71,
      sable: 1.2,
      white: 12.28
    }
  },
  {
    id: 11,
    name: "Tertiary Coral",
    slug: "tertiary-coral",
    type: "tertiary",
    pms: "486 C",
    cmyk: [
      0,
      55,
      50,
      0
    ],
    rgb: [
      232,
      146,
      124
    ],
    hex: "e8927c",
    grade: 30,
    luminance: 39.17,
    contrast: {
      "double-black": 8.83,
      sable: 6.2,
      white: 2.38
    }
  },
  {
    id: 12,
    name: "Tertiary Dark Orange",
    slug: "tertiary-dark-orange",
    type: "tertiary",
    pms: "173 C",
    cmyk: [
      0,
      82,
      94,
      2
    ],
    rgb: [
      207,
      69,
      32
    ],
    hex: "cf4520",
    grade: 50,
    luminance: 17.63,
    contrast: {
      "double-black": 4.53,
      sable: 3.17,
      white: 4.64
    }
  },
  {
    id: 13,
    name: "Tertiary Red",
    slug: "tertiary-red",
    type: "tertiary",
    pms: "187 C",
    cmyk: [
      7,
      100,
      82,
      26
    ],
    rgb: [
      166,
      25,
      46
    ],
    hex: "a6192e",
    grade: 70,
    luminance: 9,
    contrast: {
      "double-black": 2.8,
      sable: 1.96,
      white: 7.5
    }
  },
  {
    id: 14,
    name: "Tertiary Maroon",
    slug: "tertiary-maroon",
    type: "tertiary",
    pms: "188 C",
    cmyk: [
      16,
      100,
      65,
      58
    ],
    rgb: [
      106,
      32,
      43
    ],
    hex: "6a202b",
    grade: 80,
    luminance: 4.27,
    contrast: {
      "double-black": 1.85,
      sable: 1.3,
      white: 11.32
    }
  },
  {
    id: 15,
    name: "Tertiary Dark Purple",
    slug: "tertiary-dark-purple",
    type: "tertiary",
    pms: "262 C",
    cmyk: [
      58,
      92,
      12,
      54
    ],
    rgb: [
      81,
      40,
      79
    ],
    hex: "51284f",
    grade: 80,
    luminance: 3.83,
    contrast: {
      "double-black": 1.77,
      sable: 1.24,
      white: 11.89
    }
  },
  {
    id: 16,
    name: "Tertiary Purple",
    slug: "tertiary-purple",
    type: "tertiary",
    pms: "7655 C",
    cmyk: [
      33,
      72,
      0,
      0
    ],
    rgb: [
      164,
      92,
      152
    ],
    hex: "a45c98",
    grade: 50,
    luminance: 17.81,
    contrast: {
      "double-black": 4.56,
      sable: 3.2,
      white: 4.6
    }
  },
  {
    id: 17,
    name: "Tertiary Lavender",
    slug: "tertiary-lavender",
    type: "tertiary",
    pms: "666 C",
    cmyk: [
      36,
      39,
      2,
      5
    ],
    rgb: [
      158,
      143,
      176
    ],
    hex: "9e8fb0",
    grade: 40,
    luminance: 30.05,
    contrast: {
      "double-black": 7.01,
      sable: 4.92,
      white: 3
    }
  },
  {
    id: 18,
    name: "Tertiary Blue",
    slug: "tertiary-blue",
    type: "tertiary",
    pms: "279 C",
    cmyk: [
      68,
      34,
      0,
      0
    ],
    rgb: [
      78,
      151,
      224
    ],
    hex: "4e97e0",
    grade: 40,
    luminance: 29.13,
    contrast: {
      "double-black": 6.83,
      sable: 4.79,
      white: 3.08
    }
  },
  {
    id: 19,
    name: "Tertiary Seafoam",
    slug: "tertiary-seafoam",
    type: "tertiary",
    pms: "564 C",
    cmyk: [
      43,
      0,
      23,
      0
    ],
    rgb: [
      134,
      200,
      188
    ],
    hex: "86c8bc",
    grade: 30,
    luminance: 50.01,
    contrast: {
      "double-black": 11,
      sable: 7.72,
      white: 1.91
    }
  },
  {
    id: 20,
    name: "Tertiary Dark Green",
    slug: "tertiary-dark-green",
    type: "tertiary",
    pms: "7734 C",
    cmyk: [
      77,
      0,
      82,
      65
    ],
    rgb: [
      40,
      97,
      64
    ],
    hex: "286140",
    grade: 66,
    luminance: 9.37,
    contrast: {
      "double-black": 2.87,
      sable: 2.02,
      white: 7.31
    }
  },
  {
    id: 21,
    name: "Tertiary Green",
    slug: "tertiary-green",
    type: "tertiary",
    pms: "7490 C",
    cmyk: [
      57,
      6,
      92,
      19
    ],
    rgb: [
      118,
      160,
      76
    ],
    hex: "76a04c",
    grade: 40,
    luminance: 29.51,
    contrast: {
      "double-black": 6.9,
      sable: 4.84,
      white: 3.04
    }
  },
  {
    id: 22,
    name: "Sable",
    slug: "sable",
    type: "grayscale",
    pms: "Black 4 C",
    cmyk: [
      41,
      57,
      72,
      90
    ],
    rgb: [
      49,
      38,
      29
    ],
    hex: "31261d",
    grade: 90,
    luminance: 2.13,
    contrast: {
      "double-black": 1.43,
      sable: 1,
      white: 14.73
    }
  },
  {
    id: 23,
    name: "White",
    slug: "white",
    type: "grayscale",
    pms: null,
    cmyk: [
      0,
      0,
      0,
      0
    ],
    rgb: [
      255,
      255,
      255
    ],
    hex: "ffffff",
    grade: 0,
    luminance: 100,
    contrast: {
      "double-black": 21,
      sable: 14.73,
      white: 1
    }
  },
  {
    id: 24,
    name: "Double Black",
    slug: "double-black",
    type: "grayscale",
    pms: null,
    cmyk: [
      100,
      100,
      100,
      100
    ],
    rgb: [
      0,
      0,
      0
    ],
    hex: "000000",
    grade: 100,
    luminance: 0,
    contrast: {
      "double-black": 1,
      sable: 1.43,
      white: 21
    }
  }
], y = (e, { [e]: r, ...a }) => a;
class m {
  constructor(r) {
    t(this, "id");
    t(this, "name");
    t(this, "slug");
    t(this, "type");
    t(this, "pms");
    t(this, "cmyk");
    t(this, "rgb");
    t(this, "hex");
    t(this, "luminance");
    t(this, "contrast");
    for (let a in r)
      this[a] = r[a];
  }
  /**
   * Find the best contrasting color (White or Sable) for this color.
   * @param useDoubleBlack Use Double Black instead of Sable
   * @returns object
   */
  getContrastingColor(r = !1) {
    const a = {
      sable: 22,
      white: 23,
      "double-black": 24
    }, b = y(
      r ? "sable" : "double-black",
      this.contrast
    ), d = Object.keys(b).sort((s, h) => b[h] - b[s]);
    return g(a[d[0]]);
  }
}
const l = () => x.map((e) => new m(e)), g = (e) => l()[e - 1] || null, S = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get: l,
  getByID: g
}, Symbol.toStringTag, { value: "Module" })), f = {
  5: {
    rgb: [
      243,
      243,
      243
    ],
    hex: "f3f3f3"
  },
  10: {
    rgb: [
      230,
      229,
      229
    ],
    hex: "e6e5e5"
  },
  20: {
    rgb: [
      217,
      216,
      215
    ],
    hex: "d9d8d7"
  },
  30: {
    rgb: [
      187,
      185,
      184
    ],
    hex: "bbb9b8"
  },
  40: {
    rgb: [
      150,
      147,
      144
    ],
    hex: "969390"
  },
  50: {
    rgb: [
      120,
      116,
      112
    ],
    hex: "787470"
  },
  60: {
    rgb: [
      101,
      92,
      84
    ],
    hex: "655c54"
  },
  70: {
    rgb: [
      84,
      73,
      63
    ],
    hex: "54493f"
  },
  80: {
    rgb: [
      61,
      50,
      41
    ],
    hex: "3d3229"
  },
  90: {
    rgb: [
      49,
      38,
      29
    ],
    hex: "31261d",
    brand: !0
  }
}, p = {
  5: {
    rgb: [
      252,
      241,
      238
    ],
    hex: "fcf1ee"
  },
  10: {
    rgb: [
      249,
      224,
      218
    ],
    hex: "f9e0da"
  },
  20: {
    rgb: [
      245,
      208,
      199
    ],
    hex: "f5d0c7"
  },
  30: {
    rgb: [
      232,
      146,
      124
    ],
    hex: "e8927c",
    brand: !0
  },
  40: {
    rgb: [
      228,
      112,
      97
    ],
    hex: "e47061"
  },
  50: {
    rgb: [
      221,
      49,
      45
    ],
    hex: "dd312d"
  },
  60: {
    rgb: [
      183,
      29,
      38
    ],
    hex: "b71d26"
  },
  70: {
    rgb: [
      166,
      25,
      46
    ],
    hex: "a6192e",
    brand: !0
  },
  80: {
    rgb: [
      106,
      32,
      43
    ],
    hex: "6a202b",
    brand: !0
  },
  90: {
    rgb: [
      65,
      20,
      26
    ],
    hex: "41141a"
  }
}, k = {
  5: {
    rgb: [
      255,
      241,
      223
    ],
    hex: "fff1df"
  },
  10: {
    rgb: [
      255,
      226,
      189
    ],
    hex: "ffe2bd"
  },
  20: {
    rgb: [
      255,
      208,
      147
    ],
    hex: "ffd093"
  },
  30: {
    rgb: [
      255,
      158,
      27
    ],
    hex: "ff9e1b",
    brand: !0
  },
  40: {
    rgb: [
      245,
      102,
      0
    ],
    hex: "f56600",
    brand: !0
  },
  50: {
    rgb: [
      207,
      69,
      32
    ],
    hex: "cf4520",
    brand: !0
  },
  60: {
    rgb: [
      166,
      56,
      26
    ],
    hex: "a6381a"
  },
  70: {
    rgb: [
      133,
      45,
      21
    ],
    hex: "852d15"
  },
  80: {
    rgb: [
      93,
      32,
      14
    ],
    hex: "5d200e"
  },
  90: {
    rgb: [
      64,
      21,
      10
    ],
    hex: "40150a"
  }
}, w = {
  5: {
    rgb: [
      255,
      244,
      193
    ],
    hex: "fff4c1"
  },
  10: {
    rgb: [
      255,
      230,
      117
    ],
    hex: "ffe675"
  },
  20: {
    rgb: [
      255,
      215,
      36
    ],
    hex: "ffd724"
  },
  30: {
    rgb: [
      241,
      196,
      0
    ],
    hex: "f1c400",
    brand: !0
  },
  40: {
    rgb: [
      197,
      134,
      17
    ],
    hex: "c58611"
  },
  50: {
    rgb: [
      171,
      99,
      32
    ],
    hex: "ab6320"
  },
  60: {
    rgb: [
      150,
      79,
      46
    ],
    hex: "964f2e",
    brand: !0
  },
  70: {
    rgb: [
      114,
      60,
      35
    ],
    hex: "723c23"
  },
  80: {
    rgb: [
      80,
      42,
      24
    ],
    hex: "502a18"
  },
  90: {
    rgb: [
      54,
      29,
      17
    ],
    hex: "361d11"
  }
}, C = {
  5: {
    rgb: [
      234,
      244,
      251
    ],
    hex: "eaf4fb"
  },
  10: {
    rgb: [
      214,
      232,
      248
    ],
    hex: "d6e8f8"
  },
  20: {
    rgb: [
      189,
      219,
      244
    ],
    hex: "bddbf4"
  },
  30: {
    rgb: [
      104,
      172,
      229
    ],
    hex: "68ace5",
    brand: !0
  },
  40: {
    rgb: [
      78,
      151,
      224
    ],
    hex: "4e97e0",
    brand: !0
  },
  50: {
    rgb: [
      0,
      119,
      216
    ],
    hex: "0077d8",
    brand: !0
  },
  60: {
    rgb: [
      0,
      92,
      183
    ],
    hex: "005cb7"
  },
  70: {
    rgb: [
      0,
      70,
      156
    ],
    hex: "00469c"
  },
  80: {
    rgb: [
      0,
      45,
      114
    ],
    hex: "002d72",
    brand: !0
  },
  90: {
    rgb: [
      0,
      32,
      81
    ],
    hex: "002051"
  }
}, T = {
  5: {
    rgb: [
      248,
      242,
      231
    ],
    hex: "f8f2e7"
  },
  10: {
    rgb: [
      241,
      229,
      207
    ],
    hex: "f1e5cf"
  },
  20: {
    rgb: [
      232,
      214,
      180
    ],
    hex: "e8d6b4"
  },
  30: {
    rgb: [
      203,
      160,
      82
    ],
    hex: "cba052",
    brand: !0
  },
  40: {
    rgb: [
      192,
      137,
      60
    ],
    hex: "c0893c"
  },
  50: {
    rgb: [
      158,
      106,
      52
    ],
    hex: "9e6a34"
  },
  60: {
    rgb: [
      131,
      83,
      44
    ],
    hex: "83532c"
  },
  70: {
    rgb: [
      108,
      64,
      38
    ],
    hex: "6c4026"
  },
  80: {
    rgb: [
      79,
      44,
      29
    ],
    hex: "4f2c1d",
    brand: !0
  },
  90: {
    rgb: [
      52,
      29,
      19
    ],
    hex: "341d13"
  }
}, O = {
  Grayscale: f,
  Red: p,
  Orange: k,
  Gold: w,
  "Warm Green": {
    5: {
      rgb: [
        240,
        245,
        234
      ],
      hex: "f0f5ea"
    },
    10: {
      rgb: [
        222,
        234,
        211
      ],
      hex: "deead3"
    },
    20: {
      rgb: [
        204,
        222,
        186
      ],
      hex: "ccdeba"
    },
    30: {
      rgb: [
        163,
        196,
        131
      ],
      hex: "a3c483"
    },
    40: {
      rgb: [
        118,
        160,
        76
      ],
      hex: "76a04c",
      brand: !0
    },
    50: {
      rgb: [
        73,
        130,
        59
      ],
      hex: "49823b"
    },
    60: {
      rgb: [
        46,
        106,
        53
      ],
      hex: "2e6a35"
    },
    70: {
      rgb: [
        40,
        97,
        64
      ],
      hex: "286140",
      brand: !0
    },
    80: {
      rgb: [
        24,
        58,
        38
      ],
      hex: "183a26"
    },
    90: {
      rgb: [
        16,
        39,
        26
      ],
      hex: "10271a"
    }
  },
  "Cool Green": {
    5: {
      rgb: [
        234,
        245,
        243
      ],
      hex: "eaf5f3"
    },
    10: {
      rgb: [
        211,
        235,
        231
      ],
      hex: "d3ebe7"
    },
    20: {
      rgb: [
        186,
        224,
        217
      ],
      hex: "bae0d9"
    },
    30: {
      rgb: [
        134,
        200,
        188
      ],
      hex: "86c8bc",
      brand: !0
    },
    40: {
      rgb: [
        30,
        165,
        137
      ],
      hex: "1ea589"
    },
    50: {
      rgb: [
        0,
        135,
        103
      ],
      hex: "008767",
      brand: !0
    },
    60: {
      rgb: [
        0,
        106,
        81
      ],
      hex: "006a51"
    },
    70: {
      rgb: [
        0,
        84,
        65
      ],
      hex: "005441"
    },
    80: {
      rgb: [
        0,
        60,
        46
      ],
      hex: "003c2e"
    },
    90: {
      rgb: [
        0,
        40,
        30
      ],
      hex: "00281e"
    }
  },
  Blue: C,
  "Cool Purple": {
    5: {
      rgb: [
        244,
        242,
        246
      ],
      hex: "f4f2f6"
    },
    10: {
      rgb: [
        232,
        229,
        237
      ],
      hex: "e8e5ed"
    },
    20: {
      rgb: [
        219,
        214,
        226
      ],
      hex: "dbd6e2"
    },
    30: {
      rgb: [
        191,
        182,
        203
      ],
      hex: "bfb6cb"
    },
    40: {
      rgb: [
        158,
        143,
        176
      ],
      hex: "9e8fb0",
      brand: !0
    },
    50: {
      rgb: [
        128,
        108,
        152
      ],
      hex: "806c98"
    },
    60: {
      rgb: [
        103,
        87,
        123
      ],
      hex: "67577b"
    },
    70: {
      rgb: [
        81,
        68,
        96
      ],
      hex: "514460"
    },
    80: {
      rgb: [
        58,
        49,
        69
      ],
      hex: "3a3145"
    },
    90: {
      rgb: [
        39,
        33,
        46
      ],
      hex: "27212e"
    }
  },
  "Warm Purple": {
    5: {
      rgb: [
        247,
        241,
        246
      ],
      hex: "f7f1f6"
    },
    10: {
      rgb: [
        239,
        226,
        237
      ],
      hex: "efe2ed"
    },
    20: {
      rgb: [
        230,
        210,
        227
      ],
      hex: "e6d2e3"
    },
    30: {
      rgb: [
        211,
        176,
        205
      ],
      hex: "d3b0cd"
    },
    40: {
      rgb: [
        185,
        130,
        176
      ],
      hex: "b982b0"
    },
    50: {
      rgb: [
        164,
        92,
        152
      ],
      hex: "a45c98",
      brand: !0
    },
    60: {
      rgb: [
        133,
        72,
        126
      ],
      hex: "85487e"
    },
    70: {
      rgb: [
        108,
        55,
        103
      ],
      hex: "6c3767"
    },
    80: {
      rgb: [
        81,
        40,
        79
      ],
      hex: "51284f",
      brand: !0
    },
    90: {
      rgb: [
        51,
        25,
        50
      ],
      hex: "331932"
    }
  },
  Neutral: T
};
export {
  G as calculate,
  S as colors,
  O as palettes
};
