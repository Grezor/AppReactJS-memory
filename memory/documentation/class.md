```JS
// une classe ave ES2015 
class Person {
  constructor(first, last) {
    this.first = first
    this.last = last
  }

  fullName() {
    return `${this.first} ${this.last}`
  }
}
```

lorsque la classe en spécialise une autre, on emploi alors extends pour le signaler. On peux ensuite utiliser **super** pour recourir au constructeur hérité, ou aux méthodes héritées dans leurs version originales : 

```javascript
class CoolComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { collapsed: props.initialCollapsed }
  }

  render() {
    // …
  }
}
```

- Intégrer **defaultProps** et **propTypes**
- Il est bien sur possible de déclarer ces propriétés statiques comme on le fesais pour les composants définis par fonctions : après coup, sur l'identifiant de la fonction. Mais avec les initialiseurs de champs prévus dans ES2018 et déja implémentés un peu partout, il est préférable de les listes en haut du cours de classe avec le mot **static**

```javascript
class CoolComponent extends Component {
  static defaultProps = {
    initialCollapsed: false,
  }

  static propTypes = {
    initialCollapsed: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(CoolItemPropType).isRequired,
  }

  constructor(props) {
    super(props)
    this.state = { collapsed: props.initialCollapsed }
  }

  render() {
    // …
  }
}
```
