const LinkedList = require('./linked-list')

function log(list) {
  let currentNode = list.head
  while (currentNode !== null) {
    console.log(currentNode.value)
    currentNode = currentNode.next
  }
}

function size(list) {
  let counter = 0
  let currentNode = list.head
  while (currentNode !== null) {
    counter++
    currentNode = currentNode.next
  }
  return counter
}

function isEmpty(list) {
  return list.head === null
}

function findPrevious(list, item) {
  let currentNode = list.head
  let prevNode = list.head
  while (currentNode.value !== item && currentNode !== null) {
    prevNode = currentNode
    currentNode = currentNode.next
  }
  if (!currentNode) return null

  return prevNode
}

function findLast(list) {
  let currentNode = list.head
  while (currentNode.next !== null) {
    currentNode = currentNode.next
  }
  return currentNode
}

function main() {
  const SLL = require('./create-a-singly-linked-list')
  log(SLL)
  console.log(size(SLL))
  console.log(isEmpty(SLL))
  console.log(findPrevious(SLL, 'Boomer').value)
  console.log(findLast(SLL).value)
}

if (require.main === module) {
  main()
}

module.exports = {
  log: log,
  size: size,
  findLast: findLast,
  findPrevious: findPrevious,
  isEmpty: isEmpty
}
