// 300 corrected built-in coaching cards: six categories × 50 cards.
// Each card has six target-specific forbidden words; difficulty shows the first 4, 5, or 6.

const CARD_DATA = [
  {
    "id": "built-in-1-01-umbrella",
    "target": "Umbrella",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "beginner",
    "forbidden": [
      "Rain",
      "Wet",
      "Weather",
      "Canopy",
      "Handle",
      "Shelter"
    ],
    "explanation": "Describe Umbrella by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-02-backpack",
    "target": "Backpack",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "intermediate",
    "forbidden": [
      "Bag",
      "Shoulder",
      "Books",
      "Carry",
      "Zipper",
      "School"
    ],
    "explanation": "Describe Backpack by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-03-toothbrush",
    "target": "Toothbrush",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "advanced",
    "forbidden": [
      "Teeth",
      "Bristles",
      "Paste",
      "Bathroom",
      "Clean",
      "Dentist"
    ],
    "explanation": "Describe Toothbrush by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-04-alarm-clock",
    "target": "Alarm Clock",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "beginner",
    "forbidden": [
      "Wake",
      "Morning",
      "Ring",
      "Time",
      "Snooze",
      "Bedside"
    ],
    "explanation": "Describe Alarm Clock by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-05-water-bottle",
    "target": "Water Bottle",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "intermediate",
    "forbidden": [
      "Drink",
      "Reusable",
      "Cap",
      "Container",
      "Hydration",
      "Flask"
    ],
    "explanation": "Describe Water Bottle by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-06-scissors",
    "target": "Scissors",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "advanced",
    "forbidden": [
      "Cut",
      "Blades",
      "Sharp",
      "Paper",
      "Handle",
      "Snip"
    ],
    "explanation": "Describe Scissors by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-07-mirror",
    "target": "Mirror",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "beginner",
    "forbidden": [
      "Reflection",
      "Glass",
      "Face",
      "Look",
      "Image",
      "Bathroom"
    ],
    "explanation": "Describe Mirror by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-08-key",
    "target": "Key",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "intermediate",
    "forbidden": [
      "Lock",
      "Door",
      "Metal",
      "Unlock",
      "Pocket",
      "Turn"
    ],
    "explanation": "Describe Key by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-09-wallet",
    "target": "Wallet",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "advanced",
    "forbidden": [
      "Money",
      "Cards",
      "Cash",
      "Pocket",
      "Leather",
      "Purse"
    ],
    "explanation": "Describe Wallet by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-10-headphones",
    "target": "Headphones",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "beginner",
    "forbidden": [
      "Music",
      "Ears",
      "Sound",
      "Listen",
      "Audio",
      "Wireless"
    ],
    "explanation": "Describe Headphones by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-11-notebook",
    "target": "Notebook",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "intermediate",
    "forbidden": [
      "Write",
      "Pages",
      "Paper",
      "Notes",
      "Spiral",
      "School"
    ],
    "explanation": "Describe Notebook by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-12-stapler",
    "target": "Stapler",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "advanced",
    "forbidden": [
      "Paper",
      "Staples",
      "Attach",
      "Office",
      "Sheets",
      "Fasten"
    ],
    "explanation": "Describe Stapler by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-13-flashlight",
    "target": "Flashlight",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "beginner",
    "forbidden": [
      "Light",
      "Dark",
      "Battery",
      "Torch",
      "Beam",
      "Night"
    ],
    "explanation": "Describe Flashlight by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-14-pillow",
    "target": "Pillow",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "intermediate",
    "forbidden": [
      "Sleep",
      "Head",
      "Bed",
      "Soft",
      "Cushion",
      "Case"
    ],
    "explanation": "Describe Pillow by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-15-blanket",
    "target": "Blanket",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "advanced",
    "forbidden": [
      "Warm",
      "Bed",
      "Cover",
      "Sleep",
      "Wool",
      "Cold"
    ],
    "explanation": "Describe Blanket by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-16-suitcase",
    "target": "Suitcase",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "beginner",
    "forbidden": [
      "Travel",
      "Luggage",
      "Pack",
      "Clothes",
      "Trip",
      "Airport"
    ],
    "explanation": "Describe Suitcase by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-17-refrigerator",
    "target": "Refrigerator",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "intermediate",
    "forbidden": [
      "Cold",
      "Food",
      "Kitchen",
      "Fresh",
      "Freezer",
      "Appliance"
    ],
    "explanation": "Describe Refrigerator by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-18-microwave",
    "target": "Microwave",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "advanced",
    "forbidden": [
      "Heat",
      "Food",
      "Kitchen",
      "Oven",
      "Seconds",
      "Reheat"
    ],
    "explanation": "Describe Microwave by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-19-kettle",
    "target": "Kettle",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "beginner",
    "forbidden": [
      "Boil",
      "Tea",
      "Hot",
      "Kitchen",
      "Spout",
      "Steam"
    ],
    "explanation": "Describe Kettle by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-20-spoon",
    "target": "Spoon",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "intermediate",
    "forbidden": [
      "Eat",
      "Soup",
      "Utensil",
      "Bowl",
      "Scoop",
      "Metal"
    ],
    "explanation": "Describe Spoon by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-21-fork",
    "target": "Fork",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "advanced",
    "forbidden": [
      "Prongs",
      "Eat",
      "Utensil",
      "Knife",
      "Plate",
      "Food"
    ],
    "explanation": "Describe Fork by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-22-plate",
    "target": "Plate",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "beginner",
    "forbidden": [
      "Food",
      "Dish",
      "Eat",
      "Round",
      "Table",
      "Ceramic"
    ],
    "explanation": "Describe Plate by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-23-mug",
    "target": "Mug",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "intermediate",
    "forbidden": [
      "Cup",
      "Coffee",
      "Tea",
      "Handle",
      "Drink",
      "Ceramic"
    ],
    "explanation": "Describe Mug by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-24-chair",
    "target": "Chair",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "advanced",
    "forbidden": [
      "Sit",
      "Seat",
      "Legs",
      "Furniture",
      "Backrest",
      "Table"
    ],
    "explanation": "Describe Chair by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-25-table",
    "target": "Table",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "beginner",
    "forbidden": [
      "Furniture",
      "Legs",
      "Surface",
      "Dining",
      "Desk",
      "Chair"
    ],
    "explanation": "Describe Table by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-26-curtain",
    "target": "Curtain",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "intermediate",
    "forbidden": [
      "Window",
      "Fabric",
      "Close",
      "Privacy",
      "Drape",
      "Rod"
    ],
    "explanation": "Describe Curtain by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-27-doorbell",
    "target": "Doorbell",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "advanced",
    "forbidden": [
      "Ring",
      "Visitor",
      "Door",
      "Button",
      "Chime",
      "Entrance"
    ],
    "explanation": "Describe Doorbell by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-28-remote-control",
    "target": "Remote Control",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "beginner",
    "forbidden": [
      "Television",
      "Buttons",
      "Channel",
      "Battery",
      "Device",
      "Couch"
    ],
    "explanation": "Describe Remote Control by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-29-washing-machine",
    "target": "Washing Machine",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "intermediate",
    "forbidden": [
      "Clothes",
      "Laundry",
      "Clean",
      "Detergent",
      "Spin",
      "Appliance"
    ],
    "explanation": "Describe Washing Machine by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-30-bicycle",
    "target": "Bicycle",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "advanced",
    "forbidden": [
      "Ride",
      "Wheels",
      "Pedals",
      "Handlebars",
      "Cycle",
      "Helmet"
    ],
    "explanation": "Describe Bicycle by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-31-helmet",
    "target": "Helmet",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "beginner",
    "forbidden": [
      "Head",
      "Safety",
      "Protect",
      "Ride",
      "Motorcycle",
      "Strap"
    ],
    "explanation": "Describe Helmet by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-32-sunglasses",
    "target": "Sunglasses",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "intermediate",
    "forbidden": [
      "Eyes",
      "Sun",
      "Shade",
      "Lenses",
      "Wear",
      "Bright"
    ],
    "explanation": "Describe Sunglasses by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-33-watch",
    "target": "Watch",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "advanced",
    "forbidden": [
      "Time",
      "Wrist",
      "Clock",
      "Wear",
      "Hands",
      "Strap"
    ],
    "explanation": "Describe Watch by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-34-calendar",
    "target": "Calendar",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "beginner",
    "forbidden": [
      "Dates",
      "Month",
      "Year",
      "Schedule",
      "Days",
      "Appointment"
    ],
    "explanation": "Describe Calendar by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-35-pen",
    "target": "Pen",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "intermediate",
    "forbidden": [
      "Write",
      "Ink",
      "Paper",
      "Cap",
      "Ballpoint",
      "Stationery"
    ],
    "explanation": "Describe Pen by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-36-eraser",
    "target": "Eraser",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "advanced",
    "forbidden": [
      "Pencil",
      "Remove",
      "Rubber",
      "Mistake",
      "Paper",
      "Delete"
    ],
    "explanation": "Describe Eraser by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-37-ruler",
    "target": "Ruler",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "beginner",
    "forbidden": [
      "Measure",
      "Straight",
      "Length",
      "Centimetres",
      "School",
      "Line"
    ],
    "explanation": "Describe Ruler by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-38-basket",
    "target": "Basket",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "intermediate",
    "forbidden": [
      "Carry",
      "Container",
      "Woven",
      "Handle",
      "Laundry",
      "Picnic"
    ],
    "explanation": "Describe Basket by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-39-towel",
    "target": "Towel",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "advanced",
    "forbidden": [
      "Dry",
      "Bath",
      "Cloth",
      "Wet",
      "Bathroom",
      "Wipe"
    ],
    "explanation": "Describe Towel by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-40-soap",
    "target": "Soap",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "beginner",
    "forbidden": [
      "Wash",
      "Clean",
      "Hands",
      "Bubbles",
      "Bar",
      "Bathroom"
    ],
    "explanation": "Describe Soap by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-41-comb",
    "target": "Comb",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "intermediate",
    "forbidden": [
      "Hair",
      "Teeth",
      "Groom",
      "Brush",
      "Tangles",
      "Pocket"
    ],
    "explanation": "Describe Comb by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-42-charger",
    "target": "Charger",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "advanced",
    "forbidden": [
      "Battery",
      "Power",
      "Cable",
      "Phone",
      "Plug",
      "Electricity"
    ],
    "explanation": "Describe Charger by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-43-camera",
    "target": "Camera",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "beginner",
    "forbidden": [
      "Photo",
      "Picture",
      "Lens",
      "Flash",
      "Capture",
      "Photograph"
    ],
    "explanation": "Describe Camera by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-44-candle",
    "target": "Candle",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "intermediate",
    "forbidden": [
      "Flame",
      "Wax",
      "Light",
      "Wick",
      "Burn",
      "Dark"
    ],
    "explanation": "Describe Candle by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-45-thermometer",
    "target": "Thermometer",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "advanced",
    "forbidden": [
      "Temperature",
      "Fever",
      "Measure",
      "Degrees",
      "Mercury",
      "Health"
    ],
    "explanation": "Describe Thermometer by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-46-bandage",
    "target": "Bandage",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "beginner",
    "forbidden": [
      "Wound",
      "Cover",
      "Injury",
      "First Aid",
      "Gauze",
      "Heal"
    ],
    "explanation": "Describe Bandage by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-47-lock",
    "target": "Lock",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "intermediate",
    "forbidden": [
      "Key",
      "Secure",
      "Door",
      "Open",
      "Padlock",
      "Protect"
    ],
    "explanation": "Describe Lock by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-48-envelope",
    "target": "Envelope",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "advanced",
    "forbidden": [
      "Letter",
      "Mail",
      "Paper",
      "Stamp",
      "Seal",
      "Address"
    ],
    "explanation": "Describe Envelope by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-49-ladder",
    "target": "Ladder",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "beginner",
    "forbidden": [
      "Climb",
      "Steps",
      "Height",
      "Rungs",
      "Reach",
      "Roof"
    ],
    "explanation": "Describe Ladder by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-1-50-fan",
    "target": "Fan",
    "theme": "everyday",
    "category": "Everyday Objects",
    "level": "intermediate",
    "forbidden": [
      "Air",
      "Cool",
      "Blades",
      "Spin",
      "Breeze",
      "Electric"
    ],
    "explanation": "Describe Fan by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-01-grocery-shopping",
    "target": "Grocery Shopping",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "beginner",
    "forbidden": [
      "Supermarket",
      "Food",
      "Cart",
      "Buy",
      "Aisle",
      "List"
    ],
    "explanation": "Describe Grocery Shopping by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-02-bus-stop",
    "target": "Bus Stop",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "intermediate",
    "forbidden": [
      "Wait",
      "Public Transport",
      "Shelter",
      "Route",
      "Passengers",
      "Board"
    ],
    "explanation": "Describe Bus Stop by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-03-train-station",
    "target": "Train Station",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "advanced",
    "forbidden": [
      "Platform",
      "Railway",
      "Ticket",
      "Tracks",
      "Journey",
      "Passenger"
    ],
    "explanation": "Describe Train Station by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-04-library",
    "target": "Library",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "beginner",
    "forbidden": [
      "Books",
      "Read",
      "Borrow",
      "Quiet",
      "Shelves",
      "Librarian"
    ],
    "explanation": "Describe Library by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-05-restaurant",
    "target": "Restaurant",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "intermediate",
    "forbidden": [
      "Food",
      "Menu",
      "Waiter",
      "Eat",
      "Table",
      "Order"
    ],
    "explanation": "Describe Restaurant by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-06-airport",
    "target": "Airport",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "advanced",
    "forbidden": [
      "Plane",
      "Flight",
      "Terminal",
      "Passport",
      "Security",
      "Luggage"
    ],
    "explanation": "Describe Airport by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-07-hospital",
    "target": "Hospital",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "beginner",
    "forbidden": [
      "Doctor",
      "Patient",
      "Nurse",
      "Treatment",
      "Ward",
      "Emergency"
    ],
    "explanation": "Describe Hospital by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-08-playground",
    "target": "Playground",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "intermediate",
    "forbidden": [
      "Children",
      "Slide",
      "Swing",
      "Play",
      "Park",
      "Climb"
    ],
    "explanation": "Describe Playground by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-09-museum",
    "target": "Museum",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "advanced",
    "forbidden": [
      "Exhibits",
      "History",
      "Art",
      "Gallery",
      "Visitors",
      "Display"
    ],
    "explanation": "Describe Museum by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-10-beach",
    "target": "Beach",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "beginner",
    "forbidden": [
      "Sand",
      "Sea",
      "Waves",
      "Swim",
      "Coast",
      "Sun"
    ],
    "explanation": "Describe Beach by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-11-park",
    "target": "Park",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "intermediate",
    "forbidden": [
      "Trees",
      "Grass",
      "Bench",
      "Walk",
      "Outdoor",
      "Playground"
    ],
    "explanation": "Describe Park by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-12-cinema",
    "target": "Cinema",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "advanced",
    "forbidden": [
      "Movie",
      "Screen",
      "Popcorn",
      "Tickets",
      "Film",
      "Seats"
    ],
    "explanation": "Describe Cinema by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-13-post-office",
    "target": "Post Office",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "beginner",
    "forbidden": [
      "Mail",
      "Stamp",
      "Parcel",
      "Letter",
      "Counter",
      "Deliver"
    ],
    "explanation": "Describe Post Office by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-14-bank",
    "target": "Bank",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "intermediate",
    "forbidden": [
      "Money",
      "Account",
      "Cash",
      "Deposit",
      "Loan",
      "Teller"
    ],
    "explanation": "Describe Bank by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-15-gym",
    "target": "Gym",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "advanced",
    "forbidden": [
      "Exercise",
      "Weights",
      "Workout",
      "Fitness",
      "Trainer",
      "Treadmill"
    ],
    "explanation": "Describe Gym by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-16-classroom",
    "target": "Classroom",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "beginner",
    "forbidden": [
      "Students",
      "Teacher",
      "School",
      "Lesson",
      "Desk",
      "Learn"
    ],
    "explanation": "Describe Classroom by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-17-market",
    "target": "Market",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "intermediate",
    "forbidden": [
      "Stalls",
      "Vendors",
      "Buy",
      "Sell",
      "Crowd",
      "Goods"
    ],
    "explanation": "Describe Market by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-18-hotel",
    "target": "Hotel",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "advanced",
    "forbidden": [
      "Room",
      "Stay",
      "Reception",
      "Guest",
      "Booking",
      "Night"
    ],
    "explanation": "Describe Hotel by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-19-pharmacy",
    "target": "Pharmacy",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "beginner",
    "forbidden": [
      "Medicine",
      "Prescription",
      "Chemist",
      "Health",
      "Tablets",
      "Counter"
    ],
    "explanation": "Describe Pharmacy by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-20-caf",
    "target": "Café",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "intermediate",
    "forbidden": [
      "Coffee",
      "Tea",
      "Snack",
      "Table",
      "Barista",
      "Drink"
    ],
    "explanation": "Describe Café by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-21-gardening",
    "target": "Gardening",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "advanced",
    "forbidden": [
      "Plants",
      "Soil",
      "Water",
      "Flowers",
      "Dig",
      "Garden"
    ],
    "explanation": "Describe Gardening by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-22-cooking-dinner",
    "target": "Cooking Dinner",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "beginner",
    "forbidden": [
      "Kitchen",
      "Food",
      "Evening",
      "Recipe",
      "Meal",
      "Prepare"
    ],
    "explanation": "Describe Cooking Dinner by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-23-morning-walk",
    "target": "Morning Walk",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "intermediate",
    "forbidden": [
      "Early",
      "Exercise",
      "Stroll",
      "Sunrise",
      "Fresh Air",
      "Steps"
    ],
    "explanation": "Describe Morning Walk by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-24-birthday-party",
    "target": "Birthday Party",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "advanced",
    "forbidden": [
      "Cake",
      "Candles",
      "Gifts",
      "Celebrate",
      "Guests",
      "Balloons"
    ],
    "explanation": "Describe Birthday Party by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-25-road-trip",
    "target": "Road Trip",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "beginner",
    "forbidden": [
      "Car",
      "Drive",
      "Journey",
      "Highway",
      "Travel",
      "Destination"
    ],
    "explanation": "Describe Road Trip by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-26-camping",
    "target": "Camping",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "intermediate",
    "forbidden": [
      "Tent",
      "Outdoor",
      "Campfire",
      "Sleep",
      "Forest",
      "Sleeping Bag"
    ],
    "explanation": "Describe Camping by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-27-swimming",
    "target": "Swimming",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "advanced",
    "forbidden": [
      "Pool",
      "Stroke",
      "Water",
      "Float",
      "Swimwear",
      "Laps"
    ],
    "explanation": "Describe Swimming by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-28-cycling",
    "target": "Cycling",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "beginner",
    "forbidden": [
      "Bicycle",
      "Pedal",
      "Ride",
      "Helmet",
      "Wheels",
      "Road"
    ],
    "explanation": "Describe Cycling by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-29-reading-a-book",
    "target": "Reading a Book",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "intermediate",
    "forbidden": [
      "Pages",
      "Story",
      "Author",
      "Words",
      "Novel",
      "Library"
    ],
    "explanation": "Describe Reading a Book by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-30-watching-a-movie",
    "target": "Watching a Movie",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "advanced",
    "forbidden": [
      "Film",
      "Screen",
      "Actor",
      "Cinema",
      "Story",
      "Popcorn"
    ],
    "explanation": "Describe Watching a Movie by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-31-taking-a-photograph",
    "target": "Taking a Photograph",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "beginner",
    "forbidden": [
      "Camera",
      "Picture",
      "Lens",
      "Capture",
      "Pose",
      "Flash"
    ],
    "explanation": "Describe Taking a Photograph by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-32-playing-cricket",
    "target": "Playing Cricket",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "intermediate",
    "forbidden": [
      "Bat",
      "Ball",
      "Wicket",
      "Runs",
      "Bowler",
      "Field"
    ],
    "explanation": "Describe Playing Cricket by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-33-listening-to-music",
    "target": "Listening to Music",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "advanced",
    "forbidden": [
      "Song",
      "Sound",
      "Headphones",
      "Ears",
      "Artist",
      "Audio"
    ],
    "explanation": "Describe Listening to Music by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-34-cleaning-the-house",
    "target": "Cleaning the House",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "beginner",
    "forbidden": [
      "Sweep",
      "Mop",
      "Dust",
      "Rooms",
      "Tidy",
      "Vacuum"
    ],
    "explanation": "Describe Cleaning the House by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-35-doing-laundry",
    "target": "Doing Laundry",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "intermediate",
    "forbidden": [
      "Clothes",
      "Wash",
      "Detergent",
      "Dry",
      "Machine",
      "Fold"
    ],
    "explanation": "Describe Doing Laundry by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-36-ordering-food",
    "target": "Ordering Food",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "advanced",
    "forbidden": [
      "Menu",
      "Restaurant",
      "Delivery",
      "Choose",
      "Waiter",
      "Meal"
    ],
    "explanation": "Describe Ordering Food by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-37-catching-a-bus",
    "target": "Catching a Bus",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "beginner",
    "forbidden": [
      "Stop",
      "Wait",
      "Route",
      "Board",
      "Ticket",
      "Transport"
    ],
    "explanation": "Describe Catching a Bus by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-38-visiting-a-doctor",
    "target": "Visiting a Doctor",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "intermediate",
    "forbidden": [
      "Appointment",
      "Patient",
      "Health",
      "Clinic",
      "Examine",
      "Treatment"
    ],
    "explanation": "Describe Visiting a Doctor by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-39-booking-a-ticket",
    "target": "Booking a Ticket",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "advanced",
    "forbidden": [
      "Reserve",
      "Seat",
      "Travel",
      "Online",
      "Payment",
      "Confirmation"
    ],
    "explanation": "Describe Booking a Ticket by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-40-crossing-the-road",
    "target": "Crossing the Road",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "beginner",
    "forbidden": [
      "Traffic",
      "Pedestrian",
      "Cars",
      "Signal",
      "Zebra Crossing",
      "Safety"
    ],
    "explanation": "Describe Crossing the Road by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-41-waiting-in-a-queue",
    "target": "Waiting in a Queue",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "intermediate",
    "forbidden": [
      "Line",
      "Turn",
      "People",
      "Patience",
      "Counter",
      "Stand"
    ],
    "explanation": "Describe Waiting in a Queue by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-42-attending-a-wedding",
    "target": "Attending a Wedding",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "advanced",
    "forbidden": [
      "Bride",
      "Groom",
      "Ceremony",
      "Marriage",
      "Guests",
      "Reception"
    ],
    "explanation": "Describe Attending a Wedding by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-43-going-on-holiday",
    "target": "Going on Holiday",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "beginner",
    "forbidden": [
      "Vacation",
      "Travel",
      "Trip",
      "Relax",
      "Destination",
      "Leave"
    ],
    "explanation": "Describe Going on Holiday by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-44-learning-to-drive",
    "target": "Learning to Drive",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "intermediate",
    "forbidden": [
      "Car",
      "Instructor",
      "Licence",
      "Road",
      "Steering",
      "Lessons"
    ],
    "explanation": "Describe Learning to Drive by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-45-buying-a-gift",
    "target": "Buying a Gift",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "advanced",
    "forbidden": [
      "Present",
      "Shop",
      "Birthday",
      "Choose",
      "Wrap",
      "Recipient"
    ],
    "explanation": "Describe Buying a Gift by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-46-having-a-picnic",
    "target": "Having a Picnic",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "beginner",
    "forbidden": [
      "Outdoor",
      "Basket",
      "Food",
      "Blanket",
      "Park",
      "Eat"
    ],
    "explanation": "Describe Having a Picnic by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-47-walking-a-dog",
    "target": "Walking a Dog",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "intermediate",
    "forbidden": [
      "Leash",
      "Pet",
      "Outside",
      "Exercise",
      "Park",
      "Puppy"
    ],
    "explanation": "Describe Walking a Dog by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-48-meeting-a-friend",
    "target": "Meeting a Friend",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "advanced",
    "forbidden": [
      "Together",
      "Chat",
      "Visit",
      "Plan",
      "Café",
      "Social"
    ],
    "explanation": "Describe Meeting a Friend by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-49-working-from-home",
    "target": "Working from Home",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "beginner",
    "forbidden": [
      "Remote",
      "Laptop",
      "Office",
      "Online",
      "House",
      "Job"
    ],
    "explanation": "Describe Working from Home by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-2-50-going-to-bed",
    "target": "Going to Bed",
    "theme": "everyday",
    "category": "Places & Activities",
    "level": "intermediate",
    "forbidden": [
      "Sleep",
      "Night",
      "Bedroom",
      "Pillow",
      "Tired",
      "Blanket"
    ],
    "explanation": "Describe Going to Bed by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-01-apologising",
    "target": "Apologising",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "beginner",
    "forbidden": [
      "Sorry",
      "Mistake",
      "Forgive",
      "Regret",
      "Excuse",
      "Fault"
    ],
    "explanation": "Describe Apologising by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-02-giving-directions",
    "target": "Giving Directions",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "intermediate",
    "forbidden": [
      "Route",
      "Turn",
      "Left",
      "Right",
      "Map",
      "Destination"
    ],
    "explanation": "Describe Giving Directions by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-03-making-a-decision",
    "target": "Making a Decision",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "advanced",
    "forbidden": [
      "Choose",
      "Option",
      "Decide",
      "Choice",
      "Consider",
      "Outcome"
    ],
    "explanation": "Describe Making a Decision by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-04-asking-for-help",
    "target": "Asking for Help",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "beginner",
    "forbidden": [
      "Assist",
      "Support",
      "Need",
      "Request",
      "Problem",
      "Please"
    ],
    "explanation": "Describe Asking for Help by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-05-solving-a-puzzle",
    "target": "Solving a Puzzle",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "intermediate",
    "forbidden": [
      "Answer",
      "Clue",
      "Pieces",
      "Think",
      "Problem",
      "Complete"
    ],
    "explanation": "Describe Solving a Puzzle by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-06-losing-something",
    "target": "Losing Something",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "advanced",
    "forbidden": [
      "Missing",
      "Find",
      "Search",
      "Misplace",
      "Gone",
      "Look"
    ],
    "explanation": "Describe Losing Something by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-07-finding-a-bargain",
    "target": "Finding a Bargain",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "beginner",
    "forbidden": [
      "Cheap",
      "Discount",
      "Sale",
      "Price",
      "Deal",
      "Save"
    ],
    "explanation": "Describe Finding a Bargain by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-08-missing-a-train",
    "target": "Missing a Train",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "intermediate",
    "forbidden": [
      "Late",
      "Platform",
      "Departed",
      "Station",
      "Wait",
      "Ticket"
    ],
    "explanation": "Describe Missing a Train by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-09-changing-a-plan",
    "target": "Changing a Plan",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "advanced",
    "forbidden": [
      "Reschedule",
      "Different",
      "Arrange",
      "Cancel",
      "Update",
      "Alternative"
    ],
    "explanation": "Describe Changing a Plan by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-10-keeping-a-secret",
    "target": "Keeping a Secret",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "beginner",
    "forbidden": [
      "Tell",
      "Private",
      "Confidential",
      "Hide",
      "Trust",
      "Share"
    ],
    "explanation": "Describe Keeping a Secret by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-11-making-a-promise",
    "target": "Making a Promise",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "intermediate",
    "forbidden": [
      "Commit",
      "Keep",
      "Word",
      "Guarantee",
      "Agree",
      "Future"
    ],
    "explanation": "Describe Making a Promise by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-12-telling-a-joke",
    "target": "Telling a Joke",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "advanced",
    "forbidden": [
      "Funny",
      "Laugh",
      "Punchline",
      "Humour",
      "Story",
      "Comedy"
    ],
    "explanation": "Describe Telling a Joke by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-13-winning-a-prize",
    "target": "Winning a Prize",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "beginner",
    "forbidden": [
      "Award",
      "Competition",
      "Champion",
      "Reward",
      "Trophy",
      "Contest"
    ],
    "explanation": "Describe Winning a Prize by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-14-learning-a-skill",
    "target": "Learning a Skill",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "intermediate",
    "forbidden": [
      "Practice",
      "Training",
      "Improve",
      "Ability",
      "Study",
      "Beginner"
    ],
    "explanation": "Describe Learning a Skill by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-15-breaking-a-habit",
    "target": "Breaking a Habit",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "advanced",
    "forbidden": [
      "Stop",
      "Routine",
      "Change",
      "Behaviour",
      "Repeat",
      "Quit"
    ],
    "explanation": "Describe Breaking a Habit by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-16-sharing-an-idea",
    "target": "Sharing an Idea",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "beginner",
    "forbidden": [
      "Suggest",
      "Thought",
      "Explain",
      "Group",
      "Discuss",
      "Opinion"
    ],
    "explanation": "Describe Sharing an Idea by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-17-giving-a-compliment",
    "target": "Giving a Compliment",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "intermediate",
    "forbidden": [
      "Praise",
      "Nice",
      "Admire",
      "Positive",
      "Kind",
      "Appreciate"
    ],
    "explanation": "Describe Giving a Compliment by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-18-introducing-yourself",
    "target": "Introducing Yourself",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "advanced",
    "forbidden": [
      "Name",
      "Meet",
      "Hello",
      "First",
      "Identity",
      "Stranger"
    ],
    "explanation": "Describe Introducing Yourself by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-19-remembering-a-name",
    "target": "Remembering a Name",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "beginner",
    "forbidden": [
      "Recall",
      "Forget",
      "Person",
      "Memory",
      "Recognise",
      "Introduce"
    ],
    "explanation": "Describe Remembering a Name by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-20-forgetting-an-appointment",
    "target": "Forgetting an Appointment",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "intermediate",
    "forbidden": [
      "Miss",
      "Calendar",
      "Meeting",
      "Remember",
      "Schedule",
      "Late"
    ],
    "explanation": "Describe Forgetting an Appointment by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-21-choosing-a-meal",
    "target": "Choosing a Meal",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "advanced",
    "forbidden": [
      "Menu",
      "Food",
      "Dish",
      "Order",
      "Restaurant",
      "Eat"
    ],
    "explanation": "Describe Choosing a Meal by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-22-borrowing-an-item",
    "target": "Borrowing an Item",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "beginner",
    "forbidden": [
      "Lend",
      "Return",
      "Temporary",
      "Ask",
      "Owner",
      "Use"
    ],
    "explanation": "Describe Borrowing an Item by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-23-returning-a-purchase",
    "target": "Returning a Purchase",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "intermediate",
    "forbidden": [
      "Refund",
      "Shop",
      "Receipt",
      "Exchange",
      "Product",
      "Money"
    ],
    "explanation": "Describe Returning a Purchase by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-24-inviting-a-guest",
    "target": "Inviting a Guest",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "advanced",
    "forbidden": [
      "Come",
      "Visit",
      "Host",
      "Home",
      "Party",
      "Welcome"
    ],
    "explanation": "Describe Inviting a Guest by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-25-declining-an-invitation",
    "target": "Declining an Invitation",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "beginner",
    "forbidden": [
      "Refuse",
      "Sorry",
      "Attend",
      "No",
      "Unable",
      "Regret"
    ],
    "explanation": "Describe Declining an Invitation by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-26-arriving-late",
    "target": "Arriving Late",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "intermediate",
    "forbidden": [
      "Delay",
      "Time",
      "Sorry",
      "Traffic",
      "After",
      "Wait"
    ],
    "explanation": "Describe Arriving Late by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-27-waking-up-early",
    "target": "Waking Up Early",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "advanced",
    "forbidden": [
      "Morning",
      "Alarm",
      "Bed",
      "Sunrise",
      "Sleep",
      "Before"
    ],
    "explanation": "Describe Waking Up Early by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-28-getting-lost",
    "target": "Getting Lost",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "beginner",
    "forbidden": [
      "Direction",
      "Map",
      "Where",
      "Route",
      "Unknown",
      "Find"
    ],
    "explanation": "Describe Getting Lost by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-29-feeling-surprised",
    "target": "Feeling Surprised",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "intermediate",
    "forbidden": [
      "Unexpected",
      "Shock",
      "Wow",
      "Amazed",
      "Sudden",
      "Reaction"
    ],
    "explanation": "Describe Feeling Surprised by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-30-feeling-nervous",
    "target": "Feeling Nervous",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "advanced",
    "forbidden": [
      "Anxious",
      "Worried",
      "Fear",
      "Calm",
      "Tense",
      "Butterflies"
    ],
    "explanation": "Describe Feeling Nervous by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-31-feeling-proud",
    "target": "Feeling Proud",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "beginner",
    "forbidden": [
      "Achievement",
      "Success",
      "Satisfied",
      "Accomplish",
      "Honour",
      "Happy"
    ],
    "explanation": "Describe Feeling Proud by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-32-feeling-confused",
    "target": "Feeling Confused",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "intermediate",
    "forbidden": [
      "Understand",
      "Unclear",
      "Puzzled",
      "Unsure",
      "Question",
      "Mixed Up"
    ],
    "explanation": "Describe Feeling Confused by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-33-feeling-relieved",
    "target": "Feeling Relieved",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "advanced",
    "forbidden": [
      "Worry",
      "Over",
      "Relax",
      "Safe",
      "Stress",
      "Good"
    ],
    "explanation": "Describe Feeling Relieved by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-34-disagreeing-politely",
    "target": "Disagreeing Politely",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "beginner",
    "forbidden": [
      "Opinion",
      "Respect",
      "Different",
      "However",
      "Understand",
      "View"
    ],
    "explanation": "Describe Disagreeing Politely by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-35-explaining-a-mistake",
    "target": "Explaining a Mistake",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "intermediate",
    "forbidden": [
      "Error",
      "Wrong",
      "Reason",
      "Apology",
      "Correct",
      "Happened"
    ],
    "explanation": "Describe Explaining a Mistake by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-36-following-instructions",
    "target": "Following Instructions",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "advanced",
    "forbidden": [
      "Steps",
      "Directions",
      "Order",
      "Read",
      "Do",
      "Procedure"
    ],
    "explanation": "Describe Following Instructions by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-37-comparing-two-options",
    "target": "Comparing Two Options",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "beginner",
    "forbidden": [
      "Difference",
      "Similar",
      "Better",
      "Choose",
      "Advantages",
      "Versus"
    ],
    "explanation": "Describe Comparing Two Options by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-38-describing-a-person",
    "target": "Describing a Person",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "intermediate",
    "forbidden": [
      "Appearance",
      "Character",
      "Looks",
      "Personality",
      "Features",
      "Name"
    ],
    "explanation": "Describe Describing a Person by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-39-describing-a-journey",
    "target": "Describing a Journey",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "advanced",
    "forbidden": [
      "Travel",
      "Trip",
      "Route",
      "Destination",
      "Transport",
      "Experience"
    ],
    "explanation": "Describe Describing a Journey by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-40-planning-a-weekend",
    "target": "Planning a Weekend",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "beginner",
    "forbidden": [
      "Saturday",
      "Sunday",
      "Schedule",
      "Activities",
      "Free",
      "Arrange"
    ],
    "explanation": "Describe Planning a Weekend by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-41-packing-a-bag",
    "target": "Packing a Bag",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "intermediate",
    "forbidden": [
      "Clothes",
      "Suitcase",
      "Travel",
      "Items",
      "Fold",
      "Luggage"
    ],
    "explanation": "Describe Packing a Bag by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-42-starting-a-conversation",
    "target": "Starting a Conversation",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "advanced",
    "forbidden": [
      "Hello",
      "Talk",
      "Topic",
      "Speak",
      "Question",
      "Begin"
    ],
    "explanation": "Describe Starting a Conversation by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-43-ending-a-call",
    "target": "Ending a Call",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "beginner",
    "forbidden": [
      "Goodbye",
      "Hang Up",
      "Phone",
      "Finish",
      "Speak",
      "Later"
    ],
    "explanation": "Describe Ending a Call by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-44-making-a-suggestion",
    "target": "Making a Suggestion",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "intermediate",
    "forbidden": [
      "Idea",
      "Recommend",
      "Could",
      "Advice",
      "Propose",
      "Option"
    ],
    "explanation": "Describe Making a Suggestion by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-45-giving-feedback",
    "target": "Giving Feedback",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "advanced",
    "forbidden": [
      "Comment",
      "Improve",
      "Positive",
      "Review",
      "Performance",
      "Advice"
    ],
    "explanation": "Describe Giving Feedback by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-46-requesting-more-time",
    "target": "Requesting More Time",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "beginner",
    "forbidden": [
      "Deadline",
      "Extension",
      "Delay",
      "Need",
      "Ask",
      "Complete"
    ],
    "explanation": "Describe Requesting More Time by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-47-checking-your-work",
    "target": "Checking Your Work",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "intermediate",
    "forbidden": [
      "Review",
      "Mistake",
      "Verify",
      "Correct",
      "Read",
      "Quality"
    ],
    "explanation": "Describe Checking Your Work by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-48-correcting-information",
    "target": "Correcting Information",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "advanced",
    "forbidden": [
      "Wrong",
      "Accurate",
      "Update",
      "Error",
      "Fact",
      "Clarify"
    ],
    "explanation": "Describe Correcting Information by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-49-waiting-patiently",
    "target": "Waiting Patiently",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "beginner",
    "forbidden": [
      "Calm",
      "Delay",
      "Queue",
      "Time",
      "Rush",
      "Turn"
    ],
    "explanation": "Describe Waiting Patiently by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-3-50-celebrating-success",
    "target": "Celebrating Success",
    "theme": "everyday",
    "category": "Actions & Situations",
    "level": "intermediate",
    "forbidden": [
      "Achievement",
      "Congratulations",
      "Win",
      "Party",
      "Proud",
      "Reward"
    ],
    "explanation": "Describe Celebrating Success by explaining its purpose, context, appearance, or result without using the obvious words."
  },
  {
    "id": "built-in-4-01-server",
    "target": "Server",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "beginner",
    "forbidden": [
      "Host",
      "Client",
      "Network",
      "Requests",
      "Rack",
      "Website"
    ],
    "explanation": "Explain what Server does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-02-database",
    "target": "Database",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "intermediate",
    "forbidden": [
      "Records",
      "Tables",
      "Query",
      "Store",
      "Information",
      "SQL"
    ],
    "explanation": "Explain what Database does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-03-browser",
    "target": "Browser",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "advanced",
    "forbidden": [
      "Website",
      "Internet",
      "Tabs",
      "Chrome",
      "Search",
      "Webpage"
    ],
    "explanation": "Explain what Browser does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-04-operating-system",
    "target": "Operating System",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "beginner",
    "forbidden": [
      "Windows",
      "Linux",
      "Computer",
      "Platform",
      "Boot",
      "Hardware"
    ],
    "explanation": "Explain what Operating System does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-05-mobile-application",
    "target": "Mobile Application",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "intermediate",
    "forbidden": [
      "Phone",
      "Install",
      "App Store",
      "Touch",
      "Android",
      "iOS"
    ],
    "explanation": "Explain what Mobile Application does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-06-cloud-storage",
    "target": "Cloud Storage",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "advanced",
    "forbidden": [
      "Online",
      "Files",
      "Sync",
      "Remote",
      "Drive",
      "Backup"
    ],
    "explanation": "Explain what Cloud Storage does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-07-wi-fi",
    "target": "Wi-Fi",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "beginner",
    "forbidden": [
      "Wireless",
      "Internet",
      "Router",
      "Signal",
      "Password",
      "Network"
    ],
    "explanation": "Explain what Wi-Fi does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-08-router",
    "target": "Router",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "intermediate",
    "forbidden": [
      "Network",
      "Internet",
      "Wi-Fi",
      "Traffic",
      "Connect",
      "Modem"
    ],
    "explanation": "Explain what Router does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-09-firewall",
    "target": "Firewall",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "advanced",
    "forbidden": [
      "Security",
      "Block",
      "Traffic",
      "Network",
      "Protection",
      "Rules"
    ],
    "explanation": "Explain what Firewall does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-10-password-manager",
    "target": "Password Manager",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "beginner",
    "forbidden": [
      "Credentials",
      "Vault",
      "Login",
      "Autofill",
      "Security",
      "Master"
    ],
    "explanation": "Explain what Password Manager does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-11-two-factor-authentication",
    "target": "Two-Factor Authentication",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "intermediate",
    "forbidden": [
      "Code",
      "Login",
      "Security",
      "Phone",
      "Verification",
      "Second Step"
    ],
    "explanation": "Explain what Two-Factor Authentication does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-12-backup",
    "target": "Backup",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "advanced",
    "forbidden": [
      "Copy",
      "Restore",
      "Files",
      "Recovery",
      "Save",
      "Data"
    ],
    "explanation": "Explain what Backup does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-13-cache",
    "target": "Cache",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "beginner",
    "forbidden": [
      "Temporary",
      "Stored",
      "Browser",
      "Clear",
      "Speed",
      "Memory"
    ],
    "explanation": "Explain what Cache does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-14-cookie",
    "target": "Cookie",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "intermediate",
    "forbidden": [
      "Website",
      "Browser",
      "Session",
      "Tracking",
      "Small File",
      "Preferences"
    ],
    "explanation": "Explain what Cookie does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-15-download",
    "target": "Download",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "advanced",
    "forbidden": [
      "Internet",
      "Receive",
      "File",
      "Save",
      "Transfer",
      "Computer"
    ],
    "explanation": "Explain what Download does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-16-upload",
    "target": "Upload",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "beginner",
    "forbidden": [
      "Send",
      "File",
      "Internet",
      "Transfer",
      "Cloud",
      "Attach"
    ],
    "explanation": "Explain what Upload does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-17-spreadsheet",
    "target": "Spreadsheet",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "intermediate",
    "forbidden": [
      "Rows",
      "Columns",
      "Cells",
      "Excel",
      "Formula",
      "Table"
    ],
    "explanation": "Explain what Spreadsheet does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-18-presentation",
    "target": "Presentation",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "advanced",
    "forbidden": [
      "Slides",
      "PowerPoint",
      "Audience",
      "Deck",
      "Speaker",
      "Show"
    ],
    "explanation": "Explain what Presentation does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-19-video-call",
    "target": "Video Call",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "beginner",
    "forbidden": [
      "Camera",
      "Microphone",
      "Meeting",
      "Online",
      "Teams",
      "Face"
    ],
    "explanation": "Explain what Video Call does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-20-email-attachment",
    "target": "Email Attachment",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "intermediate",
    "forbidden": [
      "Message",
      "File",
      "Send",
      "Paperclip",
      "Download",
      "Inbox"
    ],
    "explanation": "Explain what Email Attachment does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-21-search-engine",
    "target": "Search Engine",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "advanced",
    "forbidden": [
      "Google",
      "Query",
      "Results",
      "Web",
      "Find",
      "Keywords"
    ],
    "explanation": "Explain what Search Engine does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-22-qr-code",
    "target": "QR Code",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "beginner",
    "forbidden": [
      "Scan",
      "Camera",
      "Square",
      "Link",
      "Pattern",
      "Phone"
    ],
    "explanation": "Explain what QR Code does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-23-bluetooth",
    "target": "Bluetooth",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "intermediate",
    "forbidden": [
      "Wireless",
      "Pair",
      "Device",
      "Short Range",
      "Headphones",
      "Connect"
    ],
    "explanation": "Explain what Bluetooth does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-24-usb-drive",
    "target": "USB Drive",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "advanced",
    "forbidden": [
      "Storage",
      "Portable",
      "Files",
      "Plug",
      "Flash",
      "Port"
    ],
    "explanation": "Explain what USB Drive does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-25-printer-driver",
    "target": "Printer Driver",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "beginner",
    "forbidden": [
      "Print",
      "Software",
      "Device",
      "Install",
      "Operating System",
      "Hardware"
    ],
    "explanation": "Explain what Printer Driver does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-26-software-update",
    "target": "Software Update",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "intermediate",
    "forbidden": [
      "Version",
      "Install",
      "Upgrade",
      "Patch",
      "New",
      "Restart"
    ],
    "explanation": "Explain what Software Update does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-27-user-interface",
    "target": "User Interface",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "advanced",
    "forbidden": [
      "Buttons",
      "Screen",
      "Layout",
      "Menus",
      "Interact",
      "Design"
    ],
    "explanation": "Explain what User Interface does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-28-dashboard",
    "target": "Dashboard",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "beginner",
    "forbidden": [
      "Overview",
      "Metrics",
      "Charts",
      "Panel",
      "Summary",
      "Widgets"
    ],
    "explanation": "Explain what Dashboard does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-29-notification",
    "target": "Notification",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "intermediate",
    "forbidden": [
      "Alert",
      "Message",
      "Popup",
      "Bell",
      "Inform",
      "Reminder"
    ],
    "explanation": "Explain what Notification does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-30-screenshot",
    "target": "Screenshot",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "advanced",
    "forbidden": [
      "Image",
      "Screen",
      "Capture",
      "Picture",
      "Print Screen",
      "Save"
    ],
    "explanation": "Explain what Screenshot does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-31-keyboard-shortcut",
    "target": "Keyboard Shortcut",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "beginner",
    "forbidden": [
      "Keys",
      "Combination",
      "Ctrl",
      "Quick",
      "Command",
      "Press"
    ],
    "explanation": "Explain what Keyboard Shortcut does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-32-file-format",
    "target": "File Format",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "intermediate",
    "forbidden": [
      "Extension",
      "Type",
      "PDF",
      "Open",
      "Compatibility",
      "Save"
    ],
    "explanation": "Explain what File Format does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-33-folder",
    "target": "Folder",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "advanced",
    "forbidden": [
      "Directory",
      "Files",
      "Organise",
      "Open",
      "Path",
      "Container"
    ],
    "explanation": "Explain what Folder does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-34-recycle-bin",
    "target": "Recycle Bin",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "beginner",
    "forbidden": [
      "Deleted",
      "Trash",
      "Restore",
      "Empty",
      "Files",
      "Windows"
    ],
    "explanation": "Explain what Recycle Bin does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-35-web-link",
    "target": "Web Link",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "intermediate",
    "forbidden": [
      "URL",
      "Click",
      "Website",
      "Address",
      "Browser",
      "Hyperlink"
    ],
    "explanation": "Explain what Web Link does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-36-online-form",
    "target": "Online Form",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "advanced",
    "forbidden": [
      "Fields",
      "Submit",
      "Website",
      "Enter",
      "Questions",
      "Button"
    ],
    "explanation": "Explain what Online Form does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-37-chatbot",
    "target": "Chatbot",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "beginner",
    "forbidden": [
      "Automated",
      "Conversation",
      "Bot",
      "Messages",
      "Assistant",
      "Questions"
    ],
    "explanation": "Explain what Chatbot does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-38-artificial-intelligence",
    "target": "Artificial Intelligence",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "intermediate",
    "forbidden": [
      "Machine",
      "Learning",
      "Model",
      "Smart",
      "Automation",
      "Algorithm"
    ],
    "explanation": "Explain what Artificial Intelligence does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-39-virtual-machine",
    "target": "Virtual Machine",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "advanced",
    "forbidden": [
      "Emulator",
      "Guest",
      "Host",
      "Operating System",
      "Cloud",
      "Instance"
    ],
    "explanation": "Explain what Virtual Machine does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-40-source-code",
    "target": "Source Code",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "beginner",
    "forbidden": [
      "Programming",
      "Developer",
      "Text",
      "Language",
      "Compile",
      "Repository"
    ],
    "explanation": "Explain what Source Code does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-41-api",
    "target": "API",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "intermediate",
    "forbidden": [
      "Interface",
      "Request",
      "Endpoint",
      "Integration",
      "Response",
      "Service"
    ],
    "explanation": "Explain what API does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-42-encryption",
    "target": "Encryption",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "advanced",
    "forbidden": [
      "Secure",
      "Cipher",
      "Key",
      "Unreadable",
      "Protect",
      "Decrypt"
    ],
    "explanation": "Explain what Encryption does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-43-bandwidth",
    "target": "Bandwidth",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "beginner",
    "forbidden": [
      "Speed",
      "Network",
      "Capacity",
      "Data",
      "Connection",
      "Mbps"
    ],
    "explanation": "Explain what Bandwidth does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-44-touchscreen",
    "target": "Touchscreen",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "intermediate",
    "forbidden": [
      "Finger",
      "Display",
      "Tap",
      "Swipe",
      "Phone",
      "Input"
    ],
    "explanation": "Explain what Touchscreen does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-45-webcam",
    "target": "Webcam",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "advanced",
    "forbidden": [
      "Camera",
      "Video",
      "Computer",
      "Meeting",
      "Lens",
      "USB"
    ],
    "explanation": "Explain what Webcam does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-46-microphone",
    "target": "Microphone",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "beginner",
    "forbidden": [
      "Voice",
      "Sound",
      "Record",
      "Audio",
      "Speak",
      "Mute"
    ],
    "explanation": "Explain what Microphone does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-47-battery-saver",
    "target": "Battery Saver",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "intermediate",
    "forbidden": [
      "Power",
      "Charge",
      "Energy",
      "Phone",
      "Low",
      "Mode"
    ],
    "explanation": "Explain what Battery Saver does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-48-dark-mode",
    "target": "Dark Mode",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "advanced",
    "forbidden": [
      "Theme",
      "Black",
      "Screen",
      "Night",
      "Light",
      "Display"
    ],
    "explanation": "Explain what Dark Mode does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-49-location-services",
    "target": "Location Services",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "beginner",
    "forbidden": [
      "GPS",
      "Position",
      "Map",
      "Permission",
      "Phone",
      "Track"
    ],
    "explanation": "Explain what Location Services does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-4-50-automatic-save",
    "target": "Automatic Save",
    "theme": "technical",
    "category": "Technology & Software",
    "level": "intermediate",
    "forbidden": [
      "Store",
      "Changes",
      "Document",
      "Recovery",
      "Background",
      "Autosave"
    ],
    "explanation": "Explain what Automatic Save does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-01-incident",
    "target": "Incident",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "beginner",
    "forbidden": [
      "Issue",
      "Outage",
      "Ticket",
      "Unexpected",
      "Impact",
      "Report"
    ],
    "explanation": "Explain what Incident does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-02-service-request",
    "target": "Service Request",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "intermediate",
    "forbidden": [
      "Ask",
      "Access",
      "Ticket",
      "Standard",
      "Fulfil",
      "User"
    ],
    "explanation": "Explain what Service Request does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-03-troubleshooting",
    "target": "Troubleshooting",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "advanced",
    "forbidden": [
      "Diagnose",
      "Problem",
      "Steps",
      "Test",
      "Fix",
      "Investigate"
    ],
    "explanation": "Explain what Troubleshooting does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-04-root-cause",
    "target": "Root Cause",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "beginner",
    "forbidden": [
      "Reason",
      "Underlying",
      "Analysis",
      "Problem",
      "Origin",
      "Why"
    ],
    "explanation": "Explain what Root Cause does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-05-workaround",
    "target": "Workaround",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "intermediate",
    "forbidden": [
      "Temporary",
      "Alternative",
      "Bypass",
      "Issue",
      "Fix",
      "Method"
    ],
    "explanation": "Explain what Workaround does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-06-resolution",
    "target": "Resolution",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "advanced",
    "forbidden": [
      "Solved",
      "Fix",
      "Answer",
      "Close",
      "Outcome",
      "Problem"
    ],
    "explanation": "Explain what Resolution does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-07-escalation",
    "target": "Escalation",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "beginner",
    "forbidden": [
      "Higher Level",
      "Transfer",
      "Priority",
      "Expert",
      "Unresolved",
      "Manager"
    ],
    "explanation": "Explain what Escalation does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-08-priority",
    "target": "Priority",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "intermediate",
    "forbidden": [
      "Urgency",
      "Order",
      "High",
      "Queue",
      "Important",
      "Impact"
    ],
    "explanation": "Explain what Priority does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-09-severity",
    "target": "Severity",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "advanced",
    "forbidden": [
      "Impact",
      "Critical",
      "Level",
      "Damage",
      "Major",
      "Minor"
    ],
    "explanation": "Explain what Severity does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-10-service-level-agreement",
    "target": "Service-Level Agreement",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "beginner",
    "forbidden": [
      "SLA",
      "Response Time",
      "Contract",
      "Target",
      "Deadline",
      "Commitment"
    ],
    "explanation": "Explain what Service-Level Agreement does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-11-reproduction-steps",
    "target": "Reproduction Steps",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "intermediate",
    "forbidden": [
      "Repeat",
      "Actions",
      "Sequence",
      "Issue",
      "Instructions",
      "Observe"
    ],
    "explanation": "Explain what Reproduction Steps does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-12-expected-behaviour",
    "target": "Expected Behaviour",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "advanced",
    "forbidden": [
      "Should",
      "Normal",
      "Requirement",
      "Outcome",
      "Design",
      "Result"
    ],
    "explanation": "Explain what Expected Behaviour does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-13-actual-behaviour",
    "target": "Actual Behaviour",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "beginner",
    "forbidden": [
      "Observed",
      "Happened",
      "Result",
      "Unexpected",
      "Current",
      "Outcome"
    ],
    "explanation": "Explain what Actual Behaviour does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-14-error-message",
    "target": "Error Message",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "intermediate",
    "forbidden": [
      "Warning",
      "Text",
      "Code",
      "Popup",
      "Problem",
      "Screen"
    ],
    "explanation": "Explain what Error Message does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-15-log-file",
    "target": "Log File",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "advanced",
    "forbidden": [
      "Entries",
      "Record",
      "Events",
      "Text",
      "Diagnostic",
      "Timestamp"
    ],
    "explanation": "Explain what Log File does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-16-diagnostic-report",
    "target": "Diagnostic Report",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "beginner",
    "forbidden": [
      "Analysis",
      "System",
      "Details",
      "Health",
      "Generate",
      "Troubleshoot"
    ],
    "explanation": "Explain what Diagnostic Report does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-17-remote-session",
    "target": "Remote Session",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "intermediate",
    "forbidden": [
      "Connect",
      "Screen Share",
      "Control",
      "Support",
      "Computer",
      "Online"
    ],
    "explanation": "Explain what Remote Session does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-18-access-permission",
    "target": "Access Permission",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "advanced",
    "forbidden": [
      "Rights",
      "Allow",
      "Denied",
      "Authorisation",
      "Role",
      "Security"
    ],
    "explanation": "Explain what Access Permission does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-19-user-account",
    "target": "User Account",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "beginner",
    "forbidden": [
      "Login",
      "Profile",
      "Username",
      "Password",
      "Identity",
      "Access"
    ],
    "explanation": "Explain what User Account does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-20-license-key",
    "target": "License Key",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "intermediate",
    "forbidden": [
      "Activation",
      "Code",
      "Product",
      "Entitlement",
      "Serial",
      "Software"
    ],
    "explanation": "Explain what License Key does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-21-product-version",
    "target": "Product Version",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "advanced",
    "forbidden": [
      "Release",
      "Build",
      "Number",
      "Edition",
      "Update",
      "About"
    ],
    "explanation": "Explain what Product Version does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-22-compatibility",
    "target": "Compatibility",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "beginner",
    "forbidden": [
      "Works With",
      "Supported",
      "Version",
      "Operating System",
      "Match",
      "Requirement"
    ],
    "explanation": "Explain what Compatibility does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-23-configuration",
    "target": "Configuration",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "intermediate",
    "forbidden": [
      "Settings",
      "Options",
      "Setup",
      "Parameters",
      "Change",
      "Environment"
    ],
    "explanation": "Explain what Configuration does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-24-installation",
    "target": "Installation",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "advanced",
    "forbidden": [
      "Setup",
      "Install",
      "Software",
      "Computer",
      "Wizard",
      "Deploy"
    ],
    "explanation": "Explain what Installation does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-25-uninstallation",
    "target": "Uninstallation",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "beginner",
    "forbidden": [
      "Remove",
      "Software",
      "Delete",
      "Program",
      "Computer",
      "Cleanup"
    ],
    "explanation": "Explain what Uninstallation does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-26-restart",
    "target": "Restart",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "intermediate",
    "forbidden": [
      "Reboot",
      "Power",
      "Again",
      "Computer",
      "Close",
      "Start"
    ],
    "explanation": "Explain what Restart does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-27-reset",
    "target": "Reset",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "advanced",
    "forbidden": [
      "Default",
      "Clear",
      "Restore",
      "Settings",
      "Password",
      "Start Over"
    ],
    "explanation": "Explain what Reset does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-28-restore-point",
    "target": "Restore Point",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "beginner",
    "forbidden": [
      "Recovery",
      "Earlier",
      "System",
      "Snapshot",
      "Undo",
      "Windows"
    ],
    "explanation": "Explain what Restore Point does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-29-network-connection",
    "target": "Network Connection",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "intermediate",
    "forbidden": [
      "Internet",
      "Online",
      "Cable",
      "Wi-Fi",
      "Link",
      "Communicate"
    ],
    "explanation": "Explain what Network Connection does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-30-latency",
    "target": "Latency",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "advanced",
    "forbidden": [
      "Delay",
      "Slow",
      "Network",
      "Response",
      "Milliseconds",
      "Lag"
    ],
    "explanation": "Explain what Latency does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-31-timeout",
    "target": "Timeout",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "beginner",
    "forbidden": [
      "Expired",
      "Wait",
      "Limit",
      "Session",
      "Response",
      "Delay"
    ],
    "explanation": "Explain what Timeout does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-32-crash",
    "target": "Crash",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "intermediate",
    "forbidden": [
      "Close",
      "Unexpected",
      "Application",
      "Stop",
      "Error",
      "Fail"
    ],
    "explanation": "Explain what Crash does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-33-freeze",
    "target": "Freeze",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "advanced",
    "forbidden": [
      "Unresponsive",
      "Stuck",
      "Screen",
      "Hang",
      "Click",
      "Stop"
    ],
    "explanation": "Explain what Freeze does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-34-data-loss",
    "target": "Data Loss",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "beginner",
    "forbidden": [
      "Missing",
      "Deleted",
      "Information",
      "Recovery",
      "Backup",
      "Gone"
    ],
    "explanation": "Explain what Data Loss does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-35-corrupted-file",
    "target": "Corrupted File",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "intermediate",
    "forbidden": [
      "Damaged",
      "Cannot Open",
      "Invalid",
      "Repair",
      "Data",
      "Broken"
    ],
    "explanation": "Explain what Corrupted File does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-36-duplicate-record",
    "target": "Duplicate Record",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "advanced",
    "forbidden": [
      "Copy",
      "Repeated",
      "Entry",
      "Same",
      "Database",
      "Remove"
    ],
    "explanation": "Explain what Duplicate Record does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-37-missing-feature",
    "target": "Missing Feature",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "beginner",
    "forbidden": [
      "Absent",
      "Option",
      "Button",
      "Unavailable",
      "Version",
      "Function"
    ],
    "explanation": "Explain what Missing Feature does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-38-known-issue",
    "target": "Known Issue",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "intermediate",
    "forbidden": [
      "Documented",
      "Bug",
      "Existing",
      "Problem",
      "Workaround",
      "Recognised"
    ],
    "explanation": "Explain what Known Issue does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-39-bug-report",
    "target": "Bug Report",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "advanced",
    "forbidden": [
      "Defect",
      "Ticket",
      "Steps",
      "Developer",
      "Issue",
      "Submit"
    ],
    "explanation": "Explain what Bug Report does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-40-feature-request",
    "target": "Feature Request",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "beginner",
    "forbidden": [
      "Enhancement",
      "New",
      "Suggestion",
      "Product",
      "Function",
      "Submit"
    ],
    "explanation": "Explain what Feature Request does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-41-knowledge-base",
    "target": "Knowledge Base",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "intermediate",
    "forbidden": [
      "Articles",
      "Documentation",
      "Search",
      "Solutions",
      "Help",
      "Information"
    ],
    "explanation": "Explain what Knowledge Base does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-42-ticket-queue",
    "target": "Ticket Queue",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "advanced",
    "forbidden": [
      "Cases",
      "Waiting",
      "Order",
      "Assigned",
      "Support",
      "Backlog"
    ],
    "explanation": "Explain what Ticket Queue does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-43-case-owner",
    "target": "Case Owner",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "beginner",
    "forbidden": [
      "Assigned",
      "Responsible",
      "Agent",
      "Ticket",
      "Handle",
      "Person"
    ],
    "explanation": "Explain what Case Owner does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-44-handover-notes",
    "target": "Handover Notes",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "intermediate",
    "forbidden": [
      "Transfer",
      "Summary",
      "Next Shift",
      "Details",
      "Case",
      "Colleague"
    ],
    "explanation": "Explain what Handover Notes does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-45-customer-impact",
    "target": "Customer Impact",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "advanced",
    "forbidden": [
      "Users",
      "Affected",
      "Business",
      "Problem",
      "Extent",
      "Consequences"
    ],
    "explanation": "Explain what Customer Impact does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-46-business-impact",
    "target": "Business Impact",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "beginner",
    "forbidden": [
      "Operations",
      "Revenue",
      "Users",
      "Severity",
      "Downtime",
      "Consequences"
    ],
    "explanation": "Explain what Business Impact does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-47-temporary-fix",
    "target": "Temporary Fix",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "intermediate",
    "forbidden": [
      "Short Term",
      "Workaround",
      "Later",
      "Issue",
      "Solution",
      "Permanent"
    ],
    "explanation": "Explain what Temporary Fix does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-48-permanent-fix",
    "target": "Permanent Fix",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "advanced",
    "forbidden": [
      "Final",
      "Solution",
      "Long Term",
      "Resolve",
      "Patch",
      "Issue"
    ],
    "explanation": "Explain what Permanent Fix does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-49-follow-up",
    "target": "Follow-up",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "beginner",
    "forbidden": [
      "Contact",
      "Later",
      "Check",
      "Update",
      "Customer",
      "Next"
    ],
    "explanation": "Explain what Follow-up does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-5-50-case-closure",
    "target": "Case Closure",
    "theme": "technical",
    "category": "Support Terminology",
    "level": "intermediate",
    "forbidden": [
      "Resolved",
      "Ticket",
      "End",
      "Confirm",
      "Customer",
      "Close"
    ],
    "explanation": "Explain what Case Closure does, when someone encounters it, and why it matters, using plain language rather than technical jargon."
  },
  {
    "id": "built-in-6-01-the-application-will-not-open",
    "target": "The Application Will Not Open",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-02-the-application-is-running-slowly",
    "target": "The Application Is Running Slowly",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-03-the-customer-forgot-their-password",
    "target": "The Customer Forgot Their Password",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-04-the-screen-is-frozen",
    "target": "The Screen Is Frozen",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-05-a-file-will-not-save",
    "target": "A File Will Not Save",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-06-the-customer-cannot-sign-in",
    "target": "The Customer Cannot Sign In",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-07-an-update-failed",
    "target": "An Update Failed",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-08-the-printer-is-not-responding",
    "target": "The Printer Is Not Responding",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-09-a-feature-has-disappeared",
    "target": "A Feature Has Disappeared",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-10-the-customer-sees-an-error-message",
    "target": "The Customer Sees an Error Message",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-11-the-internet-connection-keeps-dropping",
    "target": "The Internet Connection Keeps Dropping",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-12-the-customer-deleted-a-file",
    "target": "The Customer Deleted a File",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-13-the-same-problem-returned",
    "target": "The Same Problem Returned",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-14-the-customer-is-frustrated",
    "target": "The Customer Is Frustrated",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-15-the-customer-is-in-a-hurry",
    "target": "The Customer Is in a Hurry",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-16-the-customer-wants-an-immediate-fix",
    "target": "The Customer Wants an Immediate Fix",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-17-the-issue-needs-escalation",
    "target": "The Issue Needs Escalation",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-18-more-information-is-needed",
    "target": "More Information Is Needed",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-19-a-screenshot-is-needed",
    "target": "A Screenshot Is Needed",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-20-logs-are-needed",
    "target": "Logs Are Needed",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-21-a-restart-may-solve-the-problem",
    "target": "A Restart May Solve the Problem",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-22-a-workaround-is-available",
    "target": "A Workaround Is Available",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-23-there-is-no-immediate-fix",
    "target": "There Is No Immediate Fix",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-24-the-problem-cannot-be-reproduced",
    "target": "The Problem Cannot Be Reproduced",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-25-the-product-is-working-as-designed",
    "target": "The Product Is Working as Designed",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-26-the-request-is-out-of-scope",
    "target": "The Request Is Out of Scope",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-27-the-customer-has-an-older-version",
    "target": "The Customer Has an Older Version",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-28-the-device-is-not-supported",
    "target": "The Device Is Not Supported",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-29-the-license-has-expired",
    "target": "The License Has Expired",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-30-the-account-is-locked",
    "target": "The Account Is Locked",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-31-the-customer-has-no-admin-rights",
    "target": "The Customer Has No Admin Rights",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-32-the-wrong-file-was-uploaded",
    "target": "The Wrong File Was Uploaded",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-33-the-download-is-incomplete",
    "target": "The Download Is Incomplete",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-34-the-backup-is-missing",
    "target": "The Backup Is Missing",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-35-the-data-looks-incorrect",
    "target": "The Data Looks Incorrect",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-36-the-page-is-blank",
    "target": "The Page Is Blank",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-37-the-button-does-nothing",
    "target": "The Button Does Nothing",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-38-the-sound-is-not-working",
    "target": "The Sound Is Not Working",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-39-the-camera-is-not-detected",
    "target": "The Camera Is Not Detected",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-40-the-meeting-link-has-expired",
    "target": "The Meeting Link Has Expired",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-41-the-email-was-not-received",
    "target": "The Email Was Not Received",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-42-the-attachment-is-too-large",
    "target": "The Attachment Is Too Large",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-43-the-customer-used-the-wrong-password",
    "target": "The Customer Used the Wrong Password",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-44-the-time-zone-is-incorrect",
    "target": "The Time Zone Is Incorrect",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-45-the-date-format-is-wrong",
    "target": "The Date Format Is Wrong",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-46-the-session-timed-out",
    "target": "The Session Timed Out",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-47-the-change-requires-approval",
    "target": "The Change Requires Approval",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-48-the-fix-needs-testing",
    "target": "The Fix Needs Testing",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-49-the-case-is-ready-to-close",
    "target": "The Case Is Ready to Close",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  },
  {
    "id": "built-in-6-50-a-follow-up-call-is-required",
    "target": "A Follow-up Call Is Required",
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
    "explanation": "Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation."
  }
];

export const BUILT_IN_CARDS = CARD_DATA;

export const THEME_LABELS = {
  everyday: 'Everyday English',
  technical: 'Technical Talk',
  customer: 'Customer Challenge',
  mixed: 'Mixed Challenge'
};

export const DIFFICULTY_LABELS = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced'
};

export function forbiddenCount(difficulty) {
  return ({ beginner: 4, intermediate: 5, advanced: 6 })[difficulty] || 5;
}

export function eligibleCards(cards, theme) {
  return theme === 'mixed' ? cards : cards.filter((card) => card.theme === theme);
}
