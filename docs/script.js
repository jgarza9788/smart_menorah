
// this will animate the flames randomly 
function animFlame() 
{

    const elements = document.querySelectorAll('.flame');

    // Loop through the elements and assign random animation durations and delays
    elements.forEach((element, index) => {
    // Generate random numbers for duration and delay
    const duration = (Math.random() * (4.0 - 2.0) + 2.0).toFixed(2); // Random number between 2.0 and 4.0
    // const delay = (Math.random() * (1.25 - 0.25) + 0.25).toFixed(2); // Random number between 0.25 and 1.25
    const delay = 0;

    // Apply the random duration and delay to the elements' styles
    element.style.animationDuration = `${duration}s`;
    element.style.animationDelay = `${delay}s`;
    
    // delay = 0;
    // element.style.animationDelay = `${delay}s`;
    });
}

// this will animate the flames randomly 
function checkDate(overrideDate) 
{

    const currDate = new Date();

    var thisDate;

    if (overrideDate == null)
    {
        thisDate = (currDate.getFullYear() * 10000) + ( (currDate.getMonth()+1)*100 ) + (currDate.getDate()) ;
    }
    else
    {
        console.log('date was overrided');
        thisDate = overrideDate;
    }
    

    // thisDate = 20231214
    console.log(thisDate);

    //for testing
    // document.getElementById('0').classList.add('active');
    // document.getElementById('1').classList.add('active');
    // document.getElementById('2').classList.add('active');
    // document.getElementById('3').classList.add('active');
    // document.getElementById('4').classList.add('active');
    // document.getElementById('5').classList.add('active');
    // document.getElementById('6').classList.add('active');
    // document.getElementById('7').classList.add('active');
    // document.getElementById('8').classList.add('active');


    document.getElementById('text').textContent = '';

    if (thisDate < 20231207)
    {
        document.getElementById('text').textContent  = 'It is not Hannukah Yet';
    }

    if (thisDate > 20231214)
    {
        document.getElementById('text').textContent  = 'Hannukah is Over';

        document.getElementById('0').classList.remove('active');
        document.getElementById('1').classList.remove('active');
        document.getElementById('2').classList.remove('active');
        document.getElementById('3').classList.remove('active');
        document.getElementById('4').classList.remove('active');
        document.getElementById('5').classList.remove('active');
        document.getElementById('6').classList.remove('active');
        document.getElementById('7').classList.remove('active');
        document.getElementById('8').classList.remove('active');
    }

    if (thisDate == 20231207)
    {
    console.log('day 1 of hannukah');

    document.getElementById('0').classList.remove('active');
    document.getElementById('1').classList.remove('active');
    document.getElementById('2').classList.remove('active');
    document.getElementById('3').classList.remove('active');
    document.getElementById('4').classList.add('active');
    document.getElementById('5').classList.remove('active');
    document.getElementById('6').classList.remove('active');
    document.getElementById('7').classList.remove('active');
    document.getElementById('8').classList.add('active');
    }
    if (thisDate == 20231208)
    {
    console.log('day 2 of hannukah');
    document.getElementById('0').classList.remove('active');
    document.getElementById('1').classList.remove('active');
    document.getElementById('2').classList.remove('active');
    document.getElementById('3').classList.remove('active');
    document.getElementById('4').classList.add('active');
    document.getElementById('5').classList.remove('active');
    document.getElementById('6').classList.remove('active');
    document.getElementById('7').classList.add('active');
    document.getElementById('8').classList.add('active');
    }
    if (thisDate == 20231209)
    {
    console.log('day 3 of hannukah');
    document.getElementById('0').classList.remove('active');
    document.getElementById('1').classList.remove('active');
    document.getElementById('2').classList.remove('active');
    document.getElementById('3').classList.remove('active');
    document.getElementById('4').classList.add('active');
    document.getElementById('5').classList.remove('active');
    document.getElementById('6').classList.add('active');
    document.getElementById('7').classList.add('active');
    document.getElementById('8').classList.add('active');
    }
    if (thisDate == 20231210)
    {
    console.log('day 4 of hannukah');
    document.getElementById('0').classList.remove('active');
    document.getElementById('1').classList.remove('active');
    document.getElementById('2').classList.remove('active');
    document.getElementById('3').classList.remove('active');
    document.getElementById('4').classList.add('active');
    document.getElementById('5').classList.add('active');
    document.getElementById('6').classList.add('active');
    document.getElementById('7').classList.add('active');
    document.getElementById('8').classList.add('active');
    }
    if (thisDate == 20231211)
    {
    console.log('day 5 of hannukah');
    document.getElementById('0').classList.remove('active');
    document.getElementById('1').classList.remove('active');
    document.getElementById('2').classList.remove('active');
    document.getElementById('3').classList.add('active');
    document.getElementById('4').classList.add('active');
    document.getElementById('5').classList.add('active');
    document.getElementById('6').classList.add('active');
    document.getElementById('7').classList.add('active');
    document.getElementById('8').classList.add('active');
    }
    if (thisDate == 20231212)
    {
    console.log('day 6 of hannukah');
    document.getElementById('0').classList.remove('active');
    document.getElementById('1').classList.remove('active');
    document.getElementById('2').classList.add('active');
    document.getElementById('3').classList.add('active');
    document.getElementById('4').classList.add('active');
    document.getElementById('5').classList.add('active');
    document.getElementById('6').classList.add('active');
    document.getElementById('7').classList.add('active');
    document.getElementById('8').classList.add('active');
    }
    if (thisDate == 20231213)
    {
    console.log('day 7 of hannukah');
    document.getElementById('0').classList.remove('active');
    document.getElementById('1').classList.add('active');
    document.getElementById('2').classList.add('active');
    document.getElementById('3').classList.add('active');
    document.getElementById('4').classList.add('active');
    document.getElementById('5').classList.add('active');
    document.getElementById('6').classList.add('active');
    document.getElementById('7').classList.add('active');
    document.getElementById('8').classList.add('active');
    }
    if (thisDate == 20231214)
    {
    console.log('day 8 of hannukah');
    document.getElementById('0').classList.add('active');
    document.getElementById('1').classList.add('active');
    document.getElementById('2').classList.add('active');
    document.getElementById('3').classList.add('active');
    document.getElementById('4').classList.add('active');
    document.getElementById('5').classList.add('active');
    document.getElementById('6').classList.add('active');
    document.getElementById('7').classList.add('active');
    document.getElementById('8').classList.add('active');
    }

}

animFlame();
checkDate();


function allfunctions(){
    console.log('date checked');
    // animFlame();
    checkDate();
}   

// Run the function every minute (60,000 milliseconds)
// setInterval(allfunctions, 60000);
setInterval(allfunctions, 60000);