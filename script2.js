$(function () {
    $('#code').on({
        focus: function () {
            $(this).removeClass('bg-success');
            $(this).addClass('bg-primary');
        },
        blur: function () {
            $(this).removeClass('bg-primary');
            $(this).addClass('bg-success');
        },
    });
    $('#bt').on({
        click: function () {
            $(this).addClass('bg-warning');
            $(this).text('¿Estás seguro?');
        },
        dblclick: function () {
            $(this).removeClass('bg-warning');
            $(this).addClass('bg-primary');
            $(this).text('¡OK!');
        },
        blur: function () {
            $(this).removeClass('bg-primary');
            $(this).css({ 'background-color': 'transparent', color: 'green' });
            $(this).text('COMPRADO');
        },
    });
});