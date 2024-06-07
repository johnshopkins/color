<?php

use JohnsHopkins\Color\Colors;
use JohnsHopkins\Color\Palette;

require_once dirname(__DIR__, 2) . '/vendor/autoload.php';
require_once 'functions.php';

// show palettes in a table
$mode = 'table';

// // save palettes to config/palettes.json
// $mode = 'json';

$colors = Colors::get();

$palettes = [
  'grayscale' => [
    'colors' => [
      50 => (object) [
        'rgb' => [120, 116, 112],
        'hex' => '787470',
      ],                     // get the colors to be more gray (swatch taken from eric's scale and modified to be within range 50)
      90 => $colors[21],     // sable
    ],
    'settings' => [
      'grayscale' => true,
    ]
  ],
  'red' => [
    'colors' => [
      30 => $colors[10], // 486 (tertiary coral)
      70 => $colors[12], // 186 (tertiary red)
      80 => $colors[13], // 188 (tertiary maroon)
    ]
  ],
  'orange' => [
    'colors' => [
      30 => $colors[2],  // 1375 (secondary-orange)
      40 => $colors[7],  // 1505 (tertiary-orange)
      50 => $colors[11], // 173 (tertiary dark orange)
    ]
  ],
  'gold' => [
    'colors' => [
      30 => $colors[5], // 7406 (secondary yellow)
      60 => $colors[8], // 7586 (tertiary brown)
    ]
  ],
  'warm green' => [
    'colors' => [
      40 => $colors[20], // 7490 (tertiary green)
      70 => $colors[19], // 7734 (tertiary dark green)
    ]
  ],
  'cool green' => [
    'colors' => [
      30 => $colors[18], // 564 (tertiary seafoam)
      50 => $colors[3],  // 3278 (secondary green)
    ]
  ],
  'blue' => [
    'colors' => [
      30 => $colors[1],  // 284 (spirit blue)
      40 => $colors[17], // 279 (tertiary blue)
      50 =>  $colors[4], // 285 (secondary blue)
      80 => $colors[0],  // 288 (heritage blue)
    ]
  ],
  'cool purple' => [
    'colors' => [
      40 => $colors[16], // 666 (tertiary lavender)
    ]
  ],
  'warm purple' => [
    'colors' => [
      50 => $colors[15], // 7655 (tertiary purple)
      80 => $colors[14], // 262 (tertiary dark purple)
    ]
  ],
  'neutral' => [
    'colors' => [
      30 => $colors[6], // 7407 (tertiary tan)
      80 => $colors[9], // 4625 (tertiary dark brown)
    ]
  ],

  // 'green' => [
  //   'colors' => [
  //     30 => $colors[18], // 564 (tertiary seafoam)
  //     40 => $colors[20], // 7490 (tertiary green)
  //     50 => $colors[3],  // 3278 (secondary green)
  //     70 => $colors[19], // 7734 (tertiary dark green)
  //   ]
  // ],
  // 'purple' => [
  //   'colors' => [
  //     40 => $colors[16], // 666 (tertiary lavender)
  //     50 => $colors[15], // 7655 (tertiary purple)
  //     80 => $colors[14], // 262 (tertiary dark purple)
  //   ]
  // ],
];

$palettes = array_map(fn ($knownPalette) => (new Palette())->create($knownPalette), $palettes);

if ($mode === 'json') {

  $json = json_encode($palettes);
  file_put_contents(dirname(__DIR__, 2) . '/config/palettes.json', $json);
  exec('npm run format-json');

} else if ($mode === 'table') {
  printTable($palettes);
}

