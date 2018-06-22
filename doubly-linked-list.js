class _Node {
  constructor(value, next, prev) {
    this.value = value
    this.next = next
    this.prev = prev
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  insertFirst(item) {
    const newHead = new _Node(item, this.head, null)
    if (this.head) this.head.prev = newHead
    this.head = newHead
    if (!this.tail) this.tail = newHead
  }

  insertLast(item) {
    if (!this.head) {
      this.insertFirst(item)
    } else if (!this.tail) {
      this.tail = new _Node(item, null, this.head)
      this.head.next = this.tail
    } else {
      this.tail = new _Node(item, null, this.tail)
      this.tail.prev.next = this.tail
    }
  }

  insertBefore(before, item) {
    if (!this.head) {
      console.log('Empty list')
      return
    }

    let currentNode = this.head
    while (currentNode && currentNode.value !== before) {
      currentNode = currentNode.next
    }
    if (!currentNode) return null
    if (!currentNode.prev) {
      this.insertFirst(item)
      return
    }

    currentNode.prev.next = new _Node(item, currentNode, currentNode.prev)
  }

  insertAfter(after, item) {
    let afterNode = this.find(after)
    if (!afterNode) {
      console.log('Item not found')
      return
    }
    if (!afterNode.next) {
      this.insertLast(item)
      return
    }
    let newNode = new _Node(item, afterNode.next, afterNode)
    afterNode.next = newNode
    newNode.next.prev = newNode
  }

  insertAt(n, item) {
    if (!this.head) {
      console.log('List is empty')
      return
    }

    if (n === 0) {
      this.insertFirst(item)
      return
    }

    let currentNode = this.head

    let i = 0
    while (currentNode !== null && i < n) {
      currentNode = currentNode.next
      i++
    }

    if (!currentNode) {
      console.log('Index out of range')
      return
    }

    let newNode = new _Node(item, currentNode, currentNode.prev)
    currentNode.prev.next = newNode
    currentNode.prev = newNode
  }

  find(item) {
    let currentNode = this.head

    if (!this.head) return null

    while (currentNode.value !== item) {
      if (currentNode.next === null) return null
      currentNode = currentNode.next
    }
    return currentNode
  }

  remove(item) {
    if (!this.head) return null
    if (this.head.value === item) {
      this.head = this.head.next
      this.head.prev = null
      return
    }
    let currentNode = this.head

    while (currentNode !== null && currentNode.value !== item) {
      currentNode = currentNode.next
    }

    if (currentNode === null) {
      console.log('Item not found')
      return
    }

    currentNode.next.prev = currentNode.prev
    currentNode.prev.next = currentNode.next
  }
}

function main() {
  const { log } = require('./supplemental-functions')
  const DLL = new DoublyLinkedList()
  DLL.insertFirst('Last')
  DLL.insertFirst('Fifth')
  DLL.insertFirst('Fourth')
  DLL.insertFirst('Third')
  DLL.insertFirst('Second')
  DLL.insertFirst('First')
  // log(DLL)
  DLL.insertBefore('First', 'New First')
  // log(DLL)
  DLL.insertAfter('Third', 'Old Third')
  // log(DLL)
  DLL.insertAt(2, 'New Second')
  // log(DLL)
  DLL.remove('Old Third')
  // log(DLL)
}

if (require.main === module) {
  main()
}

module.exports = DoublyLinkedList
