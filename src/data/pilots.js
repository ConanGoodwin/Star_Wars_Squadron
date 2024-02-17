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
    pilotFaction: "Rebel",
    ship: "X-wing",
    image: LukeSkywalker,
    shipShield: 2,
    shipDamage: 0,
    shipWeapons: 3,
    shipManeuver: 2,
    shipHull: 3,
    shipActions: ["foco", "target"],
    shipAbility: "Ao defender, você pode mudar um de seus resultados foco para um resultado esquiva",
    shipMod: "sem modificações",
    shipShieldExtra: 0,
    shipHullExtra: 0,
    shipWeaponsExtra: 0,
    shipManeuverExtra: 0,
    shipExpansions: ["elite","torpedos","droid"],
    shipUpdates: [
      [{droids: [R2d2, R2d2], max: 2 }, {torres: [TorreLaserDupla, TorreLaserDupla], max: 2}], 
      [{elite: [AbrirGuarda, AbrirGuarda], max: 2 }, {tripulação: [Atirador, Atirador], max: 2 }], 
      [{torpedos: [TorpedoProton, TorpedoProton], max: 2 }, {misseis: [MisseisTeleguiados, MisseisTeleguiados], max: 2 }]
    ],
    shipBombs: {bombas: [RedeConner, RedeConner, RedeConner, RedeConner, RedeConner], max: 5 },
  },
  {
    name: "Darth Vader",
    pilotAbility: 9,
    pilotFaction: "Empire",
    ship: "TIE Fighter",
    image: DarthVader,
    shipShield: 2,
    shipDamage: 0,
    shipWeapons: 2,
    shipManeuver: 3,
    shipHull: 3,
    shipActions: ["foco", "target", "pirueta", "esquiva"],
    shipAbility: "Durante 'Realizar Ação', pode escolher 2 ações.",
    shipMod: "Melhoria de Motor: Aumenta o valor do seu escudo em 1",
    shipShieldExtra: 1,
    shipHullExtra: 0,
    shipWeaponsExtra: 0,
    shipManeuverExtra: 0,
    shipExpansions: ["elite","missel"],
    shipUpdates: [
      [{droids: ["sem"], max: 1 }, {torres: ["sem"], max: 1}], 
      [{elite: [PeritoPilotagem], max: 1 }, {tripulação: ["sem"], max: 1 }], 
      [{torpedos: ["sem"], max: 1 }, {misseis: ["sem"], max: 1 }]
    ],
    shipBombs: {bombas: ["sem"], max: 1 },
  },
  {
    name: "Miranda Doni",
    pilotAbility: 8,
    pilotFaction: "Rebel",
    ship: "K-Wing",
    image: MirandaDoni,
    shipShield: 4,
    shipDamage: 0,
    shipWeapons: 2,
    shipManeuver: 1,
    shipHull: 5,
    shipActions: ["foco", "target", "slam"],
    shipAbility: "Uma vez por rodada, ao atacar, você pode gastar 1 de escudo para rolar 1 dado de ataque adicional ou rolar 1 dado de ataque a menos para recuperar 1 de escudo.",
    shipMod: "Slam Avançado: Após realizar um ação de SLAM, se você não tiver sobreposto um obstaculo ou outra nave, você pode realizar uma ação gratuita.",
    shipShieldExtra: 0,
    shipHullExtra: 0,
    shipWeaponsExtra: 0,
    shipManeuverExtra: 0,
    shipExpansions: ["canhão", "torpedo", "torpedo", "missel", "tripulante", "bomba"],
    shipUpdates: [
      [{droids: ["sem"], max: 1 }, {torres: [TorreLaserDupla], max: 1}], 
      [{elite: ["sem"], max: 1 }, {tripulação: [Atirador], max: 1 }], 
      [{torpedos: [MunicaoExtra, TorpedoProton, TorpedoProton], max: 3 }, {misseis: [MisseisTeleguiados, MisseisTeleguiados], max: 2 }]
    ],
    shipBombs: {bombas: [RedeConner, RedeConner, BombasIon, BombasIon], max: 4 },
  },
];

export default pilots;