import { writable } from 'svelte/store';
import { removeWindowFromZStack } from '$lib/stores/windowZStack';

const window1 = {
    id: 1,
    title: "window 1",
    icon: { name: "icon 1", path: "images/pastel-folder-64.png" },
    content: "window 1 content",
    position: {
        x: 400, //left
        y: 400 //top
    },
    bounds: {
        left: 400,
        right: 400,
        top: 370,
        bottom: 200,
        width: 300,
        height: 200
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
    },
    bounds: {
        left: 400,
        right: 400,
        top: 370,
        bottom: 200,
        width: 300,
        height: 200
    }
}
const window3 = {
    id: 3,
    title: "window 3",
    icon: { name: "icon 3", path: "images/pastel-folder-64.png" },
    content: "window 3 content",
    position: {
        x: 400, //left
        y: 400 //top
    },
    bounds: {
        left: 400,
        right: 400,
        top: 370,
        bottom: 200,
        width: 300,
        height: 200
    }
}

const allWindows = [window1, window2, window3];

export const allWindowsStore = writable(allWindows);
export const openedWindowsStore = writable([]);

// remove window from openedWindowsStore
export const closeWindow = (id) => {
    openedWindowsStore.update(openedWindows => {
        return openedWindows.filter(w => w.id !== id);
    });
    removeWindowFromZStack(id);
};