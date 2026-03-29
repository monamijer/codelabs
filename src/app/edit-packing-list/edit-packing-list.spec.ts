import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPackingList } from './edit-packing-list';

describe('EditPackingList', () => {
  let component: EditPackingList;
  let fixture: ComponentFixture<EditPackingList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPackingList],
    }).compileComponents();

    fixture = TestBed.createComponent(EditPackingList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
