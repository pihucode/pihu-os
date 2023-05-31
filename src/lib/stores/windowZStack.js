import { writable } from 'svelte/store';

const zStackWindows = writable([]);

const addWindowToZStack = (windowId) => {
    zStackWindows.update(arr => {
        // if windowId is already in the array, move it up
        const i = arr.findIndex(winId => winId === windowId);
        if (i !== -1) {
            const len = arr.length;
            arr.splice(i, 1);
            arr.splice(len - 1, 0, windowId);
            return arr;
        };
        // otherwise, add it to the stack
        arr.push(windowId);
        return arr;
    });
}

const removeWindowFromZStack = (windowId) => {
    zStackWindows.update(arr => {
        return arr.filter(winId => winId !== windowId);
    });
}

// triggered when a window is focused or clicked
// moves the window to the top of the Z stack
const moveWindowUpZStack = (windowId) => {
    zStackWindows.update(arr => {
        const i = arr.findIndex(winId => winId === windowId);
        const len = arr.length;
        arr.splice(i, 1);
        arr.splice(len - 1, 0, windowId);
        return arr;
    });
}

export {
    zStackWindows,
    addWindowToZStack,
    removeWindowFromZStack,
    moveWindowUpZStack
}