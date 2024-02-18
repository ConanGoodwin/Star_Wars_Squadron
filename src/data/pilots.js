import { LukeSkywalker, DarthVader, MirandaDoni } from '../assets/pilots';
import { BombasIon, RedeConner } from '../assets/updates/armas_secundarias/bombas';
import { MisseisTeleguiados } from '../assets/updates/armas_secundarias/misseis';
import { MunicaoExtra, TorpedoProton } from '../assets/updates/armas_secundarias/torpedos';
import { R2d2 } from '../assets/updates/droids'
import { AbrirGuarda, PeritoPilotagem } from '../assets/updates/elite';
import { TorreLaserDupla } from '../assets/updates/armas_secundarias/torres';
import { Atirador } from '../assets/updates/tripulacao';


const pilots = [
  {
    name: "Luke Skywalker",
    pilotAbility: 8,
    pilotExtraAbility: 0,
    pilotFaction: "Rebel",
    pilotCost: 28,
    ship: "X-wing",
    shipMove: [[0,0,0,0,0,0],[0,0,1,0,0,4],[5,8,1,11,14,0],[5,8,2,11,14,0],[0,9,2,12,0,0],[0,0,0,0,0,0]],
    image: LukeSkywalker,
    shipShield: 2,
    shipDamage: 0,
    shipWeapons: 3,
    shipManeuver: 2,
    shipHull: 3,
    shipActions: ["foco", "target"],
    shipAbility: "Ao defender, você pode mudar um de seus resultados foco para um resultado esquiva",
    shipMod: "sem modificações",
    shipModCost: 0,
    shipShieldExtra: 0,
    shipHullExtra: 0,
    shipWeaponsExtra: 0,
    shipManeuverExtra: 0,
    shipExpansions: ["elite","torpedos","droid"],
    shipUpdates: [
      [{droids: [R2d2, R2d2], max: 2, cost: 4 }, {torres: [TorreLaserDupla, TorreLaserDupla], max: 2, cost: 6 }], 
      [{elite: [AbrirGuarda, AbrirGuarda], max: 2, cost: 4 }, {tripulação: [Atirador, Atirador], max: 2, cost: 5 }], 
      [{torpedos: [TorpedoProton, TorpedoProton], max: 2, cost: 4 }, {misseis: [MisseisTeleguiados, MisseisTeleguiados], max: 2, cost: 5 }]
    ],
    shipBombs: {bombas: [RedeConner, RedeConner, RedeConner, RedeConner, RedeConner], max: 5, cost: 4 },
  },
  {
    name: "Darth Vader",
    pilotAbility: 9,
    pilotExtraAbility: 0,
    pilotFaction: "Empire",
    pilotCost: 29,
    ship: "TIE Fighter",
    shipMove: [[0,0,0,0,0,0],[0,0,1,0,0,4],[5,8,1,11,14,0],[5,8,2,11,14,0],[0,9,2,12,0,0],[0,0,0,0,0,0]],
    image: DarthVader,
    shipShield: 2,
    shipDamage: 0,
    shipWeapons: 2,
    shipManeuver: 3,
    shipHull: 3,
    shipActions: ["foco", "target", "pirueta", "esquiva"],
    shipAbility: "Durante 'Realizar Ação', pode escolher 2 ações.",
    shipMod: "Melhoria de Motor: Aumenta o valor do seu escudo em 1",
    shipModCost: 4,
    shipShieldExtra: 1,
    shipHullExtra: 0,
    shipWeaponsExtra: 0,
    shipManeuverExtra: 0,
    shipExpansions: ["elite","missel"],
    shipUpdates: [
      [{droids: ["sem"], max: 1, cost: 0 }, {torres: ["sem"], max: 1, cost: 0 }], 
      [{elite: [PeritoPilotagem], max: 1, cost: 2 }, {tripulação: ["sem"], max: 1, cost: 0 }], 
      [{torpedos: ["sem"], max: 1, cost: 0 }, {misseis: ["sem"], max: 1, cost: 0 }]
    ],
    shipBombs: {bombas: ["sem"], max: 1, cost: 0 },
  },
  {
    name: "Miranda Doni",
    pilotAbility: 8,
    pilotExtraAbility: 0,
    pilotFaction: "Rebel",
    pilotCost: 29,
    ship: "K-Wing",
    shipMove: [[0,0,0,0,0,0],[0,0,1,0,0,4],[5,8,1,11,14,0],[5,8,2,11,14,0],[0,9,2,12,0,0],[0,0,0,0,0,0]],
    image: MirandaDoni,
    shipShield: 4,
    shipDamage: 0,
    shipWeapons: 2,
    shipManeuver: 1,
    shipHull: 5,
    shipActions: ["foco", "target", "slam"],
    shipAbility: "Uma vez por rodada, ao atacar, você pode gastar 1 de escudo para rolar 1 dado de ataque adicional ou rolar 1 dado de ataque a menos para recuperar 1 de escudo.",
    shipMod: "Slam Avançado: Após realizar um ação de SLAM, se você não tiver sobreposto um obstaculo ou outra nave, você pode realizar uma ação gratuita.",
    shipModCost: 2,
    shipShieldExtra: 0,
    shipHullExtra: 0,
    shipWeaponsExtra: 0,
    shipManeuverExtra: 0,
    shipExpansions: ["canhão", "torpedo", "torpedo", "missel", "tripulante", "bomba"],
    shipUpdates: [
      [{droids: ["sem"], max: 1, cost: 4 }, {torres: [TorreLaserDupla], max: 1, cost: 4 }], 
      [{elite: ["sem"], max: 1, cost: 4 }, {tripulação: [Atirador], max: 1, cost: 4 }], 
      [{torpedos: [MunicaoExtra, TorpedoProton, TorpedoProton], max: 3, cost: 4 }, {misseis: [MisseisTeleguiados, MisseisTeleguiados], max: 2, cost: 4 }]
    ],
    shipBombs: {bombas: [RedeConner, RedeConner, BombasIon, BombasIon], max: 4, cost: 4 },
  },
];

export default pilots;