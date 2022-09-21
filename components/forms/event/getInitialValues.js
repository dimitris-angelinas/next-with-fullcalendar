import JsDateTime from "../../../classes/datetime/JsDateTime";

export const getInitialValues = (event) => {
    let name, start, end = ''
    // check if drupal or calendar event
    if(event.attributes){
        name = event?.attributes?.name || ''
        start = event.attributes?.start || ''
        end = event?.attributes?.end || ''
    }
    if(event.jsEvent){
        start = new JsDateTime(event.start).getIsoFormat()
        end = new JsDateTime(event.end).getIsoFormat()
    }
    return {
        name,
        start,
        end,
    }
}