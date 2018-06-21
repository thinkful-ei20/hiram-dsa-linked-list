const LinkedList = require('./linked-list')

function detectLoop(list) {
  let slowPtr = list.head
  let fastPtr = list.head
  while (slowPtr && fastPtr && fastPtr.next) {
    slowPtr = slowPtr.next
    fastPtr = fastPtr.next.next
    if (slowPtr === fastPtr) {
      return true
    }
  }
  return false
}

function main() {
  const SSL = new LinkedList()
  SSL.insertFirst('Hello')
  SSL.insertFirst('Month')
  SSL.insertFirst('Week')
  SSL.head.next.next.next = SSL.head
  console.log(detectLoop(SSL))
}

if (require.main === module) {
  main()
}
