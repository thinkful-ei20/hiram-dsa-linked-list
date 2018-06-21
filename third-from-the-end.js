const LinkedList = require('./linked-list')

function third(list) {
  let currentNode = list.head
  if (!currentNode) return null

  const buffer = new Array(3)
  while (currentNode !== null) {
    buffer.shift()
    buffer.push(currentNode)
    currentNode = currentNode.next
  }

  return buffer[0]
}

function main() {
  const SLL = new LinkedList()
  SLL.insertFirst('First')
  SLL.insertFirst('Second')
  SLL.insertFirst('Third')
  SLL.insertFirst('Fourth')
  console.log(third(SLL))
}

if (require.main === module) {
  main()
}
