const DoublyLinkedList = require('./doubly-linked-list')

function reverse(list) {
  let currentNode = list.head
  
  while (currentNode) {
    let tmpNode = currentNode.next
    currentNode.next = currentNode.prev
    currentNode.prev = tmpNode

    currentNode = tmpNode
  }

  let tmpHead = list.head
  list.head = list.tail
  list.tail = tmpHead
}

function main() {
  const { log } = require('./supplemental-functions')
  const DLL = new DoublyLinkedList()
  DLL.insertFirst('Hello')
  DLL.insertFirst('Are you there?')
  DLL.insertFirst("It's me")
  DLL.insertFirst("I've been wondering how you been?")
  reverse(DLL)
  log(DLL)
}

if (require.main === module) {
  main()
}
