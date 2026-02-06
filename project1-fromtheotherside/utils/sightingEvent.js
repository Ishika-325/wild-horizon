import { EventEmitter } from 'node:events'
import { createAlert } from './createAlert.js'

export const sightingsEvents = new EventEmitter()

sightingsEvents.on('sighting-added', createAlert)