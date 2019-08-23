import React from "react";
import Event from "../../Event/Event";



const fakeEvents = [
    "Mi super evento 1",
    "Mi super evento 2",
    "Mi super evento 3",
    "Mi super evento 4",
    "Mi super evento 5",
    "Mi super evento 6",
]



class CalendarDay extends React.Component {

    state = {
        newEventName: "Evento sin título...",
        events: fakeEvents
    }

    eventAdd = () => {
        // toma lista actual de eventos
        let events = [...this.state.events]
        // crea un nuevo evento
        let newEvent = this.state.newEventName
        // lo mete en la lista
        events.push( newEvent )
        // guarda nueva lista en estado
        this.setState({
            events
        })
    }


    eventNameChange = (e) => {

        let newEventName = e.target.value

        this.setState({ newEventName })

    }

    render() {
        
        const hoy = new Date();

        // let dia = hoy.toLocaleString('es', {weekday: 'long'});

        let options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        let fecha = hoy.toLocaleString('es', options );



        let renderEvents = this.state.events.map( eventName => (
            <Event name={eventName}/>
        ))

        return (
            <section className="CalendarDay">
                
                <h1>
                    <span className="WeekDay">
                        { fecha }
                    </span>
                </h1>

                <input
                value={this.state.newEventName}
                onChange={(e)=> this.eventNameChange(e) }/>
                
                <button onClick={ () => this.eventAdd() }>
                    Añadir Evento
                </button>

                <ul className="Events">
                
                    { renderEvents }

                </ul>

            </section>
        )
    }

}

export default CalendarDay;