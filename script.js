let numberOfCorrectAnswers = 0;
let numberOfWrongAnswers = 0;
let percentage = 0;

const wrongAnswer = (classOfButtonClicked, classOfOtherButton) => {
    $(classOfButtonClicked).css('background-color', '#FF0000');
    $(classOfButtonClicked).attr("disabled","disabled");
    $(classOfOtherButton).attr("disabled","disabled");
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
$('.A-city-bus').on('click', function() { wrongAnswer('.A-city-bus', '.A-job-title'); });
$('.A-job-title').on('click', function() { rightAnswer('.A-job-title', '.A-city-bus'); });
$('.Cole-Sprouse').on('click', function() { rightAnswer('.Cole-Sprouse', '.Dylan-Sprouse'); });
$('.Dylan-Sprouse').on('click', function() { wrongAnswer('.Dylan-Sprouse', '.Cole-Sprouse'); });
$('.New-York-City').on('click', function() { rightAnswer('.New-York-City', '.Los-Angeles'); });
$('.Los-Angeles').on('click', function() { wrongAnswer('.Los-Angeles', '.New-York-City'); });
$('.Ill-Be-There-For-Them').on('click', function() { wrongAnswer('.Ill-Be-There-For-Them', '.Ill-Be-There-For-You'); });
$('.Ill-Be-There-For-You').on('click', function() { rightAnswer('.Ill-Be-There-For-You', '.Ill-Be-There-For-Them'); });
$('.St-James-Perk').on('click', function() { wrongAnswer('.St-James-Perk', '.Central-Perk'); });
$('.Central-Perk').on('click', function() { rightAnswer('.Central-Perk', '.St-James-Perk'); });
$('.A-yellow-picture-frame').on('click', function() { rightAnswer('.A-yellow-picture-frame', '.A-coat-hook'); });
$('.A-coat-hook').on('click', function() { wrongAnswer('.A-coat-hook', '.A-yellow-picture-frame'); });
$('.Cynthia-Fee').on('click', function() { wrongAnswer('.Cynthia-Fee', '.The-Rembrandts'); });
$('.The-Rembrandts').on('click', function() { rightAnswer('.The-Rembrandts', '.Cynthia-Fee'); });