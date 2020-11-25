/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    currL1 = l1;
    currL2 = l2;
    mergedList = {};
    currMerged = ???;
    
    //create inner function to recurse
    
      //if cur l1 === current l2
        //mergedlist.value = currL1
        //mergedList.next = currL2
        //currL1 = currL1.next
        //currL2 = currL2.next
    
      //if curL1 < currL2 || currL2 === null
        // add curr L1 to merged
        //currL1 = currL1.next
    
    //if currL1 > currL2 || currL1 === null
      // add currL2 to merged
        //currL2 = currL2.next
    
    
    // if currL1 === null and currL2 === null 
      // add null to next prop of currMerged
      //return merged List
      
};