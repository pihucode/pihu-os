import { writable } from 'svelte/store';

const window1 = {
    id: 1,
    title: "window 1",
    icon: { name: "icon 1" },
    content: "window 1 content"
}
const window2 = {
    id: 2,
    title: "window 2",
    icon: { name: "icon 2" },
    content: "window 2 content"
}

const allWindows = [window1, window2];

export const allWindowsStore = writable(allWindows);
export const openedWindowsStore = writable([]);

// remove window from openedWindowsStore
export const closeWindow = (id) => {
    openedWindowsStore.update(openedWindows => {
        return openedWindows.filter(w => w.id !== id);
    });
};