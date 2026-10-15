// All the words and numbers on the site live here.
// Edit this file to change the content. No need to touch the components.

const email = 'shobhs.gupta.02@gmail.com'

export const profile = {
  name: 'Shobha Gupta',
  degree: 'MS in Data Science, University of Maryland',
  email,
  links: {
    github: 'https://github.com/Under-the-stars',
    linkedin: 'https://www.linkedin.com/in/shobha-gupta-572396268/',
    email: `mailto:${email}`,
  },
}

// The first theme is the default. Visitors can switch with the buttons in the header.
export const themes = [
  { id: 'manga', name: 'Manga' },
  { id: 'pit', name: 'Pit wall' },
  { id: 'graph', name: 'Graph paper' },
]

export const hero = {
  headline: 'I build AI agents that do the boring work so humans don’t have to.',
  subline:
    'Mine retry before they complain, which is more than I can say for most of us.',
  intro:
    'Junior AI Engineer at Momenttext, researcher at Causify, and owner of an MS in Data Science from the University of Maryland.',
}

export const about = [
  'I’m a Junior AI Engineer at Momenttext, where I built a seven-agent LangGraph pipeline that turns messy, multilingual meeting transcripts into clean, structured reports. It cut manual documentation effort by 80 to 90%. Every step is checked against a strict schema, so bad outputs get sent back instead of sneaking through. Silent failures are my mortal enemy.',
  'Before that, I wrangled 5M+ real estate records at Square Yards, built forecasting models and dashboards at Gxpress, and taught as a TA at the University of Maryland while earning my MS in Data Science. I also fine-tuned an image model on jewelry prompts, which got published at IEEE CONIT 2024, because apparently I like making computers do fancy things.',
  'I’m most useful when the problem is messy, the data is worse, and someone asks, “Can we automate this?”',
]

export const toolkit = [
  'Python',
  'SQL',
  'LangGraph',
  'LangChain',
  'RAG',
  'PyTorch',
  'Docker',
]

export const toolkitNote = 'Plus a healthy distrust of any output nobody validated.'

export const certifications = ['Microsoft PL-300', 'Microsoft DP-700']

// Add a role title or dates to any job by adding `role` or `when`.
export const experience = {
  now: [
    {
      org: 'Momenttext',
      role: 'Junior AI Engineer',
      quip: 'Seven agents, one pipeline, zero tolerance for silent failures.',
      points: [
        'Built a seven-agent LangGraph pipeline that turns messy, multilingual meeting transcripts into clean, structured reports.',
        'Cut manual documentation effort by 80 to 90%.',
        'Checks every step against a strict schema, so bad outputs get sent back instead of sneaking through.',
      ],
    },
    {
      org: 'Causify',
      role: 'Researcher',
      when: 'Aug 2026 to present',
      quip: 'Asking whether founder age drives startup success, with causal inference instead of vibes.',
      points: [
        'Designed the causal diagram that separates confounders from mediators, and planned the matching and sensitivity checks.',
        'Built the data pipeline behind the study, from raw company data to founder-level records.',
        'Delivered the dataset through reviewed pull requests, with a README and a data-generation writeup.',
      ],
    },
  ],
  before: [
    {
      org: 'Square Yards',
      quip: 'Five million rows walk into a database, and every one has opinions about formatting.',
      points: ['Wrangled 5M+ real estate records.'],
    },
    {
      org: 'Gxpress',
      quip: 'Forecasting is just guessing with better manners.',
      points: ['Built forecasting models and dashboards.'],
    },
    {
      org: 'University of Maryland',
      role: 'Graduate teaching assistant',
      quip: 'Taught statistics on purpose.',
      points: [
        'TA for Statistics for Information Science, while earning my MS in Data Science.',
      ],
    },
  ],
}

// Steps of the retry demo are in the component. This is just the caption.
export const retryCaption =
  'A simplified sketch. The real pipeline has seven agents and stronger opinions.'

export const paper = {
  heading: 'Teaching a diffusion model about jewelry',
  title:
    'Revolutionizing Jewellery Design through Stable Diffusion Model: Bridging the Gap between Consumer Preferences and Designer Creativity',
  venue:
    '2024 4th International Conference on Intelligent Technologies (CONIT), Bangalore, India',
  doi: 'https://doi.org/10.1109/CONIT61985.2024.10626785',
  blurb:
    'I fine-tuned an image model on jewelry prompts, so what customers describe and what designers imagine can meet somewhere in the middle. It got published at IEEE CONIT 2024.',
  keywords: [
    'Stable Diffusion',
    'LoRA',
    'Text-to-image',
    'Diffusion models',
    'Generative AI',
    'Transfer learning',
  ],
  citation:
    'S. Gupta, S. Vishwakarma and K. Srivastava, "Revolutionizing Jewellery Design through Stable Diffusion Model: Bridging the Gap between Consumer Preferences and Designer Creativity," 2024 4th International Conference on Intelligent Technologies (CONIT), Bangalore, India, 2024, pp. 1-8, doi: 10.1109/CONIT61985.2024.10626785.',
}

export const project = {
  question: 'Does founder age drive startup success?',
  summary:
    'A causal inference study with a faculty advisor and the research team at Causify. I worked on the causal design and built the founder-level dataset the team analyzes.',
  period: 'Aug 2026 to present',
  place: 'Remote',
  tags: [
    'Causal inference',
    'DAGs',
    'Propensity score matching',
    'Rosenbaum bounds',
    'Fuzzy name matching',
    'Data pipelines',
    'PhantomBuster',
    'GitHub pull requests',
  ],
}

// Steps of the data pipeline. Numbers come from the project writeup.
export const pipelineSteps = [
  {
    id: 'crunchbase',
    title: 'Crunchbase export',
    stat: '~54K',
    unit: 'companies',
    text: 'The starting point is a large Crunchbase export. It has a lot of companies, but not the founder details the study needs.',
  },
  {
    id: 'match',
    title: 'Match to Y Combinator',
    stat: '1,005',
    unit: 'companies linked',
    text: 'Company names rarely match exactly across sources, so I matched on exact names first and then used fuzzy matching for the near misses. That linked the Crunchbase companies to the Y Combinator data.',
  },
  {
    id: 'reshape',
    title: 'Reshape to founders',
    stat: '1,738',
    unit: 'founder-level records',
    text: 'The study asks about founders, not companies. I reshaped 964 companies into 1,738 founder-level records so each founder can be analyzed on their own.',
  },
  {
    id: 'linkedin',
    title: 'Source and verify profiles',
    stat: '1,500',
    unit: 'profiles verified',
    text: 'Using the lab’s PhantomBuster setup, I sourced founder LinkedIn profiles, then cleaned and verified 1,500 of them.',
  },
  {
    id: 'status',
    title: 'Check company status',
    stat: '964',
    unit: 'companies checked',
    text: 'I checked the current status of all 964 companies, since startup success is the outcome the study measures.',
  },
  {
    id: 'delivery',
    title: 'Deliver to the team',
    stat: 'PRs',
    unit: 'reviewed in the lab repo',
    text: 'The dataset reached the team through pull requests in the lab’s shared GitHub repo. I also wrote a project README and a data-generation writeup covering methods, sources, and limitations.',
  },
]

// The causal diagram. These nodes are ILLUSTRATIVE placeholders.
// Replace them with the team’s final DAG (and set `illustrative` to false)
// once your advisor confirms what can be shown publicly.
export const dag = {
  illustrative: true,
  nodes: [
    {
      id: 'age',
      label: 'Founder age',
      role: 'treatment',
      x: 110,
      y: 200,
      text: 'The thing the study asks about. We want to know whether it changes how startups turn out.',
    },
    {
      id: 'success',
      label: 'Startup success',
      role: 'outcome',
      x: 650,
      y: 200,
      text: 'What the study measures. This is why the pipeline checks the current status of every company.',
    },
    {
      id: 'cohort',
      label: 'Founding year',
      role: 'confounder',
      x: 250,
      y: 55,
      text: 'Market conditions and who becomes a founder both change over time, so founding year can affect age and success together.',
    },
    {
      id: 'ecosystem',
      label: 'Location',
      role: 'confounder',
      x: 520,
      y: 55,
      text: 'Some places have more funding and more experienced founders, so location can push on both age and success.',
    },
    {
      id: 'experience',
      label: 'Industry experience',
      role: 'mediator',
      x: 290,
      y: 345,
      text: 'Older founders tend to have more of it, and it can help a company succeed. That makes it part of how age could matter.',
    },
    {
      id: 'funding',
      label: 'Funding access',
      role: 'mediator',
      x: 530,
      y: 345,
      text: 'Age might change who investors back, and funding then affects success. It sits on the path from age to success.',
    },
  ],
  edges: [
    ['cohort', 'age'],
    ['cohort', 'success'],
    ['ecosystem', 'age'],
    ['ecosystem', 'success'],
    ['age', 'experience'],
    ['experience', 'success'],
    ['age', 'funding'],
    ['funding', 'success'],
    ['age', 'success'],
  ],
}

export const roles = {
  treatment: {
    name: 'Treatment',
    text: 'The thing we want to know the effect of.',
  },
  outcome: {
    name: 'Outcome',
    text: 'What we measure to see the effect.',
  },
  confounder: {
    name: 'Confounder',
    text: 'Affects both age and success. We adjust for these, or we could mistake their effect for the effect of age.',
  },
  mediator: {
    name: 'Mediator',
    text: 'Sits on the path from age to success. We leave these alone when estimating the total effect, because adjusting for them would remove part of the effect we are looking for.',
  },
}

export const methods = [
  {
    title: 'Propensity score matching',
    status: 'Planned',
    text: 'Pairs up companies that look alike on the confounders we measured but differ in founder age. Comparing those pairs is a fairer test than comparing everyone.',
  },
  {
    title: 'Rosenbaum bounds',
    status: 'Planned',
    text: 'Matching can only account for what we measured. This check asks how strong a hidden factor would have to be to overturn the result.',
  },
]

// Off the clock. Add favorites to the lists below and they show up on the page.
export const fun = {
  heading: 'Off the clock',
  intro: 'When I’m not making computers do fancy things, this is where my time goes.',
  anime: {
    title: 'Anime',
    text: 'I watch a lot of it. Anime taught me that every hard problem is a boss fight, every boss fight comes with a training arc, and nothing important gets solved in the first episode. I debug the same way.',
    favorites: [], // e.g. ['Show one', 'Show two']
  },
  f1: {
    title: 'Formula 1',
    text: 'Huge fan. It’s engineering, data, and strategy at 300 km/h, with a call from the pit wall that looks like genius or a disaster depending on the final lap. Think you have the reflexes? Five lights, then nothing, then go.',
    favorites: [], // e.g. ['Team', 'Driver']
  },
  cars: {
    title: 'Cars',
    text: 'I love cars, and one day I want to build one myself. Right now the ambition is a few steps ahead of the toolbox, which is a perfectly good place to start.',
  },
}

// Flip `done` to true as you hit each stage.
export const carBuild = [
  { label: 'Decide that I’m going to build a car', done: true },
  { label: 'Watch F1 races, strictly for research', done: true },
  { label: 'Learn how an engine actually works', done: false },
  { label: 'Sketch the first design', done: false },
  { label: 'Find a garage and some questionable tools', done: false },
  { label: 'Build the thing', done: false },
]

// Research projects from GitHub. Numbers come from the project README.
export const researchIndex = [
  { href: '#paper', label: 'Published paper' },
  { href: '#causify', label: 'Founder age study' },
  { href: '#benchmark', label: 'Agent benchmark' },
  { href: '#forecasting', label: 'Transformer forecasting' },
]

export const benchmarkProject = {
  title: 'Do agents that check each other’s work beat one-shot AI?',
  tag: 'Course project, DATA605, University of Maryland, Spring 2026',
  repo: 'https://github.com/Under-the-stars/Benchmarking-in-Agentic-Reasoning-for-Data-Science-',
  blurb:
    'I built a five-agent data science system in LangGraph and pitted it against a single-agent assistant and AutoML. First on clean data, then on data I deliberately broke.',
  questions: [
    'Does a cycle of specialized agents make fewer hallucinations and logic errors than a single agent?',
    'Does a reviewer node produce more reliable results than one-shot generation?',
    'How do the different setups recover from corrupted or ambiguous data?',
  ],
  agentsIntro:
    'Five agents pass the work along, and the fourth one is allowed to say no. Click through them.',
  agents: [
    {
      id: 'planner',
      title: 'Planner',
      text: 'Reads the schema, decides what kind of problem this is, and lists what could go wrong. Runs on Llama 3.2.',
    },
    {
      id: 'eda',
      title: 'EDA Analyst',
      text: 'Cleans the data, handles missing values, and hunts for outliers.',
    },
    {
      id: 'architect',
      title: 'ML Architect',
      text: 'Trains Random Forest, Logistic Regression, and Gradient Boosting models and keeps the best one by F1.',
    },
    {
      id: 'reviewer',
      title: 'Quality Reviewer',
      text: 'The one who says no. It checks recall, uses SHAP to look for target leakage, and flags impossible values. A single feature carrying more than 95% of the SHAP importance counts as leakage. If something is off, the work goes back to the ML Architect or the EDA Analyst. If not, it moves on.',
    },
    {
      id: 'writer',
      title: 'Report Writer',
      text: 'Writes the final report, including the mistakes that got caught and how they were fixed.',
    },
  ],
  datasetsNote:
    'Three datasets: Heart Disease (303 patients), NYC Yellow Taxi (sampled to 50K trips), and Amazon Beauty Reviews (sampled to 50K reviews).',
  findings: [
    'On clean data, LangGraph matched or beat both baselines on every dataset.',
    'On broken data, it lost less. With 15% of labels flipped and 5% impossible values added, it stayed ahead of the single agent on all three datasets. My read: the Quality Reviewer catches errors before the report gets written.',
    'Leakage is sneaky. On NYC Taxi, payment_type gave away the tipping answer, and taking it out dropped performance sharply.',
    'SHAP showed what the models leaned on, from heart rate and chest pain type on Heart Disease to title length on Amazon reviews.',
  ],
  tags: [
    'LangGraph',
    'Llama 3.2',
    'Ollama',
    'SHAP',
    'AutoGluon',
    'Random Forest',
    'Gradient Boosting',
    'Docker',
  ],
}

// F1 scores in percent, in the same order as `datasets`.
export const benchmark = {
  datasets: ['Heart Disease', 'NYC Taxi', 'Amazon Reviews'],
  systems: [
    { id: 'langgraph', name: 'LangGraph agents', short: 'LangGraph', color: '--s1' },
    { id: 'single', name: 'Single agent (ChatGPT Advanced Data Analysis)', short: 'Single agent', color: '--s2' },
    { id: 'autogluon', name: 'AutoGluon', short: 'AutoGluon', color: '--s3' },
  ],
  scenarios: {
    clean: {
      label: 'Clean data',
      note: 'F1 score on each dataset as it came.',
      values: {
        langgraph: [88.14, 89.41, 83.27],
        single: [88.14, 88.42, 76.75],
        autogluon: [73.08, 89.27, 82.74],
      },
    },
    messy: {
      label: 'Broken data',
      note: 'F1 score after flipping 15% of labels and adding 5% impossible values. This comparison covers LangGraph and the single agent.',
      values: {
        langgraph: [68.0, 83.56, 78.82],
        single: [58.33, 81.28, 70.49],
      },
    },
  },
}

export const forecastingProject = {
  title: 'Forecasting stock prices with a Transformer',
  tag: 'Course project, Fall 2025',
  repo: 'https://github.com/Under-the-stars/Time-Series-Forecasting-with-Transformers-',
  blurb:
    'A Transformer built in JAX and Flax that forecasts stock prices from historical data, with Amazon’s daily prices as the worked example.',
  points: [
    'Uses self-attention to pick up patterns across time instead of looking at one day at a time.',
    'Builds time-series sequences, splits train and test, tunes hyperparameters, and forecasts several steps ahead.',
    'Evaluated with metrics like mean absolute error, plus plots of predictions against actual prices.',
    'Packaged with Docker, notebooks, and API docs so it runs the same everywhere.',
  ],
  note: 'Not financial advice. Please do not fund your retirement with a course project.',
  tags: ['JAX', 'Flax', 'Transformers', 'Time series', 'Python', 'Docker', 'Jupyter'],
}

export const contact =
  'Happy to chat about agents, data, or why your spreadsheet shouldn’t be someone’s full-time job.'
