$('document').ready(function () {
    var rowText;
    var content = $('#teams');
    const teams = getTeams();
    for (let row of teams) {
        rowText =
            `<tr>
                <td>${row.name}</td>
                <td class="right-align">
                    <a class="btn-floating waves-effect waves-light blue" href="team.html?name=${row.name}">
                        <i class="material-icons">edit</i>
                    </a>
                    <a rowid="${row.name}" class="rem-row btn-floating waves-effect waves-light red">
                        <i class="material-icons">delete</i>
                    </a>
                </td>
               </tr>`;
        content.append(rowText);
    }
    $('.rem-row').click(function () {
        let name = $(this).attr('rowid');
        saveTeams(teams.filter((t) => t.name != name));
        location.reload();
    })
})