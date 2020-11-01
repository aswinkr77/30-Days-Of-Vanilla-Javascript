const hr = document.querySelector('.hr-hand');
const mnt = document.querySelector('.mnt-hand');
const sec = document.querySelector('.sec-hand');
const hand = document.querySelectorAll('.hand');
const digitalTime = document.querySelectorAll('span');

function date()
{
    const currentDate = new Date();
    const seconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours();

    const secondsDegree = ((seconds / 60) * 360) + 90;
    const minutesDegree = ((minutes / 60) * 360) + 90;
    const hoursDegree = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    if(secondsDegree === 90 || minutesDegree === 90 || hoursDegree === 90)
        for(let i=0; i < hand.length; ++i)
                hand[i].style.transition = 'none';
    else
        for(let i=0; i < hand.length; ++i)
                hand[i].style.transition = 'all 0.1s cubic-bezier(0.1, 2.7, 0.58, 1)';

    sec.style.transform = `translateX(11%) rotate(${secondsDegree}deg)`;
    mnt.style.transform = `translateX(11%) rotate(${minutesDegree}deg)`;
    hr.style.transform = `translateX(43%) rotate(${hoursDegree}deg)`;

    if(minutes < 10 && hours < 10)
    {
        digitalTime[0].innerHTML = `0${hours}`;
        digitalTime[2].innerHTML = `0${minutes}`;
    }
    else if(minutes < 10)
    {
        digitalTime[0].innerHTML = `${hours}`;
        digitalTime[2].innerHTML = `0${minutes}`;
        }
    else if(hours < 10)
    {
        digitalTime[0].innerHTML = `0${hours}`;
        digitalTime[2].innerHTML = `${minutes}`;
    }
    else
    {
        digitalTime[0].innerHTML = `${hours}`;
        digitalTime[2].innerHTML = `${minutes}`;
    }
}

setInterval(date, 1000);