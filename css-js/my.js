$('document').ready(function () {
    var rowText;
    var content=$('#teams');
    const teams=getTeams();
    for(let row of teams){
        rowText=
            `<tr>
                <td>${row.name}</td>
                <td class="text-right">
                    <a class="button primary" href="team.html?name=${row.name}">
                        <i class="fi fi-pencil"></i>
                    </a>
                    <button type="button" class="button alert" rowid="${row.name}">
                        <i class="fi fi-trash"></i>
                    </button>
                </td>
               </tr>`;
        content.append(rowText);
    }
    $('.rem-row').click(function(){
        let name=$(this).attr('rowid');
        saveTeams(teams.filter((t)=>t.name!=name));
        location.reload();
    })
})