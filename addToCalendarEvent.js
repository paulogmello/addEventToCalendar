class addToCalendar {
  constructor(selector, options){
    const defaultOptions  = {
        startTime: "",
        endTime: "",
        startDate: "",
        endDate: "",
        description: "",
        title: "New Event"
    };
    this.options = {...defaultOptions, ...options};
    this.targetElement = document.querySelector(selector);
    if (!this.targetElement) {
        console.error(`Cant find ${selector} element.`);
        return;
    }
    
     this.init();
  }

  init() {
    const calendarLink = this.generateCalendarLink();
    if (this.targetElement.tagName === "A") {
        this.targetElement.setAttribute("href", calendarLink);
        this.targetElement.setAttribute("target", "_blank"); // Abre o link em uma nova aba
    } else {
        console.error("O elemento alvo precisa ser um link (<a>).");
    }
    // Adiciona o botão ao elemento alvo
    this.targetElement.appendChild(button);
  }
  generateCalendarLink() {
    const { startTime, endTime, startDate, endDate, description, title } = this.options;

    // Formata a data/hora para o padrão do Google Calendar
    const formatDate = (date) => {
        const [day, month, year] = date.split("/");
        return `${year}${month}${day}`;
    };

    const formattedStartDate = `${formatDate(startDate)}T${startTime.replace(":", "")}00`;
    const formattedEndDate = `${formatDate(endDate)}T${endTime.replace(":", "")}00`;

    // Link do Google Calendar
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${formattedStartDate}/${formattedEndDate}&details=${encodeURIComponent(description)}`;
}
  
}
