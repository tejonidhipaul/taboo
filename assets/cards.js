// 350 built-in coaching cards.
// Targets and forbidden entries are limited to one or two words.
// Sources: 200 cards from the attached Taboo PDF, 50 Esko products, 50 technical terms, and 50 customer challenges.

const CARD_DATA = [
  {
    "id": "pdf-01-1-car",
    "target": "Car",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "beginner",
    "forbidden": [
      "driver",
      "ride",
      "transport",
      "fast",
      "travel",
      "Vehicle"
    ],
    "explanation": "Describe Car by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 1"
  },
  {
    "id": "pdf-01-2-dragonfly",
    "target": "Dragonfly",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "intermediate",
    "forbidden": [
      "Red",
      "Wings",
      "Insect",
      "Fly",
      "dragon",
      "Pond"
    ],
    "explanation": "Describe Dragonfly by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 1"
  },
  {
    "id": "pdf-01-3-snowflake",
    "target": "Snowflake",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "advanced",
    "forbidden": [
      "cold",
      "winter",
      "flower",
      "snow",
      "fall",
      "Unique"
    ],
    "explanation": "Describe Snowflake by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 1"
  },
  {
    "id": "pdf-01-4-hungry",
    "target": "Hungry",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "beginner",
    "forbidden": [
      "feeling",
      "eat",
      "food",
      "breakfast",
      "meal",
      "Appetite"
    ],
    "explanation": "Describe Hungry by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 1"
  },
  {
    "id": "pdf-01-5-duck",
    "target": "Duck",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "intermediate",
    "forbidden": [
      "bird",
      "yellow",
      "chicken",
      "quack",
      "food",
      "Pond"
    ],
    "explanation": "Describe Duck by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 1"
  },
  {
    "id": "pdf-01-6-pillow",
    "target": "Pillow",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "advanced",
    "forbidden": [
      "head",
      "sleep",
      "soft",
      "bed",
      "blanket",
      "Cushion"
    ],
    "explanation": "Describe Pillow by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 1"
  },
  {
    "id": "pdf-01-7-dance",
    "target": "Dance",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "beginner",
    "forbidden": [
      "Shoes",
      "Romantic",
      "Music",
      "Sing",
      "Town Square",
      "Rhythm"
    ],
    "explanation": "Describe Dance by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 1"
  },
  {
    "id": "pdf-01-8-proud",
    "target": "Proud",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "intermediate",
    "forbidden": [
      "feeling",
      "Accomplish",
      "Great",
      "Boast",
      "Humble",
      "Confidence"
    ],
    "explanation": "Describe Proud by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 1"
  },
  {
    "id": "pdf-02-1-blanket",
    "target": "Blanket",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "advanced",
    "forbidden": [
      "Warm",
      "Bed",
      "Pillow",
      "Soft",
      "Cold",
      "Cover"
    ],
    "explanation": "Describe Blanket by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 2"
  },
  {
    "id": "pdf-02-2-shanghai",
    "target": "Shanghai",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "beginner",
    "forbidden": [
      "Modern",
      "Big",
      "China",
      "Expo",
      "Famous",
      "City"
    ],
    "explanation": "Describe Shanghai by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 2"
  },
  {
    "id": "pdf-02-3-soccer",
    "target": "Soccer",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "intermediate",
    "forbidden": [
      "Ball",
      "world Cup",
      "Black",
      "Sport",
      "Team",
      "Goal"
    ],
    "explanation": "Describe Soccer by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 2"
  },
  {
    "id": "pdf-02-4-cheese",
    "target": "Cheese",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "advanced",
    "forbidden": [
      "Yellow",
      "White",
      "Pizza",
      "Food",
      "Italy",
      "Dairy"
    ],
    "explanation": "Describe Cheese by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 2"
  },
  {
    "id": "pdf-02-5-snail",
    "target": "Snail",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "beginner",
    "forbidden": [
      "Round",
      "Slow",
      "River",
      "Eat",
      "Animal",
      "Shell"
    ],
    "explanation": "Describe Snail by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 2"
  },
  {
    "id": "pdf-02-6-dinosaur",
    "target": "Dinosaur",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "intermediate",
    "forbidden": [
      "Big",
      "Animal",
      "Extinct",
      "Long Ago",
      "Reptile",
      "Fossil"
    ],
    "explanation": "Describe Dinosaur by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 2"
  },
  {
    "id": "pdf-02-7-japan",
    "target": "Japan",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "advanced",
    "forbidden": [
      "Country",
      "Asia",
      "Cherry Blossom",
      "Sushi",
      "Tokyo",
      "Island"
    ],
    "explanation": "Describe Japan by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 2"
  },
  {
    "id": "pdf-02-8-new-york",
    "target": "New York",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "beginner",
    "forbidden": [
      "City",
      "America",
      "Big Apple",
      "Statue",
      "Liberty",
      "Manhattan"
    ],
    "explanation": "Describe New York by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 2"
  },
  {
    "id": "pdf-03-1-husband",
    "target": "Husband",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "intermediate",
    "forbidden": [
      "Wife",
      "Ring",
      "Marry",
      "Man",
      "Friend",
      "Spouse"
    ],
    "explanation": "Describe Husband by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 3"
  },
  {
    "id": "pdf-03-2-michael-jackson",
    "target": "Michael Jackson",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "advanced",
    "forbidden": [
      "Dance",
      "Thriller",
      "Strange",
      "Famous",
      "Singer",
      "Pop"
    ],
    "explanation": "Describe Michael Jackson by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 3"
  },
  {
    "id": "pdf-03-3-underwear",
    "target": "Underwear",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "beginner",
    "forbidden": [
      "Small",
      "Clothing",
      "Every Day",
      "Secret",
      "Under",
      "Garment"
    ],
    "explanation": "Describe Underwear by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 3"
  },
  {
    "id": "pdf-03-4-girlfriend",
    "target": "Girlfriend",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "intermediate",
    "forbidden": [
      "Boyfriend",
      "Beautiful",
      "Flowers",
      "Date",
      "Female",
      "Partner"
    ],
    "explanation": "Describe Girlfriend by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 3"
  },
  {
    "id": "pdf-03-5-giraffe",
    "target": "Giraffe",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "advanced",
    "forbidden": [
      "Tall",
      "Africa",
      "Neck",
      "Long",
      "Yellow",
      "Spots"
    ],
    "explanation": "Describe Giraffe by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 3"
  },
  {
    "id": "pdf-03-6-wok",
    "target": "Wok",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "beginner",
    "forbidden": [
      "Cook",
      "China",
      "Iron",
      "Dishes",
      "Pot",
      "Pan"
    ],
    "explanation": "Describe Wok by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 3"
  },
  {
    "id": "pdf-03-7-camera",
    "target": "Camera",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "intermediate",
    "forbidden": [
      "Photos",
      "Pictures",
      "Snapshot",
      "Travel",
      "Memories",
      "Lens"
    ],
    "explanation": "Describe Camera by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 3"
  },
  {
    "id": "pdf-03-8-slippers",
    "target": "Slippers",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "advanced",
    "forbidden": [
      "Warm",
      "Feet",
      "Winter",
      "House",
      "Soft",
      "Indoor"
    ],
    "explanation": "Describe Slippers by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 3"
  },
  {
    "id": "pdf-04-1-comb",
    "target": "Comb",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "beginner",
    "forbidden": [
      "Brush",
      "Hair",
      "Smooth",
      "Small",
      "Beautiful",
      "Teeth"
    ],
    "explanation": "Describe Comb by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 4"
  },
  {
    "id": "pdf-04-2-hamburger",
    "target": "Hamburger",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "intermediate",
    "forbidden": [
      "America",
      "Beef",
      "Bread",
      "McDonalds",
      "Unhealthy",
      "Bun"
    ],
    "explanation": "Describe Hamburger by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 4"
  },
  {
    "id": "pdf-04-3-polar-bear",
    "target": "Polar Bear",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "advanced",
    "forbidden": [
      "cold",
      "Winter",
      "Alaska",
      "White",
      "Snow",
      "Arctic"
    ],
    "explanation": "Describe Polar Bear by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 4"
  },
  {
    "id": "pdf-04-4-penguin",
    "target": "Penguin",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "beginner",
    "forbidden": [
      "Bird",
      "Fly",
      "Animal",
      "Black",
      "White",
      "Antarctica"
    ],
    "explanation": "Describe Penguin by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 4"
  },
  {
    "id": "pdf-04-5-glasses",
    "target": "Glasses",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "intermediate",
    "forbidden": [
      "Eyes",
      "See",
      "Contacts",
      "Wear",
      "Face",
      "Vision"
    ],
    "explanation": "Describe Glasses by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 4"
  },
  {
    "id": "pdf-04-6-popcorn",
    "target": "Popcorn",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "advanced",
    "forbidden": [
      "Kernel",
      "Butter",
      "Sweet",
      "Microwave",
      "Snack Food",
      "Movie"
    ],
    "explanation": "Describe Popcorn by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 4"
  },
  {
    "id": "pdf-04-7-speech",
    "target": "Speech",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "beginner",
    "forbidden": [
      "Give",
      "Speak",
      "Important",
      "Audience",
      "Nervous",
      "Orator"
    ],
    "explanation": "Describe Speech by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 4"
  },
  {
    "id": "pdf-04-8-furious",
    "target": "Furious",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "intermediate",
    "forbidden": [
      "Angry",
      "Red Face",
      "Hurt",
      "Rage",
      "Violent",
      "Temper"
    ],
    "explanation": "Describe Furious by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 4"
  },
  {
    "id": "pdf-05-1-jealousy",
    "target": "Jealousy",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "advanced",
    "forbidden": [
      "Envy",
      "Emotion",
      "Compare",
      "Green",
      "Achieve",
      "Possessive"
    ],
    "explanation": "Describe Jealousy by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 5"
  },
  {
    "id": "pdf-05-2-chicken-leg",
    "target": "Chicken Leg",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "beginner",
    "forbidden": [
      "Bird",
      "Body",
      "Eat",
      "Food",
      "KFC",
      "Drumstick"
    ],
    "explanation": "Describe Chicken Leg by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 5"
  },
  {
    "id": "pdf-05-3-toilet",
    "target": "Toilet",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "intermediate",
    "forbidden": [
      "Washroom",
      "WC",
      "Pee",
      "Poop",
      "Bathroom",
      "Flush"
    ],
    "explanation": "Describe Toilet by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 5"
  },
  {
    "id": "pdf-05-4-wish",
    "target": "Wish",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "advanced",
    "forbidden": [
      "Want",
      "Desire",
      "Hope",
      "Dream",
      "Long For",
      "Star"
    ],
    "explanation": "Describe Wish by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 5"
  },
  {
    "id": "pdf-05-5-bench",
    "target": "Bench",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "beginner",
    "forbidden": [
      "Sit",
      "Wooden",
      "Chair",
      "Long",
      "Park",
      "Seat"
    ],
    "explanation": "Describe Bench by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 5"
  },
  {
    "id": "pdf-05-6-exercise",
    "target": "Exercise",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "intermediate",
    "forbidden": [
      "Run",
      "Sports",
      "Healthy",
      "Daily",
      "Morning",
      "Fitness"
    ],
    "explanation": "Describe Exercise by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 5"
  },
  {
    "id": "pdf-05-7-crown",
    "target": "Crown",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "advanced",
    "forbidden": [
      "Head",
      "Gold",
      "King",
      "Queen",
      "Jewels",
      "Royalty"
    ],
    "explanation": "Describe Crown by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 5"
  },
  {
    "id": "pdf-05-8-princess",
    "target": "Princess",
    "theme": "everyday",
    "category": "Classic Taboo 1",
    "level": "beginner",
    "forbidden": [
      "Prince",
      "Queen",
      "Daughter",
      "Royal",
      "Castle",
      "Fairy Tale"
    ],
    "explanation": "Describe Princess by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 5"
  },
  {
    "id": "pdf-06-1-internet",
    "target": "Internet",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "intermediate",
    "forbidden": [
      "Computer",
      "Web",
      "Surf",
      "Net",
      "Technology",
      "Online"
    ],
    "explanation": "Describe Internet by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 6"
  },
  {
    "id": "pdf-06-2-jacket",
    "target": "Jacket",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "advanced",
    "forbidden": [
      "Coat",
      "Warm",
      "Clothes",
      "Sleeves",
      "Zipper",
      "Outerwear"
    ],
    "explanation": "Describe Jacket by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 6"
  },
  {
    "id": "pdf-06-3-shower",
    "target": "Shower",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "beginner",
    "forbidden": [
      "Rain",
      "Clean",
      "Water",
      "Every Day",
      "Bath",
      "Soap"
    ],
    "explanation": "Describe Shower by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 6"
  },
  {
    "id": "pdf-06-4-wind",
    "target": "Wind",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "intermediate",
    "forbidden": [
      "Blow",
      "Autumn",
      "Invisible",
      "Trees",
      "Kite",
      "Breeze"
    ],
    "explanation": "Describe Wind by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 6"
  },
  {
    "id": "pdf-06-5-ice-cream",
    "target": "Ice Cream",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "advanced",
    "forbidden": [
      "Cold",
      "Summer",
      "Sweet",
      "Snack",
      "Cone",
      "Frozen"
    ],
    "explanation": "Describe Ice Cream by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 6"
  },
  {
    "id": "pdf-06-6-foreigner",
    "target": "Foreigner",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "beginner",
    "forbidden": [
      "Teacher",
      "Different",
      "Outside",
      "Country",
      "Travel",
      "Abroad"
    ],
    "explanation": "Describe Foreigner by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 6"
  },
  {
    "id": "pdf-06-7-church",
    "target": "Church",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "intermediate",
    "forbidden": [
      "Sing",
      "Building",
      "Cross",
      "God",
      "Speaker",
      "Worship"
    ],
    "explanation": "Describe Church by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 6"
  },
  {
    "id": "pdf-06-8-police",
    "target": "Police",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "advanced",
    "forbidden": [
      "Uniform",
      "Safety",
      "Peace",
      "Protect",
      "Siren",
      "Officer"
    ],
    "explanation": "Describe Police by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 6"
  },
  {
    "id": "pdf-07-1-boots",
    "target": "Boots",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "beginner",
    "forbidden": [
      "Winter",
      "Shoes",
      "Warm",
      "Fashion",
      "Snow",
      "Footwear"
    ],
    "explanation": "Describe Boots by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 7"
  },
  {
    "id": "pdf-07-2-plane-ticket",
    "target": "Plane Ticket",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "intermediate",
    "forbidden": [
      "Expensive",
      "Flight",
      "Travel",
      "Paper",
      "Seat",
      "Boarding"
    ],
    "explanation": "Describe Plane Ticket by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 7"
  },
  {
    "id": "pdf-07-3-turkey",
    "target": "Turkey",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "advanced",
    "forbidden": [
      "bird",
      "Holiday",
      "thanksgiving",
      "Big",
      "Tired",
      "Gobble"
    ],
    "explanation": "Describe Turkey by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 7"
  },
  {
    "id": "pdf-07-4-freezer",
    "target": "Freezer",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "beginner",
    "forbidden": [
      "Cold",
      "Refrigerator",
      "Ice",
      "Food",
      "Kitchen",
      "Appliance"
    ],
    "explanation": "Describe Freezer by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 7"
  },
  {
    "id": "pdf-07-5-soy-sauce",
    "target": "Soy Sauce",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "intermediate",
    "forbidden": [
      "Chinese",
      "Liquid",
      "Brown",
      "Cooking",
      "Salty",
      "Condiment"
    ],
    "explanation": "Describe Soy Sauce by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 7"
  },
  {
    "id": "pdf-07-6-yoga-teacher",
    "target": "Yoga Teacher",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "advanced",
    "forbidden": [
      "Exercise",
      "Instructor",
      "Master",
      "Chinese",
      "Help",
      "Pose"
    ],
    "explanation": "Describe Yoga Teacher by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 7"
  },
  {
    "id": "pdf-07-7-straw",
    "target": "Straw",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "beginner",
    "forbidden": [
      "Hollow",
      "Horses",
      "Farm",
      "Drink",
      "Suck",
      "Tube"
    ],
    "explanation": "Describe Straw by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 7"
  },
  {
    "id": "pdf-07-8-leaf",
    "target": "Leaf",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "intermediate",
    "forbidden": [
      "Tree",
      "Green",
      "Fall",
      "Plant",
      "Page",
      "Branch"
    ],
    "explanation": "Describe Leaf by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 7"
  },
  {
    "id": "pdf-08-1-noun",
    "target": "Noun",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "advanced",
    "forbidden": [
      "Verb",
      "Speech",
      "Adjective",
      "PERSON",
      "Place",
      "Grammar"
    ],
    "explanation": "Describe Noun by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 8"
  },
  {
    "id": "pdf-08-2-carry",
    "target": "Carry",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "beginner",
    "forbidden": [
      "Hold",
      "Pick Up",
      "Move",
      "Transport",
      "Support",
      "Lift"
    ],
    "explanation": "Describe Carry by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 8"
  },
  {
    "id": "pdf-08-3-taxi",
    "target": "Taxi",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "intermediate",
    "forbidden": [
      "Car",
      "Public",
      "Transport",
      "Fare",
      "City",
      "Cab"
    ],
    "explanation": "Describe Taxi by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 8"
  },
  {
    "id": "pdf-08-4-blossom",
    "target": "Blossom",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "advanced",
    "forbidden": [
      "Flower",
      "Young",
      "Bud",
      "Spring",
      "Bloom",
      "Petal"
    ],
    "explanation": "Describe Blossom by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 8"
  },
  {
    "id": "pdf-08-5-broom",
    "target": "Broom",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "beginner",
    "forbidden": [
      "Sweep",
      "Floor",
      "Witch",
      "Wooden",
      "Dust",
      "Handle"
    ],
    "explanation": "Describe Broom by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 8"
  },
  {
    "id": "pdf-08-6-witch",
    "target": "Witch",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "intermediate",
    "forbidden": [
      "Broom",
      "Green",
      "Magic",
      "Halloween",
      "Powers",
      "Spell"
    ],
    "explanation": "Describe Witch by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 8"
  },
  {
    "id": "pdf-08-7-fork",
    "target": "Fork",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "advanced",
    "forbidden": [
      "Spoon",
      "Knife",
      "Eat",
      "Prongs",
      "Divide",
      "Utensil"
    ],
    "explanation": "Describe Fork by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 8"
  },
  {
    "id": "pdf-08-8-parade",
    "target": "Parade",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "beginner",
    "forbidden": [
      "Line",
      "Crowd",
      "Floats",
      "Gather",
      "Holiday",
      "March"
    ],
    "explanation": "Describe Parade by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 8"
  },
  {
    "id": "pdf-09-1-fashion",
    "target": "Fashion",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "intermediate",
    "forbidden": [
      "Clothes",
      "Model",
      "Girls",
      "Look",
      "Magazine",
      "Style"
    ],
    "explanation": "Describe Fashion by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 9"
  },
  {
    "id": "pdf-09-2-wedding-dress",
    "target": "Wedding Dress",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "advanced",
    "forbidden": [
      "White",
      "married",
      "Clothes",
      "SPECIAL",
      "Girls",
      "Bride"
    ],
    "explanation": "Describe Wedding Dress by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 9"
  },
  {
    "id": "pdf-09-3-kungfu-panda",
    "target": "Kungfu Panda",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "beginner",
    "forbidden": [
      "Movie",
      "China",
      "Noodles",
      "Children",
      "famous",
      "Animation"
    ],
    "explanation": "Describe Kungfu Panda by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 9"
  },
  {
    "id": "pdf-09-4-marker",
    "target": "Marker",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "intermediate",
    "forbidden": [
      "Write",
      "Draw",
      "Colors",
      "Children",
      "Art",
      "Pen"
    ],
    "explanation": "Describe Marker by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 9"
  },
  {
    "id": "pdf-09-5-trash-can",
    "target": "Trash Can",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "advanced",
    "forbidden": [
      "Rubbish",
      "Barrel",
      "Worthless",
      "Ruin",
      "Old",
      "Garbage"
    ],
    "explanation": "Describe Trash Can by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 9"
  },
  {
    "id": "pdf-09-6-snowman",
    "target": "Snowman",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "beginner",
    "forbidden": [
      "Three",
      "Children",
      "Make",
      "Winter",
      "Outside",
      "Carrot"
    ],
    "explanation": "Describe Snowman by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 9"
  },
  {
    "id": "pdf-09-7-wings",
    "target": "Wings",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "intermediate",
    "forbidden": [
      "Bird",
      "Chicken",
      "Fly",
      "Arms",
      "Feathers",
      "Flight"
    ],
    "explanation": "Describe Wings by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 9"
  },
  {
    "id": "pdf-09-8-pilot",
    "target": "Pilot",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "advanced",
    "forbidden": [
      "Fly",
      "Plane",
      "Helicopter",
      "Man",
      "Travel",
      "Cockpit"
    ],
    "explanation": "Describe Pilot by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 9"
  },
  {
    "id": "pdf-10-1-lawyer",
    "target": "Lawyer",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "beginner",
    "forbidden": [
      "Argue",
      "Defend",
      "Law",
      "Client",
      "Crime",
      "Court"
    ],
    "explanation": "Describe Lawyer by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 10"
  },
  {
    "id": "pdf-10-2-hair-salon",
    "target": "Hair Salon",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "intermediate",
    "forbidden": [
      "Style",
      "Dye",
      "Wash",
      "Cut",
      "Barber",
      "Stylist"
    ],
    "explanation": "Describe Hair Salon by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 10"
  },
  {
    "id": "pdf-10-3-picture-frame",
    "target": "Picture Frame",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "advanced",
    "forbidden": [
      "Photo",
      "Memory",
      "Wood",
      "Glass",
      "Home",
      "Display"
    ],
    "explanation": "Describe Picture Frame by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 10"
  },
  {
    "id": "pdf-10-4-purse",
    "target": "Purse",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "beginner",
    "forbidden": [
      "Leather",
      "Bag",
      "Money",
      "Woman",
      "Carry",
      "Handbag"
    ],
    "explanation": "Describe Purse by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 10"
  },
  {
    "id": "pdf-10-5-alligator",
    "target": "Alligator",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "intermediate",
    "forbidden": [
      "Crocodile",
      "Green",
      "Animal",
      "Teeth",
      "Florida",
      "Swamp"
    ],
    "explanation": "Describe Alligator by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 10"
  },
  {
    "id": "pdf-10-6-orange",
    "target": "Orange",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "advanced",
    "forbidden": [
      "Color",
      "Fruit",
      "Juicy",
      "Citrus",
      "Red",
      "Peel"
    ],
    "explanation": "Describe Orange by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 10"
  },
  {
    "id": "pdf-10-7-makeup",
    "target": "Makeup",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "beginner",
    "forbidden": [
      "Face",
      "Mascara",
      "Lipstick",
      "Girls",
      "Beautiful",
      "Cosmetics"
    ],
    "explanation": "Describe Makeup by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 10"
  },
  {
    "id": "pdf-10-8-tutor",
    "target": "Tutor",
    "theme": "everyday",
    "category": "Classic Taboo 2",
    "level": "intermediate",
    "forbidden": [
      "Teach",
      "Individual",
      "Learn",
      "Make Up",
      "Review",
      "Lesson"
    ],
    "explanation": "Describe Tutor by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 10"
  },
  {
    "id": "pdf-11-1-worry",
    "target": "Worry",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "advanced",
    "forbidden": [
      "Nervous",
      "Anxiety",
      "Stress",
      "Scared",
      "Trouble",
      "Concern"
    ],
    "explanation": "Describe Worry by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 11"
  },
  {
    "id": "pdf-11-2-moose",
    "target": "Moose",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "beginner",
    "forbidden": [
      "Animal",
      "Mammal",
      "Forest",
      "Antlers",
      "Hunting",
      "Canada"
    ],
    "explanation": "Describe Moose by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 11"
  },
  {
    "id": "pdf-11-3-shampoo",
    "target": "Shampoo",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "intermediate",
    "forbidden": [
      "Conditioner",
      "Lather",
      "Wash",
      "Hair",
      "Shower",
      "Bottle"
    ],
    "explanation": "Describe Shampoo by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 11"
  },
  {
    "id": "pdf-11-4-bridge",
    "target": "Bridge",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "advanced",
    "forbidden": [
      "Cross",
      "River",
      "Build",
      "Over",
      "Connect",
      "Span"
    ],
    "explanation": "Describe Bridge by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 11"
  },
  {
    "id": "pdf-11-5-nervous",
    "target": "Nervous",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "beginner",
    "forbidden": [
      "Anxious",
      "Test",
      "Difficulty",
      "Pressure",
      "Scared",
      "Uneasy"
    ],
    "explanation": "Describe Nervous by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 11"
  },
  {
    "id": "pdf-11-6-camel",
    "target": "Camel",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "intermediate",
    "forbidden": [
      "Humps",
      "Desert",
      "Animal",
      "Water",
      "Cigarette",
      "Caravan"
    ],
    "explanation": "Describe Camel by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 11"
  },
  {
    "id": "pdf-11-7-watch",
    "target": "Watch",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "advanced",
    "forbidden": [
      "Look",
      "Stare",
      "Wrist",
      "Time",
      "Jewelry",
      "Clock"
    ],
    "explanation": "Describe Watch by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 11"
  },
  {
    "id": "pdf-11-8-brush",
    "target": "Brush",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "beginner",
    "forbidden": [
      "Comb",
      "Hair",
      "Bristles",
      "Wooden",
      "Stroke",
      "Paint"
    ],
    "explanation": "Describe Brush by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 11"
  },
  {
    "id": "pdf-12-1-license",
    "target": "License",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "intermediate",
    "forbidden": [
      "Driver",
      "Car",
      "Card",
      "Permit",
      "Allow",
      "Identification"
    ],
    "explanation": "Describe License by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 12"
  },
  {
    "id": "pdf-12-2-librarian",
    "target": "Librarian",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "advanced",
    "forbidden": [
      "Books",
      "Library",
      "School",
      "Job",
      "Quiet",
      "Shelves"
    ],
    "explanation": "Describe Librarian by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 12"
  },
  {
    "id": "pdf-12-3-liberty",
    "target": "Liberty",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "beginner",
    "forbidden": [
      "Freedom",
      "Statue",
      "Power",
      "Choose",
      "Decide",
      "Rights"
    ],
    "explanation": "Describe Liberty by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 12"
  },
  {
    "id": "pdf-12-4-radio",
    "target": "Radio",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "intermediate",
    "forbidden": [
      "Listen",
      "Music",
      "AM",
      "FM",
      "News",
      "Broadcast"
    ],
    "explanation": "Describe Radio by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 12"
  },
  {
    "id": "pdf-12-5-shout",
    "target": "Shout",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "advanced",
    "forbidden": [
      "Yell",
      "Loud",
      "Speak",
      "Angry",
      "Danger",
      "Scream"
    ],
    "explanation": "Describe Shout by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 12"
  },
  {
    "id": "pdf-12-6-unlock",
    "target": "Unlock",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "beginner",
    "forbidden": [
      "Key",
      "Door",
      "Box",
      "Safe",
      "Hole",
      "Open"
    ],
    "explanation": "Describe Unlock by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 12"
  },
  {
    "id": "pdf-12-7-pear",
    "target": "Pear",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "intermediate",
    "forbidden": [
      "Apple",
      "Fruit",
      "Shape",
      "Tree",
      "Juice",
      "Green"
    ],
    "explanation": "Describe Pear by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 12"
  },
  {
    "id": "pdf-12-8-jumping",
    "target": "Jumping",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "advanced",
    "forbidden": [
      "Leap",
      "Up",
      "Down",
      "Excited",
      "Action",
      "Bounce"
    ],
    "explanation": "Describe Jumping by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 12"
  },
  {
    "id": "pdf-13-1-glove",
    "target": "Glove",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "beginner",
    "forbidden": [
      "Hand",
      "Cold",
      "Winter",
      "Disposable",
      "Mitten",
      "Fingers"
    ],
    "explanation": "Describe Glove by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 13"
  },
  {
    "id": "pdf-13-2-tornado",
    "target": "Tornado",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "intermediate",
    "forbidden": [
      "Storm",
      "Dorothy",
      "Swirl",
      "Wind",
      "Blow",
      "Funnel"
    ],
    "explanation": "Describe Tornado by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 13"
  },
  {
    "id": "pdf-13-3-wheelchair",
    "target": "Wheelchair",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "advanced",
    "forbidden": [
      "Mobility",
      "Accessible",
      "Legs",
      "Seat",
      "Wheels",
      "Ramp"
    ],
    "explanation": "Describe Wheelchair by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 13"
  },
  {
    "id": "pdf-13-4-monster",
    "target": "Monster",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "beginner",
    "forbidden": [
      "Scary",
      "Green",
      "Alien",
      "Zombie",
      "Create",
      "Creature"
    ],
    "explanation": "Describe Monster by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 13"
  },
  {
    "id": "pdf-13-5-midterm",
    "target": "Midterm",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "intermediate",
    "forbidden": [
      "Test",
      "Exam",
      "Half",
      "Final",
      "School",
      "Semester"
    ],
    "explanation": "Describe Midterm by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 13"
  },
  {
    "id": "pdf-13-6-melt",
    "target": "Melt",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "advanced",
    "forbidden": [
      "Soft",
      "Warm",
      "Ice",
      "Heat",
      "Liquid",
      "Thaw"
    ],
    "explanation": "Describe Melt by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 13"
  },
  {
    "id": "pdf-13-7-mature",
    "target": "Mature",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "beginner",
    "forbidden": [
      "Old",
      "Wise",
      "Develop",
      "Grown",
      "Advance",
      "Adult"
    ],
    "explanation": "Describe Mature by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 13"
  },
  {
    "id": "pdf-13-8-daisy",
    "target": "Daisy",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "intermediate",
    "forbidden": [
      "White",
      "Yellow",
      "Flower",
      "Duck",
      "Field",
      "Petals"
    ],
    "explanation": "Describe Daisy by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 13"
  },
  {
    "id": "pdf-14-1-custom",
    "target": "Custom",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "advanced",
    "forbidden": [
      "Culture",
      "Way",
      "Tradition",
      "Behave",
      "Society",
      "Habit"
    ],
    "explanation": "Describe Custom by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 14"
  },
  {
    "id": "pdf-14-2-curtain",
    "target": "Curtain",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "beginner",
    "forbidden": [
      "Red",
      "Window",
      "Light",
      "Cloth",
      "Play",
      "Drapes"
    ],
    "explanation": "Describe Curtain by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 14"
  },
  {
    "id": "pdf-14-3-cruel",
    "target": "Cruel",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "intermediate",
    "forbidden": [
      "Mean",
      "Angry",
      "Unkind",
      "Pain",
      "Suffering",
      "Harsh"
    ],
    "explanation": "Describe Cruel by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 14"
  },
  {
    "id": "pdf-14-4-milk",
    "target": "Milk",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "advanced",
    "forbidden": [
      "White",
      "Liquid",
      "Drink",
      "Bones",
      "Cow",
      "Dairy"
    ],
    "explanation": "Describe Milk by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 14"
  },
  {
    "id": "pdf-14-5-politics",
    "target": "Politics",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "beginner",
    "forbidden": [
      "Law",
      "President",
      "Leaders",
      "Country",
      "Citizen",
      "Government"
    ],
    "explanation": "Describe Politics by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 14"
  },
  {
    "id": "pdf-14-6-guitar",
    "target": "Guitar",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "intermediate",
    "forbidden": [
      "Instrument",
      "Play",
      "Strings",
      "Strum",
      "Music",
      "Chords"
    ],
    "explanation": "Describe Guitar by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 14"
  },
  {
    "id": "pdf-14-7-chalk",
    "target": "Chalk",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "advanced",
    "forbidden": [
      "White",
      "Dust",
      "Teach",
      "Blackboard",
      "Erase",
      "Board"
    ],
    "explanation": "Describe Chalk by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 14"
  },
  {
    "id": "pdf-14-8-bottle",
    "target": "Bottle",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "beginner",
    "forbidden": [
      "Feed",
      "Baby",
      "Glass",
      "Juice",
      "Water",
      "Container"
    ],
    "explanation": "Describe Bottle by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 14"
  },
  {
    "id": "pdf-15-1-table",
    "target": "Table",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "intermediate",
    "forbidden": [
      "Eat",
      "Chairs",
      "Legs",
      "Study",
      "Wooden",
      "Furniture"
    ],
    "explanation": "Describe Table by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 15"
  },
  {
    "id": "pdf-15-2-distance",
    "target": "Distance",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "advanced",
    "forbidden": [
      "Length",
      "Mile",
      "Meter",
      "Space",
      "Far Away",
      "Measure"
    ],
    "explanation": "Describe Distance by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 15"
  },
  {
    "id": "pdf-15-3-elderly",
    "target": "Elderly",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "beginner",
    "forbidden": [
      "Old",
      "Nurse",
      "Aged",
      "Adult",
      "Health",
      "Senior"
    ],
    "explanation": "Describe Elderly by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 15"
  },
  {
    "id": "pdf-15-4-fish",
    "target": "Fish",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "intermediate",
    "forbidden": [
      "Swim",
      "Gills",
      "River",
      "Eat",
      "Catch",
      "Fins"
    ],
    "explanation": "Describe Fish by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 15"
  },
  {
    "id": "pdf-15-5-famous",
    "target": "Famous",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "advanced",
    "forbidden": [
      "Popular",
      "Known",
      "Important",
      "Recognize",
      "Position",
      "Celebrity"
    ],
    "explanation": "Describe Famous by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 15"
  },
  {
    "id": "pdf-15-6-nyc",
    "target": "NYC",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "beginner",
    "forbidden": [
      "Statue",
      "Apple",
      "City",
      "America",
      "Busy",
      "Manhattan"
    ],
    "explanation": "Describe NYC by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 15"
  },
  {
    "id": "pdf-15-7-train",
    "target": "Train",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "intermediate",
    "forbidden": [
      "Ride",
      "Travel",
      "Cheap",
      "Railroad",
      "Choo-Choo",
      "Station"
    ],
    "explanation": "Describe Train by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 15"
  },
  {
    "id": "pdf-15-8-needle",
    "target": "Needle",
    "theme": "everyday",
    "category": "Classic Taboo 3",
    "level": "advanced",
    "forbidden": [
      "Haystack",
      "Sharp",
      "Small",
      "Metal",
      "Sew",
      "Thread"
    ],
    "explanation": "Describe Needle by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 15"
  },
  {
    "id": "pdf-16-1-joy",
    "target": "Joy",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "beginner",
    "forbidden": [
      "Happy",
      "Celebrate",
      "Excited",
      "Pleasure",
      "Feeling",
      "Delight"
    ],
    "explanation": "Describe Joy by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 16"
  },
  {
    "id": "pdf-16-2-firecracker",
    "target": "Firecracker",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "intermediate",
    "forbidden": [
      "Explode",
      "Loud",
      "Red",
      "Light",
      "Holiday",
      "Fireworks"
    ],
    "explanation": "Describe Firecracker by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 16"
  },
  {
    "id": "pdf-16-3-superman",
    "target": "Superman",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "advanced",
    "forbidden": [
      "Fly",
      "Hero",
      "Bird",
      "Plane",
      "Clark Kent",
      "Kryptonite"
    ],
    "explanation": "Describe Superman by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 16"
  },
  {
    "id": "pdf-16-4-sun",
    "target": "Sun",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "beginner",
    "forbidden": [
      "Warm",
      "Yellow",
      "Light",
      "Solar",
      "Planet",
      "Star"
    ],
    "explanation": "Describe Sun by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 16"
  },
  {
    "id": "pdf-16-5-monkey",
    "target": "Monkey",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "intermediate",
    "forbidden": [
      "Swing",
      "Banana",
      "Zoo",
      "Brown",
      "Animal",
      "Ape"
    ],
    "explanation": "Describe Monkey by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 16"
  },
  {
    "id": "pdf-16-6-shark",
    "target": "Shark",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "advanced",
    "forbidden": [
      "Swim",
      "Teeth",
      "Dangerous",
      "Ocean",
      "Sea",
      "Fin"
    ],
    "explanation": "Describe Shark by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 16"
  },
  {
    "id": "pdf-16-7-window",
    "target": "Window",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "beginner",
    "forbidden": [
      "Curtain",
      "Glass",
      "Screen",
      "Home",
      "Door",
      "View"
    ],
    "explanation": "Describe Window by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 16"
  },
  {
    "id": "pdf-16-8-desk",
    "target": "Desk",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "intermediate",
    "forbidden": [
      "Homework",
      "Sit",
      "Wooden",
      "Classroom",
      "Student",
      "Office"
    ],
    "explanation": "Describe Desk by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 16"
  },
  {
    "id": "pdf-17-1-coffee",
    "target": "Coffee",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "advanced",
    "forbidden": [
      "Tea",
      "Brown",
      "Drink",
      "Caffeine",
      "Starbucks",
      "Mug"
    ],
    "explanation": "Describe Coffee by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 17"
  },
  {
    "id": "pdf-17-2-candle",
    "target": "Candle",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "beginner",
    "forbidden": [
      "Bright",
      "Light",
      "Wax",
      "Burn",
      "Wick",
      "Scent"
    ],
    "explanation": "Describe Candle by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 17"
  },
  {
    "id": "pdf-17-3-egg-roll",
    "target": "Egg Roll",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "intermediate",
    "forbidden": [
      "Spring",
      "Vegetable",
      "Round",
      "China",
      "Food",
      "Appetizer"
    ],
    "explanation": "Describe Egg Roll by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 17"
  },
  {
    "id": "pdf-17-4-santa",
    "target": "Santa",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "advanced",
    "forbidden": [
      "Fat",
      "Man",
      "Christmas",
      "Claus",
      "Gifts",
      "Reindeer"
    ],
    "explanation": "Describe Santa by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 17"
  },
  {
    "id": "pdf-17-5-bells",
    "target": "Bells",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "beginner",
    "forbidden": [
      "Ring",
      "Silver",
      "Hear",
      "Metal",
      "Gold",
      "Chime"
    ],
    "explanation": "Describe Bells by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 17"
  },
  {
    "id": "pdf-17-6-heart",
    "target": "Heart",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "intermediate",
    "forbidden": [
      "Shape",
      "Beat",
      "Broken",
      "Body",
      "Love",
      "Organ"
    ],
    "explanation": "Describe Heart by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 17"
  },
  {
    "id": "pdf-17-7-headache",
    "target": "Headache",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "advanced",
    "forbidden": [
      "Pound",
      "Beat",
      "Medicine",
      "Sick",
      "Rush",
      "Pain"
    ],
    "explanation": "Describe Headache by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 17"
  },
  {
    "id": "pdf-17-8-discuss",
    "target": "Discuss",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "beginner",
    "forbidden": [
      "Talk",
      "Debate",
      "Ideas",
      "Oppose",
      "Share",
      "Conversation"
    ],
    "explanation": "Describe Discuss by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 17"
  },
  {
    "id": "pdf-18-1-debate",
    "target": "Debate",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "intermediate",
    "forbidden": [
      "Discuss",
      "Sides",
      "Talk",
      "Oppose",
      "Win",
      "Argument"
    ],
    "explanation": "Describe Debate by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 18"
  },
  {
    "id": "pdf-18-2-eraser",
    "target": "Eraser",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "advanced",
    "forbidden": [
      "Clean",
      "Pencil",
      "Fix",
      "Mistake",
      "Change",
      "Rubber"
    ],
    "explanation": "Describe Eraser by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 18"
  },
  {
    "id": "pdf-18-3-prisoner",
    "target": "Prisoner",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "beginner",
    "forbidden": [
      "Jail",
      "Convict",
      "Murder",
      "Crime",
      "Bad",
      "Inmate"
    ],
    "explanation": "Describe Prisoner by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 18"
  },
  {
    "id": "pdf-18-4-murder",
    "target": "Murder",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "intermediate",
    "forbidden": [
      "Kill",
      "Prison",
      "Jail",
      "Law",
      "Court",
      "Homicide"
    ],
    "explanation": "Describe Murder by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 18"
  },
  {
    "id": "pdf-18-5-defend",
    "target": "Defend",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "advanced",
    "forbidden": [
      "Lawyer",
      "Judge",
      "Stand Up",
      "Justify",
      "Argue",
      "Protect"
    ],
    "explanation": "Describe Defend by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 18"
  },
  {
    "id": "pdf-18-6-deer",
    "target": "Deer",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "beginner",
    "forbidden": [
      "Antlers",
      "Hunting",
      "Forest",
      "Bambi",
      "Animal",
      "Buck"
    ],
    "explanation": "Describe Deer by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 18"
  },
  {
    "id": "pdf-18-7-zoo",
    "target": "Zoo",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "intermediate",
    "forbidden": [
      "Place",
      "Animals",
      "Tigers",
      "Elephants",
      "Cage",
      "Safari"
    ],
    "explanation": "Describe Zoo by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 18"
  },
  {
    "id": "pdf-18-8-crawl",
    "target": "Crawl",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "advanced",
    "forbidden": [
      "Fours",
      "Baby",
      "Toddler",
      "Hands",
      "Knees",
      "Floor"
    ],
    "explanation": "Describe Crawl by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 18"
  },
  {
    "id": "pdf-19-1-bank",
    "target": "Bank",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "beginner",
    "forbidden": [
      "Robbery",
      "Money",
      "Safe",
      "Deposit",
      "Invest",
      "Teller"
    ],
    "explanation": "Describe Bank by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 19"
  },
  {
    "id": "pdf-19-2-caterpillar",
    "target": "Caterpillar",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "intermediate",
    "forbidden": [
      "Crawl",
      "Insect",
      "Legs",
      "Tree",
      "Butterfly",
      "Cocoon"
    ],
    "explanation": "Describe Caterpillar by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 19"
  },
  {
    "id": "pdf-19-3-pregnant",
    "target": "Pregnant",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "advanced",
    "forbidden": [
      "Baby",
      "Fat",
      "Belly",
      "Life",
      "9 Months",
      "Expecting"
    ],
    "explanation": "Describe Pregnant by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 19"
  },
  {
    "id": "pdf-19-4-towel",
    "target": "Towel",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "beginner",
    "forbidden": [
      "Dry",
      "Dishes",
      "Shower",
      "Soft",
      "Beach",
      "Cloth"
    ],
    "explanation": "Describe Towel by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 19"
  },
  {
    "id": "pdf-19-5-promise",
    "target": "Promise",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "intermediate",
    "forbidden": [
      "Vow",
      "Pledge",
      "Expect",
      "Reassure",
      "Marry",
      "Commitment"
    ],
    "explanation": "Describe Promise by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 19"
  },
  {
    "id": "pdf-19-6-ugly",
    "target": "Ugly",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "advanced",
    "forbidden": [
      "Duck",
      "Beautiful",
      "Hideous",
      "Deformed",
      "Butt",
      "Unattractive"
    ],
    "explanation": "Describe Ugly by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 19"
  },
  {
    "id": "pdf-19-7-stupid",
    "target": "Stupid",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "beginner",
    "forbidden": [
      "Smart",
      "Clever",
      "Dull",
      "Dumb",
      "Intelligent",
      "Ignorant"
    ],
    "explanation": "Describe Stupid by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 19"
  },
  {
    "id": "pdf-19-8-spoon",
    "target": "Spoon",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "intermediate",
    "forbidden": [
      "Fork",
      "Knife",
      "Eating",
      "Soup",
      "metal",
      "Scoop"
    ],
    "explanation": "Describe Spoon by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 19"
  },
  {
    "id": "pdf-20-1-infant",
    "target": "Infant",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "advanced",
    "forbidden": [
      "Baby",
      "Cry",
      "Child",
      "Newborn",
      "Young",
      "Toddler"
    ],
    "explanation": "Describe Infant by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 20"
  },
  {
    "id": "pdf-20-2-paris-france",
    "target": "Paris France",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "beginner",
    "forbidden": [
      "Romance",
      "Shopping",
      "Eiffel",
      "Tower",
      "French",
      "Seine"
    ],
    "explanation": "Describe Paris France by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 20"
  },
  {
    "id": "pdf-20-3-exchange-student",
    "target": "Exchange Student",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "intermediate",
    "forbidden": [
      "Travel",
      "Study",
      "Abroad",
      "Experience",
      "Foreign",
      "Host"
    ],
    "explanation": "Describe Exchange Student by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 20"
  },
  {
    "id": "pdf-20-4-gold",
    "target": "Gold",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "advanced",
    "forbidden": [
      "Silver",
      "Metal",
      "Rich",
      "Money",
      "King",
      "Jewelry"
    ],
    "explanation": "Describe Gold by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 20"
  },
  {
    "id": "pdf-20-5-london",
    "target": "London",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "beginner",
    "forbidden": [
      "Big Ben",
      "England",
      "Europe",
      "Capital",
      "U.K.",
      "Thames"
    ],
    "explanation": "Describe London by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 20"
  },
  {
    "id": "pdf-20-6-camping",
    "target": "Camping",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "intermediate",
    "forbidden": [
      "Tent",
      "Outside",
      "Fire",
      "Roast",
      "Sleep",
      "Campfire"
    ],
    "explanation": "Describe Camping by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 20"
  },
  {
    "id": "pdf-20-7-theater",
    "target": "Theater",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "advanced",
    "forbidden": [
      "Movie",
      "Seats",
      "Popcorn",
      "Cinema",
      "Drama",
      "Stage"
    ],
    "explanation": "Describe Theater by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 20"
  },
  {
    "id": "pdf-20-8-death",
    "target": "Death",
    "theme": "everyday",
    "category": "Classic Taboo 4",
    "level": "beginner",
    "forbidden": [
      "Die",
      "Old",
      "Murder",
      "Cause",
      "Life",
      "Funeral"
    ],
    "explanation": "Describe Death by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 20"
  },
  {
    "id": "pdf-21-1-flag",
    "target": "Flag",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "intermediate",
    "forbidden": [
      "Wave",
      "Fly",
      "Old Glory",
      "Pole",
      "Fabric",
      "Country"
    ],
    "explanation": "Describe Flag by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 21"
  },
  {
    "id": "pdf-21-2-describe",
    "target": "Describe",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "advanced",
    "forbidden": [
      "Talk About",
      "Words",
      "Characteristic",
      "Quality",
      "Depict",
      "Explain"
    ],
    "explanation": "Describe Describe by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 21"
  },
  {
    "id": "pdf-21-3-nan-shan",
    "target": "Nan Shan",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "beginner",
    "forbidden": [
      "Mountain",
      "Yizhou",
      "Climb",
      "Snake",
      "South",
      "China"
    ],
    "explanation": "Describe Nan Shan by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 21"
  },
  {
    "id": "pdf-21-4-fly",
    "target": "Fly",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "intermediate",
    "forbidden": [
      "Wings",
      "Bird",
      "Airplane",
      "Insect",
      "Bee",
      "Air"
    ],
    "explanation": "Describe Fly by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 21"
  },
  {
    "id": "pdf-21-5-knee",
    "target": "Knee",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "advanced",
    "forbidden": [
      "Bend",
      "Joint",
      "Leg",
      "Move",
      "Cap",
      "Kneecap"
    ],
    "explanation": "Describe Knee by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 21"
  },
  {
    "id": "pdf-21-6-web",
    "target": "Web",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "beginner",
    "forbidden": [
      "Internet",
      "Spider",
      "World",
      "Wide",
      "Net",
      "Network"
    ],
    "explanation": "Describe Web by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 21"
  },
  {
    "id": "pdf-21-7-toothbrush",
    "target": "Toothbrush",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "intermediate",
    "forbidden": [
      "Teeth",
      "Paste",
      "Clean",
      "Hygiene",
      "Rub",
      "Dentist"
    ],
    "explanation": "Describe Toothbrush by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 21"
  },
  {
    "id": "pdf-21-8-worm",
    "target": "Worm",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "advanced",
    "forbidden": [
      "Crawl",
      "Animal",
      "Wriggle",
      "Slimy",
      "Rain",
      "Soil"
    ],
    "explanation": "Describe Worm by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 21"
  },
  {
    "id": "pdf-22-1-machine",
    "target": "Machine",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "beginner",
    "forbidden": [
      "Parts",
      "Device",
      "Metal",
      "Power",
      "Cog",
      "Equipment"
    ],
    "explanation": "Describe Machine by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 22"
  },
  {
    "id": "pdf-22-2-spiderman",
    "target": "Spiderman",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "intermediate",
    "forbidden": [
      "Fly",
      "Peter",
      "parker",
      "Hero",
      "Super",
      "Marvel"
    ],
    "explanation": "Describe Spiderman by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 22"
  },
  {
    "id": "pdf-22-3-waitress",
    "target": "Waitress",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "advanced",
    "forbidden": [
      "Service",
      "Restaurant",
      "Food",
      "Bring",
      "Helper",
      "Server"
    ],
    "explanation": "Describe Waitress by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 22"
  },
  {
    "id": "pdf-22-4-wash",
    "target": "Wash",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "beginner",
    "forbidden": [
      "Clean",
      "Shower",
      "Dishes",
      "Hair",
      "Laundry",
      "Soap"
    ],
    "explanation": "Describe Wash by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 22"
  },
  {
    "id": "pdf-22-5-biology",
    "target": "Biology",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "intermediate",
    "forbidden": [
      "Science",
      "Subject",
      "Life",
      "School",
      "Chemistry",
      "Organism"
    ],
    "explanation": "Describe Biology by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 22"
  },
  {
    "id": "pdf-22-6-chemistry",
    "target": "Chemistry",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "advanced",
    "forbidden": [
      "Physics",
      "Chemicals",
      "School",
      "Science",
      "Subject",
      "Lab"
    ],
    "explanation": "Describe Chemistry by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 22"
  },
  {
    "id": "pdf-22-7-history",
    "target": "History",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "beginner",
    "forbidden": [
      "Politics",
      "Past",
      "Events",
      "Finished",
      "Happen",
      "Timeline"
    ],
    "explanation": "Describe History by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 22"
  },
  {
    "id": "pdf-22-8-magazine",
    "target": "Magazine",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "intermediate",
    "forbidden": [
      "Pages",
      "Book",
      "Entertain",
      "News",
      "Read",
      "Article"
    ],
    "explanation": "Describe Magazine by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 22"
  },
  {
    "id": "pdf-23-1-unfair",
    "target": "Unfair",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "advanced",
    "forbidden": [
      "Unjust",
      "Fair",
      "Equal",
      "Just",
      "Unreasonable",
      "Biased"
    ],
    "explanation": "Describe Unfair by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 23"
  },
  {
    "id": "pdf-23-2-cd",
    "target": "CD",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "beginner",
    "forbidden": [
      "Disc",
      "Music",
      "Listen",
      "Play",
      "Computer",
      "Album"
    ],
    "explanation": "Describe CD by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 23"
  },
  {
    "id": "pdf-23-3-immediately",
    "target": "Immediately",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "intermediate",
    "forbidden": [
      "Fast",
      "Now",
      "Delay",
      "Rapid",
      "Soon",
      "Instantly"
    ],
    "explanation": "Describe Immediately by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 23"
  },
  {
    "id": "pdf-23-4-danger",
    "target": "Danger",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "advanced",
    "forbidden": [
      "Safe",
      "Harm",
      "Injury",
      "Protect",
      "Avoid",
      "Risk"
    ],
    "explanation": "Describe Danger by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 23"
  },
  {
    "id": "pdf-23-5-bed-blanket",
    "target": "Bed Blanket",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "beginner",
    "forbidden": [
      "Bed",
      "Pillow",
      "Quilt",
      "Soft",
      "Warm",
      "Duvet"
    ],
    "explanation": "Describe Bed Blanket by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 23"
  },
  {
    "id": "pdf-23-6-ice",
    "target": "Ice",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "intermediate",
    "forbidden": [
      "Cold",
      "Solid",
      "Water",
      "Freezer",
      "Skate",
      "Frozen"
    ],
    "explanation": "Describe Ice by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 23"
  },
  {
    "id": "pdf-23-7-salt",
    "target": "Salt",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "advanced",
    "forbidden": [
      "White",
      "Sweet",
      "Popcorn",
      "Cooking",
      "Flavor",
      "Sodium"
    ],
    "explanation": "Describe Salt by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 23"
  },
  {
    "id": "pdf-23-8-stand",
    "target": "Stand",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "beginner",
    "forbidden": [
      "Sit",
      "Floor",
      "Feet",
      "Up",
      "Take",
      "Upright"
    ],
    "explanation": "Describe Stand by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 23"
  },
  {
    "id": "pdf-24-1-bull",
    "target": "Bull",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "intermediate",
    "forbidden": [
      "Ride",
      "Red",
      "Male",
      "Horns",
      "Charge",
      "Cattle"
    ],
    "explanation": "Describe Bull by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 24"
  },
  {
    "id": "pdf-24-2-peaceful",
    "target": "Peaceful",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "advanced",
    "forbidden": [
      "Harmony",
      "Calm",
      "Quiet",
      "Tranquil",
      "Violent",
      "Serene"
    ],
    "explanation": "Describe Peaceful by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 24"
  },
  {
    "id": "pdf-24-3-normal",
    "target": "Normal",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "beginner",
    "forbidden": [
      "Strange",
      "Standard",
      "Typical",
      "Status Quo",
      "Weird",
      "Usual"
    ],
    "explanation": "Describe Normal by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 24"
  },
  {
    "id": "pdf-24-4-original",
    "target": "Original",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "intermediate",
    "forbidden": [
      "First",
      "Unique",
      "Special",
      "Standard",
      "Early",
      "Authentic"
    ],
    "explanation": "Describe Original by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 24"
  },
  {
    "id": "pdf-24-5-magic",
    "target": "Magic",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "advanced",
    "forbidden": [
      "Wizard",
      "Witch",
      "Power",
      "Trick",
      "Show",
      "Illusion"
    ],
    "explanation": "Describe Magic by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 24"
  },
  {
    "id": "pdf-24-6-naughty",
    "target": "Naughty",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "beginner",
    "forbidden": [
      "Bad",
      "Behavior",
      "Good",
      "Rude",
      "Disobedient",
      "Mischief"
    ],
    "explanation": "Describe Naughty by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 24"
  },
  {
    "id": "pdf-24-7-rescue",
    "target": "Rescue",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "intermediate",
    "forbidden": [
      "Save",
      "Hero",
      "Danger",
      "Safe",
      "Help",
      "Emergency"
    ],
    "explanation": "Describe Rescue by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 24"
  },
  {
    "id": "pdf-24-8-match",
    "target": "Match",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "advanced",
    "forbidden": [
      "Fire",
      "Strike",
      "Pair",
      "Together",
      "Equal",
      "Game"
    ],
    "explanation": "Describe Match by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 24"
  },
  {
    "id": "pdf-25-1-hippo",
    "target": "Hippo",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "beginner",
    "forbidden": [
      "Fat",
      "Animal",
      "Africa",
      "Large",
      "River",
      "Hippopotamus"
    ],
    "explanation": "Describe Hippo by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 25"
  },
  {
    "id": "pdf-25-2-fairy-tale",
    "target": "Fairy Tale",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "intermediate",
    "forbidden": [
      "Prince",
      "Princess",
      "Magic",
      "Queen",
      "Story",
      "Once Upon"
    ],
    "explanation": "Describe Fairy Tale by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 25"
  },
  {
    "id": "pdf-25-3-literature",
    "target": "Literature",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "advanced",
    "forbidden": [
      "Works",
      "American",
      "British",
      "Books",
      "Written",
      "Poetry"
    ],
    "explanation": "Describe Literature by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 25"
  },
  {
    "id": "pdf-25-4-globe",
    "target": "Globe",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "beginner",
    "forbidden": [
      "Earth",
      "World",
      "Model",
      "Geography",
      "Oceans",
      "Sphere"
    ],
    "explanation": "Describe Globe by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 25"
  },
  {
    "id": "pdf-25-5-cookbook",
    "target": "Cookbook",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "intermediate",
    "forbidden": [
      "Food",
      "How To",
      "Kitchen",
      "Manual",
      "Guide",
      "Recipe"
    ],
    "explanation": "Describe Cookbook by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 25"
  },
  {
    "id": "pdf-25-6-continent",
    "target": "Continent",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "advanced",
    "forbidden": [
      "Ocean",
      "Asia",
      "Land",
      "Seven",
      "Earth",
      "Map"
    ],
    "explanation": "Describe Continent by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 25"
  },
  {
    "id": "pdf-25-7-director",
    "target": "Director",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "beginner",
    "forbidden": [
      "Movie",
      "Producer",
      "In Charge",
      "Supervise",
      "Set",
      "Film"
    ],
    "explanation": "Describe Director by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 25"
  },
  {
    "id": "pdf-25-8-advice",
    "target": "Advice",
    "theme": "everyday",
    "category": "Classic Taboo 5",
    "level": "intermediate",
    "forbidden": [
      "Guide",
      "Wise",
      "Recommend",
      "Next Step",
      "Help",
      "Suggestion"
    ],
    "explanation": "Describe Advice by explaining what it is, where it appears, what it does, or how it is used without saying the forbidden words.",
    "source": "Attached Taboo PDF, page 25"
  },
  {
    "id": "esko-product-01-automation-engine",
    "target": "Automation Engine",
    "theme": "technical",
    "category": "Esko Products",
    "level": "beginner",
    "forbidden": [
      "Workflow",
      "Tasks",
      "Tickets",
      "Pilot",
      "Server",
      "Automation"
    ],
    "explanation": "Describe Automation Engine by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-02-webcenter",
    "target": "WebCenter",
    "theme": "technical",
    "category": "Esko Products",
    "level": "intermediate",
    "forbidden": [
      "Projects",
      "Approval",
      "Assets",
      "Workflow",
      "Browser",
      "Collaboration"
    ],
    "explanation": "Describe WebCenter by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-03-artpro",
    "target": "ArtPro+",
    "theme": "technical",
    "category": "Esko Products",
    "level": "advanced",
    "forbidden": [
      "PDF",
      "Prepress",
      "Editor",
      "Packaging",
      "Separations",
      "Trapping"
    ],
    "explanation": "Describe ArtPro+ by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-04-artioscad",
    "target": "ArtiosCAD",
    "theme": "technical",
    "category": "Esko Products",
    "level": "beginner",
    "forbidden": [
      "Structural",
      "CAD",
      "Packaging",
      "Design",
      "Dieline",
      "3D"
    ],
    "explanation": "Describe ArtiosCAD by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-05-studio",
    "target": "Studio",
    "theme": "technical",
    "category": "Esko Products",
    "level": "intermediate",
    "forbidden": [
      "3D",
      "Illustrator",
      "Packaging",
      "Mockup",
      "Design",
      "Visualize"
    ],
    "explanation": "Describe Studio by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-06-deskpack",
    "target": "DeskPack",
    "theme": "technical",
    "category": "Esko Products",
    "level": "advanced",
    "forbidden": [
      "Illustrator",
      "Plugins",
      "Prepress",
      "Adobe",
      "Packaging",
      "Tools"
    ],
    "explanation": "Describe DeskPack by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-07-cape-pack",
    "target": "Cape Pack",
    "theme": "technical",
    "category": "Esko Products",
    "level": "beginner",
    "forbidden": [
      "Pallet",
      "Carton",
      "Logistics",
      "Load",
      "Optimize",
      "Shipping"
    ],
    "explanation": "Describe Cape Pack by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-08-phoenix",
    "target": "Phoenix",
    "theme": "technical",
    "category": "Esko Products",
    "level": "intermediate",
    "forbidden": [
      "Imposition",
      "Planning",
      "Layout",
      "Nesting",
      "Estimating",
      "Production"
    ],
    "explanation": "Describe Phoenix by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-09-imaging-engine",
    "target": "Imaging Engine",
    "theme": "technical",
    "category": "Esko Products",
    "level": "advanced",
    "forbidden": [
      "RIP",
      "Renderer",
      "Output",
      "PDF",
      "Automation",
      "Separation"
    ],
    "explanation": "Describe Imaging Engine by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-10-pack-proof",
    "target": "Pack Proof",
    "theme": "technical",
    "category": "Esko Products",
    "level": "beginner",
    "forbidden": [
      "Proofing",
      "Color",
      "Contract",
      "Inkjet",
      "Simulation",
      "Accurate"
    ],
    "explanation": "Describe Pack Proof by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-11-equinox",
    "target": "Equinox",
    "theme": "technical",
    "category": "Esko Products",
    "level": "intermediate",
    "forbidden": [
      "ECG",
      "Gamut",
      "Inks",
      "Color",
      "Separation",
      "CMYK"
    ],
    "explanation": "Describe Equinox by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-12-share-approve",
    "target": "Share&Approve",
    "theme": "technical",
    "category": "Esko Products",
    "level": "advanced",
    "forbidden": [
      "Review",
      "Browser",
      "Annotation",
      "Approval",
      "Artwork",
      "Collaboration"
    ],
    "explanation": "Describe Share&Approve by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-13-mediabeacon",
    "target": "MediaBeacon",
    "theme": "technical",
    "category": "Esko Products",
    "level": "beginner",
    "forbidden": [
      "DAM",
      "Assets",
      "Metadata",
      "Library",
      "Search",
      "Brand"
    ],
    "explanation": "Describe MediaBeacon by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-14-color-pilot",
    "target": "Color Pilot",
    "theme": "technical",
    "category": "Esko Products",
    "level": "intermediate",
    "forbidden": [
      "Profiling",
      "Calibration",
      "Color",
      "Press",
      "Spectral",
      "Accuracy"
    ],
    "explanation": "Describe Color Pilot by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-15-curve-pilot",
    "target": "Curve Pilot",
    "theme": "technical",
    "category": "Esko Products",
    "level": "advanced",
    "forbidden": [
      "Dot Gain",
      "Curve",
      "Compensation",
      "Press",
      "Calibration",
      "Flexo"
    ],
    "explanation": "Describe Curve Pilot by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-16-printcontrol-wizard",
    "target": "PrintControl Wizard",
    "theme": "technical",
    "category": "Esko Products",
    "level": "beginner",
    "forbidden": [
      "Screening",
      "Plate",
      "Press",
      "Flexo",
      "Quality",
      "Setup"
    ],
    "explanation": "Describe PrintControl Wizard by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-17-print-clone",
    "target": "Print Clone",
    "theme": "technical",
    "category": "Esko Products",
    "level": "intermediate",
    "forbidden": [
      "Match",
      "Press",
      "Color",
      "Profile",
      "Reproduction",
      "Measurement"
    ],
    "explanation": "Describe Print Clone by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-18-inkwizard",
    "target": "InkWizard",
    "theme": "technical",
    "category": "Esko Products",
    "level": "advanced",
    "forbidden": [
      "Ink",
      "Separation",
      "Optimize",
      "Color",
      "Cost",
      "Coverage"
    ],
    "explanation": "Describe InkWizard by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-19-flexo-tools",
    "target": "Flexo Tools",
    "theme": "technical",
    "category": "Esko Products",
    "level": "beginner",
    "forbidden": [
      "Plate",
      "Distortion",
      "Screening",
      "Trapping",
      "Prepress",
      "Flexography"
    ],
    "explanation": "Describe Flexo Tools by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-20-plato",
    "target": "Plato",
    "theme": "technical",
    "category": "Esko Products",
    "level": "intermediate",
    "forbidden": [
      "Step Repeat",
      "Layout",
      "Plate",
      "Packaging",
      "Station",
      "CAD"
    ],
    "explanation": "Describe Plato by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-21-packedge",
    "target": "PackEdge",
    "theme": "technical",
    "category": "Esko Products",
    "level": "advanced",
    "forbidden": [
      "Editor",
      "Packaging",
      "Prepress",
      "Graphics",
      "Legacy",
      "Production"
    ],
    "explanation": "Describe PackEdge by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-22-powerlayout",
    "target": "PowerLayout",
    "theme": "technical",
    "category": "Esko Products",
    "level": "beginner",
    "forbidden": [
      "Imposition",
      "Repetition",
      "Layout",
      "Nesting",
      "Sheet",
      "Labels"
    ],
    "explanation": "Describe PowerLayout by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-23-flexrip",
    "target": "FlexRip",
    "theme": "technical",
    "category": "Esko Products",
    "level": "intermediate",
    "forbidden": [
      "RIP",
      "Output",
      "Renderer",
      "Legacy",
      "Queue",
      "Imaging"
    ],
    "explanation": "Describe FlexRip by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-24-nexus",
    "target": "Nexus",
    "theme": "technical",
    "category": "Esko Products",
    "level": "advanced",
    "forbidden": [
      "Workflow",
      "Processor",
      "RIP",
      "Module",
      "Legacy",
      "Automation"
    ],
    "explanation": "Describe Nexus by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-25-odystar",
    "target": "Odystar",
    "theme": "technical",
    "category": "Esko Products",
    "level": "beginner",
    "forbidden": [
      "Workflow",
      "Mac",
      "Automation",
      "Legacy",
      "PDF",
      "Tasks"
    ],
    "explanation": "Describe Odystar by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-26-cdi-crystal",
    "target": "CDI Crystal",
    "theme": "technical",
    "category": "Esko Products",
    "level": "intermediate",
    "forbidden": [
      "Imager",
      "Plate",
      "Flexo",
      "Laser",
      "Drum",
      "Exposure"
    ],
    "explanation": "Describe CDI Crystal by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-27-xps-crystal",
    "target": "XPS Crystal",
    "theme": "technical",
    "category": "Esko Products",
    "level": "advanced",
    "forbidden": [
      "Exposure",
      "UV LED",
      "Plate",
      "Flexo",
      "Consistency",
      "Curing"
    ],
    "explanation": "Describe XPS Crystal by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-28-cdi-spark",
    "target": "CDI Spark",
    "theme": "technical",
    "category": "Esko Products",
    "level": "beginner",
    "forbidden": [
      "Imager",
      "Flexo",
      "Plate",
      "Laser",
      "Compact",
      "Digital"
    ],
    "explanation": "Describe CDI Spark by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-29-cdi-quartz",
    "target": "CDI Quartz",
    "theme": "technical",
    "category": "Esko Products",
    "level": "intermediate",
    "forbidden": [
      "Imager",
      "Flexo",
      "Plate",
      "Quartz",
      "Resolution",
      "Laser"
    ],
    "explanation": "Describe CDI Quartz by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-30-crystalclean",
    "target": "CrystalClean",
    "theme": "technical",
    "category": "Esko Products",
    "level": "advanced",
    "forbidden": [
      "Platemaking",
      "Solvent",
      "Washout",
      "Plate",
      "Flexo",
      "Processing"
    ],
    "explanation": "Describe CrystalClean by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-31-pixel",
    "target": "Pixel+",
    "theme": "technical",
    "category": "Esko Products",
    "level": "beginner",
    "forbidden": [
      "Screening",
      "Microcells",
      "Plate",
      "Flexo",
      "Surface",
      "Ink"
    ],
    "explanation": "Describe Pixel+ by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-32-hd-flexo",
    "target": "HD Flexo",
    "theme": "technical",
    "category": "Esko Products",
    "level": "intermediate",
    "forbidden": [
      "Screening",
      "Plate",
      "Quality",
      "Resolution",
      "Print",
      "Flexography"
    ],
    "explanation": "Describe HD Flexo by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-33-crystal-screening",
    "target": "Crystal Screening",
    "theme": "technical",
    "category": "Esko Products",
    "level": "advanced",
    "forbidden": [
      "Screening",
      "Plate",
      "Flexo",
      "Pattern",
      "Quality",
      "Surface"
    ],
    "explanation": "Describe Crystal Screening by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-34-grapholas",
    "target": "Grapholas",
    "theme": "technical",
    "category": "Esko Products",
    "level": "beginner",
    "forbidden": [
      "CDI",
      "Software",
      "Imager",
      "Plate",
      "Queue",
      "Flexo"
    ],
    "explanation": "Describe Grapholas by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-35-merge-graphics",
    "target": "Merge Graphics",
    "theme": "technical",
    "category": "Esko Products",
    "level": "intermediate",
    "forbidden": [
      "Workflow",
      "Labels",
      "Prepress",
      "Automation",
      "Step Repeat",
      "Variable"
    ],
    "explanation": "Describe Merge Graphics by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-36-my-esko",
    "target": "My Esko",
    "theme": "technical",
    "category": "Esko Products",
    "level": "advanced",
    "forbidden": [
      "Portal",
      "Account",
      "Downloads",
      "Licenses",
      "Support",
      "Customer"
    ],
    "explanation": "Describe My Esko by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-37-esko-cloud",
    "target": "Esko Cloud",
    "theme": "technical",
    "category": "Esko Products",
    "level": "beginner",
    "forbidden": [
      "Hosted",
      "SaaS",
      "Storage",
      "Access",
      "Subscription",
      "Platform"
    ],
    "explanation": "Describe Esko Cloud by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-38-webcenter-go",
    "target": "WebCenter Go",
    "theme": "technical",
    "category": "Esko Products",
    "level": "intermediate",
    "forbidden": [
      "Proofing",
      "Browser",
      "Review",
      "Artwork",
      "Collaboration",
      "Cloud"
    ],
    "explanation": "Describe WebCenter Go by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-39-verify-comply",
    "target": "Verify Comply",
    "theme": "technical",
    "category": "Esko Products",
    "level": "advanced",
    "forbidden": [
      "Compliance",
      "Artwork",
      "AI",
      "Barcode",
      "Copy",
      "Validation"
    ],
    "explanation": "Describe Verify Comply by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-40-avt-helios",
    "target": "AVT Helios",
    "theme": "technical",
    "category": "Esko Products",
    "level": "beginner",
    "forbidden": [
      "Inspection",
      "Print",
      "Defects",
      "Labels",
      "Camera",
      "Quality"
    ],
    "explanation": "Describe AVT Helios by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-41-avt-apollo",
    "target": "AVT Apollo",
    "theme": "technical",
    "category": "Esko Products",
    "level": "intermediate",
    "forbidden": [
      "Inspection",
      "Print",
      "Defects",
      "Camera",
      "Quality",
      "Workflow"
    ],
    "explanation": "Describe AVT Apollo by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-42-avt-argus",
    "target": "AVT Argus",
    "theme": "technical",
    "category": "Esko Products",
    "level": "advanced",
    "forbidden": [
      "Inspection",
      "Web",
      "Defects",
      "Camera",
      "Print",
      "Quality"
    ],
    "explanation": "Describe AVT Argus by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-43-avt-spectralab",
    "target": "AVT SpectraLab",
    "theme": "technical",
    "category": "Esko Products",
    "level": "beginner",
    "forbidden": [
      "Color",
      "Spectral",
      "Measurement",
      "Inline",
      "Press",
      "Quality"
    ],
    "explanation": "Describe AVT SpectraLab by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-44-avt-icenter",
    "target": "AVT iCenter",
    "theme": "technical",
    "category": "Esko Products",
    "level": "intermediate",
    "forbidden": [
      "Analytics",
      "Inspection",
      "Data",
      "Dashboard",
      "Quality",
      "Production"
    ],
    "explanation": "Describe AVT iCenter by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-45-automation-hub",
    "target": "Automation Hub",
    "theme": "technical",
    "category": "Esko Products",
    "level": "advanced",
    "forbidden": [
      "Dashboard",
      "Workflow",
      "Analytics",
      "Cloud",
      "Automation",
      "Insights"
    ],
    "explanation": "Describe Automation Hub by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-46-platepatcher",
    "target": "PlatePatcher",
    "theme": "technical",
    "category": "Esko Products",
    "level": "beginner",
    "forbidden": [
      "Mounting",
      "Plate",
      "Flexo",
      "Sleeve",
      "Register",
      "Patch"
    ],
    "explanation": "Describe PlatePatcher by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-47-dynamic-content",
    "target": "Dynamic Content",
    "theme": "technical",
    "category": "Esko Products",
    "level": "intermediate",
    "forbidden": [
      "Text",
      "XML",
      "Illustrator",
      "Link",
      "Update",
      "Artwork"
    ],
    "explanation": "Describe Dynamic Content by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-48-dynamic-barcodes",
    "target": "Dynamic Barcodes",
    "theme": "technical",
    "category": "Esko Products",
    "level": "advanced",
    "forbidden": [
      "Barcode",
      "Illustrator",
      "GS1",
      "Code",
      "Packaging",
      "Variable"
    ],
    "explanation": "Describe Dynamic Barcodes by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-49-dynamic-marks",
    "target": "Dynamic Marks",
    "theme": "technical",
    "category": "Esko Products",
    "level": "beginner",
    "forbidden": [
      "Marks",
      "Illustrator",
      "Production",
      "Artwork",
      "Registration",
      "Variable"
    ],
    "explanation": "Describe Dynamic Marks by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "esko-product-50-store-visualizer",
    "target": "Store Visualizer",
    "theme": "technical",
    "category": "Esko Products",
    "level": "intermediate",
    "forbidden": [
      "Retail",
      "3D",
      "Shelf",
      "Packaging",
      "Mockup",
      "Display"
    ],
    "explanation": "Describe Store Visualizer by explaining its role in an Esko workflow, the users it helps, and the outcome it supports without saying the forbidden words.",
    "source": "Esko product terminology"
  },
  {
    "id": "technical-01-incident",
    "target": "Incident",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "beginner",
    "forbidden": [
      "Issue",
      "Outage",
      "Ticket",
      "Unexpected",
      "Impact",
      "Report"
    ],
    "explanation": "Describe Incident in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-02-service-request",
    "target": "Service Request",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "intermediate",
    "forbidden": [
      "Ask",
      "Access",
      "Ticket",
      "Standard",
      "Fulfil",
      "User"
    ],
    "explanation": "Describe Service Request in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-03-troubleshooting",
    "target": "Troubleshooting",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "advanced",
    "forbidden": [
      "Diagnose",
      "Problem",
      "Steps",
      "Test",
      "Fix",
      "Investigate"
    ],
    "explanation": "Describe Troubleshooting in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-04-root-cause",
    "target": "Root Cause",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "beginner",
    "forbidden": [
      "Reason",
      "Underlying",
      "Analysis",
      "Problem",
      "Origin",
      "Why"
    ],
    "explanation": "Describe Root Cause in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-05-workaround",
    "target": "Workaround",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "intermediate",
    "forbidden": [
      "Temporary",
      "Alternative",
      "Bypass",
      "Issue",
      "Fix",
      "Method"
    ],
    "explanation": "Describe Workaround in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-06-resolution",
    "target": "Resolution",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "advanced",
    "forbidden": [
      "Solved",
      "Fix",
      "Answer",
      "Close",
      "Outcome",
      "Problem"
    ],
    "explanation": "Describe Resolution in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-07-escalation",
    "target": "Escalation",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "beginner",
    "forbidden": [
      "Higher Level",
      "Transfer",
      "Priority",
      "Expert",
      "Unresolved",
      "Manager"
    ],
    "explanation": "Describe Escalation in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-08-priority",
    "target": "Priority",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "intermediate",
    "forbidden": [
      "Urgency",
      "Order",
      "High",
      "Queue",
      "Important",
      "Impact"
    ],
    "explanation": "Describe Priority in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-09-severity",
    "target": "Severity",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "advanced",
    "forbidden": [
      "Impact",
      "Critical",
      "Level",
      "Damage",
      "Major",
      "Minor"
    ],
    "explanation": "Describe Severity in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-10-sla",
    "target": "SLA",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "beginner",
    "forbidden": [
      "Service Level",
      "Response Time",
      "Contract",
      "Target",
      "Deadline",
      "Commitment"
    ],
    "explanation": "Describe SLA in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-11-reproduction",
    "target": "Reproduction",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "intermediate",
    "forbidden": [
      "Repeat",
      "Actions",
      "Sequence",
      "Issue",
      "Instructions",
      "Observe"
    ],
    "explanation": "Describe Reproduction in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-12-expected-result",
    "target": "Expected Result",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "advanced",
    "forbidden": [
      "Should",
      "Normal",
      "Requirement",
      "Outcome",
      "Design",
      "Result"
    ],
    "explanation": "Describe Expected Result in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-13-actual-result",
    "target": "Actual Result",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "beginner",
    "forbidden": [
      "Observed",
      "Happened",
      "Result",
      "Unexpected",
      "Current",
      "Outcome"
    ],
    "explanation": "Describe Actual Result in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-14-error-message",
    "target": "Error Message",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "intermediate",
    "forbidden": [
      "Warning",
      "Text",
      "Code",
      "Popup",
      "Problem",
      "Screen"
    ],
    "explanation": "Describe Error Message in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-15-log-file",
    "target": "Log File",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "advanced",
    "forbidden": [
      "Entries",
      "Record",
      "Events",
      "Text",
      "Diagnostic",
      "Timestamp"
    ],
    "explanation": "Describe Log File in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-16-diagnostics",
    "target": "Diagnostics",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "beginner",
    "forbidden": [
      "Analysis",
      "System",
      "Details",
      "Health",
      "Generate",
      "Troubleshoot"
    ],
    "explanation": "Describe Diagnostics in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-17-remote-session",
    "target": "Remote Session",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "intermediate",
    "forbidden": [
      "Connect",
      "Screen Share",
      "Control",
      "Support",
      "Computer",
      "Online"
    ],
    "explanation": "Describe Remote Session in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-18-permissions",
    "target": "Permissions",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "advanced",
    "forbidden": [
      "Rights",
      "Allow",
      "Denied",
      "Authorisation",
      "Role",
      "Security"
    ],
    "explanation": "Describe Permissions in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-19-user-account",
    "target": "User Account",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "beginner",
    "forbidden": [
      "Login",
      "Profile",
      "Username",
      "Password",
      "Identity",
      "Access"
    ],
    "explanation": "Describe User Account in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-20-license-key",
    "target": "License Key",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "intermediate",
    "forbidden": [
      "Activation",
      "Code",
      "Product",
      "Entitlement",
      "Serial",
      "Software"
    ],
    "explanation": "Describe License Key in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-21-product-version",
    "target": "Product Version",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "advanced",
    "forbidden": [
      "Release",
      "Build",
      "Number",
      "Edition",
      "Update",
      "About"
    ],
    "explanation": "Describe Product Version in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-22-compatibility",
    "target": "Compatibility",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "beginner",
    "forbidden": [
      "Works With",
      "Supported",
      "Version",
      "Operating System",
      "Match",
      "Requirement"
    ],
    "explanation": "Describe Compatibility in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-23-configuration",
    "target": "Configuration",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "intermediate",
    "forbidden": [
      "Settings",
      "Options",
      "Setup",
      "Parameters",
      "Change",
      "Environment"
    ],
    "explanation": "Describe Configuration in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-24-installation",
    "target": "Installation",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "advanced",
    "forbidden": [
      "Setup",
      "Install",
      "Software",
      "Computer",
      "Wizard",
      "Deploy"
    ],
    "explanation": "Describe Installation in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-25-uninstallation",
    "target": "Uninstallation",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "beginner",
    "forbidden": [
      "Remove",
      "Software",
      "Delete",
      "Program",
      "Computer",
      "Cleanup"
    ],
    "explanation": "Describe Uninstallation in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-26-restart",
    "target": "Restart",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "intermediate",
    "forbidden": [
      "Reboot",
      "Power",
      "Again",
      "Computer",
      "Close",
      "Start"
    ],
    "explanation": "Describe Restart in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-27-reset",
    "target": "Reset",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "advanced",
    "forbidden": [
      "Default",
      "Clear",
      "Restore",
      "Settings",
      "Password",
      "Start Over"
    ],
    "explanation": "Describe Reset in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-28-restore-point",
    "target": "Restore Point",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "beginner",
    "forbidden": [
      "Recovery",
      "Earlier",
      "System",
      "Snapshot",
      "Undo",
      "Windows"
    ],
    "explanation": "Describe Restore Point in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-29-network",
    "target": "Network",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "intermediate",
    "forbidden": [
      "Internet",
      "Online",
      "Cable",
      "Wi-Fi",
      "Link",
      "Communicate"
    ],
    "explanation": "Describe Network in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-30-latency",
    "target": "Latency",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "advanced",
    "forbidden": [
      "Delay",
      "Slow",
      "Network",
      "Response",
      "Milliseconds",
      "Lag"
    ],
    "explanation": "Describe Latency in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-31-timeout",
    "target": "Timeout",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "beginner",
    "forbidden": [
      "Expired",
      "Wait",
      "Limit",
      "Session",
      "Response",
      "Delay"
    ],
    "explanation": "Describe Timeout in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-32-crash",
    "target": "Crash",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "intermediate",
    "forbidden": [
      "Close",
      "Unexpected",
      "Application",
      "Stop",
      "Error",
      "Fail"
    ],
    "explanation": "Describe Crash in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-33-freeze",
    "target": "Freeze",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "advanced",
    "forbidden": [
      "Unresponsive",
      "Stuck",
      "Screen",
      "Hang",
      "Click",
      "Stop"
    ],
    "explanation": "Describe Freeze in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-34-data-loss",
    "target": "Data Loss",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "beginner",
    "forbidden": [
      "Missing",
      "Deleted",
      "Information",
      "Recovery",
      "Backup",
      "Gone"
    ],
    "explanation": "Describe Data Loss in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-35-corrupt-file",
    "target": "Corrupt File",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "intermediate",
    "forbidden": [
      "Damaged",
      "Cannot Open",
      "Invalid",
      "Repair",
      "Data",
      "Broken"
    ],
    "explanation": "Describe Corrupt File in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-36-duplicate-record",
    "target": "Duplicate Record",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "advanced",
    "forbidden": [
      "Copy",
      "Repeated",
      "Entry",
      "Same",
      "Database",
      "Remove"
    ],
    "explanation": "Describe Duplicate Record in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-37-missing-feature",
    "target": "Missing Feature",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "beginner",
    "forbidden": [
      "Absent",
      "Option",
      "Button",
      "Unavailable",
      "Version",
      "Function"
    ],
    "explanation": "Describe Missing Feature in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-38-known-issue",
    "target": "Known Issue",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "intermediate",
    "forbidden": [
      "Documented",
      "Bug",
      "Existing",
      "Problem",
      "Workaround",
      "Recognised"
    ],
    "explanation": "Describe Known Issue in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-39-bug-report",
    "target": "Bug Report",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "advanced",
    "forbidden": [
      "Defect",
      "Ticket",
      "Steps",
      "Developer",
      "Issue",
      "Submit"
    ],
    "explanation": "Describe Bug Report in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-40-feature-request",
    "target": "Feature Request",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "beginner",
    "forbidden": [
      "Enhancement",
      "New",
      "Suggestion",
      "Product",
      "Function",
      "Submit"
    ],
    "explanation": "Describe Feature Request in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-41-knowledge-base",
    "target": "Knowledge Base",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "intermediate",
    "forbidden": [
      "Articles",
      "Documentation",
      "Search",
      "Solutions",
      "Help",
      "Information"
    ],
    "explanation": "Describe Knowledge Base in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-42-ticket-queue",
    "target": "Ticket Queue",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "advanced",
    "forbidden": [
      "Cases",
      "Waiting",
      "Order",
      "Assigned",
      "Support",
      "Backlog"
    ],
    "explanation": "Describe Ticket Queue in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-43-case-owner",
    "target": "Case Owner",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "beginner",
    "forbidden": [
      "Assigned",
      "Responsible",
      "Agent",
      "Ticket",
      "Handle",
      "Person"
    ],
    "explanation": "Describe Case Owner in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-44-handover",
    "target": "Handover",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "intermediate",
    "forbidden": [
      "Transfer",
      "Summary",
      "Next Shift",
      "Details",
      "Case",
      "Colleague"
    ],
    "explanation": "Describe Handover in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-45-customer-impact",
    "target": "Customer Impact",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "advanced",
    "forbidden": [
      "Users",
      "Affected",
      "Business",
      "Problem",
      "Extent",
      "Consequences"
    ],
    "explanation": "Describe Customer Impact in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-46-business-impact",
    "target": "Business Impact",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "beginner",
    "forbidden": [
      "Operations",
      "Revenue",
      "Users",
      "Severity",
      "Downtime",
      "Consequences"
    ],
    "explanation": "Describe Business Impact in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-47-temporary-fix",
    "target": "Temporary Fix",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "intermediate",
    "forbidden": [
      "Short Term",
      "Workaround",
      "Later",
      "Issue",
      "Solution",
      "Permanent"
    ],
    "explanation": "Describe Temporary Fix in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-48-permanent-fix",
    "target": "Permanent Fix",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "advanced",
    "forbidden": [
      "Final",
      "Solution",
      "Long Term",
      "Resolve",
      "Patch",
      "Issue"
    ],
    "explanation": "Describe Permanent Fix in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-49-follow-up",
    "target": "Follow-up",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "beginner",
    "forbidden": [
      "Contact",
      "Later",
      "Check",
      "Update",
      "Customer",
      "Next"
    ],
    "explanation": "Describe Follow-up in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "technical-50-case-closure",
    "target": "Case Closure",
    "theme": "technical",
    "category": "Technical Jargon",
    "level": "intermediate",
    "forbidden": [
      "Resolved",
      "Ticket",
      "End",
      "Confirm",
      "Customer",
      "Close"
    ],
    "explanation": "Describe Case Closure in clear support language, including its impact and the next useful action, without saying the forbidden words.",
    "source": "Technical support terminology"
  },
  {
    "id": "customer-01-launch-failure",
    "target": "Launch Failure",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "beginner",
    "forbidden": [
      "Launch",
      "Start",
      "Click",
      "Error",
      "Crash",
      "Respond"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-02-slow-performance",
    "target": "Slow Performance",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "intermediate",
    "forbidden": [
      "Performance",
      "Delay",
      "Lag",
      "Wait",
      "Speed",
      "Respond"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-03-forgotten-password",
    "target": "Forgotten Password",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "advanced",
    "forbidden": [
      "Reset",
      "Login",
      "Credentials",
      "Remember",
      "Account",
      "Sign In"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-04-frozen-screen",
    "target": "Frozen Screen",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "beginner",
    "forbidden": [
      "Stuck",
      "Respond",
      "Mouse",
      "Keyboard",
      "Restart",
      "Hang"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-05-save-failure",
    "target": "Save Failure",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "intermediate",
    "forbidden": [
      "Document",
      "Disk",
      "Permission",
      "Error",
      "Changes",
      "Storage"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-06-login-failure",
    "target": "Login Failure",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "advanced",
    "forbidden": [
      "Login",
      "Credentials",
      "Account",
      "Password",
      "Access",
      "Authentication"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-07-update-failure",
    "target": "Update Failure",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "beginner",
    "forbidden": [
      "Install",
      "Version",
      "Error",
      "Upgrade",
      "Rollback",
      "Retry"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-08-printer-offline",
    "target": "Printer Offline",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "intermediate",
    "forbidden": [
      "Print",
      "Paper",
      "Queue",
      "Driver",
      "Offline",
      "Device"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-09-feature-loss",
    "target": "Feature Loss",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "advanced",
    "forbidden": [
      "Missing",
      "Button",
      "Option",
      "Version",
      "Menu",
      "Update"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-10-error-alert",
    "target": "Error Alert",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "beginner",
    "forbidden": [
      "Code",
      "Warning",
      "Screenshot",
      "Text",
      "Popup",
      "Problem"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-11-unstable-internet",
    "target": "Unstable Internet",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "intermediate",
    "forbidden": [
      "Network",
      "Wi-Fi",
      "Disconnect",
      "Router",
      "Signal",
      "Online"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-12-deleted-file",
    "target": "Deleted File",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "advanced",
    "forbidden": [
      "Restore",
      "Recycle Bin",
      "Backup",
      "Missing",
      "Recover",
      "Document"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-13-recurring-issue",
    "target": "Recurring Issue",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "beginner",
    "forbidden": [
      "Again",
      "Recurring",
      "Resolved",
      "Repeat",
      "Issue",
      "Previous"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-14-customer-frustration",
    "target": "Customer Frustration",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "intermediate",
    "forbidden": [
      "Upset",
      "Angry",
      "Acknowledge",
      "Listen",
      "Empathy",
      "Calm"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-15-urgent-request",
    "target": "Urgent Request",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "advanced",
    "forbidden": [
      "Urgent",
      "Time",
      "Quick",
      "Deadline",
      "Wait",
      "Priority"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-16-immediate-fix",
    "target": "Immediate Fix",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "beginner",
    "forbidden": [
      "Now",
      "Urgent",
      "Solution",
      "Expectation",
      "Time",
      "Workaround"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-17-escalation-need",
    "target": "Escalation Need",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "intermediate",
    "forbidden": [
      "Higher Level",
      "Expert",
      "Transfer",
      "Unresolved",
      "Priority",
      "Team"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-18-clarification",
    "target": "Clarification",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "advanced",
    "forbidden": [
      "Details",
      "Ask",
      "Question",
      "Clarify",
      "Provide",
      "Investigate"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-19-screenshot",
    "target": "Screenshot",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "beginner",
    "forbidden": [
      "Image",
      "Screen",
      "Capture",
      "Error",
      "Send",
      "Picture"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-20-logs",
    "target": "Logs",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "intermediate",
    "forbidden": [
      "Diagnostic",
      "File",
      "Events",
      "Collect",
      "Send",
      "Records"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-21-restart-advice",
    "target": "Restart Advice",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "advanced",
    "forbidden": [
      "Reboot",
      "Close",
      "Power",
      "Again",
      "Try",
      "Device"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-22-temporary-workaround",
    "target": "Temporary Workaround",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "beginner",
    "forbidden": [
      "Alternative",
      "Temporary",
      "Bypass",
      "Solution",
      "Until",
      "Steps"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-23-pending-fix",
    "target": "Pending Fix",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "intermediate",
    "forbidden": [
      "Wait",
      "Solution",
      "Development",
      "Workaround",
      "Timeline",
      "Expectation"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-24-reproduction-failure",
    "target": "Reproduction Failure",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "advanced",
    "forbidden": [
      "Repeat",
      "Steps",
      "Environment",
      "Happen",
      "Test",
      "Evidence"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-25-expected-behaviour",
    "target": "Expected Behaviour",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "beginner",
    "forbidden": [
      "Expected",
      "Behaviour",
      "Requirement",
      "Feature",
      "Normal",
      "Documentation"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-26-scope-boundary",
    "target": "Scope Boundary",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "intermediate",
    "forbidden": [
      "Unsupported",
      "Responsibility",
      "Team",
      "Service",
      "Boundary",
      "Refer"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-27-legacy-version",
    "target": "Legacy Version",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "advanced",
    "forbidden": [
      "Update",
      "Upgrade",
      "Release",
      "Build",
      "Unsupported",
      "Current"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-28-unsupported-device",
    "target": "Unsupported Device",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "beginner",
    "forbidden": [
      "Compatible",
      "Hardware",
      "Requirements",
      "Approved",
      "Model",
      "Platform"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-29-expired-license",
    "target": "Expired License",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "intermediate",
    "forbidden": [
      "Renew",
      "Activation",
      "Subscription",
      "Date",
      "Access",
      "Entitlement"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-30-locked-account",
    "target": "Locked Account",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "advanced",
    "forbidden": [
      "Login",
      "Attempts",
      "Unlock",
      "Password",
      "Security",
      "Access"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-31-admin-rights",
    "target": "Admin Rights",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "beginner",
    "forbidden": [
      "Permission",
      "Administrator",
      "Access",
      "Install",
      "IT",
      "Privileges"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-32-wrong-file",
    "target": "Wrong File",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "intermediate",
    "forbidden": [
      "Incorrect",
      "Replace",
      "Remove",
      "Attach",
      "Document",
      "Send"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-33-incomplete-download",
    "target": "Incomplete Download",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "advanced",
    "forbidden": [
      "File",
      "Transfer",
      "Retry",
      "Interrupted",
      "Size",
      "Internet"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-34-missing-backup",
    "target": "Missing Backup",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "beginner",
    "forbidden": [
      "Copy",
      "Restore",
      "Storage",
      "Recovery",
      "Data",
      "Unavailable"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-35-incorrect-data",
    "target": "Incorrect Data",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "intermediate",
    "forbidden": [
      "Wrong",
      "Values",
      "Records",
      "Verify",
      "Source",
      "Expected"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-36-blank-page",
    "target": "Blank Page",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "advanced",
    "forbidden": [
      "Website",
      "Browser",
      "Empty",
      "Load",
      "Refresh",
      "White"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-37-unresponsive-button",
    "target": "Unresponsive Button",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "beginner",
    "forbidden": [
      "Click",
      "Respond",
      "Action",
      "Disabled",
      "Interface",
      "Browser"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-38-audio-failure",
    "target": "Audio Failure",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "intermediate",
    "forbidden": [
      "Audio",
      "Speaker",
      "Volume",
      "Mute",
      "Driver",
      "Hear"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-39-camera-detection",
    "target": "Camera Detection",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "advanced",
    "forbidden": [
      "Webcam",
      "Video",
      "Device",
      "Permission",
      "Driver",
      "Meeting"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-40-expired-link",
    "target": "Expired Link",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "beginner",
    "forbidden": [
      "Join",
      "URL",
      "Invitation",
      "Time",
      "New",
      "Session"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-41-missing-email",
    "target": "Missing Email",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "intermediate",
    "forbidden": [
      "Inbox",
      "Spam",
      "Send",
      "Address",
      "Message",
      "Delivery"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-42-large-attachment",
    "target": "Large Attachment",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "advanced",
    "forbidden": [
      "File",
      "Size",
      "Email",
      "Limit",
      "Compress",
      "Upload"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-43-wrong-password",
    "target": "Wrong Password",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "beginner",
    "forbidden": [
      "Credentials",
      "Login",
      "Incorrect",
      "Reset",
      "Account",
      "Attempt"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-44-time-zone",
    "target": "Time Zone",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "intermediate",
    "forbidden": [
      "Clock",
      "Region",
      "Settings",
      "Hour",
      "Location",
      "Date"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-45-date-format",
    "target": "Date Format",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "advanced",
    "forbidden": [
      "Day",
      "Month",
      "Year",
      "Settings",
      "Region",
      "Display"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-46-session-timeout",
    "target": "Session Timeout",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "beginner",
    "forbidden": [
      "Expired",
      "Inactive",
      "Login",
      "Wait",
      "Reconnect",
      "Limit"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-47-approval",
    "target": "Approval",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "intermediate",
    "forbidden": [
      "Permission",
      "Authorise",
      "Manager",
      "Request",
      "Before",
      "Process"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-48-fix-validation",
    "target": "Fix Validation",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "advanced",
    "forbidden": [
      "Verify",
      "Solution",
      "Confirm",
      "Environment",
      "Results",
      "Check"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-49-closure-ready",
    "target": "Closure Ready",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "beginner",
    "forbidden": [
      "Resolved",
      "Confirm",
      "Ticket",
      "Complete",
      "Customer",
      "End"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  },
  {
    "id": "customer-50-follow-up-call",
    "target": "Follow-up Call",
    "theme": "customer",
    "category": "Customer Challenge",
    "level": "intermediate",
    "forbidden": [
      "Contact",
      "Phone",
      "Schedule",
      "Later",
      "Discuss",
      "Customer"
    ],
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation without saying the forbidden words.",
    "source": "Customer support communication scenario"
  }
];

export const BUILT_IN_CARDS = CARD_DATA;

export const THEME_LABELS = { everyday: 'Everyday English', technical: 'Technical Talk', customer: 'Customer Challenge', mixed: 'Mixed Challenge' };

export const DIFFICULTY_LABELS = { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' };

export function forbiddenCount(difficulty) { return ({ beginner: 4, intermediate: 5, advanced: 6 })[difficulty] || 5; }

export function eligibleCards(cards, theme) { return theme === 'mixed' ? cards : cards.filter((card) => card.theme === theme); }
