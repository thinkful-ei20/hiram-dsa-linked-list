const DoublyLinkedList = require('./doubly-linked-list')

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

  currentNode = list.tail.prev
  prevNode = list.tail
  while (currentNode) {
    let tmpPrev = currentNode.prev
    currentNode.prev = prevNode
    prevNode = currentNode
    currentNode = tmpPrev
  }
  list.tail = prevNode
}

function main() {
  const { log } = require('./supplemental-functions')
  const DLL = new DoublyLinkedList()
  DLL.insertFirst('Hello')
  DLL.insertFirst('Are you there?')
  DLL.insertFirst("It's me")
  DLL.insertFirst("I've been wondering how you been?")
  reverse(DLL)
  //log(DLL)
  console.log(DLL.head)
  console.log(DLL.tail)
}

if (require.main === module) {
  main()
}
