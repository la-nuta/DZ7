(function () {
    'use strict';

    document.body.addEventListener('click', function (event) {
            let target = event.target || event.srcElement,
                picS = target.classList.contains('small'),
                picL = target.classList.contains('large') ? target : target.closest('div'),
                picViewer = document.getElementById('picViewer');
            if (picS) {
                let bigPic = document.createElement('img');
                picViewer.classList.add('act');
                bigPic.setAttribute('src', target.getAttribute('src').replace("small", "large"));
                bigPic.setAttribute('width', "800");
                picViewer.appendChild(bigPic);
                bigPic.classList.add('large');
            }

            if (picL) {
                let clear = picViewer.firstElementChild;
                clear.remove();
                picViewer.classList.remove('act');
            }
        }
    )
}());