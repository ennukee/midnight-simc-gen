const data = {
  flasks: [
    {
      displayName: 'Crit Flask',
      simName: 'CritFlask',
      profilesetString: 'flask=flask_of_the_shattered_sun_2'
    },
    {
      displayName: 'Haste Flask',
      simName: 'HasteFlask',
      profilesetString: 'flask=flask_of_the_blood_knights_2'
    },
    {
      displayName: 'Mastery Flask',
      simName: 'MasteryFlask',
      profilesetString: 'flask=flask_of_the_magisters_2'
    },
    {
      displayName: 'Vers Flask',
      simName: 'VersFlask',
      profilesetString: 'flask=flask_of_thalassian_resistance_2'
    },
  ],
  potions: [
    {
      displayName: 'Light\'s Potential',
      simName: 'LightsPotential',
      profilesetString: 'potion=lights_potential_2'
    },
    {
      displayName: 'Potion of Recklessness',
      simName: 'RecklessnessPot',
      profilesetString: 'potion=potion_of_recklessness_2'
    },
    {
      displayName: 'Potion of Zealotry',
      simName: 'ZealotryPot',
      profilesetString: 'potion=potion_of_zealotry_2'
    },
    {
      displayName: 'Draught of Rampant Abandon',
      simName: 'RampantAbandonPot',
      profilesetString: 'potion=draught_of_rampant_abandon_2'
    }
  ],
  runes: [
    {
      displayName: 'Refulgent Whetstone (AP)',
      simName: 'Whetstone',
      profilesetString: 'temporary_enchant=main_hand:refulgent_whetstone_2',
      additionalParams: {
        includeOffhand: {
          inline: true,
          profilesetString: '/off_hand:refulgent_whetstone_2',
        }
      }
    },
    {
      displayName: 'Thalassian Phoenix Oil (Crit/Haste)',
      simName: 'PhoenixOil',
      profilesetString: 'temporary_enchant=main_hand:thalassian_phoenix_oil_2',
      additionalParams: {
        includeOffhand: {
          inline: true,
          profilesetString: '/off_hand:thalassian_phoenix_oil_2',
        }
      }
    },
    {
      displayName: 'Oil of Dawn (Holy Damage Proc)',
      simName: 'OilOfDawn',
      profilesetString: 'temporary_enchant=main_hand:oil_of_dawn_2',
      additionalParams: {
        includeOffhand: {
          inline: true,
          profilesetString: '/off_hand:oil_of_dawn_2',
        }
      }
    },
    {
      displayName: 'Smugglers\' Enchanted Edge (Holy Damage Proc)',
      simName: 'SmugglersEdge',
      profilesetString: 'temporary_enchant=main_hand:smugglers_enchanted_edge_2',
      additionalParams: {
        includeOffhand: {
          inline: true,
          profilesetString: '/off_hand:smugglers_enchanted_edge_2',
        }
      }
    },
  ],
  food: [
    {
      displayName: 'Main Stat Food (+50)',
      simName: 'PrimaryFood',
      profilesetString: 'food=harandar_celebration'
    },
    {
      displayName: 'Highest Secondary Food (+64)',
      simName: 'SecondaryFood',
      profilesetString: 'food=blooming_feast'
    },
  ],
}

export default data;