export default [
  // amusing his aunt
  // { match: '[#Adjective] #Possessive #Noun', group: 0, tag: 'Verb', reason: 'gerund-his-noun' },
  // loving you
  // { match: '[#Adjective] (us|you)', group: 0, tag: 'Gerund', reason: 'loving-you' },
  // slowly stunning
  { match: '(slowly|quickly) [#Adjective]', group: 0, tag: 'Verb', reason: 'slowly-adj' },
  // does mean
  { match: 'does (#Adverb|not)? [#Adjective]', group: 0, tag: 'PresentTense', reason: 'does-mean' },
  // i mean
  { match: 'i (#Adverb|do)? not? [mean]', group: 0, tag: 'PresentTense', reason: 'i-mean' },
  //will secure our
  { match: 'will #Adjective', tag: 'Auxiliary Infinitive', reason: 'will-adj' },
  //he disguised the thing
  { match: '#Pronoun [#Adjective] #Determiner #Adjective? #Noun', group: 0, tag: 'Verb', reason: 'he-adj-the' },
  //is eager to go
  { match: '#Copula [#Adjective] to #Verb', group: 0, tag: 'Verb', reason: 'adj-to' },
  //want to be sedated
  // { match: '(want|try|need) to be [#PastTense]', group: 0, tag: 'Adjective', reason: 'want-to-be' },
  //should be sedated
  // { match: '#Modal be [#PastTense]', group: 0, tag: 'Adjective', reason: 'should-be-x' },
  // rude and insulting
  { match: '#Adjective and [#Gerund] !#Preposition?', group: 0, tag: 'Adjective', reason: 'rude-and-x' },
  // were over cooked
  { match: '#Copula #Adverb? (over|under) [#PastTense]', group: 0, tag: 'Adjective', reason: 'over-cooked' },
  //felt loved
  {
    match: '(seem|seems|seemed|appear|appeared|appears|feel|feels|felt|sound|sounds|sounded) (#Adverb|#Adjective)? [#PastTense]',
    group: 0,
    tag: 'Adjective',
    reason: 'felt-loved',
  },
]
