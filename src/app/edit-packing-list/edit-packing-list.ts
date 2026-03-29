import { KeyValuePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'ns-edit-packing-list',
  imports: [KeyValuePipe],
  templateUrl: './edit-packing-list.html',
  styleUrl: './edit-packing-list.css',
})
export class EditPackingList {
  private readonly fb = inject(NonNullableFormBuilder);
  protected readonly equipmentRecord = this.fb.record({
    toothbrush : true
  });
  protected readonly packingListForm = this.fb.group({
    equipments: this.equipmentRecord
  });
  protected addEquipment(equipment: string){
    this.equipmentRecord.addControl(equipment, this.fb.control(true));
  }
  protected removeEquipment(equipment: string){
    this.equipmentRecord.removeControl(equipment);
  }
}
