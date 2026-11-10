import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdfsComponent } from './hdfs.component';

describe('HdfsComponent', () => {
  let component: HdfsComponent;
  let fixture: ComponentFixture<HdfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HdfsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
