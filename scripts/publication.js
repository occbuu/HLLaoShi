$(document).ready(function() {
    $('#example').DataTable({
        ajax: './data/papers.json',
        columns: [
            { data: 'Id' },
            { data: 'Title' },
            { data: 'CoAuthors' },
            { data: 'Publisher' },
            { data: 'Type' },
            { data: 'Year' },
        ],
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
});