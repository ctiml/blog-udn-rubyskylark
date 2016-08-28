$(function() {
  var dt = $('#dt').dataTable({
    "order": [[ 5, "desc" ]],
    "ajax": "data_dt.json",
    "searchHighlight": true,
    "pageLength": 100,
    "lengthMenu": [[50, 100, 500, 1000, -1], [50, 100, 500, 1000, "All"]],
    "columnDefs": [
      {
        "targets": [0, 3],
        "visible": false,
        "searchable": false
      },
      {
        "render": function ( data, type, row ) {
          return '<img class="img" src="' + data + '"/>';
        },
        "targets": 1
      },
      {
        "render": function ( data, type, row ) {
          return '<a class="title" target="_blank" href="' + row[3] + '">' + data + '</a>';
        },
        "targets": 2
      },
      {
        "render": function ( data, type, row ) {
          return '<span class="tag">' + data + '</span>';
        },
        "targets": 4
      },
      {
        "render": function ( data, type, row ) {
          return '<span class="time">' + data + '</span>';
        },
        "targets": 5
      }
    ]
  });
});
