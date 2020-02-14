## les test:

## Pourquoi des test automatisés ? 

- Pour etre sur que notre nouveau code fonctionne
- Pour etre sur que nos modifications n'ont rien cassé
- Pour refactoriser en confiance
- Pour deployer plus souvent

## test-first (Test-Driven Development)

On ecrit le test avant le code (le test plante, evidemment)
Cela nous foce a nous mettre dans la peau de l'utilisateur du codne 
c'est le mode idéal

## test after 

laisser les choses évoluer afin de ne pas 

## les briques d'un outillage de test :
exemple : AssertionError , qui vérifie qu'une condition est remplie.
on utlise des bibliotheques prédéfinies

```javascript
function assertWeRunOnMondays() {
  const todaysWeekDay = new Date().getDay()
  if (todaysWeekDay !== 1) {
    throw new AssertionError('We are supposed to only run on Mondays')
  }
}
```

## tests et suites :

- Test : petit bloc de code vérifiant un point précis, plus ou moins riche
    - si besoins, mise en place
    - simulation (appel des fonctions, temps ecoulé)
    - vérification des attentes 

- Généralement regroupé en suites, un fichier par suite

## Couverture de tests :
- On peux mesurer finement la part du code sollicité par les tests
    - pas seulement ligne par ligne, mais à l'expression près
    - permet de repérer les codes critiques non testés
- On peut fixer des objectifs ou valeur planchers contraignants
  - Taux minitmum de te couverture (ex:90%)
  - refus d'intégration de code qui fait passer le taux sous le seuil. 

## Harnais : 

un harnais de test est un progrmmae qui agit quelque sort comme le chef d'orchestre de nos tests.

Il existe de nombreux harnais pour javascript, les plus populaire sont Moch, Jest et Jasmine



