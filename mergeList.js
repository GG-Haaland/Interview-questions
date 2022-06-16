// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4] 


list1 = [1, 2, 4], list2 = [1, 3, 4]

// i want to create a dummy node which will become my output after comparing list values against one another

const mergeTwoList = (list1, list2) => {
    // First i want to check if the list are null and if so return the other list
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }
// i want to create a dummy node list which will become my output after comparing list values against one another
    let newList = null;

    let dummy = newList
// we then want to see which list is smaller of the two lists
    if (list1.val < list2.val) {
        dummy = newList = new ListNode(list1.val);
        list1 = list1.next;
    } else {
        dummy = newList = new ListNode(list2.val);
        list2 = list2.next;
    }
// Next we want to loop through each list untill both become null (looping through and comparing each value if theres one to compare it against)
    while (list1 && list2) { //if list1 and 2 arent null
        if (list1.val < list2.val) {
            dummy.next = new ListNode(list1.val);
            list1 = list1.next;
            dummy = dummy.next;
        } else {
            dummy.next = new ListNode(list2.val);
            list2 = list2.next;
            dummy = dummy.next;
        }
    }
// if one list is bigger than the other... add remaining nodes to the end of the new list
    while (list1) {
        dummy.next = new ListNode(list1.val);
        list1 = list1.next;
        dummy = dummy.next;
    }

    while (list2) {
        dummy.next = new ListNode(list2.val);
        list2 = list2.next;
        dummy = dummy.next;
    }
    return newList;
}


