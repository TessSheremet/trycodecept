 const { I } = inject();
 
// module.exports = {
//     upcomingMenu: ('Upcoming'),
 
//     gotoUpcoming() {
//         I.click(this.upcomingMenu);
//     },
// }

module.exports = {
  createcomButton: 'Создать сообщество',

  openCommunityPopup() {
      I.click(this.createcomButton);
  },
}