$('document').ready(function(){
    let searchParams=new URLSearchParams(window.location.search);
    let name="";
    let title="New team";
    if(searchParams.has('name')){
        name=searchParams.get('name');
        const teams=getTeams();
        let team=teams.find((t)=>t.name==name);
        title=team.name;
        $('#name').val(team.name);
        $('#discipline').val(team.discipline);
        $('#coach').val(team.coach);
    }
    document.getElementById("navTitle").innerHTML = title;
    document.getElementById("title").innerHTML = title;
    $('#save').click(function(){
        const teams=getTeams();
        if(name===""){
            teams.push({
                name:$('#name').val(),
                discipline:$('#discipline').val(),
                coach:$('#coach').val(),
            });
        }else{
            let team=teams.find((t)=>t.name=name);
            team.name=$('#name').val();
            team.discipline=$('#discipline').val();
            team.coach=$('#coach').val();
        }
        saveTeams(teams);
        $(location).attr('href','index.html');
    })
})