// All the words and numbers on the site live here.
// Edit this file to change the content. No need to touch the components.

export const profile = {
  name: 'Shobha Gupta',
  degree: 'MS in Data Science, University of Maryland',
  links: {
    github: 'https://github.com/YOUR-USERNAME', // TODO: replace
    linkedin: 'https://www.linkedin.com/in/shobha-gupta-572396268/',
    email: 'mailto:YOUR-EMAIL@example.com', // TODO: replace
  },
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

export const role = [
  'Designed the DAG to separate confounders from mediators, and planned the matching and sensitivity checks.',
  'Built the data pipeline that merges Crunchbase and Y Combinator data and produces founder-level records.',
  'Sourced, cleaned, and verified founder LinkedIn profiles, and checked the status of every company.',
  'Delivered the dataset through reviewed pull requests, with a README and a data-generation writeup.',
]
