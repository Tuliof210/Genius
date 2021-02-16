import { Injectable } from '@angular/core';
// Tone JS
import * as Tone from 'tone';

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  synth = new Tone.Synth().toDestination();
  volume;

  constructor() {
    this.volume = this.synth['volume'].value = -5;
  }

  playNote() {
    this.synth.triggerAttackRelease('C2', '8n');
  }
}
