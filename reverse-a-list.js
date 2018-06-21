const LinkedList = require('./linked-list')
const { log } = require('./supplemental-functions')

function reverse(list) {
  let prevNode = null
  let currentNode = list.head
  while (currentNode !== null) {
    let tmpNext = currentNode.next
    currentNode.next = prevNode
    prevNode = currentNode
    currentNode = tmpNext
  }
  list.head = prevNode
}

function main() {
  const SLL = new LinkedList()
  SLL.insertFirst('Fourth')
  SLL.insertFirst('Third')
  SLL.insertFirst('Second')
  SLL.insertFirst('First')
  reverse(SLL)
  log(SLL)
}

if (require.main === module) {
  main()
}
