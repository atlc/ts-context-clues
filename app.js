var friends = [
    { friend: 'Melissa', preferredPronoun: 'her' },
    { friend: 'Zach', preferredPronoun: 'his' },
    { friend: 'Shay', preferredPronoun: 'her' },
    { friend: 'Uri', preferredPronoun: 'his' },
    { friend: 'Jessi', preferredPronoun: 'her' }
];
var locations = ['Saturn', 'Iron City', 'Mom\'s Basement', 'Marty\'s', 'The Nick', 'Parkside', 'Hattie B\'s', 'Surin', 'Tropicaleo', 'Guiseppe\'s'];
var weapons = ['Vulcan\'s Hammer', 'the potholes of Southside', 'a Bird and/or Lime scooter', 'an Energy Sword', 'a Plasma Rifle', 'a Rocket Launcher', 'a Sniper Rifle', 'a Covenant Carbine', 'a Gravity Hammer', 'a Plasma Grenade', 'a Shotgun', 'a Warthog turret', 'a Griffball', 'a Banshee', 'a Warthog (to run over the victim)', 'a Ghost (to splatter the victim)', 'pushing the victim off a cliff', 'a Battle Rifle', 'meleeing the victim', 'a Magnum'];
function removeModals() {
    document.querySelectorAll('.modal.is-active').forEach(function (m) { return m.parentNode.removeChild(m); });
}
document.addEventListener('DOMContentLoaded', function () {
    document.body.className = 'has-background-dark';
    var container = document.createElement('div'); // Using Bulma.io as my grid & css manager 
    container.className = 'columns is-multiline is-flex';
    container.setAttribute('style', 'padding: 20px 15%;');
    document.body.append(container);
    for (var i = 0; i < 100; i++) {
        var accusation = document.createElement('div');
        accusation.className = 'column is-3';
        accusation.innerHTML = "<button class='button is-danger is-outlined'><h3>Accusation #" + (i + 1) + "</h3></button>";
        container.append(accusation);
        accusation.addEventListener('click', generateAccusation(i));
    }
    function generateAccusation(i) {
        return function () {
            var modalContent = "I hereby do accuse <b>" + friends[i % friends.length].friend + "</b> of <b>MURDER</b> at <b>" + locations[i % locations.length] + "</b>, using <b>" + weapons[i % weapons.length] + "</b> as " + friends[i % friends.length].preferredPronoun + " instrument of death.";
            var modal = document.createElement('div');
            modal.className = 'modal is-active';
            modal.setAttribute('style', 'max-width:50vw; max-height:50vh; margin: auto; border: 3px black solid;');
            modal.innerHTML += "<div class=\"modal-background has-background-grey-darker\"></div>";
            modal.innerHTML += "<div class=\"modal-content has-text-danger\" style=\"word-wrap: normal; width: auto; text-align: center; margin: 0px 25px;\">" + modalContent + "</div>";
            modal.innerHTML += "<button onclick=\"removeModals()\" class=\"modal-close is-large\" style=\"background-color: #f14668; border: 3px solid black; height: 48px; max-height: 48px; max-width: 48px; min-height: 48px; min-width: 48px; width: 48px; margin-right: 15%; margin-top: 8%\"></button>";
            container.append(modal);
        };
    }
});
