const pickle_rick = document.querySelector('#pickle_rick');
const rick_sentence = document.querySelector('#rick_sentence');

const rick_array = [
    "Why are you studying? <br> school is not for genius!",
    "Wubba Lubba Dub Dub!",
    "What, so everyone's supposed to sleep <br> every single night now? <br> You realize that nighttime makes up half of all time?",
    "Boom!",
    "Nobody exists on purpose!",
    "Sometimes Science Is More Art Than Science",
    "Boom! Big reveal! I turned myself into a pickle!",
    "Nobody belongs anywhere",
    "We’re all going to die",
    "Come watch TV",
    "To live is to risk it all; otherwise you’re just an inert chunk of randomly assembled molecules drifting wherever the universe blows you",
    "Weddings are basically funerals with a cake",
    "Don’t move",
    "Listen, I’m not the nicest guy in the universe, because I’m the smartest, and being nice is something stupid people do to hedge their bets",
    "Boom! Big reveal! I turned myself into a pickle!",
    "Boom! Big reveal! I turned myself into a pickle!",
];




pickle_rick.addEventListener('click',function(){
    pickle_rick.style.marginBottom = '100px';
    rick_sentence.style.transform = 'scale(1)';
    
    function randomRickMsg(){
        let randomQuote = Math.floor(Math.random() * rick_array.length);

        rick_sentence.innerHTML = rick_array[randomQuote];
    }

    setTimeout(function(){
        pickle_rick.style.marginBottom = '0px';
        rick_sentence.style.transform = 'scale(0)';

        setTimeout(function(){
            randomRickMsg();
        },1000)
    },4000)
})