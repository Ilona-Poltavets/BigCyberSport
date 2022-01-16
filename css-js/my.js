let editType = '';
let name = '';
document.addEventListener("DOMContentLoaded", function (event) {
    var rowText;
    var list = document.getElementById('list');
    teams = getTeams();
    for (let row of teams) {
        var rowText = document.createElement('ion-item');
        rowText.innerHTML = `<ion-label>${row.name}</ion-label>
            <ion-button class="edit" color="primary" size="medium" rowid="${row.name}">
                <ion-icon name="create"></ion-icon>
            </ion-button>
            <ion-button class="delete" color="danger" size="medium" rowid="${row.name}">
                <ion-icon name="trash"></ion-icon>
            </ion-button>`;
        list.appendChild(rowText);
    }

    document.querySelector('#main').style.display = "";
    document.querySelector('#edit').style.display = "none";

    document.querySelectorAll('.edit').forEach(input => input.addEventListener('click', ({target}) => {
            editType = "edit";
            name = target.getAttribute('rowid');
            let team = teams.find((t) => t.name == name);
            document.getElementById('name').value = team.name;
            document.getElementById('discipline').value = team.discipline;
            document.getElementById('coach').value = team.coach;
            document.querySelector('#main').style.display = "none";
            document.querySelector('#edit').style.display = "";
        }
    ));

    document.querySelectorAll('.delete').forEach(input => input.addEventListener('click', ({target}) => {
            name = target.getAttribute('rowid');
            saveTeams(teams.filter((t) => t.name != name));
            location.reload();
        }
    ));

    document.querySelector('#save').addEventListener('click', () => {
            if (editType == "add") {
                teams.push({
                    name: document.getElementById('name').value,
                    discipline: document.getElementById('discipline').value,
                    coach: document.getElementById('coach').value,
                });
            } else {
                let team = teams.find((t) => t.name == name);
                team.name = document.getElementById('name').value;
                team.discipline = document.getElementById('discipline').value;
                team.coach = document.getElementById('coach').value;
            }
            saveTeams(teams);
            location.reload();
        }
    );

    document.querySelector('#add').addEventListener('click', () => {
        document.querySelector('#main').style.display = "none";
        document.querySelector("#edit").style.display = "";
        document.getElementById("name").value = "";
        document.getElementById("discipline").value = "";
        document.getElementById("coach").value = "";
        editType = "add";
    });

    document.querySelector('#back').addEventListener('click', () => {
        document.querySelector('#main').style.display = "";
        document.querySelector("#edit").style.display = "none";
    });
});