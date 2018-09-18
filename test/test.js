/*************************************************************************
                          Written by Ali Muhammed
                            uniapi@outlook.com
                            September 18, 2018
*************************************************************************/

import * as assert from 'assert';
import { zerotect } from '../dist/index.js';

const setcase = [
  { num:   1, zeros:  0 },  { num:   2, zeros:  0 },
  { num:   5, zeros:  1 },  { num:   7, zeros:  1 },
  { num:  10, zeros:  2 },  { num:  19, zeros:  3 },
  { num:  34, zeros:  7 },  { num:  43, zeros:  9 },
  { num:  55, zeros: 13 },  { num:  74, zeros: 16 },
  { num:  75, zeros: 18 },  { num:  81, zeros: 19 },
  { num:  87, zeros: 20 },  { num:  95, zeros: 22 },
  { num: 100, zeros: 24 },

  { num: 164, zeros:  39 },  { num: 342, zeros:  83 },
  { num: 375, zeros:  93 },  { num: 502, zeros: 124 },
  { num: 527, zeros: 130 },  { num: 563, zeros: 138 },
  { num: 695, zeros: 172 },  { num: 709, zeros: 175 },
  { num: 817, zeros: 202 },  { num: 845, zeros: 209 },

  { num: 6679, zeros: 1667 },  { num: 6835, zeros: 1706 },
  { num: 7838, zeros: 1956 },  { num: 7964, zeros: 1987 },
  { num: 8188, zeros: 2044 },  { num: 8210, zeros: 2050 },
  { num: 8918, zeros: 2226 },  { num: 9341, zeros: 2331 },
  { num: 9545, zeros: 2384 },  { num: 9856, zeros: 2461 },

  { num: 29203, zeros:  7297 },  { num: 22980, zeros:  5742 },
  { num: 33578, zeros:  8391 },  { num: 39040, zeros:  9757 },
  { num: 52667, zeros: 13163 },  { num: 70794, zeros: 17694 },
  { num: 79104, zeros: 19773 },  { num: 84602, zeros: 21148 },
  { num: 85185, zeros: 21294 },  { num: 91837, zeros: 22955 },

  { num: 130353, zeros:  32584 },  { num: 135539, zeros:  33880 },
  { num: 147568, zeros:  36888 },  { num: 198344, zeros:  49581 },
  { num: 307838, zeros:  76954 },  { num: 323722, zeros:  80925 },
  { num: 415363, zeros: 103836 },  { num: 837830, zeros: 209454 },
  { num: 910975, zeros: 227740 },  { num: 982026, zeros: 245503 },

  { num: 1228356, zeros:  307085 },  { num: 1344483, zeros:  336117 },
  { num: 2667495, zeros:  666868 },  { num: 4136154, zeros: 1034033 },
  { num: 4516529, zeros: 1129128 },  { num: 5729843, zeros: 1432454 },
  { num: 6466433, zeros: 1616603 },  { num: 6995818, zeros: 1748948 },
  { num: 7034406, zeros: 1758599 },  { num: 8795154, zeros: 2198783 },

  { num: 16133422, zeros:  4033350 },  { num: 17414049, zeros:  4353505 },
  { num: 21276654, zeros:  5319158 },  { num: 33400219, zeros:  8350049 },
  { num: 62486702, zeros: 15621669 },  { num: 69429906, zeros: 17357471 },
  { num: 71128757, zeros: 17782186 },  { num: 76737265, zeros: 19184311 },
  { num: 80196452, zeros: 20049108 },  { num: 98737091, zeros: 24684267 },

  { num:  403682819147105, zeros:  100920704786767 },  { num:  744008251986056, zeros:  186002062996506 },
  { num: 1038723438011640, zeros:  259680859502901 },  { num: 1173880051803704, zeros:  293470012950915 },
  { num: 1272089359829274, zeros:  318022339957308 },  { num: 1597834396460259, zeros:  399458599115052 },
  { num: 2444357106727207, zeros:  611089276681791 },  { num: 2694254462350907, zeros:  673563615587718 },
  { num: 3480478871253023, zeros:  870119717813245 },  { num: 3964526297871745, zeros:  991131574467921 },
  { num: 4413600821176450, zeros: 1103400205294101 },  { num: 4497091623638388, zeros: 1124272905909586 },
  { num: 4504760477459835, zeros: 1126190119364946 },  { num: 5107569035403691, zeros: 1276892258850910 },
  { num: 5243550686185177, zeros: 1310887671546283 },  { num: 6250909065964817, zeros: 1562727266491190 },
  { num: 6355786952901772, zeros: 1588946738225431 },  { num: 6363919549139062, zeros: 1590979887284752 },
  { num: 6681570661502204, zeros: 1670392665375540 },  { num: 6630532653858388, zeros: 1657633163464583 },
  { num: 7353450547134323, zeros: 1838362636783569 },  { num: 7862169875853608, zeros: 1965542468963391 },
  { num: 7937218900917894, zeros: 1984304725229461 },  { num: 8374247338007842, zeros: 2093561834501950 },
  { num: 8591673442532497, zeros: 2147918360633112 }
];


describe("Generic Test", () => {
  setcase.forEach((set, inx) => it(`${inx+1}`, () => assert.strictEqual(zerotect(set.num), set.zeros)))
});


function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe("Random Test", () => {
  const _zerotector = (num) => {
    let zeros = 0;
    while (5 <= num) {
      num = Math.floor(num / 5);
      zeros += num;
    }
    return zeros;
  };
  const set = { num: 0, zeros: 0 };
  const ntest = generateNumber(50, 100);
  let i = 0;
  while (i < ntest) {
    set.num = generateNumber(1, Number.SAFE_MAX_INTEGER);
    set.zeros = _zerotector(set.num);

    it(`${++i}`, () => assert.strictEqual(zerotect(set.num), set.zeros));
  }
});
