let theInput = document.getElementById('theInput');
    theValue = document.getElementById('theValue');
    results = document.querySelector('.results > span');
    allSpans = document.querySelectorAll('.buttons span');


allSpans.forEach(span => {

    span.addEventListener(('click'), (e) => {

        if(e.target.classList.contains('check-item')) {

            checkItem();
        }

        if(e.target.classList.contains('add-item')) {

            addItem();
        }

        if(e.target.classList.contains('delete-item')) {

            deletItem();
        }

        if(e.target.classList.contains('show-items')) {

            showItems();
        }

    })

});


function showMessage() {
    results.innerHTML = "Input Can't Be Empty";
}


function checkItem() {

    if(theInput.value !== '') {

        if(localStorage.getItem(theInput.value)) {

            results.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span> `;

        }  else {

            results.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span> `;

        }

    } else {

        showMessage();
    }
}

function addItem() {

    if(theInput.value !== '') {

            localStorage.setItem(theInput.value, theValue.value);

            results.innerHTML =  `Local Storage Item <span>${theInput.value}</span> Added`;

            theInput.value = '';

            theValue.value = '';

    } else {

        showMessage();
    }

}
function deletItem() {

    if(theInput.value !== '') {

        if(localStorage.getItem(theInput.value)) {

            localStorage.removeItem(theInput.value);

            results.innerHTML = `The Item With The Name <span>${theInput.value}</span> Is Removed`;

            theInput.value = '';

        }  else {

            results.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span> `;

        }

    } else {

        showMessage();
    }

}
function showItems() {

    results.innerHTML = '';

    if(localStorage.length) {

        for(let [key, value] of Object.entries(localStorage)) {

            results.innerHTML += `<span>${key} => <span>${value}</span></span>`;

            results.style = 'display: flex; flex-direction: column; gap: 10px;'
        }

    }  else {

        results.innerHTML  = 'Local Storage Is Empty';

    }

}