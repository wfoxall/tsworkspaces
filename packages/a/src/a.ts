import {b} from '@wfoxall/b';

function a(): string {
    return "Hi from module A!"
}

function usingb(): string {
    return `Message from B... ${b()}`;
}

export {a,usingb}