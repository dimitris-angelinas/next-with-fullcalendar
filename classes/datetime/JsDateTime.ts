type DateComponents = {
    year: string
    month: string
    day: string
    hour: string
    min: string
}

class JsDateTime
{
    date: Date
    dateString: string

    constructor(date?:Date, dateString?:string){
        this.date = date
        this.dateString = dateString
    }

    getIsoFormat(dateOnly:boolean=false, seconds:boolean=true, timezone:boolean=true, offset:string='+00:00'):string
    {
        const {year,month,day,hour,min} = this.getDateComponents()
        let resp = `${year}-${month}-${day}`
        if(dateOnly) return resp

        resp += `T${hour}:${min}`
        if(seconds){
            resp += ':00'
        }
        if(timezone){
            resp += offset
        }
        return resp
    }

    getGreekFormat(dateOnly:boolean=false, timeSeparator:string=''):string
    {
        const {year,month,day,hour,min} = this.getDateComponents()
        let resp = `${day}/${month}/${year}`
        if(dateOnly) return resp

        resp += `${timeSeparator}${hour}:${min}`
        return resp
    }

    getDateComponents():DateComponents
    {
        const year = String(this.date.getFullYear())
        const month = ("0" + (this.date.getMonth() + 1)).slice(-2)
        const day = ("0" + this.date.getDate()).slice(-2)
        const hour = ("0" + this.date.getHours()).slice(-2)
        const min = ("0" + this.date.getMinutes()).slice(-2)
        return {year,month,day,hour,min}
    }

}

export default JsDateTime