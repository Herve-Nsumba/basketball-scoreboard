A simple basketball scoreboard built with HTML, CSS, and JavaScript.
It lets you track points for HOME and GUEST teams with +1, +2, and +3 buttons.

📌 Features
    .Track scores for two teams (HOME and GUEST).
    .Buttons to add +1, +2, or +3 points.
    .Independent score tracking for each team.
    .Real-time update of the scoreboard.

🛠️ Lessons Learned
While building this project, I learned:

==>@font-face → how to use downloaded fonts in a project.

==>querySelector vs querySelectorAll →
    querySelector selects the first matching element.
    querySelectorAll selects all matching elements and returns a NodeList.
    NodeList → acts like an array of elements; you must loop through it to work with each element.

==>.forEach((element, index)) → loops through NodeLists, giving you both the element and its position.

==>Separate state management → using an array (scores = [0, 0]) to keep independent scores for HOME and GUEST.

==>Event listeners → attaching click events to buttons to update the scoreboard.

==>The role of index → connects each button to the right score and count display.

📌 Needed Improvements
    =>Add a reset button to restart the game.
    =>Add a timer countdown for each quarter.
    =>Highlight the leading team dynamically.
