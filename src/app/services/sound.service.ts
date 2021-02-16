import { Injectable } from '@angular/core';
// Tone JS
import * as Tone from 'tone';

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  synth = new Tone.MembraneSynth().toDestination();

  constructor() {}

  press() {
    this.synth.volume.value = -20;
    this.synth.triggerAttackRelease('F4', '2n');
  }

  show() {
    this.synth.volume.value = -10;
    this.synth.triggerAttackRelease('C3', '2n');
  }
}
