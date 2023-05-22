import { writable } from 'svelte/store';

const window1 = {
    id: 1,
    title: "window 1",
    icon: { name: "icon 1", path: "images/pastel-folder-64.png" },
    content: "window 1 content",
    position: {
        x: 400, //left
        y: 400 //top
    }
}
const window2 = {
    id: 2,
    title: "window 2",
    icon: { name: "icon 2", path: "images/pastel-folder-64.png" },
    content: "window 2 content",
    position: {
        x: 400, //left
        y: 400 //top
    }
}

const allWindows = [window1, window2];

export const allWindowsStore = writable(allWindows);
export const openedWindowsStore = writable([]);

// remove window from openedWindowsStore
export const closeWindow = (id) => {
    openedWindowsStore.update(openedWindows => {
        return openedWindows.filter(w => w.id !== id);
    });
    console.log('closed window with id: ' + id);
};