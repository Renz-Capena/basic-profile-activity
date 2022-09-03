const pickle_rick = document.querySelector('#pickle_rick');

pickle_rick.addEventListener('click',function(){
    pickle_rick.style.marginBottom = '100px';

    setInterval(function(){
        pickle_rick.style.marginBottom = '0px';
    },2000)
})