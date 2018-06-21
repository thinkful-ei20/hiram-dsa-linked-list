const LinkedList = require('./linked-list')

function main() {
  const SLL = new LinkedList()

  SLL.insertFirst('Apollo')
  SLL.insertFirst('Boomer')
  SLL.insertFirst('Helo')
  SLL.insertFirst('Husker')
  SLL.insertFirst('Starbuck')

  SLL.insertFirst('Tauhida')

  SLL.remove('squirrel')

  SLL.insertBefore('Boomer', 'Athena')
  SLL.insertAfter('Helo', 'Hotdog')
  SLL.insertAt(2, 'Kat')

  SLL.remove('Tauhida')

  return SLL
}

if (require.main === module) {
  main()
}

module.exports = main()
