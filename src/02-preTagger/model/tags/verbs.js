export default {
  Verb: {
    not: ['Noun', 'Adjective', 'Adverb', 'Value', 'Expression'],
  },
  PresentTense: {
    is: 'Verb',
    not: ['PastTense', 'FutureTense'],
  },
  Infinitive: {
    is: 'PresentTense',
    not: ['PastTense', 'Gerund'],
  },
  Imperative: {
    is: 'Infinitive',
  },
  Gerund: {
    is: 'PresentTense',
    not: ['PastTense', 'Copula', 'FutureTense'],
  },
  PastTense: {
    is: 'Verb',
    not: ['FutureTense'],
  },
  FutureTense: {
    is: 'Verb',
  },
  Copula: {
    is: 'Verb',
  },
  Modal: {
    is: 'Verb',
    not: ['Infinitive'],
  },
  PerfectTense: {
    is: 'Verb',
    not: 'Gerund',
  },
  Pluperfect: {
    is: 'Verb',
  },
  Participle: {
    is: 'PastTense',
  },
  PhrasalVerb: {
    is: 'Verb',
  },
  Particle: {
    is: 'PhrasalVerb',
    not: ['PastTense', 'PresentTense', 'FutureTense', 'Copula', 'FutureTense', 'Gerund'],
  },
  Auxiliary: {
    not: ['Noun', 'Adjective', 'Value'],
  },
}
