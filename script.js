let numberOfCorrectAnswers = 0;
let numberOfWrongAnswers = 0;
let percentage = 0;

const wrongAnswer = (classOfButtonClicked, classOfOtherButton) => {
    $(classOfButtonClicked).css('background-color', '#FF0000');
    $(classOfButtonClicked).attr("disabled","disabled");
    $(classOfOtherButton).attr("disabled","disabled");
    $(classOfButtonClicked).removeClass("hover");
    $(classOfOtherButton).removeClass("hover");
    numberOfWrongAnswers++;
    if (numberOfCorrectAnswers + numberOfWrongAnswers == 10) {
        $('.playersPercentageCorrect').removeClass("hide");
    }
};
const rightAnswer = (classOfButtonClicked, classOfOtherButton) => {
    $(classOfButtonClicked).css('background-color', '#00FF0A');
    $(classOfButtonClicked).attr("disabled","disabled");
    $(classOfOtherButton).attr("disabled","disabled");
    $(classOfButtonClicked).removeClass("hover");
    $(classOfOtherButton).removeClass("hover");
    numberOfCorrectAnswers++;
    percentage = (numberOfCorrectAnswers / 10 ) * 100;
    $('.percentage').html(percentage.toString());
    if (numberOfCorrectAnswers + numberOfWrongAnswers == 10) {
        $('.playersPercentageCorrect').removeClass("hide");
    }
};

$('.Mayim-Bialik').on('click', function() { rightAnswer('.Mayim-Bialik', '.Johnny-Galecki'); });
$('.Johnny-Galecki').on('click', function() { wrongAnswer('.Johnny-Galecki', '.Mayim-Bialik'); });
$('.Dr-DNA').on('click', function() { wrongAnswer('.Dr-DNA', '.Professor-Proton'); });
$('.Professor-Proton').on('click', function() { rightAnswer('.Professor-Proton', '.Dr-DNA'); });
$('.Nebraska').on('click', function() { rightAnswer('.Nebraska', '.Alabama'); });
$('.Alabama').on('click', function() { wrongAnswer('.Alabama', '.Nebraska'); });
$('.The-Force-and-Luke').on('click', function() { wrongAnswer('.The-Force-and-Luke', '.Lizard-and-Spock'); });
$('.Lizard-and-Spock').on('click', function() { rightAnswer('.Lizard-and-Spock', '.The-Force-and-Luke'); });
$('.Debbie').on('click', function() { rightAnswer('.Debbie', '.Susan'); });
$('.Susan').on('click', function() { wrongAnswer('.Susan', '.Debbie'); });
$('.Soft-Kitty').on('click', function() { rightAnswer('.Soft-Kitty', '.Smelly-Cat'); });
$('.Smelly-Cat').on('click', function() { wrongAnswer('.Smelly-Cat', '.Soft-Kitty'); });
$('.Leonard-Hofstadter').on('click', function() { wrongAnswer('.Leonard-Hofstadter', '.Howard-Wolowitz'); });
$('.Howard-Wolowitz').on('click', function() { rightAnswer('.Howard-Wolowitz', '.Leonard-Hofstadter'); });
$('.3B').on('click', function() { wrongAnswer('.3B', '.4B'); });
$('.4B').on('click', function() { rightAnswer('.4B', '.3B'); });
$('.Caltech').on('click', function() { rightAnswer('.Caltech', '.Stanford'); });
$('.Stanford').on('click', function() { wrongAnswer('.Stanford', '.Caltech'); });
$('.Leonard').on('click', function() { wrongAnswer('.Leonard', '.Sheldon'); });
$('.Sheldon').on('click', function() { rightAnswer('.Sheldon', '.Leonard'); });