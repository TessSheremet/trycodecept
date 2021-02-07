Feature('login');

Scenario('test something', ({ I, mainPage, currentTasksPage }) => {
    I.amOnPage('https://try.vikunja.io/login');
    mainPage.login('demo', 'demo');
    currentTasksPage.gotoUpcoming();
    I.see('Tasks from');
});
