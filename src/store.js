import { writable } from "svelte/store";

export const dateStore = writable([]);
export const timeslotStore = writable([]);
export const appointmentStore = writable([]);
export const selectedDateStore = writable(0);
