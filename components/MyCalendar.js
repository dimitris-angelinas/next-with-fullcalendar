import React, {useState} from 'react'
import FullCalendar from '@fullcalendar/react'
// import elLocale from '@fullcalendar/core/locales/el';
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import EventModal from "./modals/EventModal";
import Edit from "./forms/event/Edit";

export default function MyCalendar({rooms, events, mutateEvents}) {

    const [showModal,setShowModal] = useState(false)
    const [selectedEvent,setSelectedEvent] = useState(false)
    const [selectedResource,setSelectedResource] = useState(false)

    const eventsStatic = [
        { title: 'nice event', start: '2022-05-18', resourceId: 'a', id: 42}
    ]
    const resourcesStatic = [
        { id: 'a', title: 'Room A' },
        { id: 'b', title: 'Room B' },
        { id: 'c', title: 'Room C' }
    ]

    let initialResources = []
    let roomsData = rooms?.data || []
    roomsData.forEach(room=>{
        initialResources.push({
            id: room.id,
            title: room.attributes.name
        })
    })

    let initialEvents = []
    let eventsData = events?.data || []
    eventsData.forEach(event=>{
        const startDrupalDt = new DrupalDateTime(event.attributes?.start)
        const endDrupalDt = new DrupalDateTime(event.attributes?.end)
        const eventObj = {
            id: event.id,
            title: event.attributes.name,
            start: startDrupalDt.getJsDate(),
            end: endDrupalDt.getJsDate(),
            resourceId: event?.relationships?.room?.data?.id
        }
        initialEvents.push(eventObj)
    })

    const eventClickHandler = (info) => {
        const uuid = info.event.id
        let e
        for (const event of eventsData) {
            if(event.id == uuid){
                e = event
                break
            }
        }
        if(e){
            // we set drupal event
            setSelectedEvent(e)
            setShowModal(true)
        }
    }
    const dateClickHandler = (info) => {
        console.log(info, 'dateClickHandler')
        // // we set calendar event and resource id
        // setSelectedEvent(info)
        // setSelectedResource(info?.resource?.id)
        // setShowModal(true)
    }
    const selectHandler = (info) => {
        console.log(info, 'selectHandler')
        console.log(info, 'dateClickHandler')
        // we set calendar event and resource id
        setSelectedEvent(info)
        setSelectedResource(info?.resource?.id)
        setShowModal(true)
    }
    const dropHandler = (info) => {
        console.log(info, 'dropHandler')
    }

    const EventTest = () => {
        return (
            <div>Event Test</div>
        )
    }
    const DateTest = () => {
        return (
            <div>Date Test</div>
        )
    }

    return (
        <>
            <EventModal
                render={() => <Edit setReveal={setShowModal} event={selectedEvent} resource={selectedResource} mutateEvents={mutateEvents} />}
                reveal={showModal}
                setReveal={setShowModal}
            />
            {/*<EventModal*/}
            {/*    render={() => <DateTest/>}*/}
            {/*    reveal={dateModalReveal}*/}
            {/*    setReveal={setDateModalReveal}*/}
            {/*/>*/}
            <FullCalendar
                schedulerLicenseKey='GPL-My-Project-Is-Open-Source'
                // themeSystem={`bootstrap5`}
                // timeZone={'UTC'}
                // columnFormat={{
                //     month: 'ddd',
                //     week: 'ddd d/M',
                //     day: 'dddd d/M'
                // }}
                height={'auto'}
                firstDay={1}
                plugins={[interactionPlugin, resourceTimelinePlugin]}
                initialView='resourceTimelineMonth'
                headerToolbar={{
                    left: 'title',
                    center: 'today prev,next',
                    right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
                }}
                views={{
                    resourceTimelineWeek: {
                        slotDuration: { days: 1 }
                    },
                    resourceTimelineMonth:{}
                }}
                // slotMinTime={`01:00:00`}
                // slotMaxTime={`02:00:00`}
                // dayHeaders={false}
                // dayHeaderFormat={{ day: 'numeric' }}
                displayEventTime={false}
                editable={true}
                selectable={true}
                initialEvents={eventsStatic}
                initialResources={resourcesStatic}
                resourceOrder={'title'}
                eventClick={eventClickHandler}
                dateClick={dateClickHandler}
                select={selectHandler}
                eventDrop={dropHandler}
            />
        </>
    );
}