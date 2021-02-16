import { Injectable } from '@angular/core';
// Tone JS
import * as Tone from 'tone';

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  synth = new Tone.MembraneSynth().toDestination();

  constructor() {}

  btnSound() {
    this.synth.volume.value = -25;
    this.synth.triggerAttackRelease('c2', '1n');
  }

  displaySound() {
    this.synth.volume.value = -15;
    this.synth.triggerAttackRelease('d3', '5n');
  }
}
