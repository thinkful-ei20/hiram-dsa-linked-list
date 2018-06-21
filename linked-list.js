class _Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item)
    } else {
      let tmpNode = this.head
      while (tmpNode.next !== null) {
        tmpNode = tmpNode.next
      }
      tmpNode.next = new _Node(item, null)
    }
  }

  insertBefore(before, item) {
    if (!this.head) {
      console.log('Empty list')
      return
    }

    let currentNode = this.head
    let prevNode = this.head

    while (currentNode !== null) {
      if (currentNode.value === before) break
      prevNode = currentNode
      currentNode = currentNode.next
    }

    if (!currentNode) {
      console.log('Item not found')
      return
    }

    prevNode.next = new _Node(item, currentNode)
  }

  insertAfter(after, item) {
    let afterNode = this.find(after)
    if (!afterNode) {
      console.log('Item not found')
      return
    }
    afterNode.next = new _Node(item, afterNode.next)
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
    let prevNode = this.head

    let i = 0
    while (currentNode !== null && i < n) {
      prevNode = currentNode
      currentNode = currentNode.next
      i++
    }

    if (!currentNode) {
      console.log('Index out of range')
      return
    }

    prevNode.next = new _Node(item, currentNode)
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
      return
    }
    let currentNode = this.head
    let prevNode = this.head

    while (currentNode !== null && currentNode.value !== item) {
      prevNode = currentNode
      currentNode = currentNode.next
    }

    if (currentNode === null) {
      console.log('Item not found')
      return
    }

    prevNode.next = currentNode.next
  }
}

module.exports = LinkedList
