$(document).ready(function () {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: "YOUR_API_KEY",
        header: {
            center: 'prev next',
            right: "agendaDay agendaWeek basicDay month today"
        },
        themeSystem: 'jquery-ui',
        events: {
            googleCalendarId: "YOUR_CALENDAR_ID"
        },
        defaultView: 'agendaWeek',
        selectable: true,
        dragScroll: true,
        eventDrop: function (calEvent, jsEvent, ui, view) {
            jsEvent.preventDefault();
            console.log(calEvent);
            console.log(jsEvent);
            console.log(ui);
            console.log(view);
        },
        eventClick: function (calEvent, jsEvent, view) {
            jsEvent.preventDefault();
            console.log(calEvent);
            console.log(jsEvent);
            console.log(view);
        },
        select: function (start, end, jsEvent, view) {
            console.log(start);
            console.log(end);
            console.log(jsEvent);
            console.log(view);
        }

    });

});