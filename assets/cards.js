// 300 built-in coaching cards: six categories × 50 cards.
// Difficulty changes the number of forbidden words shown; every card works at every level.
const GROUPS = [
  {
    theme: 'everyday', category: 'Everyday Objects',
    pool: ['object','everyday','use','hold','home','carry','item','common','need','place','person','thing'],
    targets: `Umbrella|Backpack|Toothbrush|Alarm Clock|Water Bottle|Scissors|Mirror|Key|Wallet|Headphones|Notebook|Stapler|Flashlight|Pillow|Blanket|Suitcase|Refrigerator|Microwave|Kettle|Spoon|Fork|Plate|Mug|Chair|Table|Curtain|Doorbell|Remote Control|Washing Machine|Bicycle|Helmet|Sunglasses|Watch|Calendar|Pen|Eraser|Ruler|Basket|Towel|Soap|Comb|Charger|Camera|Candle|Thermometer|Bandage|Lock|Envelope|Ladder|Fan`.split('|')
  },
  {
    theme: 'everyday', category: 'Places & Activities',
    pool: ['go','people','place','time','visit','outside','inside','together','enjoy','do','area','activity'],
    targets: `Grocery Shopping|Bus Stop|Train Station|Library|Restaurant|Airport|Hospital|Playground|Museum|Beach|Park|Cinema|Post Office|Bank|Gym|Classroom|Market|Hotel|Pharmacy|Café|Gardening|Cooking Dinner|Morning Walk|Birthday Party|Road Trip|Camping|Swimming|Cycling|Reading a Book|Watching a Movie|Taking a Photograph|Playing Cricket|Listening to Music|Cleaning the House|Doing Laundry|Ordering Food|Catching a Bus|Visiting a Doctor|Booking a Ticket|Crossing the Road|Waiting in a Queue|Attending a Wedding|Going on Holiday|Learning to Drive|Buying a Gift|Having a Picnic|Walking a Dog|Meeting a Friend|Working from Home|Going to Bed`.split('|')
  },
  {
    theme: 'everyday', category: 'Actions & Situations',
    pool: ['action','person','happen','feel','situation','do','say','time','result','move','think','moment'],
    targets: `Apologising|Giving Directions|Making a Decision|Asking for Help|Solving a Puzzle|Losing Something|Finding a Bargain|Missing a Train|Changing a Plan|Keeping a Secret|Making a Promise|Telling a Joke|Winning a Prize|Learning a Skill|Breaking a Habit|Sharing an Idea|Giving a Compliment|Introducing Yourself|Remembering a Name|Forgetting an Appointment|Choosing a Meal|Borrowing an Item|Returning a Purchase|Inviting a Guest|Declining an Invitation|Arriving Late|Waking Up Early|Getting Lost|Feeling Surprised|Feeling Nervous|Feeling Proud|Feeling Confused|Feeling Relieved|Disagreeing Politely|Explaining a Mistake|Following Instructions|Comparing Two Options|Describing a Person|Describing a Journey|Planning a Weekend|Packing a Bag|Starting a Conversation|Ending a Call|Making a Suggestion|Giving Feedback|Requesting More Time|Checking Your Work|Correcting Information|Waiting Patiently|Celebrating Success`.split('|')
  },
  {
    theme: 'technical', category: 'Technology & Software',
    pool: ['computer','system','device','software','data','network','digital','screen','application','internet','process','file'],
    targets: `Server|Database|Browser|Operating System|Mobile Application|Cloud Storage|Wi-Fi|Router|Firewall|Password Manager|Two-Factor Authentication|Backup|Cache|Cookie|Download|Upload|Spreadsheet|Presentation|Video Call|Email Attachment|Search Engine|QR Code|Bluetooth|USB Drive|Printer Driver|Software Update|User Interface|Dashboard|Notification|Screenshot|Keyboard Shortcut|File Format|Folder|Recycle Bin|Web Link|Online Form|Chatbot|Artificial Intelligence|Virtual Machine|Source Code|API|Encryption|Bandwidth|Touchscreen|Webcam|Microphone|Battery Saver|Dark Mode|Location Services|Automatic Save`.split('|')
  },
  {
    theme: 'technical', category: 'Support Terminology',
    pool: ['support','problem','system','user','check','technical','solve','information','process','service','cause','result'],
    targets: `Incident|Service Request|Troubleshooting|Root Cause|Workaround|Resolution|Escalation|Priority|Severity|Service-Level Agreement|Reproduction Steps|Expected Behaviour|Actual Behaviour|Error Message|Log File|Diagnostic Report|Remote Session|Access Permission|User Account|License Key|Product Version|Compatibility|Configuration|Installation|Uninstallation|Restart|Reset|Restore Point|Network Connection|Latency|Timeout|Crash|Freeze|Data Loss|Corrupted File|Duplicate Record|Missing Feature|Known Issue|Bug Report|Feature Request|Knowledge Base|Ticket Queue|Case Owner|Handover Notes|Customer Impact|Business Impact|Temporary Fix|Permanent Fix|Follow-up|Case Closure`.split('|')
  },
  {
    theme: 'customer', category: 'Customer Challenge',
    pool: ['customer','problem','issue','help','support','fix','explain','system','error','steps','resolve','try'],
    targets: `The Application Will Not Open|The Application Is Running Slowly|The Customer Forgot Their Password|The Screen Is Frozen|A File Will Not Save|The Customer Cannot Sign In|An Update Failed|The Printer Is Not Responding|A Feature Has Disappeared|The Customer Sees an Error Message|The Internet Connection Keeps Dropping|The Customer Deleted a File|The Same Problem Returned|The Customer Is Frustrated|The Customer Is in a Hurry|The Customer Wants an Immediate Fix|The Issue Needs Escalation|More Information Is Needed|A Screenshot Is Needed|Logs Are Needed|A Restart May Solve the Problem|A Workaround Is Available|There Is No Immediate Fix|The Problem Cannot Be Reproduced|The Product Is Working as Designed|The Request Is Out of Scope|The Customer Has an Older Version|The Device Is Not Supported|The License Has Expired|The Account Is Locked|The Customer Has No Admin Rights|The Wrong File Was Uploaded|The Download Is Incomplete|The Backup Is Missing|The Data Looks Incorrect|The Page Is Blank|The Button Does Nothing|The Sound Is Not Working|The Camera Is Not Detected|The Meeting Link Has Expired|The Email Was Not Received|The Attachment Is Too Large|The Customer Used the Wrong Password|The Time Zone Is Incorrect|The Date Format Is Wrong|The Session Timed Out|The Change Requires Approval|The Fix Needs Testing|The Case Is Ready to Close|A Follow-up Call Is Required`.split('|')
  }
];

const LEVELS = ['beginner', 'intermediate', 'advanced'];
const slug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const titleCase = (value) => value.replace(/\b\w/g, (letter) => letter.toUpperCase());

function makeForbidden(target, pool, index) {
  const targetWords = new Set(target.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean));
  const rotated = [...pool.slice(index % pool.length), ...pool.slice(0, index % pool.length)];
  return rotated.filter((word, position, all) => !targetWords.has(word.toLowerCase()) && all.indexOf(word) === position).slice(0, 6).map(titleCase);
}

function explanationFor(card) {
  if (card.theme === 'technical') return `Explain what ${card.target} does, when someone encounters it, and why it matters, using plain language rather than technical jargon.`;
  if (card.theme === 'customer') return `Describe this customer situation calmly, acknowledge the impact, explain the next step, and set a clear expectation.`;
  return `Describe ${card.target} by explaining its purpose, context, appearance, or result without using the obvious words.`;
}

export const BUILT_IN_CARDS = GROUPS.flatMap((group, groupIndex) => group.targets.map((target, index) => {
  const card = {
    id: `built-in-${groupIndex + 1}-${String(index + 1).padStart(2, '0')}-${slug(target)}`,
    target,
    theme: group.theme,
    category: group.category,
    level: LEVELS[index % LEVELS.length],
    forbidden: makeForbidden(target, group.pool, index)
  };
  return { ...card, explanation: explanationFor(card) };
}));

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
