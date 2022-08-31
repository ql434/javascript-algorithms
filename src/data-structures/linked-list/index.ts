/**
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * @file:     文件功能说明
 * @authors:  qiankun <chuck.ql@alibaba-inc.com> (https://work.alibaba-inc.com/work/u/85053)
 * @date      2022/8/30
 */

class Node {
  public value: string;
  public next: any;

  constructor(value: any, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : this.value?.toString();
  }
}


export default class LinkedList {
  public head?: Node;
  public tail?: Node;
  compareFn: Function;

  constructor(compareFn) {
    this.head = null;
    this.tail = null;
    this.compareFn = compareFn;
  }

}
