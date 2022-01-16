$('document').ready(function () {
    var rowText;
    var content = $('#teams');
    const teams = getTeams();
    for (let row of teams) {
        rowText =
            `<tr>
                <td>${row.name}</td>
                <td class="has-text-right">
                    <a class="button is-link p-2" href="team.html?name=${row.name}">
                        <i class="material-icons">edit</i>
                    </a>
                    <button type="button" rowid="${row.name}" class="button is-danger rem-row p-2">
                        <i class="material-icons">delete</i>
                    </button>
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