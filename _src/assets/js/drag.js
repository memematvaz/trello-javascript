'use strict';

//document.querySelectorAll('.list-item').forEach(card => {
//    card.addEventListener('click', toggleEdit);
//  });

const listItem = document.querySelectorAll('.list-item');
const list = document.querySelectorAll('.card');

let draggedItem = null;

for (let i = 0; i < listItem.length; i++) {
    const item = listItem[i];

    item.addEventListener('dragStart', function(e) {
        console.log('dragStart' , e)
        draggedItem = this;
    });

    for (let j = 0; j < list.length; j++) {
        const list = list[j];
    }
}