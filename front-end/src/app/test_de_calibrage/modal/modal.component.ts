import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnChanges {
  @Input() title: string = 'Modal';
  @Input() message: string = '';
  @Input() show: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['show'] && changes['show'].currentValue) {
      setTimeout(() => {
        this.close.emit();
      }, 3000);
    }
  }

  onClose(): void {
    this.close.emit();
  }
}
