const LinkedList = require('./linked-list')
const { size } = require('./supplemental-functions')

function middle(list) {
  let i = size(list)
  if (i % 2 === 0) i /= 2
  // if list has even size, get position of lower middle element
  else i = Math.floor(i / 2) + 1 // if list has odd size, get position of middle element
  // position is index plus 1 for more convenient looping

  let currentNode = list.head
  if (!currentNode) return null
  for (let j = 0; j < i - 1; j++) {
    currentNode = currentNode.next
  }

  return currentNode
}

function main() {
  const SLL = new LinkedList()
  SLL.insertFirst('5')
  SLL.insertFirst('4')
  SLL.insertFirst('3')
  SLL.insertFirst('2')
  SLL.insertFirst('1')
  console.log(middle(SLL).value) // Should be 3
  SLL.remove('5')
  console.log(middle(SLL).value) // Should be 2
}

if (require.main === module) {
  main()
}
