export default cls => {
  const newClass = cls

  newClass.prototype.componentDidMount = function() {
    document.addEventListener('keydown', this.onKeyDown)
  }

  newClass.prototype.componentWillUnmount = function() {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  return newClass
}
