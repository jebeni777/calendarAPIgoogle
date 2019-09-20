import request from 'superagent'

const CALENDAR_ID = 'cGV0ZXJAc3R1ZGlvLnVuLWxvb3Aub3Jn@calendar.google.com'
const API_KEY = 'AIzaSyAn4wAgWPgcklh7AXk3fdBryniPpGsUTQw'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        callback(events)
      }
    })
}