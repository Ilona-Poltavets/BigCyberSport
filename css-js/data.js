function getInitialTeams() {
    return [
        {
            name: "NaVi",
            discipline: "CS:GO",
            coach: "Andrey 'B1ad3' Gorodenskiy",
        },
        {
            name: "Gambit",
            discipline: "CS:GO",
            coach: "Konstantin 'groove' Pikiner",
        },
    ];
}

function saveTeams(teams) {
    localStorage.setItem("teams_data",JSON.stringify(teams));
}

function getSavedTeams() {
    let teams=localStorage.getItem("teams_data");
    if(teams!=null) {
        teams = JSON.parse(teams);
    }
    return teams;
}

function getTeams() {
    let teams=getSavedTeams();
    if(teams==null){
        teams=getInitialTeams();
        saveTeams(teams);
    }
    //console.log(teams);
    return teams;
}