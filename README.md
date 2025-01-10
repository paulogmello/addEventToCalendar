## Add Event to Callendar
This simple library (1.61 KB) is usefull when you need add google calendar events in your site as a link

### Installation
Donwload addToCalendarEvent.js and include in your site

    <script src="addToCalendarEvent.js"></script>

### How to use
| Parameters | Effect |
|--|--|
| title | Event Name |
| description | Description about the event |
| startDate | Day of the event, format **DD/MM/YYYY** |
| endDate | Last day of the event, format **DD/MM/YYYY** |
| startTime | Time when the event starts, format **HH:MM** |
| endTime | Time when the event ends, format **HH:MM** | 

See the example below:

    var  callForPapers = new  addToCalendar("#callForPapers", {
    startTime: "08:00",
    endTime: "18:00",
    startDate: "15/03/2025",
    endDate: "15/05/2025",
    description: "The Call for Papers is an opportunity to share your work, engage with a global community, and contribute to the advancement of knowledge in your field. Accepted papers will be included in the conference proceedings and have the chance to be presented during the event, fostering discussions and connections among participants.",
    title:  "Rio'25 - Call for Papers",
    });
