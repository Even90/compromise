/* eslint-disable no-console, no-unused-vars */
import nlp from './src/two.js'
// import plg from './plugins/dates/src/plugin.js'
// nlp.plugin(plg)

// nlp.verbose('tagger')

// let doc = nlp('one match two three')
// let a = doc.match('match two')
// let b = a.remove('two')
// console.log(a)
// // a.debug()
// // b.debug()
// console.log(b)

// nlp(` from malnutrition, chest diseases, cardiovascular disorders, skin problems, infectious diseases and the aftereffects of assaults and rape.`).debug()






// let net = nlp.buildNet([
//   { match: 'every single #Noun' },
//   { match: 'not (a|one) #Singular' },
// ])
// let doc = nlp('i saw every single house. i met none. ')
// doc.match(net).debug()
// let m = nlp([['first.', 'foo bar']]).debug()
// let matches = [
//   { match: 'third' },
// ]
// let net = nlp.buildNet(matches)
// let doc = nlp(`first. second. third`)
// doc = doc.reverse()
// let res = doc.sweep(net)
// console.log(res.view)
// res.view.soften()
// res.view.debug()
// res.found[0].view.debug()



// res.found[0].view.debug()

// doc = nlp(`first. second. third`)
// doc = doc.reverse()
// res = doc.match('third')
// console.log(res)



// console.log(res.found[0].view)

// let doc = nlp(`first. second. third`)
// doc = doc.reverse()
// let m = doc.match('third')
// m.soften()
// console.log(m)
// m.debug()



// conjugation issues
// let txt = ''
// txt = 'i will go on a boat'
// txt = `why is the doc`
// txt = 'take part'
// txt = 'fulfil'
// txt = 'outgrow'
// txt = 'prod'
// txt = 'shun'
// txt = 'slam'
// txt = 'collide'
// let doc = nlp(txt)
// doc.debug()
// console.log(doc.verbs().conjugate()[0])



// nlp('it is green and he is friendly.').sentences().toFutureTense().debug()

// isSingular bug
// nlp(`i saw the game that the Toronto Maple Leafs won`).verbs().isSingular().debug()


// contraction issue
// let txt = `doesn't there's i'd i'll`
// let doc = nlp(txt).debug()



// let doc = nlp("the exploding returns")
// console.log(nlp.parseMatch('québec'))
// doc.debug()
// const doc = nlp("Steve talked to Johnson LLC")
// doc.debug()
// Normal: some common drugs conflatin aspirin statin statins ivermectin amoxicillin augmentin

