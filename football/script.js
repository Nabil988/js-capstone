const fixturesLink = document.getElementById('fixturesLink');
const resultsLink = document.getElementById('resultsLink');
const standingsLink = document.getElementById('standingsLink');
const newsLink = document.getElementById('newsLink');
const historyLink = document.getElementById('historyLink');
const content = document.getElementById('content');

const showContent = (title, description) => {
    content.innerHTML = `
        <h1>${title}</h1>
        <p>${description}</p>
    `;
};


fixturesLink.addEventListener('click', () => {
    showContent('Upcoming Fixtures', 'Manchester City VS Nottingham Forest. Fulham FC VS Brighton & Hove Albion. Ipswich Town VS Crystal Palace. Southampton FC VS Liverpool FC. Aston Villa VS Brentford FC. Everton FC VS Wolverhampton Wanderers');
});

resultsLink.addEventListener('click', () => {
    showContent('Results', 'Leicester City 0-4 Brentford: Brentford secured a convincing victory over Leicester City, with goals from Ivan Toney, Bryan Mbeumo, and others. ​Manchester United 2-2 Everton: Manchester United and Everton played out a thrilling draw at Old Trafford, with goals from Bruno Fernandes and Abdoulaye Doucouré. ​Wolverhampton Wanderers 1-0 AFC Bournemouth: Wolves edged out Bournemouth with a narrow win, thanks to a goal from Rúben Neves.​West Ham United 1-0 Arsenal FC: West Ham secured a crucial win over Arsenal, with Michail Antonio scoring the decisive goal.​Crystal Palace 2-0 Fulham FC: Crystal Palace dominated Fulham with goals from Wilfried Zaha and Eberechi Eze.​Tottenham Hotspur 4-1 Ipswich Town: Tottenham Hotspur delivered an emphatic performance, with Harry Kane netting a brace.​Brighton & Hove Albion 4-0 Southampton FC: Brighton thrashed Southampton with goals from Leandro Trossard, Neal Maupay, and others.​Chelsea FC 1-2 Aston Villa: Aston Villa pulled off an upset at Stamford Bridge, with Ollie Watkins scoring the winning goal.​Nottingham Forest 3-4 Newcastle United: In a high-scoring affair, Newcastle emerged victorious with goals from Callum Wilson and Allan Saint-Maximin.​Liverpool FC 2-0 Manchester City: Mohamed Salah scored twice to secure a win for Liverpool over Manchester City. ​AFC Bournemouth 1-2 Brighton & Hove Albion: Brighton continued their strong form with a win over Bournemouth.​Fulham FC 2-1 Wolverhampton Wanderers: Fulham edged out Wolves in a closely contested match.​Aston Villa 1-4 Crystal Palace: Crystal Palace dominated Villa Park with a convincing win.​Leicester City 0-1 West Ham United: West Ham completed a league double over Leicester with a narrow victory.​Southampton FC 0-4 Chelsea FC: Chelsea cruised to a comfortable win over Southampton.​Everton FC 1-1 Brentford FC: Both teams shared the spoils in a hard-fought draw at Goodison Park.​Arsenal FC 0-0 Nottingham Forest: Arsenal were held to a goalless draw by a resilient Nottingham Forest side.​Manchester City 1-0 Tottenham Hotspur: Manchester City secured a narrow win over Spurs with a goal from Kevin De Bruyne.​Ipswich Town 2-3 Manchester United: United edged out Ipswich in a thrilling encounter at Portman Road.​Newcastle United 0-2 Liverpool FC: Liverpool continued their impressive form with a win over Newcastle..');
});

standingsLink.addEventListener('click', () => {
    showContent('Premier League Standings','Liverpool leads the table with 67 points, 13 points ahead of second-placed Arsenal. Nottingham Forest holds third position, while Manchester City has reclaimed a spot in the top four. Leicester City, under manager Ruud van Nistelrooy, is struggling near the bottom, currently five points from safety. ');
});

newsLink.addEventListener('click', () => {
    showContent('Premier League News', 'Liverpool Extends Lead at the Top. Liverpool secured a 2-0 victory over Newcastle United, moving 13 points clear at the top of the Premier League.Managerial Changes Manchester United sacked Erik ten Hag following a series of poor results, including a 2-1 defeat to West Ham United. Ruben Amorim was appointed as his successor. ​Leicester City parted ways with Steve Cooper after a home loss to Chelsea. Ruud van Nistelrooy was named as the new manager. ​Wolverhampton Wanderers dismissed Gary ONeil following a defeat to Ipswich Town. Vítor Pereira was appointed as the new head coach. ​Southampton sacked Russell Martin after a heavy home defeat to Tottenham Hotspur. Ivan Jurić was subsequently appointed as the manager. ​');

});

