import AudioChassis from './AudioChassis.js?v=3';
import VisualCore from './VisualCore.js?v=3';
import UIHub from './UIHub.js?v=3';

document.addEventListener('DOMContentLoaded', () => {
    const audio = new AudioChassis();
    const visual = new VisualCore(audio);
    const ui = new UIHub(audio, visual);

    console.log("Petrichor Lab v3 System Ready");
});
