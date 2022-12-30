const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('“Sabía que ibas a decir que SI, que jamás se te olvide sonreír y por terrible que haya sido tu día, sigue adelante huesitos XD. Yo siempre estaré apoyándote, tú eres el mejor mi manchitas”')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);    
})