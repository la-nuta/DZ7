(function () {
    'use strict';

    document.body.addEventListener('click', function (event) {
            let target = event.target || event.srcElement,
                picS = target.classList.contains('small'),
                picL = target.classList.contains('large') || target.classList.contains('act') ? target : target.closest('div'),
                picViewer = document.getElementById('picViewer'),
                bigPic = document.createElement('img');
            if (picS) {
                picViewer.classList.add('act');
                bigPic.setAttribute('src', target.getAttribute('src').replace("small", "large"));
                bigPic.setAttribute('width', "800");
                picViewer.appendChild(bigPic);
                bigPic.classList.add('large');
            }

            if (picL) {
                picViewer.classList.remove('act');
            }
        }
    )
}());